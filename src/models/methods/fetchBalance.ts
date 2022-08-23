import { Balances } from '../ccxt';
import { AccountAddress, BaseParams, BaseResponse, CurrencyCode } from '../common';

/**
 * Request parameters for a fetchBalance call
 *
 * @category Parameters
 */
export interface FetchBalanceParams extends BaseParams {
  /** The account to fetch balances for */
  account: AccountAddress;
  /** Currency code to filter balances by */
  code?: CurrencyCode;
}

/**
 * Expected response from a fetchBalance call
 *
 * @category Responses
 */
export type FetchBalanceResponse = BaseResponse & { balances: Balances };
