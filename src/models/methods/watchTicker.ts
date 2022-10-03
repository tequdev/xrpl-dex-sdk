import { TickerStream } from '../ccxt';

/**
 * Request parameters for a watchTicker call
 *
 * @category Parameters
 */
export interface WatchTickerParams {
  /** Max number of Orders to look through before calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a watchTicker call
 *
 * @category Responses
 */
export type WatchTickerResponse = TickerStream;
