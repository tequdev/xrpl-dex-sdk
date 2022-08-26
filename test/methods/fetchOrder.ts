import _ from 'lodash';
import 'mocha';

import requests from '../fixtures/requests';
// import responses from '../fixtures/responses';

import { fetchOrder } from '../../src/methods';
import { FetchOrderResponse } from '../../src/models';
import networks from '../../src/networks';
import { setupRemoteClient, teardownRemoteClient } from '../setupClient';
// import { assertResultMatch } from '../testUtils';

describe.only('fetchOrder', function () {
  beforeEach(_.partial(setupRemoteClient, networks.testnet.websockets));
  afterEach(teardownRemoteClient);

  // it('should return a Buy Order', async function () {
  //   const { id, params } = requests.fetchOrder.buy;

  //   const { info: orderInfo, ...order }: FetchOrderResponse = await fetchOrder.call(this.client, id, undefined, params);
  //   // const { info, ...expectedResponse } = responses.fetchOrder.buy;

  //   console.log(order);
  //   console.log(order.trades);
  //   console.log(JSON.stringify(order));

  //   // assertResultMatch(order, expectedResponse);
  // });

  it('should return a Sell Order', async function () {
    const { id, params } = requests.fetchOrder.buy;

    const { info: orderInfo, ...order }: FetchOrderResponse = await fetchOrder.call(this.client, id, undefined, params);
    // const { info, ...expectedResponse } = responses.fetchOrder.sell;

    console.log(order);
    console.log(order.trades);
    // console.log(JSON.stringify(order));

    // assertResultMatch(order, expectedResponse);
  });
});
