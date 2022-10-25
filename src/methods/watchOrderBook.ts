import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { MarketSymbol, SDKContext, ArgumentsRequired, WatchOrderBookResponse } from '../models';
import { getTakerAmount, parseMarketSymbol, validateMarketSymbol } from '../utils';

/**
 * Listens for new {@link OrderBook} data for a single {@link Market} pair. Returns a Promise
 * resolving to a {@link WatchOrderBookResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link MarketSymbol} to get order book for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @returns A Promise resolving to a {@link WatchOrderBookResponse} object
 */
async function watchOrderBook(
  this: SDKContext,
  symbol: MarketSymbol,
  limit: number = DEFAULT_LIMIT
): Promise<WatchOrderBookResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for watchOrderBook call');
  validateMarketSymbol(symbol);

  const orderBookStream = new Readable({ read: () => this });

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getTakerAmount(baseCurrency);
  const quoteAmount = getTakerAmount(quoteCurrency);

  await this.client.request({
    command: 'subscribe',
    books: [
      {
        // taker: this.wallet.classicAddress,
        taker_gets: quoteAmount,
        taker_pays: baseAmount,
      },
    ],
  } as SubscribeRequest);

  this.client.on('error', async (error: unknown) => {
    console.error(error as Error);
    throw error as Error;
  });

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const orderBook = await this.fetchOrderBook(symbol, limit);
    if (orderBook) orderBookStream.emit('update', orderBook);
  });

  return orderBookStream;
}

export default watchOrderBook;
