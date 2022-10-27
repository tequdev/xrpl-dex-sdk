import _ from 'lodash';
import { TrustSet } from 'xrpl';
import { ArgumentsRequired, BadRequest, BadSymbol, CreateTrustLineResponse, CurrencyCode } from '../models';
import SDK from '../sdk';
import { handleTxErrors, parseCurrencyCode } from '../utils';

/**
 * Creates a Trust Line to a currency {@link models.Issuer} on the XRPL ledger. Returns a
 * {@link models.CreateTrustLineResponse} with the newly created Trust Line.
 *
 * @category Methods
 *
 * @param code - {@link models.CurrencyCode} for an issued (non-XRP) currency
 * @param amount - Max amount of sdk currency you can receive
 * @returns {@link models.CreateTrustLineResponse}
 */
async function createTrustLine(sdk: SDK, code: CurrencyCode, amount: string): Promise<CreateTrustLineResponse> {
  if (!code || !amount) throw new ArgumentsRequired('Missing required arguments for createTrustLine call');

  if (code === 'XRP') throw new BadRequest('No Trust Line needed for XRP');

  const { currency, issuer } = parseCurrencyCode(code);
  if (!issuer)
    throw new BadSymbol(
      'Invalid currency code! Non-XRP currencies must have an issuer appended with a plus sign, e.g. TST+r1234'
    );

  const createTrustLineRequest: TrustSet = {
    TransactionType: 'TrustSet',
    Account: sdk.wallet.classicAddress,
    LimitAmount: { currency, issuer, value: amount },
  };

  const createTrustLineTxResponse = await sdk.client.submitAndWait(createTrustLineRequest, {
    autofill: true,
    wallet: sdk.wallet,
  });

  handleTxErrors(createTrustLineTxResponse);

  const trustLineResult = createTrustLineTxResponse.result;

  return {
    code,
    amount,
    info: { trustLineResult },
  };
}

export default createTrustLine;
