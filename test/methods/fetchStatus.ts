import _ from 'lodash';
import 'mocha';

import { addresses, responses, rippled } from '../fixtures';
import { setupLocalSDK, teardownLocalSDK } from '../setupClient';
import { assertResultMatch } from '../testUtils';

describe('fetchStatus', function () {
  beforeEach(_.partial(setupLocalSDK, { walletSecret: addresses.AKT_SELLER_SECRET }));
  afterEach(teardownLocalSDK);

  it("should return 'ok' if the exchange server is running", async function () {
    this.mockRippled.addResponse('server_state', () => rippled.server_state.normal);

    const status = await this.sdk.fetchStatus();
    assertResultMatch(status, responses.fetchStatus);
  });
});
