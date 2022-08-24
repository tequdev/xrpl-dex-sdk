import _ from 'lodash';
import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';

import { fetchOrder } from '../../src/methods';
import { FetchOrderResponse } from '../../src/models';
import networks from '../../src/networks';
import { setupRemoteClient, teardownRemoteClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchOrder', function () {
  beforeEach(_.partial(setupRemoteClient, networks.testnet.websockets));
  afterEach(teardownRemoteClient);

  it('should return an Order object', async function () {
    const { id, params } = requests.fetchOrder;

    const { info: orderInfo, ...order }: FetchOrderResponse = await fetchOrder.call(this.client, id, undefined, params);
    const { info, ...expectedResponse } = responses.fetchOrder;

    assertResultMatch(order, expectedResponse);
  });
});
