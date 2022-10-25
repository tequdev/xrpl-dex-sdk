/**
 * CCXT Order Book Types
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 */
import { Readable } from 'stream';
import { BigNumberish, MarketSymbol } from '../common';

export type OrderBookStream = Readable;

export type PriceAmountTuple = [price: BigNumberish, amount: BigNumberish];

export type OrderBookBid = PriceAmountTuple;
export type OrderBookAsk = PriceAmountTuple;

export type OrderBookLevel = 'L1' | 'L2' | 'L3';

/**
 * OrderBook
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book-structure
 */
export interface OrderBook {
  symbol: MarketSymbol;
  timestamp?: number;
  datetime?: string;
  nonce: number;
  bids: OrderBookBid[];
  asks: OrderBookAsk[];
}
