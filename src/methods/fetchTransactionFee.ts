import { FeeRequest } from 'xrpl';
import { SDKContext, CurrencyCode, FetchTransactionFeeResponse, ArgumentsRequired } from '../models';

/**
 * Fetches information about fees incurred for performing transactions with a given {@link Currency}.
 * Returns a {@link FetchTransactionFeesResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param code - {@link CurrencyCode} to get fees for
 * @returns A {@link FetchTransactionsFeeResponse} object
 */
async function fetchTransactionFee(this: SDKContext, code: CurrencyCode): Promise<FetchTransactionFeeResponse> {
  if (!code) throw new ArgumentsRequired('Missing required arguments for fetchTransactionFee call');

  const { result: feesResult } = await this.client.request({ command: 'fee' } as FeeRequest);

  const currencies = await this.fetchCurrencies();

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
