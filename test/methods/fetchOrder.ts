import _ from 'lodash';
import 'mocha';

import { requests, responses } from '../fixtures';
import { XrplNetwork } from '../../src/models';
import { assertResultMatch } from '../testUtils';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const NETWORK = XrplNetwork.Testnet;

describe('fetchOrder', function () {
  this.timeout(25000);

  beforeEach(_.partial(setupRemoteSDK, NETWORK));
  afterEach(teardownRemoteSDK);

  /**
   * Sell Orders
   */

  // it('should return a partially filled Sell Order with multiple Trades', async function () {});

  // it('should retrieve a completed Sell order with multiple Trades', async function () {
  //   const sellOrder = await fetchOrder.call(this.sellerSdk, requests.fetchOrder[NETWORK].sell);
  //   assert(typeof sellOrder !== 'undefined');
  //   assertResultMatch(sellOrder, responses.fetchOrder[NETWORK].completedBuy);
  // });

  // it('should return a completed Sell Order', async function () {});

  // it('should return a canceled Sell Order', async function () {});

  // it('should return a "Fill or Kill" Sell Order', async function () {});

  // it('should return an "Immediate or Cancel" Sell Order', async function () {});

  /**
   * Buy Orders
   */

  // it('should return a partially filled Buy Order with multiple Trades', async function () {});

  it('should retrieve a completed Buy order with a Trade', async function () {
    const buyOrder = await this.buyerSdk.fetchOrder(requests.fetchOrder[NETWORK].buy);
    assertResultMatch(buyOrder, responses.fetchOrder[NETWORK].completedBuy);
  });

  // it('should return a canceled Buy Order', async function () {});

  // it('should return a "Fill or Kill" Buy Order', async function () {});

  // it('should return an "Immediate or Cancel" Buy Order', async function () {});
});
