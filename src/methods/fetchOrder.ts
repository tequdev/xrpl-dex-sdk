import { ArgumentsRequired, BadResponse, BaseError, OrderNotFound } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  OfferCreate,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TxRequest,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';
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
  Fee,
  OrderSide,
  TxResult,
  Order,
  Trade,
} from '../models';
import {
  fetchOffer,
  fetchTransferRate,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOrderSideFromOffer,
  getQuoteAmountKey,
  getTrade,
  parseOrderId,
  subtractAmounts,
} from '../utils';

async function fetchOrder(
  this: Client,
  /** The Order's Account and Sequence number, separated by a colon */
  id: string,
  /** Symbol field is not used */
  /* eslint-disable-next-line */
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams = {}
): Promise<FetchOrderResponse> {
  const { account, sequenceNumber } = parseOrderId(id);

  /**
   * Validate request
   */
  if (!account) throw new ArgumentsRequired('Params field `account` is required');

  /**
   * Look up Offer data
   */

  const offer = await fetchOffer(this, account, sequenceNumber, params);
  if (!offer) throw new OrderNotFound(`Order ${id} from account ${account} not found`);

  /**
   * Prepare Order return data
   */
  const orderTrades: Trade[] = [];
  const orderSide = getOrderSideFromOffer(offer);
  const orderIdHash = hashOfferId(account, sequenceNumber);

  let orderStatus = OrderStatus.Open;
  let orderTimestamp = rippleTimeToUnixTime(0);
  let orderTimeInForce = OrderTimeInForce.GoodTillCanceled;

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
          const { LedgerEntryType, LedgerIndex, FinalFields, PreviousFields, PreviousTxnID } = (node as ModifiedNode)
            .ModifiedNode;
          if (LedgerEntryType !== 'Offer' || LedgerIndex !== orderIdHash || !FinalFields || !PreviousFields) continue;
          affectedOffer = {
            ...(FinalFields as unknown as Offer),
            TakerGets: subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount),
            TakerPays: subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount),
          };
          previousTxnId = PreviousTxnID;
          break;
        } else if (node.hasOwnProperty('DeletedNode')) {
          const { LedgerEntryType, LedgerIndex, FinalFields } = (node as DeletedNode).DeletedNode;
          if (LedgerEntryType !== 'Offer' || LedgerIndex !== orderIdHash) continue;
          affectedOffer = FinalFields as unknown as Offer;
          previousTxnId = affectedOffer.PreviousTxnID;
          orderStatus = OrderStatus.Closed;
          break;
        }
      }

      if (!affectedOffer) {
        throw new BadResponse("Could not find given Offer in its most recent Transaction's list of affected offers");
      }

      const trade = await getTrade(this, id, {
        ...previousTxResponse,
        result: {
          ...previousTxResponse.result,
          TakerGets: affectedOffer.TakerPays,
          TakerPays: affectedOffer.TakerGets,
        } as TxResult<OfferCreate>,
      });

      orderTrades.push(trade);

      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    } else {
      // This was our Transaction - look for Offers it modified

      if (previousTx.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = OrderTimeInForce.PostOnly;
      else if (previousTx.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = OrderTimeInForce.FillOrKill;
      else if (previousTx.Flags === OfferCreateFlags.tfImmediateOrCancel)
        orderTimeInForce = OrderTimeInForce.ImmediateOrCancel;

      orderBaseAmount = previousTx[getBaseAmountKey(orderSide)];
      orderQuoteAmount = previousTx[getQuoteAmountKey(orderSide)];

      let didCreateOffer = false;
      for (const node of previousTx.meta.AffectedNodes) {
        let affectedOffer: Offer | undefined;

        if (node.hasOwnProperty('ModifiedNode')) {
          const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
          if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields) continue;

          const updatedOrderTakerGets = subtractAmounts(
            PreviousFields.TakerGets as Amount,
            FinalFields.TakerGets as Amount
          );
          const updatedOrderTakerPays = subtractAmounts(
            PreviousFields.TakerPays as Amount,
            FinalFields.TakerPays as Amount
          );

          affectedOffer = {
            ...(FinalFields as unknown as Offer),
            TakerGets: updatedOrderTakerGets,
            TakerPays: updatedOrderTakerPays,
          };
        } else if (node.hasOwnProperty('DeletedNode')) {
          const { LedgerEntryType, FinalFields } = (node as DeletedNode).DeletedNode;
          if (LedgerEntryType !== 'Offer') continue;

          affectedOffer = FinalFields as unknown as Offer;
        } else if (node.hasOwnProperty('CreatedNode')) {
          const { LedgerEntryType, NewFields } = (node as CreatedNode).CreatedNode;
          if (LedgerEntryType === 'Offer' || NewFields.Account === account || NewFields.Sequence === parseInt(id))
            didCreateOffer = true;
        }

        if (affectedOffer) {
          const trade = await getTrade(this, id, {
            ...previousTxResponse,
            result: {
              ...previousTxResponse.result,
              TakerGets: affectedOffer.TakerPays,
              TakerPays: affectedOffer.TakerGets,
            } as TxResult<OfferCreate>,
          });
          orderTrades.push(trade);
          totalTradesPrice += parseFloat(trade.price);
          orderFilled += parseFloat(trade.amount);
        }
      }
      previousTxnId = undefined;

      if (previousTx.meta.TransactionResult !== 'tesSUCCESS') {
        orderStatus = OrderStatus.Rejected;
      } else if (!didCreateOffer) {
        if (orderTimeInForce === OrderTimeInForce.FillOrKill && orderFilled !== parseAmountValue(orderBaseAmount))
          orderStatus = OrderStatus.Canceled;
        else if (orderTimeInForce === OrderTimeInForce.ImmediateOrCancel && orderFilled == 0)
          orderStatus = OrderStatus.Canceled;
        else orderStatus = OrderStatus.Closed;
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

  const orderPrice = orderQuoteValue / orderBaseValue;
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
    clientOrderId: orderIdHash,
    datetime: rippleTimeToISOTime(orderTimestamp),
    timestamp: rippleTimeToUnixTime(orderTimestamp),
    lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
    status: orderStatus,
    symbol: getMarketSymbol(orderBaseAmount, orderQuoteAmount),
    type: OrderType.Limit,
    timeInForce: orderTimeInForce,
    side: orderSide,
    amount: orderBaseValue.toString(),
    price: orderPrice.toString(),
    average: (orderTrades.length ? totalTradesPrice / orderTrades.length : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
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
