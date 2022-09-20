import { ExchangeStatus } from '../ccxt';
import { BaseResponse } from '../common';

/**
 * Expected response from a fetchStatus call
 *
 * @category Responses
 */
export type FetchStatusResponse = BaseResponse & ExchangeStatus;
