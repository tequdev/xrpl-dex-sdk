import 'mocha';
import {
  Client,
  // OfferCreate,
  // OfferCreateFlags,
  // Wallet,
} from 'xrpl';
// import { OrderSide, OrderType } from '../../src/models';

import requests from '../fixtures/requests';
// import responses from '../fixtures/responses';
// import rippled from '../fixtures/rippled';

import { fetchOrder } from '../../src/methods';
import { FetchOrderResponse } from '../../src/models';
import networks from '../../src/networks';
import { teardownRemoteClient } from '../setupClient';
// import { setupClient, teardownClient } from '../setupClient';
// import { assertResultMatch } from '../testUtils';

describe('fetchOrder', function () {
  this.timeout(10000);

  beforeEach(async function (this) {
    this.client = new Client(networks.testnet.websockets);
    await this.client.connect();
  });
  afterEach(teardownRemoteClient);

  it.only('should return an Order object', async function () {
    // const issuerWallet = Wallet.fromSecret('shoqKv5DGUSK3L9PJUL5WNmVhjZXS');
    // const makerWallet = Wallet.fromSecret('shCwGCyy17Ph4JdZ6jTsFssEpS6Fs');
    // const takerWallet = Wallet.fromSecret('ssMuo4PJwGNkkqmTA5sWhvsUYKWNL');

    const { id, params } = requests.fetchOrder;

    const order: FetchOrderResponse = await fetchOrder.call(this.client, id, undefined, params);

    console.log('FetchOrderResponse: %O', order);
  });
});
