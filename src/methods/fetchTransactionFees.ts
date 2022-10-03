import { SDKContext, CurrencyCode, FetchTransactionFeesParams, FetchTransactionFeesResponse } from '../models';

/**
 * Returns information about fees incurred for performing transactions with a
 * list of currencies. Returns a {@link FetchTransactionFeesResponse}.
 *
 * @category Methods
 */
async function fetchTransactionFees(
  this: SDKContext,
  /** Currency codes to get fees for */
  codes: CurrencyCode[],
  /** Parameters specific to the exchange API endpoint */
  params: FetchTransactionFeesParams = {}
): Promise<FetchTransactionFeesResponse> {
  const response: FetchTransactionFeesResponse = [];

  for (let c = 0, cl = codes.length; c < cl; c += 1) {
    const fees = await this.fetchTransactionFee(codes[c]);
    if (!fees) continue;
    response.push(fees);
  }

  return response;
}

export default fetchTransactionFees;
