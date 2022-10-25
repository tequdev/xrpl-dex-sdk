import { LedgerIndex } from 'xrpl/dist/npm/models/common';
import { OrderBook } from '../ccxt';
import { AccountAddress } from '../common';

/**
 * Request parameters for a {@link SDK.fetchL2OrderBook} call.
 *
 * @category Parameters
 */
export interface FetchL2OrderBookParams {
  /** Filter order book by taker address */
  taker?: AccountAddress;
  /** Get order book from the given ledger */
  ledgerIndex?: LedgerIndex;
  /** Get order book from the provided hash */
  ledgerHash?: string;
}

/**
 * Expected response from a {@link SDK.fetchL2OrderBook} call.
 *
 * @category Responses
 */
export type FetchL2OrderBookResponse = OrderBook | undefined;
