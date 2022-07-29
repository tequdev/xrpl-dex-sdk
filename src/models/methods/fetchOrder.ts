import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';
import { AccountAddress, Hash, MarketSymbol, PaginationParams } from '../common';

export interface FetchOrderParams extends PaginationParams {
  /** The account that placed the Order */
  account: AccountAddress;
  /** Ledger hash containing the Order (optional) */
  ledger_hash?: Hash;
  /** Ledger index containing the Order (optional) */
  ledger_index?: LedgerIndex;
}

/**
 * Returns a matching {@link Order} if found
 *
 * @category Requests
 */
export interface FetchOrderRequest {
  /** Order ID */
  id: string;
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol?: MarketSymbol;
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderParams;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order;
