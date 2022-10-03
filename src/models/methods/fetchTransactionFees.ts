import { TransactionFee, TransactionType } from '../ccxt';

/**
 * Request parameters for a fetchTransactionFees call
 *
 * @category Parameters
 */
export interface FetchTransactionFeesParams {
  /** Transaction type */
  type?: TransactionType;
}

/**
 * Expected response from a fetchTransactionFees call
 *
 * @category Responses
 */
export type FetchTransactionFeesResponse = TransactionFee[];
