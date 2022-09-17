import _ from 'lodash';
import { OfferCreate, OfferCreateFlags, rippleTimeToISOTime, rippleTimeToUnixTime } from 'xrpl';
import { OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  AccountSequencePair,
  TransactionData,
  Order,
  Trade,
  OrderStatus,
  OrderSide,
  OrderTimeInForce,
  SDKContext,
} from '../models';
import {
  fetchTransferRate,
  fetchTxn,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getMostRecentTxId,
  getOrderOrTradeId,
  getQuoteAmountKey,
  getTakerOrMaker,
  parseOrderId,
  parseTransaction,
} from '../utils';

async function fetchOrder(
  this: SDKContext,
  /** The Order's Account and Sequence number, separated by a colon */
  id: AccountSequencePair,
  /** Symbol field is not used */
  /* eslint-disable-next-line */
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams = {}
): Promise<FetchOrderResponse> {
  /**
   * Set things up
   */
  const { account, sequence } = parseOrderId(id);

  const transactions: TransactionData<OfferCreate>[] = [];

  let status: OrderStatus = 'open';
  let previousTxnId = await getMostRecentTxId(this.client, id, params.searchLimit);
  let previousTxnData: TransactionData<OfferCreate> | undefined;

  /**
   * Build a Transaction history for this Order
   */
  while (previousTxnId) {
    const previousTxnResponse = await fetchTxn(this.client, previousTxnId);
    if (previousTxnResponse) {
      previousTxnData = parseTransaction(id, previousTxnResponse);
      if (previousTxnData) {
        transactions.push(previousTxnData);
        previousTxnId = previousTxnData.previousTxnId;
      }
    }
  }

  /**
   * Parse the Transaction history for Trade and Order objects
   */
  const trades: Trade[] = [];
  let order: Order | undefined;
  let filled = 0;

  transactions.sort((a, b) => a.date - b.date);

  for (const transactionData of transactions) {
    const { transaction, offers, date } = transactionData;

    for (const offer of offers) {
      const source = transaction.Account !== account ? transaction : offer;

      if (!source.Sequence) continue;

      const side: OrderSide = source.Flags === OfferFlags.lsfSell ? 'sell' : 'buy';

      const baseAmount = source[getBaseAmountKey(side)];
      const quoteAmount = source[getQuoteAmountKey(side)];

      const baseRate = parseFloat(await fetchTransferRate(this.client, baseAmount));
      const quoteRate = parseFloat(await fetchTransferRate(this.client, quoteAmount));

      const baseValue = parseAmountValue(baseAmount);
      const quoteValue = parseAmountValue(quoteAmount);

      const price = quoteValue / baseValue;
      const cost = baseValue * price;

      const feeRate = side === 'buy' ? quoteRate : baseRate;
      const feeCost = baseValue * feeRate;

      filled += baseValue;

      const trade: Trade = {
        id: getOrderOrTradeId(source.Account, source.Sequence),
        order: id,
        datetime: rippleTimeToISOTime(date || 0),
        timestamp: rippleTimeToUnixTime(date || 0),
        symbol: getMarketSymbol(baseAmount, quoteAmount),
        type: 'limit',
        side: side,
        amount: baseValue.toString(),
        price: price.toString(),
        takerOrMaker: getTakerOrMaker(side),
        cost: cost.toString(),
        info: { [transaction.Account !== account ? 'transaction' : 'offer']: source },
      };

      if (feeCost != 0) {
        trade.fee = {
          currency: getAmountCurrencyCode(side === 'buy' ? quoteAmount : baseAmount),
          cost: feeCost.toString(),
          rate: feeRate.toString(),
          percentage: true,
        };
      }

      trades.push(trade);
    }

    if (transaction.Account === account && transaction.Sequence === sequence) {
      const source = transaction as OfferCreate;

      if (!source.Sequence) return;

      const side: OrderSide = source.Flags === OfferCreateFlags.tfSell ? 'sell' : 'buy';

      let orderTimeInForce: OrderTimeInForce = 'GTC';
      if (source.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = 'PO';
      else if (source.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = 'FOK';
      else if (source.Flags === OfferCreateFlags.tfImmediateOrCancel) orderTimeInForce = 'IOC';

      const baseAmount = source[getBaseAmountKey(side)];
      const quoteAmount = source[getQuoteAmountKey(side)];

      const baseRate = parseFloat(await fetchTransferRate(this.client, baseAmount));
      const quoteRate = parseFloat(await fetchTransferRate(this.client, quoteAmount));

      const baseValue = parseAmountValue(baseAmount);
      const quoteValue = parseAmountValue(quoteAmount);

      const orderPrice = quoteValue / baseValue;
      const cost = filled * orderPrice;

      const feeRate = side === 'buy' ? quoteRate : baseRate;
      const feeCost = filled * feeRate;

      order = {
        id,
        clientOrderId: hashOfferId(source.Account, source.Sequence),
        datetime: rippleTimeToISOTime(date),
        timestamp: rippleTimeToUnixTime(date),
        lastTradeTimestamp: rippleTimeToUnixTime(transactions[0].date || 0),
        status,
        symbol: getMarketSymbol(baseAmount, quoteAmount),
        type: 'limit',
        timeInForce: orderTimeInForce,
        side,
        amount: baseValue.toString(),
        price: orderPrice.toString(),
        average: (trades.length ? filled / trades.length : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
        filled: filled.toString(),
        remaining: (baseValue - filled).toString(),
        cost: cost.toString(),
        trades,
        info: { transactionData },
      };

      if (feeCost != 0) {
        order.fee = {
          currency: getAmountCurrencyCode(side === 'buy' ? quoteAmount : baseAmount),
          cost: feeCost.toString(),
          rate: feeRate.toString(),
          percentage: true,
        };
      }
    }
  }

  return order;
}

export default fetchOrder;
