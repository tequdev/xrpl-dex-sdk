import { TradingFee } from '../ccxt';
import { BaseResponse } from '../common';

/**
 * Expected response from a fetchTradingFees call
 *
 * @category Responses
 */
export type FetchTradingFeesResponse = (BaseResponse & TradingFee)[];
