import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';
import { AccountAddress, PaginationParams } from '../common';

export interface FetchOrderParams extends PaginationParams {
  /** The account that placed the Order */
  account: AccountAddress;
  /** Ledger hash containing the Order (optional) */
  ledger_hash?: string;
  /** Ledger index containing the Order (optional) */
  ledger_index?: LedgerIndex;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order;
