import { Ticker } from '../ccxt';
import { AccountAddress, BaseParams, CurrencyCode } from '../common';

/**
 * Request parameters for a fetchTickers call
 *
 * @category Parameters
 */
export interface FetchTickersParams extends BaseParams {
  issuers: Record<CurrencyCode, AccountAddress>;
  /** Max number of Orders to look through when calculating ticker data */
  searchLimit?: number;
}

/**
 * Expected response from a fetchTickers call
 *
 * @category Responses
 */
export type FetchTickersResponse = Ticker[];
