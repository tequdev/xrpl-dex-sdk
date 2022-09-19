import _ from 'lodash';
import 'mocha';

import { requests, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchBalance', function () {
  beforeEach(setupLocalSDK);
  afterEach(teardownLocalSDK);

  it('should return currency balances for a given account', async function () {
    this.mockRippled.addResponse('account_info', rippled.account_info.maker);
    this.mockRippled.addResponse('account_lines', rippled.account_lines.maker);
    this.mockRippled.addResponse('server_state', rippled.server_state.normal);

    const { params } = requests.fetchBalance;

    const balances = await this.sellerSdk.fetchBalance(params);

    assertResultMatch(balances, responses.fetchBalance);
  });
});
