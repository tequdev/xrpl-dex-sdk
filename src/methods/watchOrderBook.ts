import _ from 'lodash';
import { Readable } from 'stream';
import { SubscribeRequest, TransactionStream } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { MarketSymbol, WatchOrderBookResponse, SDKContext } from '../models';
import { getTakerAmount, parseMarketSymbol } from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link WatchOrderBookResponse}.
 *
 * @category Methods
 */
async function watchOrderBook(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Number of results to return in book */
  limit: number = DEFAULT_LIMIT
): Promise<WatchOrderBookResponse> {
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
