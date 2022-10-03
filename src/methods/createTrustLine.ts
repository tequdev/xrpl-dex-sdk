import { BadRequest } from 'ccxt';
import _ from 'lodash';
import { TrustSet } from 'xrpl';
import { CreateTrustLineResponse, CurrencyCode, SDKContext } from '../models';
import { handleTxErrors, parseCurrencyCode } from '../utils';
/**
 * Creates a new Order on the Ripple dEX. Returns an {@link CreateOrderResponse}
 * with the newly created Order object.
 *
 * @category Methods
 */
async function createTrustLine(
  this: SDKContext,
  /** Currency code */
  code: CurrencyCode,
  /** Max amount of this currency you can receive */
  amount: string
): Promise<CreateTrustLineResponse> {
  if (code === 'XRP') throw new BadRequest('No Trust Line needed for XRP');

  const { currency, issuer } = parseCurrencyCode(code);
  if (!issuer)
    throw new BadRequest(
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
