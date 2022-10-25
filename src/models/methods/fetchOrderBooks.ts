import { OrderBook } from '../ccxt';
import { MarketSymbol } from '../common';
import { FetchOrderBookParams } from './fetchOrderBook';

/**
 * Request parameters for a {@link SDK.fetchOrderBooks} call.
 *
 * @category Parameters
 */
export interface FetchOrderBooksParams {
  [symbol: MarketSymbol]: FetchOrderBookParams;
}

/**
 * Expected response from a {@link SDK.fetchOrderBooks} call.
 *
 * @category Responses
 */
export type FetchOrderBooksResponse = Record<MarketSymbol, OrderBook> | undefined;
