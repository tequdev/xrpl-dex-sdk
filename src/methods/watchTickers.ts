import _ from 'lodash';
import { Readable } from 'stream';
import { OfferCreateFlags, SubscribeRequest, TransactionStream } from 'xrpl';
import { MarketSymbol, WatchTickersParams, SDKContext, WatchTickersResponse, Ticker } from '../models';
import { getBaseAmountKey, getMarketSymbol, getQuoteAmountKey } from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link WatchTickerResponse}.
 *
 * @category Methods
 */
async function watchTickers(
  this: SDKContext,
  /** Array of token pairs (called Unified Market Symbols in CCXT) */
  symbols: MarketSymbol[],
  /** Parameters specific to the exchange API endpoint */
  params: WatchTickersParams
): Promise<WatchTickersResponse> {
  const tickersStream = new Readable({ read: () => this });

  const tickers: Record<MarketSymbol, Ticker> = {};

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const txSide =
      tx.transaction.Flags && (tx.transaction.Flags as number & OfferCreateFlags.tfSell) === OfferCreateFlags.tfSell
        ? 'sell'
        : 'buy';
    const baseAmount = tx.transaction[getBaseAmountKey(txSide)];
    const quoteAmount = tx.transaction[getQuoteAmountKey(txSide)];
    const symbol = getMarketSymbol(baseAmount, quoteAmount);

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
