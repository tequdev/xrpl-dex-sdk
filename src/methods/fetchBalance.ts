import _ from 'lodash';
import { AccountInfoRequest, AccountLinesRequest, dropsToXrp } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { Balances, FetchBalanceParams, FetchBalanceResponse, SDKContext } from '../models';
import fetchStatus from './fetchStatus';

/**
 * Returns information about an account's balances, sorted by currency
 * and funds availability. Returns a {@link FetchBalanceResponse}.
 *
 * @category Methods
 */
async function fetchBalance(
  this: SDKContext,
  /* Request parameters */
  params: FetchBalanceParams
): Promise<FetchBalanceResponse | undefined> {
  const { account, code } = params;

  const balances: Balances = {};
  const info: any = {};

  // Get XRP balances
  if (!code || (code && code === 'XRP')) {
    const accountInfoResponse = await this.client.request({
      command: 'account_info',
      account,
      ledger_index: 'current',
      queue: true,
    } as AccountInfoRequest);

    const accountInfo = accountInfoResponse.result.account_data;
    const accountObjectCount = accountInfo.OwnerCount;

    const serverState = await fetchStatus.call(this);
    const { reserve_base: reserveBase, reserve_inc: reserveInc } = serverState.info.server_state.validated_ledger;

    const usedXrp = reserveBase + accountObjectCount * reserveInc;
    const freeXrp = parseFloat(accountInfo.Balance) - usedXrp;
    const totalXrp = usedXrp + freeXrp;

    balances['XRP'] = {
      free: dropsToXrp(freeXrp),
      used: dropsToXrp(usedXrp),
      total: dropsToXrp(totalXrp),
    };

    info.account_info = accountInfoResponse;
  }

  // Get token balances
  if (!code || (code && code !== 'XRP')) {
    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;

    while (hasNextPage) {
      const accountTrustLinesResponse = await this.client.request({
        command: 'account_lines',
        account,
        ledger_index: 'current',
        limit,
        marker,
      } as AccountLinesRequest);

      const trustLines = accountTrustLinesResponse.result.lines;

      _.forEach(trustLines, ({ currency, balance }) => {
        if (code && code !== currency) return;

        const usedBalance = 0;
        const freeBalance = parseFloat(balance) - usedBalance;
        const totalBalance = usedBalance + freeBalance;

        balances[currency] = {
          free: freeBalance.toString(),
          used: usedBalance.toString(),
          total: totalBalance.toString(),
        };
      });

      info.account_lines = accountTrustLinesResponse;

      marker = accountTrustLinesResponse.result.marker;
      if (!marker) hasNextPage = false;
    }
  }

  const response: FetchBalanceResponse = { balances, info };

  return response;
}

export default fetchBalance;
