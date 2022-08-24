import _ from 'lodash';
import { assert } from 'chai';
import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';

import { createLimitSellOrder } from '../../src/methods';
import { Order } from '../../src/models';
import { setupRemoteClient, teardownRemoteClient } from '../setupClient';
import networks from '../../src/networks';
import { assertResultMatch } from '../testUtils';

const TIMEOUT = 10000;

describe('createLimitSellOrder', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupRemoteClient, networks.testnet.websockets));
  afterEach(teardownRemoteClient);

  it('should create a Limit Sell Order', async function () {
    const { symbol, amount, price, params } = requests.createOrder.sell;
    const newOrder: Order = await createLimitSellOrder.call(this.client, symbol, amount, price, params);

    assert(typeof newOrder !== 'undefined');

    const { id, datetime, timestamp, fee, info, status, ...expectedResponse } = responses.createOrder.sell;

    assertResultMatch(newOrder, { ...newOrder, ...expectedResponse });
  });
});
