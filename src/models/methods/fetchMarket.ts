import { Market } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchMarket} call.
 *
 * @category Responses
 */
export type FetchMarketResponse = Market | undefined;
