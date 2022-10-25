/**
 * CCXT Markets
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#markets
 */
import { CurrencyCode, MarketSymbol, PercentDecimal } from '../common';

/**
 * Market
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#market-structure
 */
export interface Market {
  /** String literal for referencing within an exchange */
  id: string;
  /** Unified Market Symbol */
  symbol: MarketSymbol;
  /** Base token */
  base: CurrencyCode;
  /** Quote token */
  quote: CurrencyCode;
  /** Base token transfer fee */
  baseFee?: PercentDecimal;
  /** Quote token transfer fee */
  quoteFee?: PercentDecimal;
  /** Whether transfer fees are percentages */
  percentage?: true;
}

export type Markets = Record<MarketSymbol, Market>;
