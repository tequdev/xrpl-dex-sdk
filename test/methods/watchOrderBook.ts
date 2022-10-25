import _ from 'lodash';
import 'mocha';

import { OrderBook, OrderBookStream, OrderId } from '../../src/models';
import { addresses, requests, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 25000;

describe.skip('watchOrderBook', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.TST_BUYER_SECRET }));
  afterEach(teardownLocalSDK);

  it('should subscribe to Order Book updates', function (done) {
    const orderId = requests.v2.orders.USD.buy.open as OrderId;
    const { symbol } = responses.v2.orders.byId[orderId];

    this.mockRippled.addResponse('account_info', rippled.v2.bookOffers[symbol]);
    this.mockRippled.addResponse('book_offers', rippled.v2.bookOffers[symbol]);
    this.mockRippled.addResponse('subscribe', rippled.v2.subscribe.bookOffers);

    this.sdk
      .watchOrderBook(symbol)
      .then(async (orderBookStream: OrderBookStream) => {
        orderBookStream.on('update', (orderBook: OrderBook) => {
          assertResultMatch(orderBook, responses.v2.orderBook[symbol]);
          done();
          orderBookStream.removeAllListeners();
        });

        orderBookStream.on('error', (error) => {
          console.error(error);
          done(error);
          orderBookStream.removeAllListeners();
        });

        this.sdk.client.emit('transaction', rippled.v2.subscribe.offerCreate[orderId as OrderId]);
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
