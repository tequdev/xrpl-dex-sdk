import { AccountAddress, CurrencyCode, Drops, MarketSymbol, PercentDecimal } from '../common';

/**
 * The "fee" property on Order objects
 *
 * This is not related to the Fees endpoints.
 */
export interface Fee {
  /** Transaction currency (always in XRP) */
  currency: 'XRP';
  /** The fee cost (base_fee * rate) */
  cost: Drops;
  /** The fee rate, 0.05% = 0.0005, 1% = 0.01, ... */
  rate?: PercentDecimal | Drops;
  /** Whether the fee rate is a percentage or flat rate */
  percentage?: boolean;
}

/**
 * This is returned by `fetchTransactionFee(s)`
 */
export interface TransactionFee {
  /** The currency being transacted */
  code: CurrencyCode;
  /** The current cost in drops of XRP to send a transaction */
  current: Drops;
  /** The transfer fee (if any) for the given issuers */
  transfer: { [issuer: AccountAddress]: PercentDecimal };
}

/**
 * This is returned by `fetchTradingFee(s)`
 */
export interface TradingFee {
  [symbol: MarketSymbol]: {
    /** Unified Market Symbol */
    symbol: MarketSymbol;
    /** Fee rate for base token */
    base: PercentDecimal;
    /** Fee rate for quote token */
    quote: PercentDecimal;
  };
}
