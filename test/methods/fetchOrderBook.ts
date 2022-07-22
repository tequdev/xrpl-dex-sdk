import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchOrderBook } from '../../src/methods';
import { FetchOrderBookResponse } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrderBook', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return an OrderBook object', async function () {
    this.mockRippled.addResponse('book_offers', rippled.book_offers.usdBtc);
    const response: FetchOrderBookResponse = await fetchOrderBook.call(this.client, requests.fetchOrderBook);
    assertResultMatch(response, responses.fetchOrderBook);
  });
});
