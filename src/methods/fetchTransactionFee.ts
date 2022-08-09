import { Client, FeeRequest } from 'xrpl';
import { CurrencyCode, FetchTransactionFeeParams, FetchTransactionFeeResponse, TransactionFee } from '../models';
import fetchCurrencies from './fetchCurrencies';

/**
 * Returns information regarding {@link ExchangeTransactionFee} from either the info
 * hardcoded in the exchange instance or the API, if available. Returns an
 * {@link FetchTransactionFeeResponse}.
 *
 * @category Methods
 */
async function fetchTransactionFee(
  this: Client,
  /** Currency code to get fees for */
  code: CurrencyCode,
  /** Parameters specific to the exchange API endpoint */
  params: FetchTransactionFeeParams = {}
): Promise<FetchTransactionFeeResponse | undefined> {
  const { result: feesResult } = await this.request({ command: 'fee' } as FeeRequest);

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
