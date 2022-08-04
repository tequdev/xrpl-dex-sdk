import _ from 'lodash';
import 'mocha';

// import requests from '../fixtures/requests';
// import responses from '../fixtures/responses';
// import rippled from '../fixtures/rippled';

import { fetchCurrencies } from '../../src/methods';
import { Currencies } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
// import { assertResultMatch } from '../testUtils';
// import serverUrl from '../serverUrl';
import networks from '../../src/networks';
import { Client } from 'xrpl';

describe('fetchCurrencies', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return a list of active currencies on the exchange', async function () {
    // this.mockRippled.addResponse('account_info', rippled.account_info.normal);
    // this.mockRippled.addResponse('server_info', rippled.server_info.normal);
    // this.mockRippled.addResponse('ledger', rippled.ledger.normal);
    // this.mockRippled.addResponse('submit', rippled.offer_create.sell);
    // this.mockRippled.addResponse('tx', rippled.offer_create.sell);

    // const { symbol, side, type, amount, price, params } = requests.fetchCurrencies.sell;

    const client = new Client(`wss://${networks.mainnet}`);

    await client.connect();

    const response: Currencies = await fetchCurrencies.call(client);

    console.log('response: ', response);

    // assertResultMatch(response, responses.fetchCurrencies.sell);
  });
});
