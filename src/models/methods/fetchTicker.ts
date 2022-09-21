import { Ticker } from '../ccxt';
import { AccountAddress, BaseParams } from '../common';

/**
 * Request parameters for a fetchTicker call
 *
 * @category Parameters
 */
export interface FetchTickerParams extends BaseParams {
  baseIssuer?: AccountAddress;
  quoteIssuer?: AccountAddress;
  /** Max number of Orders to look through before calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a fetchTicker call
 *
 * @category Responses
 */
export type FetchTickerResponse = Ticker;
