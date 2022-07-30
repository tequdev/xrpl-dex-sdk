import { Trade } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  OfferCreate,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  unixTimeToRippleTime,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { REFERENCE_TX_COST } from '../constants';
import { CreateOrderParams, MarketSymbol, OrderSide, OrderStatus, OrderTimeInForce, OrderType } from '../models';
import { Order } from '../models/ccxt/Order';

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

  let creatorGets: Amount;
  let creatorPays: Amount;

  // TODO: verify this logic is correct

  const creatorGetsCurrency = side === OrderSide.Buy ? base : quote;
  const creatorGetsAmount = side === OrderSide.Buy ? amount : price;

  const creatorPaysCurrency = side === OrderSide.Buy ? quote : base;
  const creatorPaysAmount = side === OrderSide.Buy ? price : amount;

  creatorGets =
    creatorGetsCurrency === 'XRP'
      ? creatorGetsAmount
      : {
          currency: creatorGetsCurrency,
          value: creatorGetsAmount,
          issuer: params.taker_pays_issuer || '',
        };
  creatorPays =
    creatorPaysCurrency === 'XRP'
      ? creatorPaysAmount
      : {
          currency: creatorPaysCurrency,
          value: creatorPaysAmount,
          issuer: params.taker_gets_issuer || '',
        };

  // TODO: make the flags part of this more user-friendly (from a CCXT perspective)
  const flags = side === OrderSide.Sell ? OfferCreateFlags.tfSell : params.flags || 0;

  const xrplTxPrepared: OfferCreate = await this.autofill({
    TransactionType: 'OfferCreate',
    Account: params.wallet.classicAddress,
    TakerGets: creatorPays,
    TakerPays: creatorGets,
    Flags: flags,
  });

  const xrplTxSigned = params.wallet.sign(xrplTxPrepared);

  // TODO: make sure this waits for the txn to be validated
  const xrplTxResponse = await this.submitAndWait(xrplTxSigned.tx_blob);

  let filled = 0;
  let remaining = parseFloat(creatorGetsAmount);

  // TODO: fill this in once the logic is complete (also used in `fetchOrder`)
  const trades: Trade[] = [];

  // if (typeof xrplTxResponse.result.meta === 'object') {
  //   _.forEach(xrplTxResponse.result.meta.AffectedNodes, (affectedNode) => {
  //     if (affectedNode.hasOwnProperty('ModifiedNode')) {
  //       const { ModifiedNode } = affectedNode as ModifiedNode;
  //       if (ModifiedNode.LedgerEntryType === 'Offer') {
  //         // Usually a ModifiedNode of type Offer indicates a previous Offer that
  //         // was partially consumed by this one.
  //       }
  //     }
  //   });
  // }

  // TODO: fill this in once we have the Trades array
  const lastTradeTimestamp = unixTimeToRippleTime(0);

  let timeInForce: OrderTimeInForce | undefined;

  switch (params.flags) {
    case OfferCreateFlags.tfFillOrKill:
      timeInForce = OrderTimeInForce.FillOrKill;
    case OfferCreateFlags.tfImmediateOrCancel:
      timeInForce = OrderTimeInForce.ImmediateOrCancel;
    case OfferCreateFlags.tfPassive:
      timeInForce = OrderTimeInForce.PostOnly;
    default:
      timeInForce = params.expiration ? undefined : OrderTimeInForce.GoodTillCanceled;
  }

  // TODO: calculate this based on trades
  let average: number | undefined;

  const response: Order = {
    // TODO: what situations would result in there not being a Sequence number yet? (param is optional on type)
    id: hashOfferId(params.wallet.classicAddress, xrplTxResponse.result.Sequence || 0),
    datetime: rippleTimeToISOTime(xrplTxResponse.result.date || 0),
    timestamp: rippleTimeToUnixTime(xrplTxResponse.result.date || 0),
    lastTradeTimestamp,
    status: OrderStatus.Open,
    symbol,
    type,
    timeInForce,
    side,
    price: parseFloat(price),
    average,
    amount: parseFloat(amount),
    filled,
    remaining,
    cost: filled * parseFloat(price),
    trades,
    fee: {
      currency: 'XRP',
      cost: xrplTxResponse.result.Fee ? parseFloat(xrplTxResponse.result.Fee) : REFERENCE_TX_COST,
    },
    info: JSON.stringify(xrplTxResponse.result),
  };

  return response;
}

export default createOrder;
