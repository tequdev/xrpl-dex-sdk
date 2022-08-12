import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchFees } from '../../src/methods';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchFees', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return the fee schedule for transactions and trading', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const response = await fetchFees.call(this.client);

    assertResultMatch(response, responses.fetchFees);
  });
});
