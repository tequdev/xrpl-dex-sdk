import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';
import { Client } from 'xrpl';

import requests from '../fixtures/requests';

import { cancelOrder, createOrder } from '../../src/methods';
import { Order, OrderSide, OrderType } from '../../src/models';
import { teardownRemoteClient } from '../setupClient';
import networks from '../../src/networks';

const TIMEOUT = 20000;

describe('cancelOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(async function (this) {
    this.client = new Client(networks.testnet.websockets);
    await this.client.connect();
  });
  afterEach(teardownRemoteClient);

  it('should create and then cancel an Order', async function () {
    const { symbol, side, type, amount, price, params } = requests.createOrder.buy;
    const newOrder: Order = await createOrder.call(
      this.client,
      symbol,
      side as OrderSide,
      type as OrderType,
      amount,
      price,
      params
    );

    assert(typeof newOrder !== 'undefined');

    const canceledOrder = await cancelOrder.call(this.client, newOrder.id, { wallet_secret: params.wallet_secret });

    assert(typeof canceledOrder !== 'undefined');
    assert(canceledOrder.id === newOrder.id);
  });
});
