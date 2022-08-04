import { OrderBook } from '../ccxt';
import { MarketSymbol } from '../common';
import { FetchOrderBookParams } from './fetchOrderBook';

/**
 * Request parameters for a fetchOrderBooks call
 *
 * @category Parameters
 */
export interface FetchOrderBooksParams {
  [symbol: MarketSymbol]: FetchOrderBookParams;
}

/**
 * Expected response from a fetchOrderBooks call
 *
 * @category Responses
 */
export interface FetchOrderBooksResponse {
  [symbol: MarketSymbol]: OrderBook;
}
