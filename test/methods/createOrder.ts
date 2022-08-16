import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';
import { Client } from 'xrpl';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';

import { createOrder } from '../../src/methods';
import { Order, OrderSide, OrderType } from '../../src/models';
import { teardownRemoteClient } from '../setupClient';
import networks from '../../src/networks';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;

describe('createOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(async function (this) {
    this.client = new Client(networks.testnet.websockets);
    await this.client.connect();
  });
  afterEach(teardownRemoteClient);

  it('should create a Buy Order', async function () {
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

    const { id, datetime, timestamp, fee, info, ...expectedResponse } = responses.createOrder.buy;

    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
