import { assert } from 'chai';
import _ from 'lodash';
import 'mocha';
import { Balance, BalanceStream, WatchBalanceParams, XrplNetwork } from '../../src/models';
import { addresses, rippled } from '../fixtures';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 20000;
const NETWORK = XrplNetwork.Testnet;

describe('watchBalance', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.TST_BUYER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should receive an updated Balance when an Order is placed', function (done) {
    const account = 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ';

    this.sdk
      .fetchBalance({ account })
      .then((initialBalance: Balance) => {
        this.sdk
          .watchBalance({ account } as WatchBalanceParams)
          .then(async (balanceStream: BalanceStream) => {
            balanceStream.on('update', (newBalance: Balance) => {
              assert(newBalance !== initialBalance);
              done();
            });

            this.sdk.client.emit(
              'transaction',
              rippled.v2.subscribe.offerCreate['rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151']
            );
          })
          .catch((err: Error) => {
            console.error(err);
            done(err);
          });
      })
      .catch((err: Error) => {
        console.error(err);
        done(err);
      });
  });
});
