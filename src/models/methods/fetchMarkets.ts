import { Markets } from '../ccxt';

/**
 * Expected response from a fetchMarkets call
 *
 * @category Responses
 */
export type FetchMarketsResponse = Markets | undefined;
