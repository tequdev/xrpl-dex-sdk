import { MarketSymbol, OrderBook } from '../../../../src/models';

export interface OrderBookResponses {
  [symbol: MarketSymbol]: OrderBook;
}

const orderBookResponses: OrderBookResponses = {
  'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc': {
    symbol: 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
    nonce: 31678372,
    bids: [
      ['0.451894400107556', '1498.90986'],
      ['0.446826456371536', '2273.865935'],
      ['0.440021992363101', '3848.38135'],
      ['0.309', '10'],
      ['0.1', '0.5'],
    ],
    asks: [],
  },
};

export default orderBookResponses;
