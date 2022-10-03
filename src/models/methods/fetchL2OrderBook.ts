import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { OrderBook } from '../ccxt';
import { AccountAddress } from '../common';

/**
 * Request parameters for a fetchL2OrderBook call
 *
 * @category Parameters
 */
export interface FetchL2OrderBookParams {
  /** Filter order book by taker address */
  taker?: AccountAddress;
  /** Get order book from the given ledger */
  ledger_index?: LedgerIndex;
  /** Get order book from the provided hash */
  ledger_hash?: string;
}

/**
 * Expected response from a fetchL2OrderBook call
 *
 * @category Responses
 */
export type FetchL2OrderBookResponse = OrderBook | undefined;
