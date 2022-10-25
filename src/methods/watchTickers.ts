import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import {
  MarketSymbol,
  WatchTickersParams,
  SDKContext,
  WatchTickersResponse,
  Ticker,
  ArgumentsRequired,
} from '../models';
import { getMarketSymbol, validateMarketSymbol } from '../utils';

/**
 * Listens for new {@link Ticker} data for multiple {@link Market} pairs. Returns a Promise
 * resolving to a {@link WatchTickersResponse}.
 *
 * @category Methods
 *
 * @param symbols - Array of {@link MarketSymbols} to get price ticker data for
 * @param params - (Optional) A {@link WatchTickerParams} object
 * @returns A Promise resolving to a {@link WatchTickersResponse} object
 */
async function watchTickers(
  this: SDKContext,
  symbols: MarketSymbol[],
  params: WatchTickersParams
): Promise<WatchTickersResponse> {
  if (!symbols) throw new ArgumentsRequired('Missing required arguments for watchTickers call');

  const tickersStream = new Readable({ read: () => this });

  const tickers: Record<MarketSymbol, Ticker> = {};

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const symbol = getMarketSymbol(tx.transaction);
    validateMarketSymbol(symbol);

    if (!symbols.includes(symbol)) return;

    const newTicker = await this.fetchTicker(symbol, params);

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

    // TODO: calculate this transaction's impact on the ticker and add it to the existing value

    if (tickers[symbol]) tickersStream.emit('update', tickers[symbol]);
  });

  return tickersStream;
}

export default watchTickers;
