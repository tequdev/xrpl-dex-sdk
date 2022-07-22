import { BigNumberish, MarketSymbol } from '../common';

export type PriceAmountTuple = [price: BigNumberish, amount: BigNumberish];

export type OrderBookBid = PriceAmountTuple;
export type OrderBookAsk = PriceAmountTuple;

export enum OrderBookLevel {
  L1 = 'l1',
  L2 = 'l2',
  L3 = 'l3',
}

export default interface OrderBook {
  symbol: MarketSymbol;
  timestamp?: number;
  datetime?: string;
  nonce: number;
  bids: OrderBookBid[];
  asks: OrderBookAsk[];
}
