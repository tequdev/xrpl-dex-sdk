import { TickerStream } from '../ccxt';

/**
 * Request parameters for a {@link SDK.watchTicker} call.
 *
 * @category Parameters
 */
export interface WatchTickerParams {
  /** Max number of Orders to look through before calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a {@link SDK.watchTicker} call.
 *
 * @category Responses
 */
export type WatchTickerResponse = TickerStream;
