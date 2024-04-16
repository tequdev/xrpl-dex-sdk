import _ from 'lodash';
import 'mocha';

import { addresses, requests, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrderBooks', function () {
  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should return an array of OrderBook objects', async function () {
    this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    this.mockRippled.addResponseOnce('book_offers', rippled.book_offers.usdBtc);
    this.mockRippled.addResponseOnce('book_offers', rippled.book_offers.btcUsd);
    this.mockRippled.addResponseOnce('book_offers', rippled.book_offers.xrpUsd);
    this.mockRippled.addResponseOnce('book_offers', rippled.book_offers.usdXrp);

    const { symbols, limit, params } = requests.fetchOrderBooks;

    const orderBooks = await this.sdk.fetchOrderBooks(symbols, limit, params);

    _.forEach(orderBooks, (orderBook, i: number) => {
      assertResultMatch(_.omit(orderBook, ['nonce']), (responses.fetchOrderBooks as any)[orderBook.symbol]);
    });
  });
});
