import { AccountAddress, CurrencyCode, MarketSymbol, PercentDecimal } from '../common';

export interface Market {
  /** String literal for referencing within an exchange */
  id: string;
  /** Unified Market Symbol */
  symbol: MarketSymbol;
  /** Base token */
  base: CurrencyCode;
  /** Issuers are optional when currency is XRP (which has no issuer) */
  baseIssuer?: AccountAddress;
  /** Quote token */
  quote: CurrencyCode;
  /** Issuers are optional when currency is XRP (which has no issuer) */
  quoteIssuer?: AccountAddress;
  /** Base token transfer fee */
  baseFee?: PercentDecimal;
  /** Quote token transfer fee */
  quoteFee?: PercentDecimal;
  /** Whether transfer fees are percentages */
  percentage?: true;
}

type Markets = Record<MarketSymbol, Market>;

export default Markets;
