import _ from 'lodash';
import 'mocha';
import { Order, OrderStream, XrplNetwork } from '../../src/models';
import { addresses, responses, rippled } from '../fixtures';

import { assertResultMatch } from '../testUtils';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import SDK from '../../src';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe.skip('watchOrders', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.TST_BUYER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should subscribe to Order updates', function (done) {
    this.sdk
      .watchOrders()
      .then((orderStream: OrderStream) => {
        orderStream.on('update', (newOrder: Order) => {
          assertResultMatch(newOrder, responses.v2.orders.byId['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151']);
          done();
          orderStream.removeAllListeners();
        });

        orderStream.on('error', (error) => {
          console.error(error);
          done(error);
          orderStream.removeAllListeners();
        });

        (this.sdk as SDK).client.emit(
          'transaction',
          rippled.v2.subscribe.offerCreate['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151']
        );
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });

  it('should subscribe to Order data for a given market symbol', function (done) {
    const order = responses.v2.orders.byId['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151'];
    this.sdk
      .watchOrders(order.symbol)
      .then(async (orderStream: OrderStream) => {
        orderStream.on('update', (newOrder: Order) => {
          assertResultMatch(newOrder, order);
          done();
          orderStream.removeAllListeners();
        });

        orderStream.on('error', (error) => {
          console.error(error);
          done(error);
          orderStream.removeAllListeners();
        });

        (this.sdk as SDK).client.emit(
          'transaction',
          rippled.v2.subscribe.offerCreate['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151']
        );
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
