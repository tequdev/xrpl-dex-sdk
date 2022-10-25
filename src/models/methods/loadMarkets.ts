import { Markets } from '../ccxt';

/**
 * Expected response from a {@link SDK.loadMarkets} call.
 *
 * @category Responses
 */
export type LoadMarketsResponse = Markets | undefined;
