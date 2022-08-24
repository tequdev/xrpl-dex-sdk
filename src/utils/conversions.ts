import { BadRequest } from 'ccxt';
import {
  OfferCreate,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  setTransactionFlagsToNumber,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { CurrencyCode, MarketSymbol, OrderSide, OrderTimeInForce, OrderType, Trade, TxResult } from '../models';
import { divideAmountValues } from './numbers';

/**
 * Trades Data
 */
export const getOrderSideFromTx = (tx: TxResponse['result']) =>
  tx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;
export const getOrderSideFromOffer = (offer: Offer) =>
  offer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

const getBaseAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerPays' : 'TakerGets');
const getQuoteAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerGets' : 'TakerPays');

export const getOrderBaseAmount = (offer: Offer) => offer[getBaseAmountKey(getOrderSideFromOffer(offer))];
export const getOrderQuoteAmount = (offer: Offer) => offer[getQuoteAmountKey(getOrderSideFromOffer(offer))];

export const getOrderPrice = (baseAmount: Amount, quoteAmount: Amount) => divideAmountValues(baseAmount, quoteAmount);
export const getOrderCost = (baseAmount: Amount, price: number) => parseAmountValue(baseAmount) * price;

// TODO: verify this result is correct
export const getTakerOrMaker = (side: OrderSide) => (side === OrderSide.Buy ? 'taker' : 'maker');

export const getTradeFromOfferTx = (orderId: string, txResponse: TxResponse) => {
  if (txResponse.result.TransactionType !== 'OfferCreate') {
    throw new BadRequest(`Cannot get Trade data from TransactionType ${txResponse.result.TransactionType}`);
  }

  const tx = txResponse.result as TxResult<OfferCreate>;
  if (!tx.Sequence) throw new BadRequest(`No Sequence number found for Transaction ${tx.hash}`);

  const side = getOrderSideFromTx(tx);
  const baseAmount = tx[getBaseAmountKey(side)];
  const quoteAmount = tx[getQuoteAmountKey(side)];
  const price = getOrderPrice(baseAmount, quoteAmount);
  const cost = getOrderCost(baseAmount, price);

  const trade: Trade = {
    id: tx.Sequence.toString(),
    order: orderId,
    datetime: rippleTimeToISOTime(tx.date || 0),
    timestamp: rippleTimeToUnixTime(tx.date || 0),
    symbol: getMarketSymbol(baseAmount, quoteAmount),
    type: OrderType.Limit,
    side,
    amount: parseAmountValue(baseAmount).toString(),
    price: price.toString(),
    takerOrMaker: getTakerOrMaker(side),
    cost: cost.toString(),
    fee: {
      currency: 'XRP',
      cost: tx.Fee || '0',
    },
    info: { Transaction: tx },
  };

  return trade;
};

export const getTradeFromOffer = (orderId: string, offer: Offer, txResponse: TxResponse) => {
  if (txResponse.result.TransactionType !== 'OfferCreate') {
    throw new BadRequest(`Cannot get Trade data from TransactionType ${txResponse.result.TransactionType}`);
  }

  const tx = txResponse.result as TxResult<OfferCreate>;

  const tradeSide = getOrderSideFromOffer(offer);
  const tradeBaseAmount = getOrderBaseAmount(offer);
  const tradeQuoteAmount = getOrderQuoteAmount(offer);
  const tradePrice = getOrderPrice(tradeBaseAmount, tradeQuoteAmount);

  const trade: Trade = {
    id: offer.Sequence.toString(),
    order: orderId,
    datetime: rippleTimeToISOTime(tx.date || 0),
    timestamp: rippleTimeToUnixTime(tx.date || 0),
    symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    type: OrderType.Limit,
    side: tradeSide,
    amount: parseAmountValue(tradeBaseAmount).toString(),
    price: tradePrice.toString(),
    takerOrMaker: getTakerOrMaker(tradeSide),
    cost: getOrderCost(tradeBaseAmount, tradePrice).toString(),
    fee: {
      currency: 'XRP',
      cost: tx.Fee || '0',
    },
    info: { Transaction: tx, Offer: offer },
  };

  return trade;
};

export const parseMarketSymbol = (symbol: MarketSymbol): [base: CurrencyCode, quote: CurrencyCode] => {
  const [base, quote] = symbol.split('/');
  return [base, quote];
};

export const getMarketSymbol = (base: Amount, quote: Amount): MarketSymbol => {
  const symbol: string[] = [];

  symbol.push(typeof base === 'object' ? base.currency : 'XRP');
  symbol.push(typeof quote === 'object' ? quote.currency : 'XRP');

  return symbol.join('/');
};

export const offerCreateFlagsToTimeInForce = (tx: OfferCreate): OrderTimeInForce | undefined => {
  setTransactionFlagsToNumber(tx);
  const flags = tx.Flags as number;
  if (flags === 0 && !tx.Expiration) {
    return OrderTimeInForce.GoodTillCanceled;
  } else if ((flags & OfferCreateFlags.tfFillOrKill) === OfferCreateFlags.tfFillOrKill) {
    return OrderTimeInForce.FillOrKill;
  } else if ((flags & OfferCreateFlags.tfImmediateOrCancel) === OfferCreateFlags.tfImmediateOrCancel) {
    return OrderTimeInForce.ImmediateOrCancel;
  } else if ((flags & OfferCreateFlags.tfPassive) === OfferCreateFlags.tfPassive) {
    return OrderTimeInForce.PostOnly;
  }
};

export const stringToInt = (input?: string): number | undefined => {
  try {
    return input ? parseInt(input) : 0;
  } catch (err) {
    return;
  }
};

export const stringToFloat = (input?: string): number | undefined => {
  try {
    return input ? parseFloat(input) : 0;
  } catch (err) {
    return;
  }
};
