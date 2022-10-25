import { BalanceStream } from '../ccxt';
import { CurrencyCode } from '../common';

/**
 * Request parameters for a {@link SDK.watchBalance} call.
 *
 * @category Parameters
 */
export interface WatchBalanceParams {
  /** Currency code to filter balances by */
  code?: CurrencyCode;
}

/**
 * Expected response from a {@link SDK.watchBalance} call.
 *
 * @category Responses
 */
export type WatchBalanceResponse = BalanceStream;
