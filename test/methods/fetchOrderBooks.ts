import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchOrderBooks } from '../../src/methods';
import { FetchOrderBooksResponse } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrderBooks', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return an array of OrderBook objects', async function () {
    this.mockRippled.addResponse('book_offers', rippled.book_offers.usdBtc);
    this.mockRippled.addResponse('book_offers', rippled.book_offers.btcUsd);

    const { symbols, limit, params } = requests.fetchOrderBooks;

    const response: FetchOrderBooksResponse = await fetchOrderBooks.call(this.client, symbols, limit, params);

    assertResultMatch(response, responses.fetchOrderBooks);
  });
});
