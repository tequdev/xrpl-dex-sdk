import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';
import { Client } from 'xrpl';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';

import { createLimitBuyOrder } from '../../src/methods';
import { Order } from '../../src/models';
import { teardownRemoteClient } from '../setupClient';
import networks from '../../src/networks';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;

describe('createLimitBuyOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(async function (this) {
    this.client = new Client(networks.testnet.websockets);
    await this.client.connect();
  });
  afterEach(teardownRemoteClient);

  it('should create a Limit Buy Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.buy;
    const newOrder: Order = await createLimitBuyOrder.call(this.client, symbol, amount, price, params);

    assert(typeof newOrder !== 'undefined');

    const { id, datetime, timestamp, fee, info, ...expectedResponse } = responses.createOrder.buy;

    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
