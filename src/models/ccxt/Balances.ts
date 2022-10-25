/**
 * CCXT Balances
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#account-balance
 */
import { Readable } from 'stream';
import { CurrencyCode } from '../common';

export type BalanceStream = Readable;

/**
 * Balance
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

export interface Balances {
  // Balances sorted by currency, then availability
  [code: CurrencyCode]: Balance;
}
