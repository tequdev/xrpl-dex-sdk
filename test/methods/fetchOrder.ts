import _ from 'lodash';
import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';

import {
  // createOrder,
  fetchOrder,
} from '../../src/methods';
import {
  FetchOrderResponse,
  // CreateOrderParams,
  // OrderSide,
  //  OrderType,
  RippleNetwork,
} from '../../src/models';
import networks from '../../src/networks';
import { setupRemoteClient, teardownRemoteClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

const NETWORK = RippleNetwork.Testnet;

describe('fetchOrder', function () {
  this.timeout(25000);

  beforeEach(_.partial(setupRemoteClient, networks[NETWORK].websockets));
  afterEach(teardownRemoteClient);

  /**
   * Sell Orders
   */

  it('should return a partially filled Sell Order with multiple Trades', async function () {
    const order: FetchOrderResponse = await fetchOrder.call(this.client, requests.fetchOrder[NETWORK].sell);
    assertResultMatch(order, responses.fetchOrder[NETWORK].sell);
  });

  it.only('should do some stuff to set up the tests', async function () {
    // const order = await fetchOrder.call(this.client, 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419119');
    // console.log(order);
    // console.log(order.trades);
    // console.log(JSON.stringify(order));

    const sellOrder = await fetchOrder.call(this.client, 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR:30419059');
    console.log(sellOrder);
    console.log(sellOrder.trades);
  });

  // it('should return a completed Sell Order', async function () {});

  // it('should return a canceled Sell Order', async function () {});

  // it('should return a "Fill or Kill" Sell Order', async function () {});

  // it('should return an "Immediate or Cancel" Sell Order', async function () {});

  /**
   * Buy Orders
   */

  // it('should return a partially filled Buy Order with multiple Trades', async function () {});

  it('should return a completed Buy Order', async function () {
    const order: FetchOrderResponse = await fetchOrder.call(this.client, requests.fetchOrder[NETWORK].buy);
    assertResultMatch(order, responses.fetchOrder[NETWORK].buy);
  });

  // it('should return a canceled Buy Order', async function () {});

  // it('should return a "Fill or Kill" Buy Order', async function () {});

  // it('should return an "Immediate or Cancel" Buy Order', async function () {});
});
