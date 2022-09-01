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
  TxResult,
} from '../models';
import {
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
  const [base, quote] = parseMarketSymbol(symbol);

  const {
    wallet_private_key,
    wallet_public_key,
    wallet_secret,
    taker_gets_issuer,
    taker_pays_issuer,
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

  const takerGetsCurrency = side === OrderSide.Buy ? quote : base;
  const takerGetsIssuer = taker_gets_issuer || '';

  const takerPaysCurrency = side === OrderSide.Buy ? base : quote;
  const takerPaysIssuer = taker_pays_issuer || '';

  if ((takerGetsCurrency !== 'XRP' && !takerGetsIssuer) || (takerPaysCurrency !== 'XRP' && !takerPaysIssuer)) {
    throw new BadRequest('Non-XRP currencies must specify an issuer');
  }

  const takerGets: Amount =
    takerGetsCurrency === 'XRP'
      ? amount
      : {
          currency: takerGetsCurrency,
          issuer: takerGetsIssuer,
          value: amount,
        };

  const takerPays: Amount =
    takerPaysCurrency === 'XRP'
      ? amount
      : {
          currency: takerPaysCurrency,
          issuer: takerPaysIssuer,
          value: amount,
        };

  const offerCreate: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: wallet.classicAddress,
    TakerGets: takerGets,
    TakerPays: takerPays,
    Flags: flags,
  };

  if (expiration) offerCreate.Expiration = expiration;
  if (memos) offerCreate.Memos = memos;

  setTransactionFlagsToNumber(offerCreate);

  const offerCreateTxResponse = await this.submitAndWait(offerCreate, {
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
      const trade = await getTrade(this, getOrderOrTradeId(affectedOffer.Account, affectedOffer.Sequence), {
        ...offerCreateTxResponse,
        result: {
          ...offerCreateTxResponse.result,
          TakerGets: affectedOffer.TakerPays,
          TakerPays: affectedOffer.TakerGets,
        } as TxResult<OfferCreate>,
      });
      orderTrades.push(trade);
      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    }
  }

  const orderTimeInForce = offerCreateFlagsToTimeInForce(offerCreate);

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
    timeInForce: offerCreateFlagsToTimeInForce(offerCreate),
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
}

export default createOrder;
