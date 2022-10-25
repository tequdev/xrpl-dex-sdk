/**
 * CCXT Currencies
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#markets
 */
import { CurrencyCode, PercentDecimal } from '../common';

/**
 * Currency
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

export type Currencies = Record<CurrencyCode, Currency>;
