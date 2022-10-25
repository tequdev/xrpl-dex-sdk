import { TradingFee } from '../ccxt';

/**
 * Expected response from a {@link SDK.fetchTradingFee} call.
 *
 * @category Responses
 */
export type FetchTradingFeeResponse = TradingFee | undefined;
