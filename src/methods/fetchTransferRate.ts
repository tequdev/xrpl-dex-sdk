import _ from 'lodash';
import { AccountInfoRequest, transferRateToDecimal } from 'xrpl';
import { ArgumentsRequired, FetchTransferRateResponse, IssuerAddress } from '../models';
import SDK from '../sdk';
import { BN } from '../utils';

/**
 * Retrieves an {@link models.Issuer}'s transfer rate (if any). Returns a Promise resolving to a
 * {@link models.FetchTransferRateResponse} with the transfer rate, or zero if the Issuer has no
 * transfer fees.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#fees
 *
 ƒ* @param issuer - {@link models.IssuerAddress} to get data for
 * @returns {@link models.FetchTransferRateResponse}
 */
async function fetchTransferRate(sdk: SDK, issuer: IssuerAddress): Promise<FetchTransferRateResponse> {
  if (!issuer) throw new ArgumentsRequired('Missing required arguments for fetchTransferRate call');
  if (sdk.transferRates && sdk.transferRates[issuer]) return sdk.transferRates[issuer];
  const accountInfoResponse = await sdk.client.request({
    command: 'account_info',
    account: issuer,
  } as AccountInfoRequest);
  if (accountInfoResponse.result.account_data.TransferRate) {
    const transferRate = BN(transferRateToDecimal(accountInfoResponse.result.account_data.TransferRate));
    if (!sdk.transferRates) sdk.transferRates = {};
    sdk.transferRates[issuer] = transferRate;
    return transferRate;
  }
  return BN('0');
}

export default fetchTransferRate;
