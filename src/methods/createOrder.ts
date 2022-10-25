import _ from 'lodash';
import { OfferCreate, setTransactionFlagsToNumber } from 'xrpl';
import { CURRENCY_PRECISION } from '../constants';
import {
  ArgumentsRequired,
  CreateOrderParams,
  CreateOrderResponse,
  ExchangeError,
  MarketSymbol,
  OrderSide,
  OrderType,
  SDKContext,
} from '../models';
import {
  BN,
  getAmount,
  getBaseAmountKey,
  getOrderId,
  handleTxErrors,
  parseMarketSymbol,
  validateMarketSymbol,
} from '../utils';

/**
 * Places an {@link Order} on the Ripple dEX. Returns a {@link CreateOrderResponse} with the
 * newly created Order's ID.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#placing-orders
 *
 * @param symbol - {@link MarketSymbol} for new Order
 * @param side - Order direction (buy or sell)
 * @param type - Order type (only limit is supported)
 * @param amount - How much currency you want to trade (in units of base currency)
 * @param price - Price at which the order is to be fullfilled (in units of quote currency)
 * @param params - (Optional) a {@link CreateOrderParams} object
 * @returns A {@link CreateOrderResponse} object
 */
async function createOrder(
  this: SDKContext,
  symbol: MarketSymbol,
  side: OrderSide,
  /* eslint-disable-next-line */
  type: OrderType,
  amount: string,
  price: string,
  params: CreateOrderParams = {}
): Promise<CreateOrderResponse> {
  if (!symbol || !side || !amount || !price || !params)
    throw new ArgumentsRequired('Missing required arguments for createOrder call');
  validateMarketSymbol(symbol);

  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getAmount(baseCurrency, +BN(amount).toPrecision(CURRENCY_PRECISION));
  const quoteAmount = getAmount(quoteCurrency, +BN(amount).times(BN(price)).toPrecision(CURRENCY_PRECISION));

  const baseAmountKey = getBaseAmountKey(side);

  const offerCreateRequest: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: this.wallet.classicAddress,
    Flags: {
      ...params.flags,
      tfSell: side === 'sell',
    },
    TakerGets: baseAmountKey === 'TakerGets' ? baseAmount : quoteAmount,
    TakerPays: baseAmountKey === 'TakerPays' ? baseAmount : quoteAmount,
  };

  if (params.expiration) offerCreateRequest.Expiration = params.expiration;
  if (params.memos) offerCreateRequest.Memos = params.memos;

  setTransactionFlagsToNumber(offerCreateRequest);

  const offerCreateTxResponse = await this.client.submitAndWait(offerCreateRequest, {
    autofill: true,
    wallet: this.wallet,
  });

  handleTxErrors(offerCreateTxResponse);

  const offerCreateTx = offerCreateTxResponse.result;

  if (!offerCreateTx.meta || typeof offerCreateTx.meta !== 'object' || !offerCreateTx.Sequence) {
    throw new ExchangeError(`Bad data for OrderCreate Transaction with hash ${offerCreateTx.hash}`);
  }

  const orderId = getOrderId(offerCreateTx.Account, offerCreateTx.Sequence);

  return {
    id: orderId,
    info: {
      OfferCreate: offerCreateTxResponse,
    },
  };
}

export default createOrder;
