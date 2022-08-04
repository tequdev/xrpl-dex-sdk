import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchCurrencies } from '../../src/methods';
import { Currencies } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';
import serverUrl from '../serverUrl';

const TIMEOUT = 20000;

describe('fetchCurrencies', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupClient, serverUrl));
  afterEach(teardownClient);

  it('should return a list of active currencies on the exchange', async function () {
    this.mockRippled.addResponse('ledger_data', rippled.ledger_data.normal);

    const response: Currencies = await fetchCurrencies.call(this.client);

    assertResultMatch(response, responses.fetchCurrencies);
  });
});
