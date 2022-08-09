import _ from 'lodash';
import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchTradingFees } from '../../src/methods';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchTradingFees', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return the trading fees for all markets', async function () {
    this.mockRippled.addResponse('fee', rippled.fee.normal);

    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const response = await fetchTradingFees.call(this.client);

    assertResultMatch(response, responses.fetchTradingFees);
  });
});
