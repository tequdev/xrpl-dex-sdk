/**
 * CCXT Balances
 *
 * @see {@link https://docs.ccxt.com/en/latest/manual.html?#account-balance | CCXT Balances} for more information.
 */
import { Readable } from 'stream';
import { CurrencyCode } from '../common';

/**
 * @category Streams
 */
export type BalanceStream = Readable;

/**
 * @category CCXT
 *
 * @see {@link https://docs.ccxt.com/en/latest/manual.html?#balance-structure | Balance} for more information.
 *
 * @attribute
 */
export interface Balance {
  // Money, available for trading, by currency (as float string)
  free: string;
  // Money on hold, locked, frozen, or pending, by currency, (as float string)
  used: string;
  // Total (free + used), by currency (as float string)
  total: string;
}

/**
 * @category CCXT
 */
export type Balances = Record<CurrencyCode, Balance>;
