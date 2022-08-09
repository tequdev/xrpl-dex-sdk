import { TransactionFee, TransactionType } from '../ccxt';
import { AccountAddress, BaseParams, BaseResponse } from '../common';

/**
 * Request parameters for a fetchTransactionFee call
 *
 * @category Parameters
 */
export interface FetchTransactionFeeParams extends BaseParams {
  /** Look up transaction fees for a specfic issuer */
  issuer?: AccountAddress;
  /** Transaction type */
  type?: TransactionType;
}

/**
 * Expected response from a fetchTransactionFee call
 *
 * @category Responses
 */
export type FetchTransactionFeeResponse = BaseResponse & TransactionFee;
