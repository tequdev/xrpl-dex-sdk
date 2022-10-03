import BigNumber from 'bignumber.js';
import _ from 'lodash';
import { BookOffer, BookOffersRequest } from 'xrpl';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { DEFAULT_TICKER_SEARCH_LIMIT } from '../constants';
import { MarketSymbol, FetchTickerParams, Ticker, FetchTickerResponse, SDKContext } from '../models';
import { BN, getTakerAmount, parseMarketSymbol } from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link FetchTickerResponse}.
 *
 * @category Methods
 */
async function fetchTicker(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Parameters specific to the exchange API endpoint */
  params: FetchTickerParams = {}
): Promise<FetchTickerResponse> {
  const [base, quote] = parseMarketSymbol(symbol);

  const limit = params.searchLimit || DEFAULT_TICKER_SEARCH_LIMIT;

  let high: BigNumber | undefined; // highest price
  let low: BigNumber | undefined; // lowest price

  let bid: BigNumber | undefined; // current best bid (buy) price
  let bidVolume: BigNumber | undefined; // current best bid (buy) amount (may be missing or undefined)
  let ask: BigNumber | undefined; // current best ask (sell) price
  let askVolume: BigNumber | undefined; // current best ask (sell) amount (may be missing or undefined)

  let vwapPrice = BN(0); // numerator of volume-weighed average price calculation
  let vwapQuantity = BN(0); // denominator of volume-weighed average price calculation

  let baseVolume = BN(0); // volume of base currency traded for last 24 hours
  let quoteVolume = BN(0); // volume of quote currency traded for last 24 hours

  const timestamp = Date.now();
  const datetime = new Date(timestamp).toISOString();

  const baseAmount = getTakerAmount(base);
  const quoteAmount = getTakerAmount(quote);

  const bookOffersBaseRequest = { command: 'book_offers', limit: limit + 1 };

  const bidsResponse = await this.client.request({
    ...bookOffersBaseRequest,
    taker_gets: quoteAmount,
    taker_pays: baseAmount,
  } as BookOffersRequest);

  const asksResponse = await this.client.request({
    ...bookOffersBaseRequest,
    taker_gets: baseAmount,
    taker_pays: quoteAmount,
  } as BookOffersRequest);

  const bookOffers = [...bidsResponse.result.offers, ...asksResponse.result.offers];

  // Oldest to newest
  bookOffers.sort((a, b) => a.PreviousTxnLgrSeq - b.PreviousTxnLgrSeq);

  const getBookOfferPrice = (bookOffer: BookOffer): BigNumber =>
    bookOffer.quality
      ? BN(bookOffer.quality)
      : BN(parseAmountValue(bookOffer.taker_pays_funded || bookOffer.TakerPays)).dividedBy(
          BN(parseAmountValue(bookOffer.taker_gets_funded || bookOffer.TakerGets))
        );

  const open = getBookOfferPrice(bookOffers[1]); // opening price (second-earliest Offer in our results)
  const close = getBookOfferPrice(bookOffers[bookOffers.length - 1]); // closing price for current period (most recent Offer)
  const previousClose = getBookOfferPrice(bookOffers[0]); // closing price for the previous period (earliest Offer in our results)

  for (const bookOffer of bookOffers) {
    const price = getBookOfferPrice(bookOffer);

    high = !high || price > high ? price : high;
    low = !low || price < low ? price : low;

    const baseValue = BN(parseAmountValue(bookOffer.TakerPays));
    const quoteValue = BN(parseAmountValue(bookOffer.TakerGets));

    bid = !bid || price > bid ? price : bid;
    bidVolume = !bidVolume || baseValue.isGreaterThan(bidVolume) ? baseValue : bidVolume;

    ask = !ask || price > ask ? price : ask;
    askVolume = !askVolume || quoteValue.isGreaterThan(quoteVolume) ? quoteValue : askVolume;

    baseVolume = baseVolume.plus(baseValue);
    quoteVolume = quoteVolume.plus(quoteValue);

    vwapPrice = vwapPrice.plus(price.times(baseValue));
    vwapQuantity = vwapQuantity.plus(baseValue);
  }

  // volume-weighed average price
  const vwap = vwapPrice.dividedBy(vwapQuantity);
  // absolute change in price
  const change = close.minus(open);
  // relative change in price
  const percentage = change.dividedBy(open).times(100);
  // average price
  const average = close.plus(open).dividedBy(2);

  const ticker: Ticker = {
    symbol,
    timestamp,
    datetime,
    high: (high || 0).toString(),
    low: (low || 0).toString(),
    bid: (bid || 0).toString(),
    bidVolume: bidVolume?.toString(),
    askVolume: askVolume?.toString(),
    ask: (ask || 0).toString(),
    vwap: vwap.toString(),
    open: open.toString(),
    close: close.toString(),
    last: close.toString(),
    previousClose: previousClose.toString(),
    change: change.toString(),
    percentage: percentage.toString(),
    average: average.toString(),
    baseVolume: baseVolume.toString(),
    quoteVolume: quoteVolume.toString(),
    info: { bids: bidsResponse.result, asks: asksResponse.result },
  };

  return ticker;
}

export default fetchTicker;
