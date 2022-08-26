import { AccountInfoRequest, Client, transferRateToDecimal } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { getAmountIssuer } from './conversions';

export const fetchTransferRate = async (client: Client, amount: Amount): Promise<string> => {
  const issuer = getAmountIssuer(amount);
  if (issuer) {
    const { result } = await client.request({
      command: 'account_info',
      account: issuer,
    } as AccountInfoRequest);

    if (result.account_data.TransferRate) {
      return transferRateToDecimal(result.account_data.TransferRate);
    }
  }
  return '0';
};
