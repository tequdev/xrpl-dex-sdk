import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchOrder} call.
 *
 * @category Parameters
 */
export interface FetchOrderParams {
  /** Max items to search through looking for an Order before giving up */
  searchLimit: number;
  /** Ledger index containing the Order (optional) */
  ledgerIndex?: LedgerIndex;
}

/**
 * Expected response from a {@link SDK.fetchOrder} call.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order | undefined;
