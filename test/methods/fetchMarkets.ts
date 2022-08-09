import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

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
    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const response: Markets = await fetchMarkets.call(this.client);

    assertResultMatch(response, responses.fetchMarkets);
  });
});
