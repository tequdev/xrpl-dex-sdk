import { FetchFeesResponse, SDKContext } from '../models';

/**
 * Fetches information about currency-related {@link Fees} incurred for performing transactions.
 * Returns a {@link FetchFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @returns A {@link FetchFeesResponse} object
 */
async function fetchFees(this: SDKContext): Promise<FetchFeesResponse> {
  const currencies = await this.fetchCurrencies();
  const transactions = currencies ? (await this.fetchTransactionFees(Object.keys(currencies))) || [] : [];
  const trading = (await this.fetchTradingFees()) || [];

  const response: FetchFeesResponse = {
    transactions,
    trading,
  };

  return response;
}

export default fetchFees;
