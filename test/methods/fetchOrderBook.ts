import _ from 'lodash';
import 'mocha';

import { addresses, requests, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 15000;

describe('fetchOrderBook', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return an OrderBook object', async function () {
    this.mockRippled.addResponse('book_offers', rippled.book_offers.usdBtc);

    const { symbol, limit, params } = requests.fetchOrderBook;
    const orderBook = await this.sdk.fetchOrderBook(symbol, limit, params);
    assertResultMatch(_.omit(orderBook, ['nonce']), responses.fetchOrderBook);
  });
});
