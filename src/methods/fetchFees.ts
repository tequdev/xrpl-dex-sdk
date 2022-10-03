import { FetchFeesResponse, SDKContext } from '../models';

/**
 * Returns information about fees incurred for performing transactions with a
 * list of currencies. Returns a {@link FetchFeesResponse}.
 *
 * @category Methods
 */
async function fetchFees(this: SDKContext): Promise<FetchFeesResponse> {
  const currencies = await this.fetchCurrencies();
  const transactions = currencies ? (await this.fetchTransactionFees(Object.keys(currencies), {})) || [] : [];
  const trading = (await this.fetchTradingFees()) || [];

  const response: FetchFeesResponse = {
    transactions,
    trading,
  };

  return response;
}

export default fetchFees;
