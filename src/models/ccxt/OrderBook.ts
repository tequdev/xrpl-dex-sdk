import { MarketSymbol, PriceAmountArray } from '../common';

export default interface OrderBook {
  symbol: MarketSymbol;
  timestamp: number;
  datetime: string;
  nonce: number;
  bids: PriceAmountArray[];
  asks: PriceAmountArray[];
}
