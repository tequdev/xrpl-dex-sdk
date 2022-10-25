import { TransactionFee } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchTransactionFees} call.
 *
 * @category Responses
 */
export type FetchTransactionFeesResponse = TransactionFee[];
