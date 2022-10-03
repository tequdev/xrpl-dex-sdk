import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';

export interface FetchOrderParams {
  /** Max items to search through looking for an Order before giving up */
  searchLimit: number;
  /** Ledger index containing the Order (optional) */
  ledger_index?: LedgerIndex;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order | undefined;
