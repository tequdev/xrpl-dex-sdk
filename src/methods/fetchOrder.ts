import { ArgumentsRequired, BadResponse, BaseError, OrderNotFound } from 'ccxt';
import _ from 'lodash';
import { Client, rippleTimeToISOTime, rippleTimeToUnixTime, TxRequest, TxResponse } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  OrderType,
  OrderStatus,
  OrderTimeInForce,
  ModifiedNode,
  DeletedNode,
  CreatedNode,
  OrderSide,
  Fee,
} from '../models';
import { Order, Trade } from '../models';
import {
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOrderSideFromOffer,
  getQuoteAmountKey,
  getTradeFromOffer,
  getTradeFromOfferTx,
  subtractAmounts,
} from '../utils';
import { fetchOffer } from '../utils';
import { fetchTransferRate } from '../utils/markets';

async function fetchOrder(
  this: Client,
  /** The Order's Sequence number as a string */
  id: string,
  /** Symbol field is not used */
  /* eslint-disable-next-line */
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams
): Promise<FetchOrderResponse> {
  const { account } = params;

  const sequence = parseInt(id);

  /**
   * Validate request
   */
  if (!account) throw new ArgumentsRequired('Params field `account` is required');

  /**
   * Look up Offer data
   */

  const offer = await fetchOffer(this, account, sequence);
  if (!offer) throw new OrderNotFound(`Order ${id} from account ${account} not found`);

  /**
   * Prepare Order return data
   */
  const orderTrades: Trade[] = [];
  const orderSide = getOrderSideFromOffer(offer);

  let orderStatus = OrderStatus.Open;
  let orderTimestamp = rippleTimeToUnixTime(0);

  let orderFilled = 0;
  let orderBaseAmount: Amount | undefined;
  let orderQuoteAmount: Amount | undefined;

  /**
   * Loop back through Transactions to get Trades data
   */
  let previousTxnId: string | undefined = offer.PreviousTxnID;
  let lastTradeTimestamp;
  let totalTradesPrice = 0;
  let requestNonce = 0;

  while (previousTxnId) {
    const previousTxResponse: TxResponse = await this.request({
      id: (requestNonce += 1),
      command: 'tx',
      transaction: previousTxnId,
      binary: false,
    } as TxRequest);

    const previousTx = previousTxResponse.result;

    if (
      !previousTx.meta ||
      typeof previousTx.meta !== 'object' ||
      previousTx.TransactionType !== 'OfferCreate' ||
      !previousTx.Sequence
    ) {
      throw new BadResponse(`Bad data for Order's previous Transaction with hash ${previousTx.hash}`);
    }

    if (!lastTradeTimestamp) lastTradeTimestamp = previousTx.date;

    if (previousTx.Account !== account) {
      // Someone else's Transaction - look up how it affected ours

      let affectedOffer: Offer | undefined;
      for (const node of previousTx.meta.AffectedNodes) {
        if (node.hasOwnProperty('ModifiedNode')) {
          const { LedgerEntryType, FinalFields, PreviousTxnID } = (node as ModifiedNode).ModifiedNode;
          if (LedgerEntryType !== 'Offer' || !FinalFields) continue;
          affectedOffer = FinalFields as unknown as Offer;
          previousTxnId = PreviousTxnID;
          break;
        } else if (node.hasOwnProperty('DeletedNode')) {
          const { LedgerEntryType, FinalFields } = (node as DeletedNode).DeletedNode;
          if (LedgerEntryType !== 'Offer') continue;
          affectedOffer = FinalFields as unknown as Offer;
          previousTxnId = affectedOffer.PreviousTxnID;
          orderStatus = OrderStatus.Closed;
          break;
        }
      }

      if (!affectedOffer) {
        throw new BadResponse("Could not find given Offer in its most recent Transaction's list of affected offers");
      }

      const trade = await getTradeFromOfferTx(this, id, previousTxResponse);
      orderTrades.push(trade);

      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    } else {
      // This was our Transaction - look for Offers it modified

      orderBaseAmount = previousTx[getBaseAmountKey(orderSide)];
      orderQuoteAmount = previousTx[getQuoteAmountKey(orderSide)];

      let didCreateOffer = false;
      for (const node of previousTx.meta.AffectedNodes) {
        let trade: Trade | undefined;

        if (node.hasOwnProperty('ModifiedNode')) {
          const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
          if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields) continue;

          trade = await getTradeFromOffer(
            this,
            id,
            {
              ...(FinalFields as unknown as Offer),
              TakerGets: subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount),
              TakerPays: subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount),
            },
            previousTxResponse
          );
        } else if (node.hasOwnProperty('DeletedNode')) {
          const { LedgerEntryType, FinalFields } = (node as DeletedNode).DeletedNode;
          if (LedgerEntryType !== 'Offer') continue;

          trade = await getTradeFromOffer(this, id, FinalFields as unknown as Offer, previousTxResponse);
        } else if (node.hasOwnProperty('CreatedNode')) {
          const { LedgerEntryType, NewFields } = (node as CreatedNode).CreatedNode;
          if (LedgerEntryType === 'Offer' || NewFields.Account === account || NewFields.Sequence === parseInt(id))
            didCreateOffer = true;
        }

        if (trade) {
          orderTrades.push(trade);
          totalTradesPrice += parseFloat(trade.price);
          orderFilled += parseFloat(trade.amount);
        }
      }
      previousTxnId = undefined;

      if (previousTx.meta.TransactionResult !== 'tesSUCCESS') {
        orderStatus = OrderStatus.Rejected;
      } else if (!didCreateOffer) {
        orderStatus = OrderStatus.Closed;
      }
      orderTimestamp = previousTx.date || orderTimestamp;
    }
  }

  if (!orderBaseAmount || !orderQuoteAmount)
    throw new BaseError('An unknown error occurred while looking up Order - no amounts found on XRPL Ledger object');

  const orderBaseRate = parseFloat(await fetchTransferRate(this, orderBaseAmount));
  const orderQuoteRate = parseFloat(await fetchTransferRate(this, orderQuoteAmount));

  const orderBaseValue = parseAmountValue(orderBaseAmount);
  const orderQuoteValue = parseAmountValue(orderQuoteAmount);

  /** Price in quote currency */
  const orderPrice = orderQuoteValue / orderBaseValue;

  /** The ``cost`` of an order means the total *quote* volume of the order */
  const orderCost = orderFilled * orderPrice;

  const orderFeeCurrency = getAmountCurrencyCode(orderSide === OrderSide.Buy ? orderQuoteAmount : orderBaseAmount);
  const orderFeeRate = orderSide === OrderSide.Buy ? orderQuoteRate : orderBaseRate;
  const orderFees = orderFilled * orderFeeRate;

  const orderFee: Fee = {
    currency: orderFeeCurrency,
    cost: orderFees.toString(),
  };

  if (orderFee.cost != 0) {
    orderFee.rate = orderFeeRate.toString();
    orderFee.percentage = true;
  }

  /**
   * Compile final Order object and return
   */
  const order: Order = {
    id,
    clientOrderId: hashOfferId(account, sequence),
    datetime: rippleTimeToISOTime(orderTimestamp),
    timestamp: rippleTimeToUnixTime(orderTimestamp),
    lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
    status: orderStatus,
    symbol: getMarketSymbol(orderBaseAmount, orderQuoteAmount),
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : OrderTimeInForce.GoodTillCanceled,
    side: orderSide,
    amount: orderBaseValue.toString(),
    price: orderPrice.toString(),
    average: (orderTrades.length ? parseFloat(totalTradesPrice.toFixed(5)) / orderTrades.length : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
    filled: orderFilled.toString(),
    remaining: (orderBaseValue - orderFilled).toString(),
    cost: orderCost.toString(),
    trades: orderTrades,
    fee: orderFee,
    info: { Offer: offer },
  };

  return order;
}

export default fetchOrder;
