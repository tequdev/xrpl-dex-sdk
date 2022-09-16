import _ from 'lodash';
import 'mocha';

import { responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchCurrencies', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return a list of active currencies on the exchange', async function () {
    // TODO: figure out a cleaner way to do this
    for (let i = 0, il = 21; i < il; i += 1) {
      this.mockRippled.addResponse('account_info', rippled.account_info.issuer);
    }

    const currencies = await this.sellerSdk.fetchCurrencies();
    assertResultMatch(currencies, responses.fetchCurrencies);
  });
});
