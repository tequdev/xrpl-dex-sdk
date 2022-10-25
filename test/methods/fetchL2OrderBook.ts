import _ from 'lodash';
import 'mocha';

import { addresses, fetchL2OrderBook } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchL2OrderBook', function () {
  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return an L2 OrderBook object', async function () {
    this.mockRippled.addResponse('account_info', fetchL2OrderBook.mocks.account_info);
    this.mockRippled.addResponse('book_offers', fetchL2OrderBook.mocks.book_offers);

    const { symbol, limit, params } = fetchL2OrderBook.request;
    const l2OrderBook = await this.sdk.fetchL2OrderBook(symbol, limit, params);

    assertResultMatch(_.omit(l2OrderBook, ['nonce']), fetchL2OrderBook.expectedResponse);
  });
});
