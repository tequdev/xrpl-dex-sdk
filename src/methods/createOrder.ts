import { BadRequest } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  OfferCreate,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  setTransactionFlagsToNumber,
  Wallet,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { REFERENCE_TX_COST } from '../constants';
import { CreateOrderParams, MarketSymbol, Order, OrderSide, OrderStatus, OrderType, Trade } from '../models';
import { offerCreateFlagsToTimeInForce } from '../utils';

/**
 * Creates a new Order on the Ripple dEX. Returns an {@link CreateOrderResponse}
 * with the newly created Order object.
 *
 * @category Methods
 */
async function createOrder(
  this: Client,
  /** Token pair (called Unified Market Symbol in CCXT) */
  symbol: MarketSymbol,
  /** Order direction (buy or sell) */
  side: OrderSide,
  /** Order type (limit or market) */
  type: OrderType,
  /** How much currency you want to trade (usually, but not always) in units of the base currency) */
  amount: string,
  /** The price at which the order is to be fullfilled in units of the quote currency (ignored in market orders) */
  price: string,
  /** Parameters specific to the exchange API endpoint */
  params: CreateOrderParams
): Promise<Order> {
  const [base, quote] = symbol.split('/');

  const {
    wallet_private_key,
    wallet_public_key,
    wallet_secret,
    taker_gets_issuer,
    taker_pays_issuer,
    expiration,
    memos,
    flags,
  } = params;

  const creatorGetsCurrency = side === OrderSide.Buy ? base : quote;
  const creatorGetsAmount = amount;

  const creatorPaysCurrency = side === OrderSide.Buy ? quote : base;
  const creatorPaysAmount = price;

  const creatorGets: Amount =
    creatorGetsCurrency === 'XRP'
      ? creatorGetsAmount
      : {
          currency: creatorGetsCurrency,
          value: creatorGetsAmount,
          issuer: taker_pays_issuer || '',
        };
  const creatorPays: Amount =
    creatorPaysCurrency === 'XRP'
      ? creatorPaysAmount
      : {
          currency: creatorPaysCurrency,
          value: creatorPaysAmount,
          issuer: taker_gets_issuer || '',
        };

  if (!wallet_secret && (!wallet_public_key || !wallet_private_key)) {
    throw new BadRequest('Must provide either `wallet_secret` or `wallet_public_key` and `wallet_private_key`');
  }

  const wallet = wallet_secret
    ? Wallet.fromSecret(wallet_secret)
    : new Wallet(wallet_public_key as string, wallet_private_key as string);

  const offerCreate: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: wallet.classicAddress,
    TakerGets: creatorPays,
    TakerPays: creatorGets,
    Flags: flags,
  };

  if (expiration) offerCreate.Expiration = expiration;
  if (memos) offerCreate.Memos = memos;

  setTransactionFlagsToNumber(offerCreate);

  const offerCreateResponse = await this.submitAndWait(offerCreate, {
    autofill: true,
    wallet,
  });

  let amountFilled = 0;
  let amountRemaining = parseFloat(creatorGetsAmount);

  let status = OrderStatus.Open;

  // TODO: fill this in once the Trades logic is complete
  const trades: Trade[] = [];

  // TODO: calculate lastTradeTimestamp once Trades logic is complete
  let lastTradeTimestamp: number = 0;

  // TODO: properly calculate this once Trades logic is complete
  let average: number = 0;

  const newOrder: Order = {
    id: (offerCreateResponse.result.Sequence || 0).toString(),
    datetime: rippleTimeToISOTime(offerCreateResponse.result.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateResponse.result.date || 0),
    lastTradeTimestamp,
    status,
    symbol,
    type,
    timeInForce: offerCreateFlagsToTimeInForce(offerCreate),
    side,
    price: parseFloat(price),
    average,
    amount: parseFloat(amount),
    filled: amountFilled,
    remaining: amountRemaining,
    cost: amountFilled * parseFloat(price),
    trades,
    fee: {
      currency: 'XRP',
      cost: offerCreateResponse.result.Fee ? parseFloat(offerCreateResponse.result.Fee) : REFERENCE_TX_COST,
    },
    info: { OfferCreate: offerCreateResponse.result },
  };

  return newOrder;
}

export default createOrder;
