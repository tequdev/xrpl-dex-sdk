import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { MarketSymbol, WatchTickerParams, SDKContext, Ticker, WatchTickerResponse } from '../models';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link WatchTickerResponse}.
 *
 * @category Methods
 */
async function watchTicker(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Parameters specific to the exchange API endpoint */
  params: WatchTickerParams
): Promise<WatchTickerResponse> {
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
