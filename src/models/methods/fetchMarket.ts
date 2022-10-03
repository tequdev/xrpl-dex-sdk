import { Market } from '../ccxt';

/**
 * Expected response from a fetchMarket call
 *
 * @category Responses
 */
export type FetchMarketResponse = Market | undefined;
