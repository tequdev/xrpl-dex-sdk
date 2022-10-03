import { BalanceStream } from '../ccxt';
import { AccountAddress, CurrencyCode } from '../common';

/**
 * Request parameters for a watchBalance call
 *
 * @category Parameters
 */
export interface WatchBalanceParams {
  /** The account to fetch balances for */
  account: AccountAddress;
  /** Currency code to filter balances by */
  code?: CurrencyCode;
}

/**
 * Expected response from a watchBalance call
 *
 * @category Responses
 */
export type WatchBalanceResponse = BalanceStream;
