/**
 * CCXT Balances
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#account-balance
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
 * @link https://docs.ccxt.com/en/latest/manual.html?#balance-structure
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
