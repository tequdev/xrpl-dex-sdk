import { Client } from 'xrpl';
import { FetchFeesResponse } from '../models';
import fetchCurrencies from './fetchCurrencies';
import fetchTradingFees from './fetchTradingFees';
import fetchTransactionFees from './fetchTransactionFees';

/**
 * Returns information about fees incurred for performing transactions with a
 * list of currencies. Returns a {@link FetchFeesResponse}.
 *
 * @category Methods
 */
async function fetchFees(this: Client): Promise<FetchFeesResponse | undefined> {
  const currencies = await fetchCurrencies.call(this);
  const transactionFees = await fetchTransactionFees.call(this, Object.keys(currencies));
  const tradingFees = await fetchTradingFees.call(this);

  const response: FetchFeesResponse = {
    transactions: transactionFees || [],
    trading: tradingFees || [],
  };

  return response;
}

export default fetchFees;
