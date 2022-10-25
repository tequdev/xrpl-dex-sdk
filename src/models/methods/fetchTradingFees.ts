import { TradingFee } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchTradingFees} call.
 *
 * @category Responses
 */
export type FetchTradingFeesResponse = TradingFee[];
