import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { OrderBook } from '../ccxt';

/**
 * Request parameters for a {@link SDK.fetchOrderBook} call.
 *
 * @category Parameters
 */
export interface FetchOrderBookParams {
  /** Max Orders to search through while gathering Order Book data */
  searchLimit?: number;
  /** Get order book from the given ledger */
  ledgerIndex?: LedgerIndex;
  /** Get order book from the provided hash */
  ledgerHash?: string;
}

/**
 * Expected response from a {@link SDK.fetchOrderBook} call.
 *
 * @category Responses
 */
export type FetchOrderBookResponse = OrderBook | undefined;
