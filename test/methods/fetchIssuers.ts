import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';

import { fetchIssuers } from '../../src/methods';
import { Issuers } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';
import serverUrl from '../serverUrl';

const TIMEOUT = 20000;

describe('fetchIssuers', function () {
  this.timeout(TIMEOUT);

  beforeEach(_.partial(setupClient, serverUrl));
  afterEach(teardownClient);

  it('should return a list of trusted issuers on the exchange', async function () {
    const response: Issuers = await fetchIssuers.call(this.client);

    assertResultMatch(response, responses.fetchIssuers);
  });
});
