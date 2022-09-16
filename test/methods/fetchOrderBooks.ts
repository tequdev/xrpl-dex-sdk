import 'mocha';

import { requests, responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrderBooks', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return an array of OrderBook objects', async function () {
    this.mockRippled.addResponse('book_offers', rippled.book_offers.usdBtc);
    this.mockRippled.addResponse('book_offers', rippled.book_offers.btcUsd);

    const { symbols, limit, params } = requests.fetchOrderBooks;

    const orderBooks = await this.sellerSdk.fetchOrderBooks(symbols, limit, params);
    assertResultMatch(orderBooks, responses.fetchOrderBooks);
  });
});
