import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';

export interface FetchOrderParams {
  /** Ledger index containing the Order (optional) */
  ledger_index?: LedgerIndex;
  /** Max items to search through looking for an Order before giving up */
  maxSearch?: number;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = Order | undefined;
