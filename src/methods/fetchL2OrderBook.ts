import _ from 'lodash';
// import { BookOffersRequest } from 'xrpl';
// import { OfferFlags } from 'xrpl/dist/npm/models/ledger';
// import { TakerAmount } from 'xrpl/dist/npm/models/methods/bookOffers';
import { DEFAULT_LIMIT } from '../constants';
import {
  // OrderBookAsk,
  // OrderBookBid,
  MarketSymbol,
  FetchOrderBookParams,
  // OrderBook,
  FetchOrderBookResponse,
  SDKContext,
} from '../models';
// import { parseCurrencyAmount, parseMarketSymbol } from '../utils';

/**
 * Retrieves order book data for a single market pair. Returns an
 * {@link FetchOrderBookResponse}.
 *
 * @category Methods
 */
async function fetchL2OrderBook(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Number of results to return */
  limit: number = DEFAULT_LIMIT,
  /** Parameters specific to the exchange API endpoint */
  params: FetchOrderBookParams
): Promise<FetchOrderBookResponse | undefined> {
  // const [base, quote] = parseMarketSymbol(symbol);

  // const { issuers } = params;

  // // TODO: fetch the issuer info from the cache produced by `loadMarkets` (if present)

  // const takerPays: TakerAmount = {
  //   currency: quote,
  //   issuer: taker_pays_issuer,
  // };

  // const takerGets: TakerAmount = {
  //   currency: base,
  //   issuer: taker_gets_issuer,
  // };

  // const bookOffersRequest: BookOffersRequest = {
  //   command: 'book_offers',
  //   taker_pays: takerPays,
  //   taker_gets: takerGets,
  //   limit,
  //   ledger_index,
  //   ledger_hash,
  //   taker,
  // };

  // const bookOffersResponse = await this.client.requestAll(bookOffersRequest);

  // // Format XRPL response
  // const orders = _.flatMap(bookOffersResponse, (offersResult) => offersResult.result.offers);

  // // Create bids/asks arrays
  // const bids: OrderBookBid[] = [];
  // const asks: OrderBookAsk[] = [];
  // _.forEach(orders, (order) => {
  //   if (!order.quality) return;
  //   // L2 Order book
  //   if ((order.Flags & OfferFlags.lsfSell) === 0) {
  //     bids.push([order.quality, parseCurrencyAmount(order.TakerGets).toString()]);
  //   } else {
  //     asks.push([order.quality, parseCurrencyAmount(order.TakerGets).toString()]);
  //   }
  // });

  // const lastOffers = bookOffersResponse[bookOffersResponse.length - 1].result.offers;

  // const nonce = lastOffers[lastOffers.length - 1].Sequence;

  // const response: OrderBook = {
  //   symbol,
  //   nonce,
  //   bids,
  //   asks,
  // };

  // return response;
  return;
}

export default fetchL2OrderBook;
