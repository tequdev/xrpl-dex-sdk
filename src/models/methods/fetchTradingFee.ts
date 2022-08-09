import { TradingFee } from '../ccxt';
import { BaseResponse } from '../common';

/**
 * Expected response from a fetchTradingFee call
 *
 * @category Responses
 */
export type FetchTradingFeeResponse = BaseResponse & TradingFee;
