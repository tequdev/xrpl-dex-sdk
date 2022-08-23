import _ from 'lodash';
import 'mocha';

import requests from '../fixtures/requests';
import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchBalance } from '../../src/methods';
import { FetchBalanceResponse } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchBalance', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return currency balances for a given account', async function () {
    this.mockRippled.addResponse('account_info', rippled.account_info.maker);
    this.mockRippled.addResponse('account_lines', rippled.account_lines.maker);

    const { params } = requests.fetchBalance;

    const balances: FetchBalanceResponse | undefined = await fetchBalance.call(this.client, params);

    assertResultMatch(balances, responses.fetchBalance);
  });
});
