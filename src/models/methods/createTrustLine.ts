import { CurrencyCode, ResponseInfo } from '../common';

/**
 * Expected response from a {@link SDK.createTrustLine} call.
 *
 * @category Responses
 */
export interface CreateTrustLineResponse {
  code: CurrencyCode;
  amount: string;
  info: ResponseInfo;
}
