import { ExchangeStatusStream } from '../ccxt/ExchangeStatus';

/**
 * Expected response from a {@link SDK.watchStatus} call.
 *
 * @category Responses
 */
export type WatchStatusResponse = ExchangeStatusStream;
