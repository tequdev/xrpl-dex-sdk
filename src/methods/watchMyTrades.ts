import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { MarketSymbol, SDKContext, AffectedNode, ArgumentsRequired, WatchMyTradesResponse } from '../models';
import { getMarketSymbol, getTradeFromData, validateMarketSymbol } from '../utils';

/**
 * Listens for new {@link Trades} from the SDK user for a given {@link Market} pair. Returns a Promise
 * resolving to a {@link WatchMyTradesResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link MarketSymbol} to watch
 * @returns A Promise resolving to a {@link WatchMyTradesResponse} object
 */
async function watchMyTrades(this: SDKContext, symbol: MarketSymbol): Promise<WatchMyTradesResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchMyTrades call');
  validateMarketSymbol(symbol);

  const tradeStream = new Readable({ read: () => this });

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
    accounts: [this.wallet.classicAddress],
  } as SubscribeRequest);

  this.client.on('transaction', async (tx: TransactionStream) => {
    const transaction = tx.transaction;
    if (
      typeof transaction !== 'object' ||
      transaction.TransactionType !== 'OfferCreate' ||
      typeof tx.meta !== 'object' ||
      !transaction.Sequence ||
      transaction.Account !== this.wallet.classicAddress
    )
      return;

    if (getMarketSymbol(transaction) !== symbol) return;

    for (const affectedNode of tx.meta.AffectedNodes) {
      const { LedgerEntryType, FinalFields } = Object.values(affectedNode)[0] as AffectedNode;

      if (LedgerEntryType !== 'Offer' || !FinalFields) continue;

      const offer = FinalFields as unknown as Offer;

      const trade = await getTradeFromData.call(
        this,
        {
          date: transaction.date || 0,
          Flags: transaction.Flags as number,
          OrderAccount: offer.Account,
          OrderSequence: offer.Sequence,
          Account: transaction.Account,
          Sequence: transaction.Sequence,
          TakerPays: offer.TakerPays,
          TakerGets: offer.TakerGets,
        },
        { transaction }
      );

      if (trade) tradeStream.emit('update', trade);
    }
  });

  return tradeStream;
}

export default watchMyTrades;
