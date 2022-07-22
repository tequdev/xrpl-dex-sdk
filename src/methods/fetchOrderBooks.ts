import _ from 'lodash';
import { Client } from 'xrpl';
import { FetchOrderBooksRequest, FetchOrderBooksResponse } from '../models';
import fetchOrderBook from './fetchOrderBook';

async function fetchOrderBooks(
  this: Client,
  { symbols, limit, params }: FetchOrderBooksRequest
): Promise<FetchOrderBooksResponse> {
  const orderBooks: FetchOrderBooksResponse = {};

  for (let s = 0, sl = symbols.length; s < sl; s += 1) {
    const symbol = symbols[s];
    orderBooks[symbol] = await fetchOrderBook.call(this, { symbol, limit, params: params[symbol] || {} });
  }

  return orderBooks;
}

export default fetchOrderBooks;
