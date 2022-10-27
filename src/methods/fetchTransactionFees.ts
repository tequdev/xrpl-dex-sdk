import { CurrencyCode, FetchTransactionFeesResponse } from '../models';
import SDK from '../sdk';

/**
 * Fetches information about fees incurred for performing transactions with multiple {@link models.Currencies}.
 * Returns a {@link models.FetchTransactionFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param codes - Array of {@link models.CurrencyCode}s to get fees for
 * @returns {@link models.FetchTransactionFeesResponse}
 */
async function fetchTransactionFees(sdk: SDK, codes: CurrencyCode[]): Promise<FetchTransactionFeesResponse> {
  const response: FetchTransactionFeesResponse = [];

  for (let c = 0, cl = codes.length; c < cl; c += 1) {
    const fees = await sdk.fetchTransactionFee(codes[c]);
    if (!fees) continue;
    response.push(fees);
  }

  return response;
}

export default fetchTransactionFees;
