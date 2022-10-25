import { randomUUID } from 'crypto';
import _ from 'lodash';
import { AccountInfoRequest, AccountLinesRequest, dropsToXrp } from 'xrpl';
import { DEFAULT_LIMIT } from '../constants';
import { Balances, FetchBalanceParams, FetchBalanceResponse, SDKContext } from '../models';
import { BN, getCurrencyCode } from '../utils';

/**
 * Fetches information about an account's balances, sorted by currency and funds availability.
 * Returns a {@link FetchBalanceResponse}.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#account-balance
 *
 * @param params - (Optional) A {@link FetchBalanceParams} object
 * @returns A {@link FetchBalanceResponse} object
 */
async function fetchBalance(
  this: SDKContext,
  /* Request parameters */
  params: FetchBalanceParams = {}
): Promise<FetchBalanceResponse> {
  const { code } = params;
  const account = this.wallet.classicAddress;

  const balances: Balances = {};
  const info: any = {};

  // Get XRP balances
  if (!code || (code && code === 'XRP')) {
    const accountInfoResponse = await this.client.request({
      id: randomUUID(),
      command: 'account_info',
      account,
      ledger_index: 'current',
      queue: true,
    } as AccountInfoRequest);

    const accountInfo = accountInfoResponse.result.account_data;
    const accountObjectCount = accountInfo.OwnerCount;

    const serverState = await this.fetchStatus();
    const { reserve_base, reserve_inc } = serverState?.info.serverState.validated_ledger;

    info.validatedLedger = serverState?.info.serverState.validated_ledger;

    const reserveBase = BN(dropsToXrp(reserve_base));
    const reserveInc = BN(dropsToXrp(reserve_inc));

    const usedXrp = reserveBase.plus(accountObjectCount).times(reserveInc);
    const freeXrp = BN(dropsToXrp(accountInfo.Balance)).minus(usedXrp);
    const totalXrp = usedXrp.plus(freeXrp);

    balances['XRP'] = {
      free: freeXrp.toString(),
      total: totalXrp.toString(),
      used: usedXrp.toString(),
    };

    info.accountInfo = accountInfoResponse;
  }

  // Get token balances
  if (!code || (code && code !== 'XRP')) {
    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;

    while (hasNextPage) {
      const accountTrustLinesResponse = await this.client.request({
        id: randomUUID(),
        command: 'account_lines',
        account,
        ledger_index: 'current',
        limit,
        marker,
      } as AccountLinesRequest);

      const trustLines = accountTrustLinesResponse.result.lines;

      for (const { account, balance, currency } of trustLines) {
        const currencyCode = getCurrencyCode(currency, account);

        if (code && code !== currencyCode) return;

        const usedBalance = BN(0);
        const freeBalance = BN(balance).minus(usedBalance);
        const totalBalance = balance;

        balances[currencyCode] = {
          free: freeBalance.toString(),
          used: usedBalance.toString(),
          total: totalBalance.toString(),
        };
      }

      info.accountLines = accountTrustLinesResponse;

      marker = accountTrustLinesResponse.result.marker;
      if (!marker) hasNextPage = false;
    }
  }

  const response: FetchBalanceResponse = { balances, info };

  return response;
}

export default fetchBalance;
