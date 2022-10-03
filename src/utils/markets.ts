import BigNumber from 'bignumber.js';
import { AccountInfoRequest, Client, transferRateToDecimal } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { getAmountIssuer } from './conversions';
import { BN } from './numbers';

export const fetchTransferRate = async (client: Client, amount: Amount): Promise<BigNumber> => {
  const issuer = getAmountIssuer(amount);
  if (issuer) {
    const accountInfoResponse = await client.request({
      command: 'account_info',
      account: issuer,
    } as AccountInfoRequest);
    if (accountInfoResponse.result.account_data.TransferRate) {
      return BN(transferRateToDecimal(accountInfoResponse.result.account_data.TransferRate));
    }
  }
  return BN('0');
};
