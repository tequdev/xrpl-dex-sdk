import { Order, Trade } from 'ccxt';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { CurrencyCode, MarketSymbol, OrderStatus, OrderTimeInForce, OrderType } from '../models';
import { parseCurrencyAmount } from './numbers';

export const xrplOfferToCcxtTrade = (offer: Offer): Trade => {
  // Price in quote currency (TakerGets) (float)
  const price = parseFloat(parseCurrencyAmount(offer.TakerGets));
  // Ordered amount of base currency (TakerPays) (float)
  const amount = parseFloat(parseCurrencyAmount(offer.TakerPays));

  const trade: Trade = {
    id: offer.Sequence.toString(),
    datetime: '',
    timestamp: 0,
    symbol: getMarketSymbol(offer.TakerPays, offer.TakerGets),
    type: OrderType.Limit, // TODO: get this data
    side: offer.Flags === OfferFlags.lsfSell ? 'sell' : 'buy',
    price,
    amount,
    cost: price * amount,
    fee: {
      currency: 'XRP',
      cost: 0,
      rate: 0,
      type: 'maker', // TODO: get this data
    },
    takerOrMaker: 'maker', // TODO: get this data
    info: JSON.stringify(offer),
  };
  return trade;
};

export const xrplOfferToCcxtOrder = (offer: Offer): Order => {
  const price = parseFloat(parseCurrencyAmount(offer.TakerGets));
  const amount = parseFloat(parseCurrencyAmount(offer.TakerPays));

  // TODO: get this data from Trades
  const filled = 0;
  const remaining = amount;

  // Average filling price (float)
  const average = 0;

  const order: Order = {
    id: offer.Sequence.toString(),
    clientOrderId: '',
    datetime: '',
    timestamp: 0,
    lastTradeTimestamp: 0, // TODO: get this data
    status: OrderStatus.Open, // TODO: get this data
    symbol: getMarketSymbol(offer.TakerPays, offer.TakerGets),
    type: OrderType.Limit, // TODO: get this data
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : undefined,
    side: offer.Flags === OfferFlags.lsfSell ? 'sell' : 'buy',
    price,
    average,
    amount,
    filled,
    remaining,
    cost: filled * price,
    trades: [],
    fee: {
      currency: 'XRP',
      cost: 0,
      rate: 0,
      type: 'maker', // TODO: get this data
    },
    info: JSON.stringify(offer),
  };
  return order;
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
