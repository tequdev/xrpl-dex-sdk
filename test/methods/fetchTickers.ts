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

  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_SELLER_SECRET));
  afterEach(teardownRemoteSDK);

  it('should return Ticker data for the given symbols', async function () {
    const tickers = await this.sdk.fetchTickers(['TST/XRP', 'XRP/TST'], {
      issuers: { TST: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd' },
    });
    assert(tickers.length === 2);
  });
});
