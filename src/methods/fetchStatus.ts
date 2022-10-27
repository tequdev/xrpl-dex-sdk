import { ServerStateRequest } from 'xrpl';
import { ExchangeStatusType, FetchStatusResponse } from '../models';
import SDK from '../sdk';

/**
 * Fetches information regarding {@link models.ExchangeStatus} from either the info hardcoded in
 * the exchange instance or the API, if available. Returns a {@link models.FetchStatusResponse}.
 *
 * @category Methods
 *
 * @returns {@link models.FetchStatusResponse}
 */
async function fetchStatus(sdk: SDK): Promise<FetchStatusResponse> {
  const serverStateResponse = await sdk.client.request({
    command: 'server_state',
    ledger_index: 'current',
  } as ServerStateRequest);

  const serverState = serverStateResponse.result.state;

  let status: ExchangeStatusType = 'ok';

  if (serverState.server_state === 'disconnected') status = 'shutdown';

  const response: FetchStatusResponse = {
    status,
    updated: new Date(serverState.time).getTime(),
    eta: '',
    url: '',
    info: { serverState },
  };

  return response;
}

export default fetchStatus;
