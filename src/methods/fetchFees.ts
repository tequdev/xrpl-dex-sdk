import { FetchFeesResponse } from '../models';
import SDK from '../sdk';

/**
 * Fetches information about currency-related {@link models.Fee}s incurred for performing transactions.
 * Returns a {@link models.FetchFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @returns {@link models.FetchFeesResponse}
 */
async function fetchFees(sdk: SDK): Promise<FetchFeesResponse> {
  const currencies = await sdk.fetchCurrencies();
  const transactions = currencies ? (await sdk.fetchTransactionFees(Object.keys(currencies))) || [] : [];
  const trading = (await sdk.fetchTradingFees()) || [];

  const response: FetchFeesResponse = {
    transactions,
    trading,
  };

  return response;
}

export default fetchFees;
