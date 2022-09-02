import { BadRequest, BadResponse } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  OfferCreate,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  setTransactionFlagsToNumber,
  Wallet,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import {
  CreatedNode,
  CreateOrderParams,
  DeletedNode,
  MarketSymbol,
  ModifiedNode,
  Order,
  OrderSide,
  OrderStatus,
  OrderTimeInForce,
  OrderType,
  Trade,
  // TxResult,
} from '../models';
import {
  getAmount,
  getBaseAmountKey,
  getOrderOrTradeId,
  getTrade,
  handleTxErrors,
  offerCreateFlagsToTimeInForce,
  parseMarketSymbol,
  subtractAmounts,
} from '../utils';

/**
 * Creates a new Order on the Ripple dEX. Returns an {@link CreateOrderResponse}
 * with the newly created Order object.
 *
 * @category Methods
 */
async function createOrder(
  this: Client,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Order direction (buy or sell) */
  side: OrderSide,
  /** Order type (limit or market) */
  type: OrderType,
  /** How much currency you want to trade (usually, but not always) in units of the base currency) */
  amount: string,
  /** The price at which the order is to be fullfilled in units of the quote currency (ignored in market orders) */
  price: string,
  /** Parameters specific to the exchange API endpoint */
  params: CreateOrderParams
): Promise<Order> {
  const {
    wallet_private_key,
    wallet_public_key,
    wallet_secret,
    baseCurrencyIssuer,
    quoteCurrencyIssuer,
    expiration,
    memos,
    flags,
  } = params;

  if (!wallet_secret && (!wallet_public_key || !wallet_private_key)) {
    throw new BadRequest('Must provide either `wallet_secret` or `wallet_public_key` and `wallet_private_key`');
  }

  const wallet = wallet_secret
    ? Wallet.fromSecret(wallet_secret)
    : new Wallet(wallet_public_key as string, wallet_private_key as string);

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getAmount(baseCurrency, amount, baseCurrencyIssuer);
  const quoteAmount = getAmount(
    quoteCurrency,
    (parseFloat(amount) * parseFloat(price)).toString(),
    quoteCurrencyIssuer
  );

  const baseAmountKey = getBaseAmountKey(side);

  const offerCreateRequest: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: wallet.classicAddress,
    Flags: {
      ...flags,
      tfSell: side === OrderSide.Sell ? true : false,
    },
    TakerGets: baseAmountKey === 'TakerGets' ? baseAmount : quoteAmount,
    TakerPays: baseAmountKey === 'TakerPays' ? baseAmount : quoteAmount,
  };

  if (expiration) offerCreateRequest.Expiration = expiration;
  if (memos) offerCreateRequest.Memos = memos;

  setTransactionFlagsToNumber(offerCreateRequest);

  // console.log('\nofferCreateRequest');
  // console.log(offerCreateRequest);
  // console.log(JSON.stringify(offerCreateRequest));

  // const offerCreateRequestPrepared = await this.autofill(offerCreateRequest);
  // const offerCreateRequestSigned = wallet.sign(offerCreateRequestPrepared);

  const offerCreateTxResponse = await this.submitAndWait(offerCreateRequest, {
    autofill: true,
    wallet,
  });

  handleTxErrors(offerCreateTxResponse);

  const offerCreateTx = offerCreateTxResponse.result;

  if (!offerCreateTx.meta || typeof offerCreateTx.meta !== 'object' || !offerCreateTx.Sequence) {
    throw new BadResponse(`Bad data for OrderCreate Transaction with hash ${offerCreateTx.hash}`);
  }

  const orderTrades: Trade[] = [];
  const orderId = getOrderOrTradeId(offerCreateTx.Account, offerCreateTx.Sequence);

  let orderStatus = OrderStatus.Open;
  let orderFilled = 0;

  let lastTradeTimestamp: number = 0;
  let totalTradesPrice = 0;

  let didCreateOffer = false;
  for (const node of offerCreateTx.meta.AffectedNodes) {
    let affectedOffer: Offer | undefined;

    if (node.hasOwnProperty('ModifiedNode')) {
      const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
      if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields) continue;

      const updatedOrderTakerGets = subtractAmounts(
        PreviousFields.TakerGets as Amount,
        FinalFields.TakerGets as Amount
      );
      const updatedOrderTakerPays = subtractAmounts(
        PreviousFields.TakerPays as Amount,
        FinalFields.TakerPays as Amount
      );

      affectedOffer = {
        ...(FinalFields as unknown as Offer),
        TakerGets: updatedOrderTakerGets,
        TakerPays: updatedOrderTakerPays,
      };
    } else if (node.hasOwnProperty('DeletedNode')) {
      const { LedgerEntryType, FinalFields } = (node as DeletedNode).DeletedNode;
      if (LedgerEntryType !== 'Offer') continue;

      affectedOffer = FinalFields as unknown as Offer;
    } else if (node.hasOwnProperty('CreatedNode')) {
      if ((node as CreatedNode).CreatedNode.LedgerEntryType === 'Offer') didCreateOffer = true;
    }

    if (affectedOffer) {
      const trade = await getTrade(
        this,
        getOrderOrTradeId(affectedOffer.Account, affectedOffer.Sequence),
        affectedOffer,
        offerCreateTxResponse
      );
      // const trade = await getTrade(this, getOrderOrTradeId(affectedOffer.Account, affectedOffer.Sequence), {
      //   ...offerCreateTxResponse,
      //   result: {
      //     ...offerCreateTxResponse.result,
      //     TakerGets: affectedOffer.TakerPays,
      //     TakerPays: affectedOffer.TakerGets,
      //   } as TxResult<OfferCreate>,
      // });
      orderTrades.push(trade);
      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    }
  }

  const orderTimeInForce = offerCreateFlagsToTimeInForce(offerCreateRequest);

  if (offerCreateTx.meta.TransactionResult !== 'tesSUCCESS') {
    orderStatus = OrderStatus.Rejected;
  } else if (!didCreateOffer) {
    if (orderTimeInForce === OrderTimeInForce.FillOrKill && orderFilled !== parseFloat(amount))
      orderStatus = OrderStatus.Canceled;
    else if (orderTimeInForce === OrderTimeInForce.ImmediateOrCancel && orderFilled == 0)
      orderStatus = OrderStatus.Canceled;
    else orderStatus = OrderStatus.Closed;
  }

  const newOrder: Order = {
    id: orderId,
    datetime: rippleTimeToISOTime(offerCreateTx.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTx.date || 0),
    lastTradeTimestamp,
    status: orderStatus,
    symbol,
    type,
    timeInForce: offerCreateFlagsToTimeInForce(offerCreateRequest),
    side,
    price: parseFloat(price),
    average: orderTrades.length ? totalTradesPrice / orderTrades.length : 0,
    amount: parseFloat(amount),
    filled: orderFilled,
    remaining: parseFloat(amount) - orderFilled,
    cost: orderFilled * parseFloat(price),
    trades: orderTrades,
    fee: {
      currency: 'XRP',
      cost: offerCreateTx.Fee ? parseFloat(offerCreateTx.Fee) : 0,
    },
    info: { OfferCreate: offerCreateTx },
  };

  return newOrder;

  // return {
  //   id: '2',
  //   datetime: '2015-11-18T20:56:30.000Z',
  //   timestamp: 1447880190000,
  //   lastTradeTimestamp: 0,
  //   status: OrderStatus.Open,
  //   symbol: 'TST/XRP',
  //   type: 'limit',
  //   timeInForce: 'GTC',
  //   side: OrderSide.Sell,
  //   price: 100,
  //   average: 0,
  //   amount: 10,
  //   filled: 0,
  //   remaining: 10,
  //   cost: 0,
  //   trades: [],
  //   fee: {
  //     currency: 'XRP',
  //     cost: 12,
  //   },
  //   info: '{"OfferCreate":{"Account":"rhFDFxjpVHBZe69jw4TvFouPMdMRkXMkgd","Fee":"12","Flags":589824,"LastLedgerSequence":30005504,"Sequence":2,"SigningPubKey":"0330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD020","TakerGets":{"currency":"USD","issuer":"rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM","value":"10.1"},"TakerPays":"254391353000000","TransactionType":"OfferCreate","TxnSignature":"30440221008C13CA1BD56431B643FD145CDE7BE1805424B48FDF40E0D1A8C2FD53FAACA974021F6393721438C01B9E3138D55469049C8B72B4F6A4508ACA3C0036788C300459","date":501195390,"hash":"458101D51051230B1D56E9ACAFAA34451BF65FA000F95DF6F0FF5B3A62D83FC2","inLedger":6,"ledger_index":6,"meta":{"AffectedNodes":[{"ModifiedNode":{"FinalFields":{"Account":"rhFDFxjpVHBZe69jw4TvFouPMdMRkXMkgd","Balance":"99999999259999976","Flags":0,"OwnerCount":0,"Sequence":3},"LedgerEntryType":"AccountRoot","LedgerIndex":"2B6AC232AA4C4BE41BF49D2459FA4A0347E1B543A4C92FCEE0821C0201E2E9A8","PreviousFields":{"Balance":"99999999259999988","Sequence":2},"PreviousTxnID":"4BF785A253AB67875973EE79B3ED939DF371B435696D09F8BE2FB2DADA1BFAB7","PreviousTxnLgrSeq":4}}],"TransactionIndex":0,"TransactionResult":"tecUNFUNDED_OFFER"},"validated":true}}',
  // };
}

export default createOrder;
