import { FeeRequest } from 'xrpl';
import { SDKContext, CurrencyCode, FetchTransactionFeeParams, FetchTransactionFeeResponse } from '../models';

/**
 * Returns information about fees incurred for performing transactions with a given
 * currency. Returns a {@link FetchTransactionFeeResponse}.
 *
 * @category Methods
 */
async function fetchTransactionFee(
  this: SDKContext,
  /** Currency code to get fees for */
  code: CurrencyCode,
  /** Parameters specific to the exchange API endpoint */
  params: FetchTransactionFeeParams = {}
): Promise<FetchTransactionFeeResponse> {
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
