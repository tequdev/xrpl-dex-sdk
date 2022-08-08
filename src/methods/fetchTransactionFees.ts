import { Client, FeeRequest } from 'xrpl';
import { CurrencyCode, FetchTransactionFeesParams, FetchTransactionFeesResponse, TransactionFee } from '../models';
import fetchCurrencies from './fetchCurrencies';

/**
 * Returns information regarding {@link ExchangeTransactionFees} from either the info
 * hardcoded in the exchange instance or the API, if available. Returns an
 * {@link FetchTransactionFeesResponse}.
 *
 * @category Methods
 */
async function fetchTransactionFees(
  this: Client,
  /** Currency codes to get fees for */
  codes: CurrencyCode[],
  /** Parameters specific to the exchange API endpoint */
  params: FetchTransactionFeesParams = {}
): Promise<FetchTransactionFeesResponse | undefined> {
  const { result: feesResult } = await this.request({ command: 'fee' } as FeeRequest);

  const currencies = await fetchCurrencies.call(this);

  const response: FetchTransactionFeesResponse = [];

  codes.forEach((code) => {
    if (!currencies[code]) return;

    const transferRates: TransactionFee['transfer'] = {};

    // Look up a specific issuer's currency...
    if (params.issuers && params.issuers[code]) {
      const issuerCurrency = currencies[code].find(
        (currency) => params.issuers && params.issuers[code] === currency.issuer
      );
      if (issuerCurrency && issuerCurrency.fee) {
        transferRates[issuerCurrency.issuer] = issuerCurrency.fee;
      }
    } else {
      // Or get fees for all issuers of this currency
      currencies[code].forEach(({ issuer, fee }) => {
        if (fee) {
          transferRates[issuer] = fee;
        }
      });
    }

    response.push({
      code,
      current: parseInt(feesResult.drops.open_ledger_fee),
      transfer: transferRates,
      info: JSON.stringify({ feesResult, currency: currencies[code] }),
    });
  });

  return response;
}

export default fetchTransactionFees;
