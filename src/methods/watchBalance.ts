import _ from 'lodash';
import { Readable } from 'stream';
import { OfferCreate, Payment, SubscribeRequest, TransactionStream } from 'xrpl';
import { LedgerStreamResponse } from 'xrpl/dist/npm/models/methods/subscribe';
import { WatchBalanceParams, WatchBalanceResponse } from '../models';
import { getAmountCurrencyCode } from '../utils';
import SDK from '../sdk';

/**
 * Listens for new {@link models.OrderBook} data for a single {@link models.Market} pair. Returns a Promise
 * resolving to a {@link models.WatchBalanceResponse}.
 *
 * @category Methods
 *
 * @param params - (Optional) A {@link models.WatchBalanceParams} object
 * @returns {@link models.WatchBalanceResponse}
 */
async function watchBalance(sdk: SDK, params: WatchBalanceParams = {}): Promise<WatchBalanceResponse> {
  const account = sdk.wallet.classicAddress;

  const balanceStream = new Readable({ read: () => sdk });

  let balance = await sdk.fetchBalance(params);

  await sdk.client.request({
    command: 'subscribe',
    streams: ['transactions', 'ledger'],
    accounts: [account],
  } as SubscribeRequest);

  const refreshBalance = async () => {
    const newBalance = await sdk.fetchBalance(params);
    if (newBalance) balanceStream.emit('update', newBalance);
    balance = newBalance;
  };

  sdk.client.on('ledgerClosed', async (ledger: LedgerStreamResponse) => {
    if (
      ledger.reserve_base !== balance?.info.validatedLedger.reserve_base ||
      ledger.reserve_inc !== balance?.info.validatedLedger.reserve_inc
    ) {
      await refreshBalance();
    }
  });

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    if (tx.transaction.TransactionType === 'Payment') {
      const transaction = tx.transaction as Payment;
      if (transaction.Account === account || transaction.Destination === account) {
        await refreshBalance();
      }
    } else if (tx.transaction.TransactionType === 'OfferCreate') {
      const transaction = tx.transaction as OfferCreate;
      let shouldRefresh = false;
      if (
        params.code &&
        getAmountCurrencyCode(transaction.TakerGets) !== params.code &&
        getAmountCurrencyCode(transaction.TakerPays) !== params.code
      ) {
        return;
      } else if (transaction.Account === account) {
        // Did we send sdk txn?
        shouldRefresh = true;
      } else if (tx.meta?.AffectedNodes) {
        // Were we affected by sdk txn?
        for (const node of tx.meta.AffectedNodes) {
          const { LedgerEntryType, FinalFields, NewFields } = Object.values(node)[0];

          if (LedgerEntryType === 'AccountRoot' && (FinalFields || NewFields)) {
            if (params.code && params.code !== 'XRP') {
              return;
            } else if ((FinalFields || NewFields).Account === account) {
              shouldRefresh = true;
              break;
            }
          } else if (LedgerEntryType === 'RippleState' && (FinalFields || NewFields)) {
            if (
              (params.code &&
                (FinalFields || NewFields).HighLimit.currency === params.code &&
                (FinalFields || NewFields).LowLimit.currency === params.code) ||
              (FinalFields || NewFields).HighLimit.issuer === account ||
              (FinalFields || NewFields).LowLimit.issuer === account
            ) {
              shouldRefresh = true;
              break;
            }
          }
        }
      }
      if (shouldRefresh) await refreshBalance();
    }
  });

  return balanceStream;
}

export default watchBalance;
