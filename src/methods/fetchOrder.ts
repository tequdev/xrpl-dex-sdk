import _ from 'lodash';
import { dropsToXrp, OfferCreate, OfferCreateFlags, rippleTimeToISOTime, rippleTimeToUnixTime } from 'xrpl';
import { OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { CURRENCY_PRECISION, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  OrderId,
  TransactionData,
  Order,
  Trade,
  SDKContext,
  OrderSide,
  OrderTimeInForce,
} from '../models';
import {
  BN,
  fetchTransferRate,
  fetchTxn,
  getAmountCurrencyCode,
  getMarketSymbol,
  getMostRecentTx,
  getOrderOrTradeId,
  getTakerOrMaker,
  parseOrderId,
  parseTransaction,
} from '../utils';

async function fetchOrder(
  this: SDKContext,
  /** The Order's Account and Sequence number, separated by a colon */
  id: OrderId,
  /** Symbol field is not used */
  /* eslint-disable-next-line */
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchOrderResponse> {
  try {
    /**
     * Set things up
     */
    const { account, sequence } = parseOrderId(id);

    const transactions: TransactionData<OfferCreate>[] = [];

    const previousTxn = await getMostRecentTx(this.client, id, params.searchLimit);
    let orderStatus = previousTxn?.orderStatus ?? 'open';
    let previousTxnId = previousTxn?.previousTxnId;
    let previousTxnData = previousTxn?.previousTxnData;
    if (previousTxnData) transactions.push(previousTxnData);

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
    let filled = BN(0);
    let fillPrice = BN(0);
    let totalFillPrice = fillPrice;
    // let remaining = BN(0);

    // Newest to oldest
    transactions.sort((a, b) => b.date - a.date);

    // for (let t = 0, tl = transactions.length; t < tl; t += 1) {
    //   const transactionData = transactions[t];
    //   const { date, transaction } = transactionData;

    //   if (!transaction.Sequence) continue;

    //   const isOrderCreateTxn = transaction.Account === account && transaction.Sequence === sequence;
    //   const isSellOrder = isOrderCreateTxn
    //     ? (transaction.Flags as OfferCreateFlags) === OfferCreateFlags.tfSell
    //     : (transaction.Flags as OfferFlags) === OfferFlags.lsfSell;

    //   const datetime = rippleTimeToISOTime(date || 0);
    //   const timestamp = rippleTimeToUnixTime(date || 0);
    //   const type: OrderType = 'limit';

    //   if (isOrderCreateTxn) {
    //     const side = isSellOrder ? 'sell' : 'buy';
    //     // const baseField = side === 'sell' ? 'TakerPays' : 'TakerGets';
    //     // const quoteField = side === 'sell' ? 'TakerGets' : 'TakerPays';

    //     const baseField = 'TakerPays';
    //     const quoteField = 'TakerGets';

    //     const baseAmount = transaction[baseField];
    //     const baseValue = BN(
    //       typeof baseAmount === 'string' ? dropsToXrp(parseAmountValue(baseAmount)) : parseAmountValue(baseAmount)
    //     );

    //     const quoteAmount = transaction[quoteField];
    //     const quoteIssuer = getAmountIssuer(quoteAmount);
    //     const quoteValue = BN(
    //       typeof quoteAmount === 'string' ? dropsToXrp(parseAmountValue(quoteAmount)) : parseAmountValue(quoteAmount)
    //     );
    //     const quoteRate =
    //       this.issuers && quoteIssuer
    //         ? this.issuers[quoteIssuer].transferRate ?? BN(0)
    //         : await fetchTransferRate(this.client, quoteAmount);

    //     const amount = baseValue;
    //     const price = quoteValue.dividedBy(baseValue);
    //     const cost = filled.times(price);
    //     const feeCost = filled.times(quoteRate);

    //     order = {
    //       id,
    //       clientOrderId: hashOfferId(transaction.Account, transaction.Sequence),
    //       datetime,
    //       timestamp,
    //       lastTradeTimestamp: rippleTimeToUnixTime(transactions[0].date || 0),
    //       status: orderStatus,
    //       symbol: getMarketSymbol(baseAmount, quoteAmount),
    //       type,
    //       timeInForce: 'GTC',
    //       side,
    //       amount: amount.toString(),
    //       price: price.toString(),
    //       average: (trades.length ? filled.dividedBy(trades.length) : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
    //       filled: filled.toString(),
    //       remaining: amount.minus(filled).toString(),
    //       cost: cost.toString(),
    //       trades,
    //       info: { transactionData },
    //     };

    //     if (transaction.Flags === OfferCreateFlags.tfPassive) order.timeInForce = 'PO';
    //     else if (transaction.Flags === OfferCreateFlags.tfFillOrKill) order.timeInForce = 'FOK';
    //     else if (transaction.Flags === OfferCreateFlags.tfImmediateOrCancel) order.timeInForce = 'IOC';

    //     if (feeCost.isGreaterThan(0)) {
    //       order.fee = {
    //         currency: getAmountCurrencyCode(quoteAmount),
    //         cost: feeCost.toString(),
    //         rate: quoteRate.toString(),
    //         percentage: true,
    //       };
    //     }
    //   } else {
    //     // it's a trade!!!

    //     for (const affectedNode of transactionData.metadata.AffectedNodes) {
    //       const { LedgerEntryType, FinalFields, PreviousFields } = Object.values(affectedNode)[0];
    //       const nodeType = Object.keys(affectedNode)[0];

    //       if (LedgerEntryType !== 'Offer' || !FinalFields || (nodeType === 'ModifiedOffer' && !PreviousFields))
    //         continue;

    //       if (FinalFields.Account === account && FinalFields.Sequence === sequence) continue;

    //       const tradeSide = FinalFields.Flags === OfferCreateFlags.tfSell ? 'sell' : 'buy';

    //       // const tradeBaseField = tradeSide === 'sell' ? 'TakerPays' : 'TakerGets';
    //       // const tradeQuoteField = tradeSide === 'sell' ? 'TakerGets' : 'TakerPays';

    //       const tradeBaseField = 'TakerPays';
    //       const tradeQuoteField = 'TakerGets';

    //       const tradeBaseAmount =
    //         nodeType === 'ModifiedOffer'
    //           ? subtractAmounts(PreviousFields[tradeBaseField], FinalFields[tradeBaseField])
    //           : FinalFields[tradeBaseField];
    //       const tradeBaseValue = BN(
    //         typeof tradeBaseAmount === 'string'
    //           ? dropsToXrp(parseAmountValue(tradeBaseAmount))
    //           : parseAmountValue(tradeBaseAmount)
    //       );

    //       const tradeQuoteAmount =
    //         nodeType === 'ModifiedOffer'
    //           ? subtractAmounts(PreviousFields[tradeQuoteField], FinalFields[tradeQuoteField])
    //           : FinalFields[tradeQuoteField];
    //       const tradeQuoteIssuer = getAmountIssuer(tradeQuoteAmount);
    //       const tradeQuoteValue = BN(
    //         typeof tradeQuoteAmount === 'string'
    //           ? dropsToXrp(parseAmountValue(tradeQuoteAmount))
    //           : parseAmountValue(tradeQuoteAmount)
    //       );
    //       const tradeQuoteRate =
    //         this.issuers && tradeQuoteIssuer
    //           ? this.issuers[tradeQuoteIssuer].transferRate ?? BN(0)
    //           : await fetchTransferRate(this.client, tradeQuoteAmount);

    //       const tradeAmount = tradeBaseValue;
    //       const tradePrice = tradeQuoteValue.dividedBy(tradeBaseValue);
    //       const tradeCost = tradeAmount.times(tradePrice);
    //       const tradeFeeCost = tradeAmount.times(tradeQuoteRate);

    //       const trade: Trade = {
    //         id: getOrderOrTradeId(FinalFields.Account, FinalFields.Sequence),
    //         order: id,
    //         datetime,
    //         timestamp,
    //         symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    //         type,
    //         side: tradeSide,
    //         amount: tradeAmount.toString(),
    //         price: tradePrice.toString(),
    //         takerOrMaker: getTakerOrMaker(tradeSide),
    //         cost: tradeCost.toString(),
    //         info: { transactionData },
    //       };

    //       if (tradeFeeCost.isGreaterThan(0)) {
    //         trade.fee = {
    //           currency: getAmountCurrencyCode(tradeQuoteAmount),
    //           cost: tradeFeeCost.toString(),
    //           rate: tradeQuoteRate.toString(),
    //           percentage: true,
    //         };
    //       }

    //       trades.push(trade);

    //       filled.plus(tradeAmount);
    //     }
    //   }

    for (const transactionData of transactions) {
      const { transaction, offers, date } = transactionData;

      for (const offer of offers) {
        // const source = transaction.Account !== account ? transaction : offer;
        const source = offer;

        if (!source.Sequence) continue;

        const side: OrderSide = (source.Flags & OfferFlags.lsfSell) === OfferFlags.lsfSell ? 'sell' : 'buy';

        const baseAmount = side === 'buy' ? source.TakerPays : source.TakerGets;
        const baseValue = BN(
          typeof baseAmount === 'string' ? dropsToXrp(parseAmountValue(baseAmount)) : parseAmountValue(baseAmount)
        );

        const quoteAmount = side === 'buy' ? source.TakerGets : source.TakerPays;
        const quoteRate = await fetchTransferRate(this.client, quoteAmount);
        const quoteValue = BN(
          typeof quoteAmount === 'string' ? dropsToXrp(parseAmountValue(quoteAmount)) : parseAmountValue(quoteAmount)
        );

        const amount = baseValue;
        const price = quoteValue.dividedBy(amount);
        const cost = amount.times(price);

        const feeRate = quoteRate;
        const feeCost = quoteValue.times(feeRate);

        filled = filled.plus(amount);
        fillPrice = BN(price);
        totalFillPrice = totalFillPrice.plus(fillPrice);

        const trade: Trade = {
          id: getOrderOrTradeId(source.Account, source.Sequence),
          order: id,
          datetime: rippleTimeToISOTime(date || 0),
          timestamp: rippleTimeToUnixTime(date || 0),
          symbol: getMarketSymbol(baseAmount, quoteAmount),
          type: 'limit',
          side,
          amount: (+amount.toPrecision(CURRENCY_PRECISION)).toString(),
          price: (+price.toPrecision(CURRENCY_PRECISION)).toString(),
          takerOrMaker: getTakerOrMaker(side),
          cost: (+cost.toPrecision(CURRENCY_PRECISION)).toString(),
          info: { [transaction.Account !== account ? 'transaction' : 'offer']: source },
        };

        if (feeCost.isGreaterThan(0)) {
          trade.fee = {
            currency: getAmountCurrencyCode(quoteAmount),
            cost: (+feeCost.toPrecision(CURRENCY_PRECISION)).toString(),
            rate: (+feeRate.toPrecision(CURRENCY_PRECISION)).toString(),
            percentage: true,
          };
        }

        trades.push(trade);
      }

      if (transaction.Account === account && transaction.Sequence === sequence) {
        const source = transaction as OfferCreate;

        if (!source.Sequence) return;

        const side: OrderSide =
          (source.Flags as number & OfferCreateFlags.tfSell) === OfferCreateFlags.tfSell ? 'sell' : 'buy';

        let orderTimeInForce: OrderTimeInForce = 'GTC';
        if (source.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = 'PO';
        else if (source.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = 'FOK';
        else if (source.Flags === OfferCreateFlags.tfImmediateOrCancel) orderTimeInForce = 'IOC';

        const baseAmount = side === 'buy' ? source.TakerPays : source.TakerGets;
        const baseValue = BN(
          typeof baseAmount === 'string' ? dropsToXrp(parseAmountValue(baseAmount)) : parseAmountValue(baseAmount)
        );

        const quoteAmount = side === 'buy' ? source.TakerGets : source.TakerPays;
        const quoteRate = await fetchTransferRate(this.client, quoteAmount);
        const quoteValue = BN(
          typeof quoteAmount === 'string' ? dropsToXrp(parseAmountValue(quoteAmount)) : parseAmountValue(quoteAmount)
        );

        const amount = baseValue;
        const price = quoteValue.dividedBy(baseValue);
        const actualPrice = fillPrice;
        const average = trades.length ? totalFillPrice.dividedBy(trades.length) : BN(0);
        const remaining = amount.minus(filled);
        const cost = filled.times(actualPrice);

        const feeRate = quoteRate;
        const feeCost = filled.times(feeRate);

        order = {
          id,
          clientOrderId: hashOfferId(source.Account, source.Sequence),
          datetime: rippleTimeToISOTime(date),
          timestamp: rippleTimeToUnixTime(date),
          lastTradeTimestamp: rippleTimeToUnixTime(transactions[0].date || 0),
          status: orderStatus,
          symbol: getMarketSymbol(baseAmount, quoteAmount),
          type: 'limit',
          timeInForce: orderTimeInForce,
          side,
          amount: (+amount.toPrecision(CURRENCY_PRECISION)).toString(),
          price: (+price.toPrecision(CURRENCY_PRECISION)).toString(),
          average: (+average.toPrecision(CURRENCY_PRECISION)).toString(),
          filled: (+filled.toPrecision(CURRENCY_PRECISION)).toString(),
          remaining: (+remaining.toPrecision(CURRENCY_PRECISION)).toString(),
          cost: (+cost.toPrecision(CURRENCY_PRECISION)).toString(),
          trades,
          info: { transactionData },
        };

        if (feeCost.isGreaterThan(0)) {
          order.fee = {
            currency: getAmountCurrencyCode(quoteAmount),
            cost: (+feeCost.toPrecision(CURRENCY_PRECISION)).toString(),
            rate: (+feeRate.toPrecision(CURRENCY_PRECISION)).toString(),
            percentage: true,
          };
        }
      }
    }

    return order;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default fetchOrder;
