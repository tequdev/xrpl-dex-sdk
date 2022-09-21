import { assert } from 'console';
import _ from 'lodash';
import 'mocha';
import { XrplNetwork } from '../../src/models';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const NETWORK = XrplNetwork.Mainnet;

describe('fetchTicker', function () {
  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  it('should return Ticker data for the given symbol', async function () {
    const ticker = await this.sellerSdk.fetchTicker('USD/XRP', { baseIssuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' });
    assert(typeof ticker !== 'undefined');
  });
});
