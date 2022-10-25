import { ServerStateRequest } from 'xrpl';
import { SDKContext, ExchangeStatusType, FetchStatusResponse } from '../models';

/**
 * Fetches information regarding {@link ExchangeStatus} from either the info hardcoded in
 * the exchange instance or the API, if available. Returns a {@link FetchStatusResponse}.
 *
 * @category Methods
 *
 * @returns A {@link FetchStatusResponse} object
 */
async function fetchStatus(this: SDKContext): Promise<FetchStatusResponse> {
  const serverStateResponse = await this.client.request({
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
