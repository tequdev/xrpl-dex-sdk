import { FeeRequest } from 'xrpl';
import {
  SDKContext,
  CurrencyCode,
  FetchTransactionFeeParams,
  FetchTransactionFeeResponse,
  TransactionFee,
} from '../models';
import fetchCurrencies from './fetchCurrencies';

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
): Promise<FetchTransactionFeeResponse | undefined> {
  const { result: feesResult } = await this.client.request({ command: 'fee' } as FeeRequest);

  const currencies = await fetchCurrencies.call(this);

  const transferRates: TransactionFee['transfer'] = {};

  const currency = currencies[code];

  // TODO: proper error response
  if (!currency) return;

  currency.forEach(({ fee, issuer }) => {
    if (params.issuer) {
      if (params.issuer === issuer) {
        transferRates[issuer] = fee || 0;
      }
    } else {
      transferRates[issuer] = fee || 0;
    }
  });

  const response: FetchTransactionFeeResponse = {
    code,
    current: parseInt(feesResult.drops.open_ledger_fee),
    transfer: transferRates,
    info: JSON.stringify({ feesResult, currency }),
  };

  return response;
}

export default fetchTransactionFee;
