import { Ticker } from '../ccxt';

/**
 * Request parameters for a fetchTicker call
 *
 * @category Parameters
 */
export interface FetchTickerParams {
  /** Max number of Orders to look through before calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a fetchTicker call
 *
 * @category Responses
 */
export type FetchTickerResponse = Ticker | undefined;
