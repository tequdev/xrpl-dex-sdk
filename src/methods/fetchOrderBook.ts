import { randomUUID } from 'crypto';
import { BookOffer, BookOffersRequest } from 'xrpl';
import { CURRENCY_PRECISION, DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  ArgumentsRequired,
  FetchOrderBookParams,
  FetchOrderBookResponse,
  MarketSymbol,
  OrderBook,
  OrderBookAsk,
  OrderBookBid,
} from '../models';
import SDK from '../sdk';
import { getSharedOrderData, getTakerAmount, parseMarketSymbol, validateMarketSymbol } from '../utils';

/**
 * Retrieves order book data for a single {@link models.Market} pair. Returns a {@link models.FetchOrderBookResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#order-book
 *
 * @param symbol - {@link models.MarketSymbol} to get order book for
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link models.FetchOrderBookParams} object
 * @returns {@link models.FetchOrderBookResponse}
 */
async function fetchOrderBook(
  sdk: SDK,
  symbol: MarketSymbol,
  limit: number = DEFAULT_LIMIT,
  params: FetchOrderBookParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchOrderBookResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchOrderBook call');
  validateMarketSymbol(symbol);

  const { searchLimit } = params;

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getTakerAmount(baseCurrency);
  const quoteAmount = getTakerAmount(quoteCurrency);

  let offers: BookOffer[] = [];
  let ledger_index: number | undefined;

  let orderBookRequestBase: any = {
    command: 'book_offers',
    limit: searchLimit,
  };

  if (params.ledgerHash) orderBookRequestBase.ledger_hash = params.ledgerHash;
  if (params.ledgerIndex) orderBookRequestBase.ledger_index = params.ledgerIndex;

  for (let i = 0; i < 2; i++) {
    const orderBookRequest: BookOffersRequest = {
      ...orderBookRequestBase,
      id: randomUUID(),
      taker_pays: i === 0 ? baseAmount : quoteAmount,
      taker_gets: i === 0 ? quoteAmount : baseAmount,
    };
    const orderBookResponse = await sdk.client.request(orderBookRequest);
    offers = [...offers, ...orderBookResponse.result.offers];
    ledger_index = orderBookResponse.result.ledger_index;
  }

  const bids: OrderBookBid[] = [];
  const asks: OrderBookAsk[] = [];

  for (const offer of offers) {
    const sharedData = await getSharedOrderData.call(sdk, offer, symbol);

    if (!sharedData) continue;

    const { side, price, amount } = sharedData;

    if (side === 'sell') {
      if (asks.length > limit) break;
      const orderBookEntry = [
        (+price.toPrecision(CURRENCY_PRECISION)).toString(),
        (+amount.toPrecision(CURRENCY_PRECISION)).toString(),
      ];
      asks.push(orderBookEntry as OrderBookAsk);
    } else {
      if (bids.length > limit) break;
      const orderBookEntry = [
        (+price.toPrecision(CURRENCY_PRECISION)).toString(),
        (+amount.toPrecision(CURRENCY_PRECISION)).toString(),
      ];
      bids.push(orderBookEntry as OrderBookBid);
    }
  }

  const nonce = ledger_index ?? Date.now();

  const response: OrderBook = {
    symbol,
    nonce,
    bids,
    asks,
  };

  return response;
}

export default fetchOrderBook;
