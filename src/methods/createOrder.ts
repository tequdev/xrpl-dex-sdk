import { Client, OfferCreate, OfferCreateFlags } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { CreateOrderRequest, CreateOrderResponse, OrderSide } from '../models';

async function createOrder(
  this: Client,
  { symbol, side, type, amount, price, params }: CreateOrderRequest
): Promise<CreateOrderResponse> {
  const [base, quote] = symbol.split('/');

  let takerGets: Amount;
  let takerPays: Amount;

  const getsCurrency = side === OrderSide.Buy ? base : quote;
  const getsAmount = side === OrderSide.Buy ? amount : price;

  const paysCurrency = side === OrderSide.Buy ? quote : base;
  const paysAmount = side === OrderSide.Buy ? price : amount;

  takerGets =
    getsCurrency === 'XRP'
      ? getsAmount
      : {
          currency: getsCurrency,
          value: getsAmount,
          issuer: params.takerGetsIssuer || '',
        };
  takerPays =
    paysCurrency === 'XRP'
      ? paysAmount
      : {
          currency: paysCurrency,
          value: paysAmount,
          issuer: params.takerPaysIssuer || '',
        };

  const flags = side === OrderSide.Sell ? OfferCreateFlags.tfSell : params.behavior || 0;

  const xrplTransaction: OfferCreate = {
    TransactionType: 'OfferCreate',
    Account: params.wallet.classicAddress,
    TakerGets: takerGets,
    TakerPays: takerPays,
    Flags: flags,
    Fee: params.fee,
  };

  const xrplResult = await this.submit(xrplTransaction, { wallet: params.wallet });

  // TODO: finish properly filling this out

  const response: CreateOrderResponse = {
    id: typeof xrplResult.id === 'number' ? xrplResult.id.toString() : xrplResult.id,
    clientOrderId: '',
    datetime: '',
    timestamp: 0,
    lastTradeTimestamp: 0,
    status: 'open',
    symbol,
    type,
    timeInForce: '',
    side,
    price: parseFloat(paysAmount),
    average: undefined,
    amount: parseFloat(getsAmount),
    filled: 0,
    remaining: parseFloat(getsAmount),

    // TODO: refresh on what this is
    cost: 0,

    trades: [],
    fee: {
      currency: 'XRP',
      type: side === OrderSide.Buy ? 'taker' : 'maker',
      // TODO: verify this number is correct
      cost: parseFloat(xrplResult.result.open_ledger_cost),
      // TODO: get the proper number here
      rate: 0,
    },
    info: xrplResult.result.tx_blob,
  };

  return response;
}

export default createOrder;
