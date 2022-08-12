import 'mocha';

import responses from '../fixtures/responses';
import rippled from '../fixtures/rippled';

import { fetchStatus } from '../../src/methods';
import { FetchStatusResponse } from '../../src/models';
import { setupClient, teardownClient } from '../setupUnitTest';
import { assertResultMatch } from '../testUtils';

describe('fetchStatus', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it("should return 'ok' if the exchange server is running", async function () {
    this.mockRippled.addResponse('server_state', () => rippled.server_state.normal);

    const response: FetchStatusResponse = await fetchStatus.call(this.client);

    assertResultMatch(response, responses.fetchStatus);
  });
});
