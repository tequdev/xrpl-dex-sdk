import { TransactionFee } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchTransactionFee} call.
 *
 * @category Responses
 */
export type FetchTransactionFeeResponse = TransactionFee | undefined;
