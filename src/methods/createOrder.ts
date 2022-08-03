import { BadRequest, Trade } from 'ccxt';
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
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { REFERENCE_TX_COST } from '../constants';
import { CreateOrderParams, MarketSymbol, Order, OrderSide, OrderStatus, OrderType } from '../models';
import { offerCreateFlagsToTimeInForce } from '../utils';

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
          issuer: params.taker_pays_issuer || '',
        };
  const creatorPays: Amount =
    creatorPaysCurrency === 'XRP'
      ? creatorPaysAmount
      : {
          currency: creatorPaysCurrency,
          value: creatorPaysAmount,
          issuer: params.taker_gets_issuer || '',
        };

  if (!params.wallet_secret && (!params.wallet_public_key || !params.wallet_private_key)) {
    throw new BadRequest('Must provide either `wallet_secret` or `wallet_public_key` and `wallet_private_key`');
  }

  const wallet = params.wallet_secret
    ? Wallet.fromSecret(params.wallet_secret)
    : new Wallet(params.wallet_public_key as string, params.wallet_private_key as string);

  const offerCreateTx: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: wallet.classicAddress,
    TakerGets: creatorPays,
    TakerPays: creatorGets,
    Flags: params.flags,
  };

  setTransactionFlagsToNumber(offerCreateTx);

  const offerCreateTxPrepared = await this.autofill(offerCreateTx);
  const offerCreateTxSigned = wallet.sign(offerCreateTxPrepared);

  const offerCreateTxResponse = await this.submitAndWait(offerCreateTxSigned.tx_blob);

  let amountFilled = 0;
  let amountRemaining = parseFloat(creatorGetsAmount);

  let status = OrderStatus.Open;

  // TODO: fill this in once the Trades logic is complete
  const trades: Trade[] = [];

  // TODO: calculate lastTradeTimestamp once Trades logic is complete
  let lastTradeTimestamp: number = 0;

  // TODO: properly calculate this once Trades logic is complete
  let average: number = 0;

  const response: Order = {
    id: hashOfferId(wallet.classicAddress, offerCreateTxResponse.result.Sequence || 0),
    datetime: rippleTimeToISOTime(offerCreateTxResponse.result.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTxResponse.result.date || 0),
    lastTradeTimestamp,
    status,
    symbol,
    type,
    timeInForce: offerCreateFlagsToTimeInForce(offerCreateTx),
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
      cost: offerCreateTxResponse.result.Fee ? parseFloat(offerCreateTxResponse.result.Fee) : REFERENCE_TX_COST,
    },
    info: JSON.stringify({ OfferCreate: offerCreateTxResponse.result }),
  };

  return response;
}

export default createOrder;
