import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { MarketSymbol, AffectedNode, ArgumentsRequired, WatchMyTradesResponse } from '../models';
import { getMarketSymbol, getTradeFromData, validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Listens for new {@link models.Trade}s from the SDK user for a given {@link models.Market} pair. Returns a Promise
 * resolving to a {@link models.WatchMyTradesResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link models.MarketSymbol} to watch
 * @returns {@link models.WatchMyTradesResponse}
 */
async function watchMyTrades(sdk: SDK, symbol: MarketSymbol): Promise<WatchMyTradesResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchMyTrades call');
  validateMarketSymbol(symbol);

  const tradeStream = new Readable({ read: () => sdk });

  await sdk.client.request({
    command: 'subscribe',
    streams: ['transactions'],
    accounts: [sdk.wallet.classicAddress],
  } as SubscribeRequest);

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    const transaction = tx.transaction;
    if (
      typeof transaction !== 'object' ||
      transaction.TransactionType !== 'OfferCreate' ||
      typeof tx.meta !== 'object' ||
      !transaction.Sequence ||
      transaction.Account !== sdk.wallet.classicAddress
    )
      return;

    if (getMarketSymbol(transaction) !== symbol) return;

    for (const affectedNode of tx.meta.AffectedNodes) {
      const { LedgerEntryType, FinalFields } = Object.values(affectedNode)[0] as AffectedNode;

      if (LedgerEntryType !== 'Offer' || !FinalFields) continue;

      const offer = FinalFields as unknown as Offer;

      const trade = await getTradeFromData.call(
        sdk,
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
