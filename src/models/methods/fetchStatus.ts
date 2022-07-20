import { ExchangeStatus } from '../ccxt';

/**
 * Returns information regarding {@link ExchangeStatus} from either the info
 * hardcoded in the exchange instance or the API, if available. Returns an
 * {@link FetchStatusResponse}.
 *
 * @category Requests
 */
export interface FetchStatusRequest {
  /** Parameters specific to the exchange API endpoint */
  params: Record<string, unknown>;
}

/**
 * Expected response from a {@link FetchStatusRequest}.
 *
 * @category Responses
 */
export interface FetchStatusResponse extends ExchangeStatus {}
