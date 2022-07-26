import { Client, OfferCreate, OfferCreateFlags, rippleTimeToUnixTime } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { CreateOrderRequest, CreateOrderResponse, OrderSide } from '../models';

async function createOrder(
  this: Client,
  { symbol, side, type, amount, price, params }: CreateOrderRequest
): Promise<CreateOrderResponse> {
  const [base, quote] = symbol.split('/');

  let creatorGets: Amount;
  let creatorPays: Amount;

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
          issuer: params.takerPaysIssuer || '',
        };
  creatorPays =
    creatorPaysCurrency === 'XRP'
      ? creatorPaysAmount
      : {
          currency: creatorPaysCurrency,
          value: creatorPaysAmount,
          issuer: params.takerGetsIssuer || '',
        };

  const flags = side === OrderSide.Sell ? OfferCreateFlags.tfSell : params.flags || 0;

  const xrplTxPrepared: OfferCreate = await this.autofill({
    TransactionType: 'OfferCreate',
    Account: params.wallet.classicAddress,
    TakerGets: creatorPays,
    TakerPays: creatorGets,
    Flags: flags,
  });

  const xrplTxSigned = params.wallet.sign(xrplTxPrepared);

  const xrplTxResponse = await this.submitAndWait(xrplTxSigned.tx_blob);

  const orderTimestamp = xrplTxResponse.result.date ? rippleTimeToUnixTime(xrplTxResponse.result.date) : Date.now();

  const response: CreateOrderResponse = {
    // TODO: make sure this is correct
    id: xrplTxResponse.result.Sequence?.toString() ?? xrplTxResponse.id.toString(),
    // TODO: make sure this is correct
    clientOrderId: xrplTxResponse.result.hash,
    datetime: new Date(orderTimestamp).toISOString(),
    timestamp: orderTimestamp,
    // TODO: look up what the user's previous trade was and get the date
    lastTradeTimestamp: 0,
    status: 'open',
    symbol,
    type,
    timeInForce: params.expiration?.toString(),
    side,
    // TODO: verify creatorGetsAmount <-> price is the correct mapping
    price: parseFloat(creatorGetsAmount),
    // TODO: where do we get this?
    average: undefined,
    // TODO: verify creatorPaysAmount <-> amount is the correct mapping
    amount: parseFloat(creatorPaysAmount),
    // TODO: see if the order was partially filled on creation
    filled: 0,
    remaining: parseFloat(creatorGetsAmount),
    // TODO: refresh on what this is
    cost: 0,
    // TODO: look up what trades have been placed on this order
    trades: [],
    fee: {
      currency: 'XRP',
      // TODO: Do we have this value available?
      type: side === OrderSide.Buy ? 'taker' : 'maker',
      // TODO: what do we default to here?
      cost: xrplTxResponse.result.Fee ? parseFloat(xrplTxResponse.result.Fee!) : 0,
      // TODO: get the proper number here
      rate: 0,
    },
    info: JSON.stringify(xrplTxResponse.result),
  };

  return response;
}

export default createOrder;
