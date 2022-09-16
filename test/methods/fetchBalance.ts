import _ from 'lodash';
import 'mocha';

import { requests, responses, rippled } from '../fixtures';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchBalance', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return currency balances for a given account', async function () {
    this.mockRippled.addResponse('account_info', rippled.account_info.maker);
    this.mockRippled.addResponse('account_lines', rippled.account_lines.maker);

    const { params } = requests.fetchBalance;

    const balances = await this.sellerSdk.fetchBalance(params);

    assertResultMatch(balances, responses.fetchBalance);
  });
});
