/**
 * CCXT Fees
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 */
import { CurrencyCode, Drops, MarketSymbol, PercentDecimal } from '../common';

/**
 * The `fee` property on Order objects.
 *
 * This is not related to the Fees endpoints.
 * 
 * @category CCXT
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fee-structure
 */
export interface Fee {
  /** Fee currency */
  currency: CurrencyCode;
  /** The fee cost (base_fee * rate) */
  cost: string | Drops;
  /** The fee rate, 0.05% = 0.0005, 1% = 0.01, ... */
  rate?: PercentDecimal | Drops;
  /** Whether the fee rate is a percentage or flat rate */
  percentage?: boolean;
}

/**
 * This is returned by `fetchTransactionFee(s)`.
 * 
 * @category CCXT
 */
export interface TransactionFee {
  /** The currency being transacted */
  code: CurrencyCode;
  /** The current cost in drops of XRP to send a transaction */
  current: Drops;
  /** The transfer fee (if any) for the given issuers */
  transfer: PercentDecimal;
  info: Record<string, any>;
}

/**
 * This is returned by `fetchTradingFee(s)`.
 * 
 * @category CCXT
 */
export interface TradingFee {
  /** Unified Market Symbol */
  symbol: MarketSymbol;
  /** Fee rate for base token */
  base: PercentDecimal;
  /** Fee rate for quote token */
  quote: PercentDecimal;
  /** Whether the fees are a percentage or flat rate */
  percentage: true;
  info: Record<string, any>;
}

/**
 * This is returned by `fetchFees`.
 * 
 * @category CCXT
 */
export interface FeeSchedule {
  transactions: TransactionFee[];
  trading: TradingFee[];
}
