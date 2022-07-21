import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { OrderBook } from '../ccxt';
import { AccountAddress, MarketSymbol } from '../common';

export interface FetchOrderBookParams {
  limit?: number;
  takerGetsIssuer?: AccountAddress;
  takerPaysIssuer?: AccountAddress;
  ledgerIndex?: LedgerIndex;
  ledgerHash?: string;
  taker?: AccountAddress;
}

/**
 * Fetches L2/L3 {@link OrderBook} for a particular market trading symbol.
 *
 * @category Requests
 */
export interface FetchOrderBookRequest {
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol;
  /** Number of results to return */
  limit?: number;
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderBookParams;
}

/**
 * Expected response from a {@link FetchOrderBookRequest}.
 *
 * @category Responses
 */
export interface FetchOrderBookResponse extends OrderBook {}
