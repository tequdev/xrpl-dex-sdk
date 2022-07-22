import { OrderBook } from '../ccxt';
import { MarketSymbol } from '../common';
import { FetchOrderBookParams } from './fetchOrderBook';

export interface FetchOrderBooksParams {
  [marketSymbol: MarketSymbol]: FetchOrderBookParams;
}

/**
 * Fetches L2/L3 {@link OrderBook} for a particular market trading symbol.
 *
 * @category Requests
 */
export interface FetchOrderBooksRequest {
  /** Token pair (aka Unified Market Symbol in CCXT) */
  symbols: MarketSymbol[];
  /** Number of results to return */
  limit?: number;
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderBooksParams;
}

/**
 * Expected response from a {@link FetchOrderBooksRequest}.
 *
 * @category Responses
 */
export interface FetchOrderBooksResponse {
  [marketSymbol: MarketSymbol]: OrderBook;
}
