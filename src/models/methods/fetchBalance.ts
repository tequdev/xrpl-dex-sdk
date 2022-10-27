import { Balances } from '../ccxt';
import { CurrencyCode, ResponseInfo } from '../common';

/**
 * Request parameters for a {@link SDK.fetchBalance} call.
 *
 * @category Parameters
 */
export interface FetchBalanceParams {
  /** Currency code to filter balances by */
  code?: CurrencyCode;
}

/**
 * Expected response from a {@link SDK.fetchBalance} call.
 *
 * @category Responses
 */
export interface FetchBalanceResponse {
  balances: Balances;
  info: ResponseInfo;
}
