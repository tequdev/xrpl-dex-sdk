import { AccountAddress, CurrencyCode, MarketSymbol } from '../common';

export interface Market {
  symbol: MarketSymbol;
  base: CurrencyCode;
  baseIssuer: AccountAddress;
  quote: CurrencyCode;
  quoteIssuer: AccountAddress;
  /** Tranafer fee */
  taker?: number;
}

export type Markets = Record<MarketSymbol, Market>;
