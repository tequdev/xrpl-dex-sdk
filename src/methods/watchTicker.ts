import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { MarketSymbol, WatchTickerParams, SDKContext, Ticker, WatchTickerResponse, ArgumentsRequired } from '../models';
import { validateMarketSymbol } from '../utils';

/**
 * Listens for new {@link Ticker} data for a single {@link Market} pair. Returns a Promise
 * resolving to a {@link WatchTickerResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link MarketSymbol} to get price ticker data for
 * @param params - (Optional) A {@link WatchTickerParams} object
 * @returns A Promise resolving to a {@link WatchTickerResponse} object
 */
async function watchTicker(
  this: SDKContext,
  symbol: MarketSymbol,
  params: WatchTickerParams
): Promise<WatchTickerResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchTicker call');
  validateMarketSymbol(symbol);

  const tickerStream = new Readable({ read: () => this });

  let ticker: Ticker | undefined;

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const newTicker = await this.fetchTicker(symbol, params);

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

    // TODO: calculate this transaction's impact on the ticker and add it to the existing value

    if (ticker) tickerStream.emit('update', ticker);
  });

  return tickerStream;
}

export default watchTicker;
