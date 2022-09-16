import 'mocha';

import { requests, responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrderBook', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return an OrderBook object', async function () {
    this.mockRippled.addResponse('book_offers', rippled.book_offers.usdBtc);

    const { symbol, limit, params } = requests.fetchOrderBook;

    const orderBook = await this.sellerSdk.fetchOrderBook(symbol, limit, params);
    assertResultMatch(orderBook, responses.fetchOrderBook);
  });
});
