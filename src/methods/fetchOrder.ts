import { ArgumentsRequired, BadResponse } from 'ccxt';
import _ from 'lodash';
import { Client, LedgerEntryRequest, rippleTimeToISOTime, rippleTimeToUnixTime, TxRequest, TxResponse } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
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
} from '../models';
import { Order, Trade } from '../models';
import {
  divideAmountValues,
  getMarketSymbol,
  getOrderBaseAmount,
  getOrderQuoteAmount,
  getOrderSideFromOffer,
  getTradeFromOffer,
  getTradeFromOfferTx,
  subtractAmounts,
} from '../utils';
import { handleLedgerEntryErrors, handleTxErrors } from '../utils/errors';

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
   * Look up Offer
   */
  const offerResult = await this.request({
    command: 'ledger_entry',
    ledger_index: 'validated',
    offer: {
      account,
      seq: sequence,
    },
  } as LedgerEntryRequest);

  handleLedgerEntryErrors(offerResult);

  const offer = offerResult.result.node as Offer;

  /**
   * Prepare Order return data
   */
  const orderTrades: Trade[] = [];

  let orderStatus = OrderStatus.Open;
  let orderTimestamp = rippleTimeToUnixTime(0);

  let orderFee = 0;
  let orderFilled = 0;

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

    handleTxErrors(previousTxResponse);

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
      for (let n = 0, nl = previousTx.meta.AffectedNodes.length; n < nl; n += 1) {
        const node = previousTx.meta.AffectedNodes[n];
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

      const trade = getTradeFromOfferTx(id, previousTxResponse);
      orderTrades.push(trade);

      totalTradesPrice += parseFloat(trade.price);
      orderFilled += parseFloat(trade.amount);
    } else {
      // This was our Transaction - look for Offers it modified

      let didCreateOffer = false;
      for (let n = 0, nl = previousTx.meta.AffectedNodes.length; n < nl; n += 1) {
        const node = previousTx.meta.AffectedNodes[n];

        let trade: Trade | undefined;

        if (node.hasOwnProperty('ModifiedNode')) {
          const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
          if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields) continue;

          trade = getTradeFromOffer(
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

          trade = getTradeFromOffer(id, FinalFields as unknown as Offer, previousTxResponse);
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

      orderFee += previousTx.Fee ? parseFloat(previousTx.Fee) : 0;
      orderTimestamp = previousTx.date ? rippleTimeToUnixTime(previousTx.date) : orderTimestamp;
    }
  }

  const orderSide = getOrderSideFromOffer(offer);
  const orderBaseAmount = getOrderBaseAmount(offer);
  const orderQuoteAmount = getOrderQuoteAmount(offer);

  const orderAmount = parseAmountValue(orderBaseAmount) + orderFilled;
  const orderPrice = divideAmountValues(orderBaseAmount, orderQuoteAmount);

  /**
   * Compile final Order object and return
   */
  const order: Order = {
    id,
    timestamp: orderTimestamp,
    datetime: rippleTimeToISOTime(orderTimestamp),
    lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
    status: orderStatus,
    symbol: getMarketSymbol(orderBaseAmount, orderQuoteAmount),
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : OrderTimeInForce.GoodTillCanceled,
    side: orderSide,
    price: orderPrice,
    average: orderTrades.length ? totalTradesPrice / orderTrades.length : 0, // as cool as dividing by zero is, we shouldn't do it
    amount: orderAmount,
    filled: orderFilled,
    remaining: orderAmount - orderFilled,
    cost: orderFilled * orderPrice,
    trades: orderTrades,
    fee: {
      currency: 'XRP',
      cost: orderFee,
    },
    info: { Offer: offerResult },
  };

  return order;
}

export default fetchOrder;
