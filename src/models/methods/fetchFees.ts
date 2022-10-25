import { FeeSchedule } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchFees} call.
 *
 * @category Responses
 */
export type FetchFeesResponse = FeeSchedule | undefined;
