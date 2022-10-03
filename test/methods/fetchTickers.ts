import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { XrplNetwork } from '../../src/models';
import { addresses } from '../fixtures';

const TIMEOUT = 15000;
const NETWORK = XrplNetwork.Testnet;

describe('fetchTickers', function () {
  this.timeout(TIMEOUT);

  beforeEach(function (done) {
    setupRemoteSDK.call(this, NETWORK, addresses.AKT_SELLER_SECRET, done);
  });

  afterEach(teardownRemoteSDK);

  it('should return Ticker data for the given symbols', async function () {
    const tickers = await this.sdk.fetchTickers([
      'TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd/XRP',
      'XRP/TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
    ]);
    assert(tickers.length === 2);
  });
});
