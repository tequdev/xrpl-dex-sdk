import { Ticker } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchTickers} call.
 *
 * @category Parameters
 */
export interface FetchTickersParams {
  /** Max number of Orders to look through when calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.fetchTickers} call.
 *
 * @category Responses
 */
export type FetchTickersResponse = Ticker[];
