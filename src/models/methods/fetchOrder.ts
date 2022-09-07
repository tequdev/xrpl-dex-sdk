import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { Order } from '../ccxt';
import { BaseResponse } from '../common';

export interface FetchOrderParams {
  /** Ledger index containing the Order (optional) */
  ledger_index?: LedgerIndex;
  /** Max items to search through looking for an Order before giving up */
  max_search?: number;
}

/**
 * Expected response from a {@link FetchOrderRequest}.
 *
 * @category Responses
 */
export type FetchOrderResponse = BaseResponse & Order;
