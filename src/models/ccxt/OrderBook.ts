import { BigNumberish, MarketSymbol } from '../common';

export type PriceAmountTuple = [price: BigNumberish, amount: BigNumberish];

export type OrderBookBid = PriceAmountTuple;
export type OrderBookAsk = PriceAmountTuple;

export default interface OrderBook {
  symbol: MarketSymbol;
  timestamp: number;
  datetime: string;
  nonce: number;
  bids: OrderBookBid[];
  asks: OrderBookAsk[];
}
