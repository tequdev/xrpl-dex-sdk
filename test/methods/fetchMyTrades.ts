import _ from 'lodash';
import 'mocha';
import { XrplNetwork } from '../../src/models';
import { addresses } from '../fixtures';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const TIMEOUT = 25000;
const NETWORK = XrplNetwork.Testnet;

describe('fetchMyTrades', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_BUYER_SECRET));
  afterEach(teardownRemoteSDK);

  it("return a list of the user's Trades for a given market symbol", async function () {
    // this.mockRippled.addResponse('server_state', () => rippled.server_state.normal);
    // const trades = await this.sdk.fetchMyTrades('AKT/XRP', undefined, 5, { searchLimit: 500 });
    // console.log(trades);
    // assert(trades.length);
  });
});
