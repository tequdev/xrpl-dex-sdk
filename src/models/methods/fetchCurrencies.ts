import { Currencies } from '../ccxt';
import { BaseParams } from '../common';

/**
 * Request parameters for a fetchCurrencies call
 *
 * @category Parameters
 */
export interface FetchCurrenciesParams extends BaseParams {
  /** Pagination limit when retrieving currency data (smaller numbers mean smaller HTTP requests) */
  limit?: number;
}

/**
 * Expected response from a fetchCurrencies call
 *
 * @category Responses
 */
export type FetchCurrenciesResponse = Currencies;
