import _ from 'lodash';
import { AccountInfoRequest, transferRateToDecimal } from 'xrpl';
import { ArgumentsRequired, FetchTransferRateResponse, IssuerAddress, SDKContext } from '../models';
import { BN } from '../utils';

/**
 * Retrieves an {@link Issuer}'s transfer rate (if any). Returns a {@link FetchTransferRateResponse}
 * with the transfer rate, or zero if the Issuer has no transfer fees.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 * @param issuer - Issuer address to get data for
 * @returns A {@link FetchTransferRateResponse} object
 */
async function fetchTransferRate(this: SDKContext, issuer: IssuerAddress): Promise<FetchTransferRateResponse> {
  if (!issuer) throw new ArgumentsRequired('Missing required arguments for fetchTransferRate call');
  if (this.transferRates && this.transferRates[issuer]) return this.transferRates[issuer];
  const accountInfoResponse = await this.client.request({
    command: 'account_info',
    account: issuer,
  } as AccountInfoRequest);
  if (accountInfoResponse.result.account_data.TransferRate) {
    const transferRate = BN(transferRateToDecimal(accountInfoResponse.result.account_data.TransferRate));
    if (!this.transferRates) this.transferRates = {};
    this.transferRates[issuer] = transferRate;
    return transferRate;
  }
  return BN('0');
}

export default fetchTransferRate;
