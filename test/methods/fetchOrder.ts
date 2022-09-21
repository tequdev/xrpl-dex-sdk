import _ from 'lodash';
import 'mocha';

import { addresses, requests, responses } from '../fixtures';
import { XrplNetwork } from '../../src/models';
import { assertResultMatch } from '../testUtils';
import { setupRemoteSDK, teardownRemoteSDK } from '../setupClient';

const NETWORK = XrplNetwork.Testnet;

describe('fetchOrder', function () {
  this.timeout(25000);

  beforeEach(_.partial(setupRemoteSDK, NETWORK, addresses.AKT_BUYER_SECRET));
  afterEach(teardownRemoteSDK);

  /**
   * Buy Orders
   */

  it('should return an open Buy Order', async function () {
    const fetchOrderResponse = await this.sdk.fetchOrder(requests.fetchOrder.testnet.tstBuy);
    const omittedFields = ['id', 'clientOrderId', 'lastTradeTimestamp', 'datetime', 'timestamp', 'fee', 'info'];
    assertResultMatch(_.omit(fetchOrderResponse, omittedFields), _.omit(responses.fetchOrder.tstBuy, omittedFields));
  });

  // it('should return a partially filled Buy Order with multiple Trades', async function () {});

  // it('should retrieve a completed Buy order with a Trade', async function () {});

  // it('should return a canceled Buy Order', async function () {});

  // it('should return a "Fill or Kill" Buy Order', async function () {});

  // it('should return an "Immediate or Cancel" Buy Order', async function () {});

  /**
   * Sell Orders
   */

  // it('should return a partially filled Sell Order with multiple Trades', async function () {});

  // it('should retrieve a completed Sell order with multiple Trades', async function () {});

  // it('should return a completed Sell Order', async function () {});

  // it('should return a canceled Sell Order', async function () {});

  // it('should return a "Fill or Kill" Sell Order', async function () {});

  // it('should return an "Immediate or Cancel" Sell Order', async function () {});
});
