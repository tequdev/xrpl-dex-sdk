import { BadRequest } from 'ccxt';
import _ from 'lodash';
import { Readable } from 'stream';
import { OfferCreate, Payment, SubscribeRequest, TransactionStream } from 'xrpl';
import { LedgerStreamResponse } from 'xrpl/dist/npm/models/methods/subscribe';
import { WatchBalanceParams, SDKContext, BalanceStream } from '../models';
import { getAmountCurrencyCode } from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link WatchBalanceResponse}.
 *
 * @category Methods
 */
async function watchBalance(
  this: SDKContext,
  /** Parameters specific to the exchange API endpoint */
  params: WatchBalanceParams
): Promise<BalanceStream> {
  if (!params.account) throw new BadRequest('Must include account address in params');

  const balanceStream = new Readable({ read: () => this });

  let balance = await this.fetchBalance(params);

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions', 'ledger'],
    accounts: [params.account],
  } as SubscribeRequest);

  const refreshBalance = async () => {
    const newBalance = await this.fetchBalance(params);
    if (newBalance) balanceStream.emit('update', newBalance);
    balance = newBalance;
  };

  this.client.on('ledgerClosed', async (ledger: LedgerStreamResponse) => {
    if (
      ledger.reserve_base !== balance?.info.validatedLedger.reserve_base ||
      ledger.reserve_inc !== balance?.info.validatedLedger.reserve_inc
    ) {
      await refreshBalance();
    }
  });

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (tx.transaction.TransactionType === 'Payment') {
      const transaction = tx.transaction as Payment;
      if (transaction.Account === params.account || transaction.Destination === params.account) {
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
      } else if (transaction.Account === params.account) {
        // Did we send this txn?
        shouldRefresh = true;
      } else if (tx.meta?.AffectedNodes) {
        // Were we affected by this txn?
        for (const node of tx.meta.AffectedNodes) {
          const { LedgerEntryType, FinalFields, NewFields } = Object.values(node)[0];

          if (LedgerEntryType === 'AccountRoot' && (FinalFields || NewFields)) {
            if (params.code && params.code !== 'XRP') {
              return;
            } else if ((FinalFields || NewFields).Account === params.account) {
              shouldRefresh = true;
              break;
            }
          } else if (LedgerEntryType === 'RippleState' && (FinalFields || NewFields)) {
            if (
              (params.code &&
                (FinalFields || NewFields).HighLimit.currency === params.code &&
                (FinalFields || NewFields).LowLimit.currency === params.code) ||
              (FinalFields || NewFields).HighLimit.issuer === params.account ||
              (FinalFields || NewFields).LowLimit.issuer === params.account
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
