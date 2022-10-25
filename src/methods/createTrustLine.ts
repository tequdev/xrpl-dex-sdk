import _ from 'lodash';
import { TrustSet } from 'xrpl';
import { ArgumentsRequired, BadRequest, BadSymbol, CreateTrustLineResponse, CurrencyCode, SDKContext } from '../models';
import { handleTxErrors, parseCurrencyCode } from '../utils';

/**
 * Creates a Trust Line to a currency {@link Issuer} on the XRPL ledger. Returns a
 * {@link CreateTrustLineResponse} with the newly created Trust Line.
 *
 * @category Methods
 *
 * @param code - {@link CurrencyCode} for an issued (non-XRP) currency
 * @param amount - Max amount of this currency you can receive
 * @returns A {@link CreateTrustLineResponse} object
 */
async function createTrustLine(this: SDKContext, code: CurrencyCode, amount: string): Promise<CreateTrustLineResponse> {
  if (!code || !amount) throw new ArgumentsRequired('Missing required arguments for createTrustLine call');

  if (code === 'XRP') throw new BadRequest('No Trust Line needed for XRP');

  const { currency, issuer } = parseCurrencyCode(code);
  if (!issuer)
    throw new BadSymbol(
      'Invalid currency code! Non-XRP currencies must have an issuer appended with a plus sign, e.g. TST+r1234'
    );

  const createTrustLineRequest: TrustSet = {
    TransactionType: 'TrustSet',
    Account: this.wallet.classicAddress,
    LimitAmount: { currency, issuer, value: amount },
  };

  const createTrustLineTxResponse = await this.client.submitAndWait(createTrustLineRequest, {
    autofill: true,
    wallet: this.wallet,
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
