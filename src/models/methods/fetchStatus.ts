import { ExchangeStatus } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchStatus} call.
 *
 * @category Responses
 */
export type FetchStatusResponse = ExchangeStatus | undefined;
