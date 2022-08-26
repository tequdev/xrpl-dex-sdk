import { BadRequest } from 'ccxt';
import {
  Client,
  OfferCreate,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  setTransactionFlagsToNumber,
  // transferRateToDecimal,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
// import { fetchMarket } from '../methods';
import {
  AccountAddress,
  CurrencyCode,
  Fee,
  MarketSymbol,
  OrderSide,
  OrderTimeInForce,
  OrderType,
  Trade,
  TxResult,
} from '../models';
import { fetchTransferRate } from './markets';
import { divideAmountValues } from './numbers';

/**
 * Trades Data
 */
export const getOrderSideFromTx = (tx: TxResponse['result']) =>
  tx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;
export const getOrderSideFromOffer = (offer: Offer) =>
  offer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

export const getBaseAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerPays' : 'TakerGets');
export const getQuoteAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerGets' : 'TakerPays');
export const getAmountKeys = (side: OrderSide): [base: string, quote: string] => [
  getBaseAmountKey(side),
  getQuoteAmountKey(side),
];

export const getOrderBaseAmount = (offer: Offer) => offer[getBaseAmountKey(getOrderSideFromOffer(offer))];
export const getOrderQuoteAmount = (offer: Offer) => offer[getQuoteAmountKey(getOrderSideFromOffer(offer))];

export const getOrderPrice = (baseAmount: Amount, quoteAmount: Amount) => divideAmountValues(baseAmount, quoteAmount);
export const getOrderCost = (baseAmount: Amount, price: number) => parseAmountValue(baseAmount) * price;

// TODO: verify this result is correct
export const getTakerOrMaker = (side: OrderSide) => (side === OrderSide.Buy ? 'taker' : 'maker');

export const getTradeFromOfferTx = async (client: Client, orderId: string, txResponse: TxResponse) => {
  if (txResponse.result.TransactionType !== 'OfferCreate') {
    throw new BadRequest(`Cannot get Trade data from TransactionType ${txResponse.result.TransactionType}`);
  }

  const tx = txResponse.result as TxResult<OfferCreate>;
  if (!tx.Sequence) throw new BadRequest(`No Sequence number found for Transaction ${tx.hash}`);

  const tradeSide = getOrderSideFromTx(tx);

  const tradeBaseAmount = tx[getBaseAmountKey(tradeSide)];
  const tradeQuoteAmount = tx[getQuoteAmountKey(tradeSide)];

  const tradeBaseRate = parseFloat(await fetchTransferRate(client, tradeBaseAmount));
  const tradeQuoteRate = parseFloat(await fetchTransferRate(client, tradeQuoteAmount));

  const tradeBaseValue = parseAmountValue(tradeBaseAmount);
  const tradeQuoteValue = parseAmountValue(tradeQuoteAmount);

  /** Price in quote currency */
  const tradePrice = tradeQuoteValue / tradeBaseValue;

  /** The ``cost`` of an order means the total *quote* volume of the order */
  const tradeCost = tradeBaseValue * tradePrice;

  const tradeFeeCurrency = getAmountCurrencyCode(tradeSide === OrderSide.Buy ? tradeQuoteAmount : tradeBaseAmount);
  const tradeFeeRate = tradeSide === OrderSide.Buy ? tradeQuoteRate : tradeBaseRate;
  const tradeFees = tradeBaseValue * tradeFeeRate;

  const trade: Trade = {
    id: tx.Sequence.toString(),
    order: orderId,
    datetime: rippleTimeToISOTime(tx.date || 0),
    timestamp: rippleTimeToUnixTime(tx.date || 0),
    symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    type: OrderType.Limit,
    side: tradeSide,
    amount: tradeBaseValue.toString(),
    price: tradePrice.toString(),
    takerOrMaker: getTakerOrMaker(tradeSide),
    cost: tradeCost.toString(),
    fee: {
      currency: tradeFeeCurrency,
      cost: tradeFees.toString(),
      rate: tradeFeeRate.toString(),
      percentage: true,
    },
    info: { Transaction: tx },
  };

  return trade;
};

export const getTradeFromOffer = async (client: Client, orderId: string, offer: Offer, txResponse: TxResponse) => {
  if (txResponse.result.TransactionType !== 'OfferCreate') {
    throw new BadRequest(`Cannot get Trade data from TransactionType ${txResponse.result.TransactionType}`);
  }

  const tx = txResponse.result as TxResult<OfferCreate>;

  const tradeSide = getOrderSideFromOffer(offer);

  const tradeBaseAmount = offer[getBaseAmountKey(tradeSide)];
  const tradeQuoteAmount = offer[getQuoteAmountKey(tradeSide)];

  const tradeBaseRate = parseFloat(await fetchTransferRate(client, tradeBaseAmount));
  const tradeQuoteRate = parseFloat(await fetchTransferRate(client, tradeQuoteAmount));

  const tradeBaseValue = parseAmountValue(tradeBaseAmount);
  const tradeQuoteValue = parseAmountValue(tradeQuoteAmount);

  /** Price in quote currency */
  const tradePrice = tradeQuoteValue / tradeBaseValue;

  /** The ``cost`` of an order means the total *quote* volume of the order */
  const tradeCost = tradeBaseValue * tradePrice;

  const tradeFeeCurrency = getAmountCurrencyCode(tradeSide === OrderSide.Buy ? tradeQuoteAmount : tradeBaseAmount);
  const tradeFeeRate = tradeSide === OrderSide.Buy ? tradeQuoteRate : tradeBaseRate;
  const tradeFees = tradeBaseValue * tradeFeeRate;

  const tradeFee: Fee = {
    currency: tradeFeeCurrency,
    cost: tradeFees.toString(),
  };

  if (tradeFee.cost) {
    tradeFee.rate = tradeFeeRate.toString();
    tradeFee.percentage = true;
  }

  const trade: Trade = {
    id: offer.Sequence.toString(),
    order: orderId,
    datetime: rippleTimeToISOTime(tx.date || 0),
    timestamp: rippleTimeToUnixTime(tx.date || 0),
    symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    type: OrderType.Limit,
    side: tradeSide,
    amount: tradeBaseValue.toString(),
    price: tradePrice.toString(),
    takerOrMaker: getTakerOrMaker(tradeSide),
    cost: tradeCost.toString(),
    fee: tradeFee,
    info: { Transaction: tx },
  };

  return trade;
};

/**
 * Market Symbols
 */
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

/**
 * Currencies
 */
export const getAmountIssuer = (amount: Amount): AccountAddress | undefined =>
  typeof amount === 'object' ? amount.issuer : undefined;

export const getAmountCurrencyCode = (amount: Amount): CurrencyCode =>
  typeof amount === 'object' ? amount.currency : 'XRP';

/**
 * Offers
 */
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
