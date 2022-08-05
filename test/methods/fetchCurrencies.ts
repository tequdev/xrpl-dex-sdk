import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';

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
    const response: Currencies = await fetchCurrencies.call(this.client);

    assertResultMatch(response, responses.fetchCurrencies);
  });
});
