import { Order } from 'ccxt';
import { MarketSymbol } from '../common';

export interface FetchOrdersParams {}

/**
 * Returns an array of {@link Order} objects
 *
 * @category Requests
 */
export interface FetchOrdersRequest {
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol?: MarketSymbol;
  /** Get orders after a given timestamp */
  since?: number;
  /** Number of results to return */
  limit?: number;
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrdersParams;
}

/**
 * Expected response from a {@link FetchOrdersRequest}.
 *
 * @category Responses
 */
export type FetchOrdersResponse = Order[];
