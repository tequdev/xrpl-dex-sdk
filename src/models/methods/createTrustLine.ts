import { CurrencyCode } from '../common';

/**
 * Expected response from a createTrustLine call
 *
 * @category Responses
 */
export type CreateTrustLineResponse = { code: CurrencyCode; amount: string; info: any } | undefined;
