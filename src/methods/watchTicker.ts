import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { MarketSymbol, WatchTickerParams, Ticker, WatchTickerResponse, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Listens for new {@link models.Ticker} data for a single {@link models.Market} pair. Returns a Promise
 * resolving to a {@link models.WatchTickerResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link models.MarketSymbol} to get price ticker data for
 * @param params - (Optional) A {@link models.WatchTickerParams} object
 * @returns {@link models.WatchTickerResponse}
 */
async function watchTicker(
  sdk: SDK,
  symbol: MarketSymbol,
  params: WatchTickerParams = {}
): Promise<WatchTickerResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchTicker call');
  validateMarketSymbol(symbol);

  const tickerStream = new Readable({ read: () => sdk });

  let ticker: Ticker | undefined;

  await sdk.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const newTicker = await sdk.fetchTicker(symbol, params);

    const omittedFields = ['datetime', 'timestamp', 'info'];

    if (ticker && newTicker) {
      const diffs = _.difference(
        Object.values(_.omit(ticker, omittedFields)),
        Object.values(_.omit(newTicker, omittedFields))
      );
      if (!diffs.length) {
        return;
      }
    }

    ticker = newTicker;

    // TODO: calculate sdk transaction's impact on the ticker and add it to the existing value

    if (ticker) tickerStream.emit('update', ticker);
  });

  return tickerStream;
}

export default watchTicker;
