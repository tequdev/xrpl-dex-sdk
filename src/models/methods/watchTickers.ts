import { TickerStream } from '../ccxt';

/**
 * Request parameters for a {@link SDK.watchTickers} call.
 *
 * @category Parameters
 */
export interface WatchTickersParams {
  /** Max number of Orders to look through before calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.watchTickers} call.
 *
 * @category Responses
 */
export type WatchTickersResponse = TickerStream;
