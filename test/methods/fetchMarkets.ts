import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';

import { fetchMarkets } from '../../src/methods';
import { Markets } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';
import serverUrl from '../serverUrl';

const TIMEOUT = 20000;

describe('fetchMarkets', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupClient, serverUrl));
  afterEach(teardownClient);

  it('should return a list of market pairs on the exchange', async function () {
    const response: Markets = await fetchMarkets.call(this.client);

    assertResultMatch(response, responses.fetchMarkets);
  });
});
