import { TransactionFee, TransactionType } from '../ccxt';

/**
 * Request parameters for a fetchTransactionFee call
 *
 * @category Parameters
 */
export interface FetchTransactionFeeParams {
  /** Transaction type */
  type?: TransactionType;
}

/**
 * Expected response from a fetchTransactionFee call
 *
 * @category Responses
 */
export type FetchTransactionFeeResponse = TransactionFee | undefined;
