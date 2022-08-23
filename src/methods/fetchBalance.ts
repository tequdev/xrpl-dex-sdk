import _ from 'lodash';
import { AccountInfoRequest, AccountLinesRequest, Client } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { Balances, FetchBalanceParams, FetchBalanceResponse } from '../models';

/**
 * Returns information about an account's balances, sorted by currency
 * and funds availability. Returns a {@link FetchBalanceResponse}.
 *
 * @category Methods
 */
async function fetchBalance(
  this: Client,
  /* Request parameters */
  params: FetchBalanceParams
): Promise<FetchBalanceResponse | undefined> {
  const { account, code } = params;

  const balances: Balances = {};
  const info: any = {};

  // Get XRP balances
  if (!code || (code && code === 'XRP')) {
    const accountInfoResponse = await this.request({
      command: 'account_info',
      account,
      ledger_index: 'current',
      queue: true,
    } as AccountInfoRequest);

    const freeXrp = parseFloat(accountInfoResponse.result.account_data.Balance);
    const usedXrp = 0;
    const totalXrp = freeXrp + usedXrp;

    balances['XRP'] = {
      free: freeXrp.toString(),
      used: usedXrp.toString(),
      total: totalXrp.toString(),
    };

    info.accountInfo = accountInfoResponse;
  }

  // Get token balances
  if (!code || (code && code !== 'XRP')) {
    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const accountTrustLinesResponse = await this.request({
        command: 'account_lines',
        account,
        ledger_index: 'current',
        limit,
        marker,
      } as AccountLinesRequest);

      const trustLines = accountTrustLinesResponse.result.lines;

      _.forEach(trustLines, ({ currency, balance }) => {
        if (code && code !== currency) return;

        const freeBalance = parseFloat(balance);
        const usedBalance = 0;
        const totalBalance = freeBalance + usedBalance;

        balances[currency] = {
          free: freeBalance.toString(),
          used: usedBalance.toString(),
          total: totalBalance.toString(),
        };
      });

      if (!info.accountLines) info.accountLines = {};

      const pageStart = (page - 1) * limit;
      const pageEnd = page * limit;

      info.accountLines[`${pageStart}-${trustLines.length < limit ? pageStart + trustLines.length : pageEnd}`] =
        accountTrustLinesResponse;

      marker = accountTrustLinesResponse.result.marker;
      page += 1;
      if (!marker) hasNextPage = false;
    }
  }

  const response: FetchBalanceResponse = { balances, info };

  return response;
}

export default fetchBalance;
