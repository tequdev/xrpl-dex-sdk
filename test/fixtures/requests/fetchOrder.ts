import { XrplNetwork } from '../../../src/models';

export const createLargeSell = {
  symbol: 'AKT/XRP',
  side: 'sell',
  type: 'limit',
  amount: '10',
  price: '2',
  params: {
    wallet_secret: 'shCwGCyy17Ph4JdZ6jTsFssEpS6Fs',
    baseCurrencyIssuer: 'rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM',
  },
};

export const createMediumBuy_1 = {
  symbol: 'AKT/XRP',
  side: 'buy',
  type: 'limit',
  amount: '6.5',
  price: '1.5',
  params: {
    wallet_secret: 'ssMuo4PJwGNkkqmTA5sWhvsUYKWNL',
    baseCurrencyIssuer: 'rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM',
  },
};

export const createMediumBuy_2 = {
  symbol: 'AKT/XRP',
  side: 'buy',
  type: 'limit',
  amount: '5',
  price: '2.1',
  params: {
    wallet_secret: 'ssMuo4PJwGNkkqmTA5sWhvsUYKWNL',
    baseCurrencyIssuer: 'rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM',
  },
};

export const createRequests = {
  unFilled: [createLargeSell],
  partiallyFilled: [createLargeSell, createMediumBuy_1],
  fullyFilled: [createLargeSell, createMediumBuy_1, createMediumBuy_2],
};

export const partialFillSellWithTrades = {};
export const fullFillSellWithTrades = {};

export default {
  // createRequests,
  [XrplNetwork.Testnet]: {
    buy: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419117',
    buy2: 'rMFwQW3F5EvvJ4mu9dBZ3kWnEwj9SHjoGd:16801748',
    sell: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR:30419057',
  },
};
