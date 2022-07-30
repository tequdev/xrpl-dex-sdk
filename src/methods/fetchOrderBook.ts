import _ from 'lodash';
import { Client, BookOffersRequest } from 'xrpl';
import { OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { TakerAmount } from 'xrpl/dist/npm/models/methods/bookOffers';
import { DEFAULT_LIMIT } from '../constants';
import { OrderBookAsk, OrderBookBid, FetchOrderBookRequest, FetchOrderBookResponse } from '../models';
import { parseCurrencyAmount, parseMarketSymbol } from '../utils';

async function fetchOrderBook(
  this: Client,
  { symbol, limit, params }: FetchOrderBookRequest
): Promise<FetchOrderBookResponse> {
  const [base, quote] = parseMarketSymbol(symbol);

  // TODO: fetch the issuer info from the cache produced by `loadMarkets` (if present)

  const takerPays: TakerAmount = {
    currency: quote,
    issuer: params.takerPaysIssuer,
  };

  const takerGets: TakerAmount = {
    currency: base,
    issuer: params.takerGetsIssuer,
  };

  const xrplRequest: BookOffersRequest = {
    command: 'book_offers',
    taker_pays: takerPays,
    taker_gets: takerGets,
    limit: limit ?? DEFAULT_LIMIT,
    ledger_index: params.ledgerIndex,
    ledger_hash: params.ledgerHash,
    taker: params.taker,
  };

  const offersResults = await this.requestAll(xrplRequest);

  // Format XRPL response
  const orders = _.flatMap(offersResults, (offersResult) => offersResult.result.offers);

  // Create bids/asks arrays
  const bids: OrderBookBid[] = [];
  const asks: OrderBookAsk[] = [];
  _.forEach(orders, (order) => {
    if (!order.quality) return;
    // L2 Order book
    if ((order.Flags & OfferFlags.lsfSell) === 0) {
      bids.push([order.quality, parseCurrencyAmount(order.TakerGets).toString()]);
    } else {
      asks.push([order.quality, parseCurrencyAmount(order.TakerGets).toString()]);
    }
  });

  const lastOffers = offersResults[offersResults.length - 1].result.offers;

  // TODO: confirm this is usable as a nonce
  const nonce = lastOffers[lastOffers.length - 1].Sequence;

  const ccxtResponse: FetchOrderBookResponse = {
    symbol,
    nonce,
    bids,
    asks,
  };

  return ccxtResponse;
}

export default fetchOrderBook;
