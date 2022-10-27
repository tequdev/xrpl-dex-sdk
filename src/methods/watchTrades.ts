import _ from 'lodash';
import { Readable } from 'stream';
import { OfferCreateFlags, SubscribeRequest, TransactionStream } from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { MarketSymbol, Trade, AffectedNode, WatchTradesResponse, ArgumentsRequired } from '../models';
import {
  getBaseAmountKey,
  getMarketSymbolFromAmount,
  getQuoteAmountKey,
  getTradeFromData,
  validateMarketSymbol,
} from '../utils';
import SDK from '../sdk';

/**
 * Listens for new {@link models.Trade}s for a given {@link models.Market}. Returns a Promise resolving to a
 * {@link models.WatchTradesResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link models.MarketSymbol} to filter Trades by
 * @returns {@link models.WatchTradesResponse}
 */
async function watchTrades(sdk: SDK, symbol: MarketSymbol): Promise<WatchTradesResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchTrades call');
  validateMarketSymbol(symbol);

  const tradeStream = new Readable({ read: () => sdk });

  await sdk.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    const transaction = tx.transaction;
    if (
      typeof transaction !== 'object' ||
      transaction.TransactionType !== 'OfferCreate' ||
      typeof tx.meta !== 'object' ||
      !transaction.Sequence
    )
      return;

    const side =
      typeof transaction.Flags === 'number' && !(transaction.Flags & OfferCreateFlags.tfSell) ? 'buy' : 'sell';

    const marketSymbol = getMarketSymbolFromAmount(
      transaction[getBaseAmountKey(side)],
      transaction[getQuoteAmountKey(side)]
    );

    if (marketSymbol !== symbol) {
      return;
    }

    const trades: Trade[] = [];

    for (const affectedNode of tx.meta.AffectedNodes) {
      const { LedgerEntryType, FinalFields } = Object.values(affectedNode)[0] as AffectedNode;

      if (LedgerEntryType !== 'Offer' || !FinalFields) continue;

      const offer = FinalFields as unknown as Offer;

      const trade = await getTradeFromData.call(
        sdk,
        {
          date: transaction.date ?? 0,
          Flags: offer.Flags as number,
          OrderAccount: offer.Account,
          OrderSequence: offer.Sequence,
          Account: transaction.Account,
          Sequence: transaction.Sequence,
          TakerPays: offer.TakerPays,
          TakerGets: offer.TakerGets,
        },
        { transaction }
      );

      if (trade) trades.push(trade);
    }

    if (trades.length) tradeStream.emit('update', trades);
  });

  return tradeStream;
}

export default watchTrades;
