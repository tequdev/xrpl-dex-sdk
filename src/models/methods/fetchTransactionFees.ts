import { TransactionFee, TransactionType } from '../ccxt';
import { AccountAddress, BaseParams, BaseResponse, CurrencyCode } from '../common';

/**
 * Request parameters for a fetchTransactionFees call
 *
 * @category Parameters
 */
export interface FetchTransactionFeesParams extends BaseParams {
  /** Look up currency transaction fees for a specfic issuer */
  issuers?: { [code: CurrencyCode]: AccountAddress };
  /** Transaction type */
  type?: TransactionType;
}

/**
 * Expected response from a fetchTransactionFees call
 *
 * @category Responses
 */
export type FetchTransactionFeesResponse = (BaseResponse & TransactionFee)[];
