/**
 * CCXT Currencies
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#markets
 */
import { CurrencyCode, PercentDecimal } from '../common';

/**
 * @category CCXT
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#currency-structure
 */
export interface Currency {
  code: CurrencyCode;
  fee?: PercentDecimal;
  name?: string;
  issuerName?: string;
  logo?: string;
  precision?: number;
}

/**
 * @category CCXT
 */
export type Currencies = Record<CurrencyCode, Currency>;
