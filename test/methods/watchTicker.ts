// import { assert } from 'console';
import _ from 'lodash';
import 'mocha';
import { XrplNetwork } from '../../src/models';
import { addresses } from '../fixtures';

import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const NETWORK = XrplNetwork.Testnet;

describe('watchTicker', function () {
  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_BUYER_SECRET));
  afterEach(teardownRemoteSDK);

  it('should subscribe to Ticker data for the given symbol', async function () {
    // const ticker = await this.sdk.watchTicker('USD/XRP', { baseIssuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' });
    // console.log(ticker);
    // assert(typeof ticker !== 'undefined');
  });
});
