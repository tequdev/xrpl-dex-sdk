import { BadResponse } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  OfferCreate,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TransactionMetadata,
  TxResponse,
  unixTimeToRippleTime,
} from 'xrpl';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { DEFAULT_LIMIT } from '../constants';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  AccountSequencePair,
  AccountTransaction,
  Node,
  TxResult,
  TransactionData,
  OrderSide,
  OrderType,
  Order,
  OrderStatus,
  Trade,
  OrderTimeInForce,
} from '../models';
import {
  fetchAccountTxns,
  fetchOfferEntry,
  fetchTransferRate,
  fetchTxn,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOfferFromNode,
  getOfferFromTransaction,
  getOrderOrTradeId,
  getQuoteAmountKey,
  getTakerOrMaker,
  parseOrderId,
} from '../utils';

async function fetchOrder(
  this: Client,
  /** The Order's Account and Sequence number, separated by a colon */
  id: AccountSequencePair,
  /** Symbol field is not used */
  /* eslint-disable-next-line */
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams = {}
): Promise<FetchOrderResponse | undefined> {
  /**
   * Filter out irrelevant Transactions, parse AffectedNodes, and normalize results
   */
  const parseTransaction = (
    orderId: AccountSequencePair,
    transaction: TxResponse | AccountTransaction
  ): TransactionData<OfferCreate> | undefined => {
    const { account, sequence } = parseOrderId(orderId);
    const offerLedgerIndex = hashOfferId(account, sequence);

    let previousTxnHash: string | undefined;

    const tx = transaction.hasOwnProperty('result')
      ? ((transaction as TxResponse).result as TxResult<OfferCreate>)
      : ((transaction as AccountTransaction).tx as TxResult<OfferCreate>);

    const metadata = transaction.hasOwnProperty('result')
      ? ((transaction as TxResponse).result.meta as TransactionMetadata)
      : ((transaction as AccountTransaction).meta as TransactionMetadata);

    if (!tx.hash || tx?.TransactionType !== 'OfferCreate' || typeof metadata !== 'object') return;

    const parsedNodes: Node[] = [];
    const tradeOffers: Offer[] = [];

    if (tx.Account === account && tx.Sequence === sequence) {
      metadata.AffectedNodes.forEach((affectedNode: Node) => {
        const offer = getOfferFromNode(affectedNode);
        if (offer && offer.Account !== account) {
          tradeOffers.push(offer);
          parsedNodes.push(affectedNode);
        }
      });

      previousTxnHash = undefined;
    } else {
      if (tx.Account !== account) {
        metadata.AffectedNodes.forEach((affectedNode: Node) => {
          const offer = getOfferFromNode(affectedNode);
          if (offer && offer.index === offerLedgerIndex) {
            previousTxnHash = offer.PreviousTxnID;

            // In this case, the Transaction is the Trade data, with the Offer's amounts
            const tradeOffer = {
              ...getOfferFromTransaction(tx),
              PreviousTxnID: offer.PreviousTxnID,
              TakerGets: offer.TakerGets,
              TakerPays: offer.TakerPays,
            } as Offer;
            if (!tradeOffer) return;

            tradeOffers.push(tradeOffer);
            parsedNodes.push(affectedNode);
          }
        });
      }
    }

    if (!tradeOffers.length) return;

    // Strip out the `meta` prop in case the transaction is of type TxResponse['result']
    const { meta, ...txData } = tx;

    return {
      transaction: {
        ...txData,
      },
      metadata: {
        ...metadata,
        AffectedNodes: parsedNodes,
      } as TransactionMetadata,
      offers: tradeOffers,
      previousTxnId: previousTxnHash,
      date: tx.date || txData.date || unixTimeToRippleTime(0),
    };
  };

  /**
   * Set things up
   */
  const { account, sequence } = parseOrderId(id);

  const transactions: TransactionData<OfferCreate>[] = [];

  let status = OrderStatus.Open;
  let previousTxnId: string | undefined;
  let previousTxnData: TransactionData<OfferCreate> | undefined;

  /**
   * Get the most recent Transaction to affect our Order
   */
  const ledgerOffer = await fetchOfferEntry(this, id);

  if (ledgerOffer) {
    previousTxnId = ledgerOffer.PreviousTxnID;
    const previousTxnResponse = await fetchTxn(this, previousTxnId);
    if (!previousTxnResponse) {
      previousTxnId = undefined;
      return;
    }
    if (typeof previousTxnResponse?.result.meta !== 'object') return;
    previousTxnData = parseTransaction(id, previousTxnResponse);
  } else {
    // This is to prevent us spending forever searching through an account's Transactions for the Order
    const maxSearch = params.max_search || 500;

    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;
    let page = 1;

    while (hasNextPage) {
      const accountTxResponse = await fetchAccountTxns(this, account, limit, marker);
      if (!accountTxResponse) return;
      marker = accountTxResponse.result.marker;

      accountTxResponse.result.transactions.sort((a, b) => (b.tx?.date || 0) - (a.tx?.date || 0));

      for (const transaction of accountTxResponse.result.transactions) {
        previousTxnData = parseTransaction(id, transaction);
        if (previousTxnData) break;
      }

      if (previousTxnData || !marker || limit * page >= maxSearch) hasNextPage = false;
      else page += 1;
    }
  }

  if (previousTxnData) {
    transactions.push(previousTxnData);
    previousTxnId = previousTxnData.previousTxnId;
  } else {
    throw new BadResponse(`Could not find Transaction history for Order ${id}`);
  }

  /**
   * Build a Transaction history for this Order
   */
  while (previousTxnId) {
    const previousTxnResponse = await fetchTxn(this, previousTxnId);
    if (previousTxnResponse) {
      previousTxnData = parseTransaction(id, previousTxnResponse);
      if (previousTxnData) {
        transactions.push(previousTxnData);
        previousTxnId = previousTxnData.previousTxnId;
      }
    }
  }

  const trades: Trade[] = [];
  let order: Order | undefined;
  let filled = 0;

  /**
   * Parse the Transaction history for Trade and Order objects
   */
  transactions.sort((a, b) => a.date - b.date);

  for (const transactionData of transactions) {
    const { transaction, offers, date } = transactionData;

    for (const offer of offers) {
      const source = transaction.Account !== account ? transaction : offer;

      if (!source.Sequence) continue;

      const side = source.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

      const baseAmount = source[getBaseAmountKey(side)];
      const quoteAmount = source[getQuoteAmountKey(side)];

      const baseRate = parseFloat(await fetchTransferRate(this, baseAmount));
      const quoteRate = parseFloat(await fetchTransferRate(this, quoteAmount));

      const baseValue = parseAmountValue(baseAmount);
      const quoteValue = parseAmountValue(quoteAmount);

      const price = quoteValue / baseValue;
      const cost = baseValue * price;

      const feeRate = side === OrderSide.Buy ? quoteRate : baseRate;
      const feeCost = baseValue * feeRate;

      filled += baseValue;

      const trade = {
        id: getOrderOrTradeId(source.Account, source.Sequence),
        order: id,
        datetime: rippleTimeToISOTime(date || 0),
        timestamp: rippleTimeToUnixTime(date || 0),
        symbol: getMarketSymbol(baseAmount, quoteAmount),
        type: OrderType.Limit,
        side: side,
        amount: baseValue.toString(),
        price: price.toString(),
        takerOrMaker: getTakerOrMaker(side),
        cost: cost.toString(),
        info: { [transaction.Account !== account ? 'transaction' : 'offer']: source },
      } as Trade;

      if (feeCost != 0) {
        trade.fee = {
          currency: getAmountCurrencyCode(side === OrderSide.Buy ? quoteAmount : baseAmount),
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

      const side = source.Flags === OfferCreateFlags.tfSell ? OrderSide.Sell : OrderSide.Buy;

      let orderTimeInForce = OrderTimeInForce.GoodTillCanceled;
      if (source.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = OrderTimeInForce.PostOnly;
      else if (source.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = OrderTimeInForce.FillOrKill;
      else if (source.Flags === OfferCreateFlags.tfImmediateOrCancel)
        orderTimeInForce = OrderTimeInForce.ImmediateOrCancel;

      const baseAmount = source[getBaseAmountKey(side)];
      const quoteAmount = source[getQuoteAmountKey(side)];

      const baseRate = parseFloat(await fetchTransferRate(this, baseAmount));
      const quoteRate = parseFloat(await fetchTransferRate(this, quoteAmount));

      const baseValue = parseAmountValue(baseAmount);
      const quoteValue = parseAmountValue(quoteAmount);

      const orderPrice = quoteValue / baseValue;
      const cost = filled * orderPrice;

      const feeRate = side === OrderSide.Buy ? quoteRate : baseRate;
      const feeCost = filled * feeRate;

      order = {
        id,
        clientOrderId: hashOfferId(source.Account, source.Sequence),
        datetime: rippleTimeToISOTime(date),
        timestamp: rippleTimeToUnixTime(date),
        lastTradeTimestamp: rippleTimeToUnixTime(transactions[0].date || 0),
        status,
        symbol: getMarketSymbol(baseAmount, quoteAmount),
        type: OrderType.Limit,
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
          currency: getAmountCurrencyCode(side === OrderSide.Buy ? quoteAmount : baseAmount),
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
