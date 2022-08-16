import 'mocha';

// import requests from '../fixtures/requests';
// import responses from '../fixtures/responses';
// import rippled from '../fixtures/rippled';

// import { fetchOrder } from '../../src/methods';
// import { FetchOrderResponse } from '../../src/models';
import { setupClient, teardownClient } from '../setupClient';
// import { assertResultMatch } from '../testUtils';

describe('fetchOrder', function () {
  beforeEach(setupClient);
  afterEach(teardownClient);

  it('should return an Order object', async function () {
    //
  });
});
