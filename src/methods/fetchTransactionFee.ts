import { FeeRequest } from 'xrpl';
import { CurrencyCode, FetchTransactionFeeResponse, ArgumentsRequired } from '../models';
import SDK from '../sdk';

/**
 * Fetches information about fees incurred for performing transactions with a given {@link models.Currency}.
 * Returns a {@link models.FetchTransactionFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param code - {@link models.CurrencyCode} to get fees for
 * @returns {@link models.FetchTransactionFeeResponse}
 */
async function fetchTransactionFee(sdk: SDK, code: CurrencyCode): Promise<FetchTransactionFeeResponse> {
  if (!code) throw new ArgumentsRequired('Missing required arguments for fetchTransactionFee call');

  const { result: feesResult } = await sdk.client.request({ command: 'fee' } as FeeRequest);

  const currencies = await sdk.fetchCurrencies();

  const currency = currencies[code];

  if (!currency) return;

  const response: FetchTransactionFeeResponse = {
    code,
    current: feesResult.drops.open_ledger_fee,
    transfer: currency.fee || '0',
    info: { feesResult, currency },
  };

  return response;
}

export default fetchTransactionFee;
