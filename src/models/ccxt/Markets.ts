import { AccountAddress, CurrencyCode, MarketSymbol } from '../common';

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
  /** Transfer fee */
  taker?: number;
  /** Whether transfer fee is a percentage */
  percentage?: boolean;
}

type Markets = Record<MarketSymbol, Market>;

export default Markets;
