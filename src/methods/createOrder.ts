import { BadResponse } from 'ccxt';
import _ from 'lodash';
import { OfferCreate, setTransactionFlagsToNumber } from 'xrpl';
import { CURRENCY_PRECISION } from '../constants';
import { CreateOrderParams, CreateOrderResponse, MarketSymbol, OrderSide, OrderType, SDKContext } from '../models';
import { BN, getAmount, getBaseAmountKey, getOrderOrTradeId, handleTxErrors, parseMarketSymbol } from '../utils';

/**
 * Creates a new Order on the Ripple dEX. Returns an {@link CreateOrderResponse}
 * with the newly created Order object.
 *
 * @category Methods
 */
async function createOrder(
  this: SDKContext,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Order direction (buy or sell) */
  side: OrderSide,
  /** Order type (limit only) */
  /* eslint-disable-next-line */
  type: OrderType,
  /** How much currency you want to trade (usually, but not always) in units of the base currency) */
  amount: string,
  /** The price at which the order is to be fullfilled in units of the quote currency (ignored in market orders) */
  price: string,
  /** Parameters specific to the exchange API endpoint */
  params: CreateOrderParams = {}
): Promise<CreateOrderResponse> {
  const [baseCurrency, quoteCurrency] = parseMarketSymbol(symbol);

  const baseAmount = getAmount(baseCurrency, +BN(amount).toPrecision(CURRENCY_PRECISION));
  const quoteAmount = getAmount(quoteCurrency, +BN(amount).times(BN(price)).toPrecision(CURRENCY_PRECISION));

  const baseAmountKey = getBaseAmountKey(side);

  const offerCreateRequest: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: this.wallet.classicAddress,
    Flags: {
      ...params.flags,
      tfSell: side === 'sell' ? true : false,
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
    throw new BadResponse(`Bad data for OrderCreate Transaction with hash ${offerCreateTx.hash}`);
  }

  const orderId = getOrderOrTradeId(offerCreateTx.Account, offerCreateTx.Sequence);

  return orderId;
}

export default createOrder;
