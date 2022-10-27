import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { MarketSymbol, ArgumentsRequired, WatchOrderBookResponse } from '../models';
import { getTakerAmount, parseMarketSymbol, validateMarketSymbol } from '../utils';
import SDK from '../sdk';

/**
 * Listens for new {@link models.OrderBook} data for a single {@link models.Market} pair. Returns a Promise
 * resolving to a {@link models.WatchOrderBookResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link models.MarketSymbol} to get order book for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @returns {@link models.WatchOrderBookResponse}
 */
async function watchOrderBook(
  sdk: SDK,
  symbol: MarketSymbol,
  limit: number = DEFAULT_LIMIT
): Promise<WatchOrderBookResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchOrderBook call');
  validateMarketSymbol(symbol);

  const orderBookStream = new Readable({ read: () => sdk });

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getTakerAmount(baseCurrency);
  const quoteAmount = getTakerAmount(quoteCurrency);

  await sdk.client.request({
    command: 'subscribe',
    books: [
      {
        // taker: sdk.wallet.classicAddress,
        taker_gets: quoteAmount,
        taker_pays: baseAmount,
      },
    ],
  } as SubscribeRequest);

  sdk.client.on('error', async (error: unknown) => {
    console.error(error as Error);
    throw error as Error;
  });

  sdk.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const orderBook = await sdk.fetchOrderBook(symbol, limit);
    if (orderBook) orderBookStream.emit('update', orderBook);
  });

  return orderBookStream;
}

export default watchOrderBook;
