import _ from 'lodash';
import { Client } from 'xrpl';
import { TakerAmount } from 'xrpl/dist/npm/models/methods/bookOffers';
import { DEFAULT_LIMIT } from '../constants';
import { OrderBookAsk, OrderBookBid, FetchOrderBookRequest, FetchOrderBookResponse } from '../models';
import { parseCurrencyAmount } from '../utils';

async function fetchOrderBook(
  this: Client,
  { symbol, limit, params }: FetchOrderBookRequest
): Promise<FetchOrderBookResponse> {
  const [base, quote] = symbol.split('/');

  // TODO: fetch the issuer info from the cache produced by `loadMarkets` (if present)

  const takerPays: TakerAmount = {
    currency: quote,
    issuer: params.takerPaysIssuer,
  };

  const takerGets: TakerAmount = {
    currency: base,
    issuer: params.takerGetsIssuer,
  };

  const orderBook = await this.getOrderbook(takerPays, takerGets, {
    limit: limit ?? DEFAULT_LIMIT,
    ledger_index: params.ledgerIndex,
    ledger_hash: params.ledgerHash,
    taker: params.taker,
  });

  // TODO: where are we getting this timestamp?
  const timestamp = Date.now();

  const bids: OrderBookBid[] = [];
  _.forEach(orderBook.buy, (offer) => {
    if (!offer.quality) return;
    bids.push([offer.quality, parseCurrencyAmount(offer.TakerGets)]);
  });

  const asks: OrderBookAsk[] = [];
  _.forEach(orderBook.sell, (offer) => {
    if (!offer.quality) return;
    asks.push([offer.quality, parseCurrencyAmount(offer.TakerPays)]);
  });

  const ccxtResponse: FetchOrderBookResponse = {
    symbol,
    timestamp,
    datetime: new Date(timestamp).toISOString(),

    // TODO: where are we getting this nonce?
    nonce: 0,

    bids,
    asks,
  };

  return ccxtResponse;
}

export default fetchOrderBook;
