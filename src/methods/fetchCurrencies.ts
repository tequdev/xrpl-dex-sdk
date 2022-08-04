import _ from 'lodash';
import { Client, LedgerDataRequest } from 'xrpl';
import { RippleState } from 'xrpl/dist/npm/models/ledger';
import { DEFAULT_LIMIT } from '../constants';
import { Currencies, FetchCurrenciesParams, FetchCurrenciesResponse } from '../models';
import { LabeledLedgerEntry } from '../models/xrpl';

/**
 * Retrieves a list of currencies being traded on the dEX. Returns
 * a {@link FetchCurrenciesResponse}.
 *
 * @category Methods
 */
async function fetchCurrencies(
  this: Client,
  /** Parameters specific to the exchange API endpoint */
  params: FetchCurrenciesParams = {}
): Promise<FetchCurrenciesResponse> {
  const currencies: Currencies = {};

  const limit = params.limit || DEFAULT_LIMIT;
  let marker: unknown;
  let hasNextPage = true;

  // 1. Download the full ledger object
  while (hasNextPage) {
    const { result: ledgerDataResult } = await this.request({
      command: 'ledger_data',
      ledger_index: 'validated',
      binary: false,
      limit,
      marker,
    } as LedgerDataRequest);

    marker = ledgerDataResult.marker;

    if (!marker) {
      hasNextPage = false;
    }

    _.forEach(ledgerDataResult.state, (state) => {
      const ledgerEntry = state as LabeledLedgerEntry;

      // 2. Find the ledger object type “RippleState”
      if (ledgerEntry.LedgerEntryType === 'RippleState') {
        const rippleState = ledgerEntry as RippleState;

        const balance = parseInt(rippleState.Balance.value) || 0;

        // 3. Look at the currency and issuer pair on objects that have a non-zero “Balance” value
        if (balance !== 0) {
          // balance will never be 0, so the falsy value of >= 0 will always be negative
          // (see https://xrpl.org/ripplestate.html#ripplestate-fields for more info)
          const issuer = balance >= 0 ? rippleState.LowLimit.issuer : rippleState.HighLimit.issuer;

          if (currencies[rippleState.Balance.currency]) {
            if (currencies[rippleState.Balance.currency].issuers.indexOf(issuer) === -1) {
              currencies[rippleState.Balance.currency].issuers.push(issuer);
            }
          } else {
            currencies[rippleState.Balance.currency] = {
              code: rippleState.Balance.currency,
              issuers: [issuer],
            };
          }
        }
      }
    });
  }

  return currencies;
}

export default fetchCurrencies;
