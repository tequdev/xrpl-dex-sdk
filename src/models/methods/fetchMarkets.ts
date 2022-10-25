import { Markets } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchMarkets} call.
 *
 * @category Responses
 */
export type FetchMarketsResponse = Markets | undefined;
