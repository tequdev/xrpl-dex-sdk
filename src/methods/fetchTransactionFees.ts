import { SDKContext, CurrencyCode, FetchTransactionFeesResponse } from '../models';

/**
 * Fetches information about fees incurred for performing transactions with multiple {@link Currencies}.
 * Returns a {@link FetchTransactionFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param codes - Array of {@link CurrencyCode}s to get fees for
 * @returns A {@link FetchTransactionFeesResponse} object
 */
async function fetchTransactionFees(this: SDKContext, codes: CurrencyCode[]): Promise<FetchTransactionFeesResponse> {
  const response: FetchTransactionFeesResponse = [];

  for (let c = 0, cl = codes.length; c < cl; c += 1) {
    const fees = await this.fetchTransactionFee(codes[c]);
    if (!fees) continue;
    response.push(fees);
  }

  return response;
}

export default fetchTransactionFees;
