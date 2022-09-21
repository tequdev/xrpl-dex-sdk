import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';
import { XrplNetwork } from '../../src/models';

const TIMEOUT = 15000;
const NETWORK = XrplNetwork.Mainnet;

describe('fetchTickers', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should return Ticker data for the given symbols', async function () {
    const tickers = await this.sellerSdk.fetchTickers(['USD/XRP', 'XRP/USD'], {
      issuers: { USD: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
    });
    assert(tickers.length === 2);
  });
});
