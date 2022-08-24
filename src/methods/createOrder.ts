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
  OrderType,
  Trade,
} from '../models';
import { getTradeFromOffer, handleTxErrors, offerCreateFlagsToTimeInForce, subtractAmounts } from '../utils';

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
  const [base, quote] = symbol.split('/');

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
  const orderId = offerCreateTx.Sequence.toString();

  let orderStatus = OrderStatus.Open;
  let orderFilled = 0;

  let lastTradeTimestamp: number = 0;
  let totalTradesPrice = 0;

  let didCreateOffer = false;
  for (let n = 0, nl = offerCreateTx.meta.AffectedNodes.length; n < nl; n += 1) {
    const node = offerCreateTx.meta.AffectedNodes[n];
    if (node.hasOwnProperty('ModifiedNode')) {
      const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
      if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields) continue;

      const trade = getTradeFromOffer(
        orderId,
        {
          ...(FinalFields as unknown as Offer),
          TakerGets: subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount),
          TakerPays: subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount),
        },
        offerCreateTxResponse
      );
      orderTrades.push(trade);

      if (!lastTradeTimestamp) lastTradeTimestamp = trade.timestamp;

      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    } else if (node.hasOwnProperty('DeletedNode')) {
      const { LedgerEntryType, FinalFields } = (node as DeletedNode).DeletedNode;
      if (LedgerEntryType !== 'Offer') continue;

      const trade = getTradeFromOffer(orderId, FinalFields as unknown as Offer, offerCreateTxResponse);
      orderTrades.push(trade);

      if (!lastTradeTimestamp) lastTradeTimestamp = trade.timestamp;

      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    } else if (node.hasOwnProperty('CreatedNode')) {
      const { LedgerEntryType, NewFields } = (node as CreatedNode).CreatedNode;
      if (
        LedgerEntryType === 'Offer' ||
        (NewFields as unknown as Offer).Account === wallet.classicAddress ||
        (NewFields as unknown as Offer).Sequence === parseInt(orderId)
      )
        didCreateOffer = true;
    }
  }
  if (offerCreateTx.meta.TransactionResult !== 'tesSUCCESS') {
    orderStatus = OrderStatus.Rejected;
  } else if (!didCreateOffer) {
    orderStatus = OrderStatus.Closed;
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
