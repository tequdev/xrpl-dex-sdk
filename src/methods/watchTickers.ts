import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { ArgumentsRequired, MarketSymbol, Ticker, WatchTickersParams, WatchTickersResponse } from '../models';
import SDK from '../sdk';
import { getMarketSymbol, validateMarketSymbol } from '../utils';

/**
 * Listens for new {@link models.Ticker} data for multiple {@link models.Market} pairs. Returns a Promise
 * resolving to a {@link models.WatchTickersResponse}.
 *
 * @category Methods
 *
 * @param symbols - Array of {@link models.MarketSymbol}s to get price ticker data for
 * @param params - (Optional) A {@link models.WatchTickerParams} object
 * @returns {@link models.WatchTickersResponse}
 */
async function watchTickers(
  sdk: SDK,
  symbols: MarketSymbol[],
  params: WatchTickersParams = {}
): Promise<WatchTickersResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for watchTickers call');

  const tickersStream = new Readable({ read: () => sdk });

  const tickers: Record<MarketSymbol, Ticker> = {};

  await sdk.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const symbol = getMarketSymbol(tx.transaction);
    if (!symbol) return;
    validateMarketSymbol(symbol);

    if (!symbols.includes(symbol)) return;

    const newTicker = await sdk.fetchTicker(symbol, params);

    const omittedFields = ['datetime', 'timestamp', 'info'];

    if (newTicker) {
      if (tickers[symbol]) {
        const diffs = _.difference(
          Object.values(_.omit(tickers[symbol], omittedFields)),
          Object.values(_.omit(newTicker, omittedFields))
        );
        if (!diffs.length) {
          return;
        }
      } else {
        tickers[symbol] = newTicker;
      }
    }

    // TODO: calculate sdk transaction's impact on the ticker and add it to the existing value

    if (tickers[symbol]) tickersStream.emit('update', tickers[symbol]);
  });

  return tickersStream;
}

export default watchTickers;
