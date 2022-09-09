import { BadResponse } from 'ccxt';
import _ from 'lodash';
import {
  AccountTxRequest,
  AccountTxResponse,
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  OfferCreate,
  OfferCreateFlags,
  RippledError,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TransactionMetadata,
  TxRequest,
  TxResponse,
  unixTimeToRippleTime,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
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
  XrplErrorTypes,
  TxResult,
  TransactionData,
  OrderSide,
  OrderType,
  Order,
  OrderStatus,
  Trade,
  OrderTimeInForce,
  AccountAddress,
  // Transaction,
} from '../models';
import {
  fetchTransferRate,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOrderOrTradeId,
  getQuoteAmountKey,
  getTakerOrMaker,
  parseOrderId,
  subtractAmounts,
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
   * Returns an Offer Ledger object from an AffectedNode
   */
  const getOfferFromNode = (node: Node): Offer | undefined => {
    const { PreviousTxnID, LedgerIndex, LedgerEntryType, FinalFields, PreviousFields } = Object.values(node)[0];

    if (LedgerEntryType !== 'Offer' || !FinalFields) return;

    return {
      ...FinalFields,
      index: LedgerIndex,
      PreviousTxnID: FinalFields.PreviousTxnID || PreviousTxnID,
      TakerGets: PreviousFields
        ? subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount)
        : FinalFields.TakerGets,
      TakerPays: PreviousFields
        ? subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount)
        : FinalFields.TakerPays,
    };
  };

  const getOfferFromTransaction = (transaction: TransactionData<OfferCreate>['transaction']): Offer | undefined => {
    if (transaction.TransactionType !== 'OfferCreate') return;

    const { Account, Flags, Sequence, TakerGets, TakerPays } = transaction;

    if (!Sequence) return;

    return {
      Account,
      BookDirectory: '',
      BookNode: '0',
      LedgerEntryType: 'Offer',
      Flags: Flags as OfferCreateFlags,
      OwnerNode: '0',
      Sequence,
      TakerGets,
      TakerPays,
      index: hashOfferId(Account, Sequence),
      PreviousTxnID: '',
      PreviousTxnLgrSeq: 0,
    } as Offer;
  };

  /**
   * Filter out irrelevant Transactions and parse AffectedNodes
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
      // Look for Trades
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
        // This is a Trade
        metadata.AffectedNodes.forEach((affectedNode: Node) => {
          const offer = getOfferFromNode(affectedNode);
          if (!offer) return;

          if (offer.index === offerLedgerIndex) {
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
   * Fetches an Offer's Ledger entry, or returns undefined if not found
   */
  const fetchOfferEntry = async (orderId: AccountSequencePair): Promise<Offer | undefined> => {
    const { account, sequence } = parseOrderId(orderId);
    try {
      const offerResult = await this.request({
        command: 'ledger_entry',
        ledger_index: params.ledger_index || 'validated',
        offer: {
          account,
          seq: sequence,
        },
      } as LedgerEntryRequest);
      return offerResult.result.node as Offer;
    } catch (err: unknown) {
      const error = err as RippledError;
      if ((error.data as ErrorResponse).error !== XrplErrorTypes.EntryNotFound) throw error;
    }
  };

  /**
   * Fetches a Transaction, or returns undefined if not found
   */
  const fetchTxn = async (txnHash: string): Promise<TxResponse | undefined> => {
    try {
      return await this.request({
        command: 'tx',
        transaction: txnHash,
      } as TxRequest);
    } catch (err: unknown) {
      const error = err as RippledError;
      if ((error.data as ErrorResponse).error !== XrplErrorTypes.TxnNotFound) throw error;
    }
  };

  /**
   * Fetches a list of AccountTransactions, or returns undefined if not found
   */
  const fetchAccountTxns = async (
    account: AccountAddress,
    limit?: number,
    marker?: any
  ): Promise<AccountTxResponse | undefined> => {
    try {
      return await this.request({
        command: 'account_tx',
        account,
        ledger_index_min: -1,
        ledger_index_max: -1,
        binary: false,
        limit,
        marker,
      } as AccountTxRequest);
    } catch (err: unknown) {
      const error = err as RippledError;
      if ((error.data as ErrorResponse).error !== XrplErrorTypes.TxnNotFound) throw error;
    }
  };

  /**
   * Fetch all Transactions for a given Order, starting with the most recent
   */
  const { account, sequence } = parseOrderId(id);

  const transactions: TransactionData<OfferCreate>[] = [];

  let orderStatus = OrderStatus.Open;
  let previousTxnId: string | undefined;
  let previousTxnData: TransactionData<OfferCreate> | undefined;

  /**
   * Get the most recent Transaction to affect our Order
   */
  const ledgerOffer = await fetchOfferEntry(id);

  if (ledgerOffer) {
    previousTxnId = ledgerOffer.PreviousTxnID;
    const previousTxnResponse = await fetchTxn(previousTxnId);
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
      const accountTxResponse = await fetchAccountTxns(account, limit, marker);
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
    const previousTxnResponse = await fetchTxn(previousTxnId);
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
  let orderFilled = 0;

  /**
   * Parse the Transaction history for Trade and Order objects
   */
  transactions.sort((a, b) => a.date - b.date);

  for (const transactionData of transactions) {
    const { transaction, offers, date } = transactionData;

    for (const offer of offers) {
      const tradeSource = transaction.Account !== account ? transaction : offer;

      if (!tradeSource.Sequence) continue;

      const tradeSide = tradeSource.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

      const tradeBaseAmount = tradeSource[getBaseAmountKey(tradeSide)];
      const tradeQuoteAmount = tradeSource[getQuoteAmountKey(tradeSide)];

      const tradeBaseRate = parseFloat(await fetchTransferRate(this, tradeBaseAmount));
      const tradeQuoteRate = parseFloat(await fetchTransferRate(this, tradeQuoteAmount));

      const tradeBaseValue = parseAmountValue(tradeBaseAmount);
      const tradeQuoteValue = parseAmountValue(tradeQuoteAmount);

      const tradePrice = tradeQuoteValue / tradeBaseValue;
      const tradeCost = tradeBaseValue * tradePrice;

      const tradeFeeRate = tradeSide === OrderSide.Buy ? tradeQuoteRate : tradeBaseRate;
      const tradeFeeCost = tradeBaseValue * tradeFeeRate;

      orderFilled += tradeBaseValue;

      const trade = {
        id: getOrderOrTradeId(tradeSource.Account, tradeSource.Sequence),
        order: id,
        datetime: rippleTimeToISOTime(date || 0),
        timestamp: rippleTimeToUnixTime(date || 0),
        symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
        type: OrderType.Limit,
        side: tradeSide,
        amount: tradeBaseValue.toString(),
        price: tradePrice.toString(),
        takerOrMaker: getTakerOrMaker(tradeSide),
        cost: tradeCost.toString(),
        info: { [transaction.Account !== account ? 'transaction' : 'offer']: tradeSource },
      } as Trade;

      if (tradeFeeCost != 0) {
        trade.fee = {
          currency: getAmountCurrencyCode(tradeSide === OrderSide.Buy ? tradeQuoteAmount : tradeBaseAmount),
          cost: tradeFeeCost.toString(),
          rate: tradeFeeRate.toString(),
          percentage: true,
        };
      }

      trades.push(trade);
    }

    if (transaction.Account === account && transaction.Sequence === sequence) {
      const orderSource = transaction as OfferCreate;

      if (!orderSource.Sequence) return;

      const orderSide = orderSource.Flags === OfferCreateFlags.tfSell ? OrderSide.Sell : OrderSide.Buy;

      let orderTimeInForce = OrderTimeInForce.GoodTillCanceled;
      if (orderSource.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = OrderTimeInForce.PostOnly;
      else if (orderSource.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = OrderTimeInForce.FillOrKill;
      else if (orderSource.Flags === OfferCreateFlags.tfImmediateOrCancel)
        orderTimeInForce = OrderTimeInForce.ImmediateOrCancel;

      // const orderBaseAmount = orderSource.TakerGets;
      // const orderQuoteAmount = orderSource.TakerPays;
      const orderBaseAmount = orderSource[getBaseAmountKey(orderSide)];
      const orderQuoteAmount = orderSource[getQuoteAmountKey(orderSide)];

      const orderBaseRate = parseFloat(await fetchTransferRate(this, orderBaseAmount));
      const orderQuoteRate = parseFloat(await fetchTransferRate(this, orderQuoteAmount));

      const orderBaseValue = parseAmountValue(orderBaseAmount);
      const orderQuoteValue = parseAmountValue(orderQuoteAmount);

      const orderPrice = orderQuoteValue / orderBaseValue;
      const orderCost = orderFilled * orderPrice;

      const orderFeeRate = orderSide === OrderSide.Buy ? orderQuoteRate : orderBaseRate;
      const orderFeeCost = orderFilled * orderFeeRate;

      order = {
        id,
        clientOrderId: hashOfferId(orderSource.Account, orderSource.Sequence),
        datetime: rippleTimeToISOTime(date),
        timestamp: rippleTimeToUnixTime(date),
        lastTradeTimestamp: rippleTimeToUnixTime(transactions[0].date || 0),
        status: orderStatus,
        symbol: getMarketSymbol(orderBaseAmount, orderQuoteAmount),
        type: OrderType.Limit,
        timeInForce: orderTimeInForce,
        side: orderSide,
        amount: orderBaseValue.toString(),
        price: orderPrice.toString(),
        average: (trades.length ? orderFilled / trades.length : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
        filled: orderFilled.toString(),
        remaining: (orderBaseValue - orderFilled).toString(),
        cost: orderCost.toString(),
        trades,
        info: { transactionData },
      };

      if (orderFeeCost != 0) {
        order.fee = {
          currency: getAmountCurrencyCode(orderSide === OrderSide.Buy ? orderQuoteAmount : orderBaseAmount),
          cost: orderFeeCost.toString(),
          rate: orderFeeRate.toString(),
          percentage: true,
        };
      }
    }
  }

  return order;

  // /**
  //  * Look up Offer data
  //  */

  // const offer = await fetchOffer(this, account, sequence, params);
  // if (!offer) throw new OrderNotFound(`Order ${id} not found`);

  // /**
  //  * Prepare Order return data
  //  */
  // const orderTrades: Trade[] = [];
  // const orderSide = getOrderSideFromOffer(offer);
  // const orderIdHash = hashOfferId(account, sequence);

  // let orderStatus = OrderStatus.Open;
  // let orderTimestamp = rippleTimeToUnixTime(0);
  // let orderTimeInForce = OrderTimeInForce.GoodTillCanceled;

  // let orderFilled = 0;
  // let orderBaseAmount: Amount | undefined;
  // let orderQuoteAmount: Amount | undefined;

  // /**
  //  * Loop back through Transactions to get Trades data
  //  */
  // let previousTxnId: string | undefined = offer.PreviousTxnID;
  // let lastTradeTimestamp;
  // let totalTradesPrice = 0;
  // let requestNonce = 0;

  // while (previousTxnId) {
  //   const previousTxResponse: TxResponse = await this.request({
  //     id: (requestNonce += 1),
  //     command: 'tx',
  //     transaction: previousTxnId,
  //     binary: false,
  //   } as TxRequest);

  //   const previousTx = previousTxResponse.result;

  //   if (
  //     !previousTx.meta ||
  //     typeof previousTx.meta !== 'object' ||
  //     previousTx.TransactionType !== 'OfferCreate' ||
  //     !previousTx.Sequence
  //   ) {
  //     throw new BadResponse(`Bad data for Order's previous Transaction with hash ${previousTx.hash}`);
  //   }

  //   if (!lastTradeTimestamp) lastTradeTimestamp = previousTx.date;

  //   if (previousTx.Account !== account) {
  //     // Someone else's Transaction - look up how it affected ours

  //     let affectedOffer: Offer | undefined;
  //     for (const node of previousTx.meta.AffectedNodes) {
  //       if (node.hasOwnProperty('ModifiedNode')) {
  //         const { LedgerEntryType, LedgerIndex, FinalFields, PreviousFields, PreviousTxnID } = (node as ModifiedNode)
  //           .ModifiedNode;
  //         if (LedgerEntryType !== 'Offer' || LedgerIndex !== orderIdHash || !FinalFields || !PreviousFields) continue;
  //         affectedOffer = {
  //           ...(FinalFields as unknown as Offer),
  //           TakerGets: subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount),
  //           TakerPays: subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount),
  //         };
  //         previousTxnId = PreviousTxnID;
  //         break;
  //       } else if (node.hasOwnProperty('DeletedNode')) {
  //         const { LedgerEntryType, LedgerIndex, FinalFields, PreviousFields } = (node as DeletedNode).DeletedNode;
  //         if (LedgerEntryType !== 'Offer' || LedgerIndex !== orderIdHash) continue;
  //         affectedOffer = FinalFields as unknown as Offer;
  //         if (PreviousFields) {
  //           affectedOffer.TakerGets = subtractAmounts(
  //             PreviousFields.TakerGets as Amount,
  //             FinalFields.TakerGets as Amount
  //           );
  //           affectedOffer.TakerPays = subtractAmounts(
  //             PreviousFields.TakerPays as Amount,
  //             FinalFields.TakerPays as Amount
  //           );
  //         }
  //         previousTxnId = affectedOffer.PreviousTxnID;
  //         orderStatus = OrderStatus.Closed;
  //         break;
  //       }
  //     }

  //     if (!affectedOffer) {
  //       throw new BadResponse("Could not find given Offer in its most recent Transaction's list of affected offers");
  //     }

  //     console.log('affectedOffer');
  //     console.log(affectedOffer);

  //     const trade = await getTrade(this, id, affectedOffer, previousTxResponse);

  //     orderTrades.push(trade);

  //     totalTradesPrice += parseFloat(trade.price);
  //     orderFilled += parseFloat(trade.amount);
  //   } else {
  //     // This was our Transaction - look for Offers it modified

  //     if (previousTx.Flags === OfferCreateFlags.tfPassive) orderTimeInForce = OrderTimeInForce.PostOnly;
  //     else if (previousTx.Flags === OfferCreateFlags.tfFillOrKill) orderTimeInForce = OrderTimeInForce.FillOrKill;
  //     else if (previousTx.Flags === OfferCreateFlags.tfImmediateOrCancel)
  //       orderTimeInForce = OrderTimeInForce.ImmediateOrCancel;

  //     orderBaseAmount = orderSide === OrderSide.Buy ? previousTx.TakerPays : previousTx.TakerGets;
  //     orderQuoteAmount = orderSide === OrderSide.Buy ? previousTx.TakerGets : previousTx.TakerPays;

  //     let didCreateOffer = false;
  //     for (const node of previousTx.meta.AffectedNodes) {
  //       if (node.hasOwnProperty('CreatedNode')) {
  //         const { LedgerEntryType, NewFields } = (node as CreatedNode).CreatedNode;
  //         if (LedgerEntryType !== 'Offer') continue;
  //         didCreateOffer = NewFields.Account === account || NewFields.Sequence === parseInt(id);
  //       }

  //       const affectedOffer = getTradeOfferFromNode(node, account);

  //       if (affectedOffer) {
  //         const trade = await getTrade(this, id, affectedOffer, previousTxResponse);
  //         orderTrades.push(trade);
  //         totalTradesPrice += parseFloat(trade.price);
  //         orderFilled += parseFloat(trade.amount);
  //       }
  //     }
  //     previousTxnId = undefined;

  //     if (previousTx.meta.TransactionResult !== 'tesSUCCESS') {
  //       orderStatus = OrderStatus.Rejected;
  //     } else if (!didCreateOffer) {
  //       if (orderTimeInForce === OrderTimeInForce.FillOrKill && orderFilled !== parseAmountValue(orderBaseAmount))
  //         orderStatus = OrderStatus.Canceled;
  //       else if (orderTimeInForce === OrderTimeInForce.ImmediateOrCancel && orderFilled == 0)
  //         orderStatus = OrderStatus.Canceled;
  //       else orderStatus = OrderStatus.Closed;
  //     }
  //     orderTimestamp = previousTx.date || orderTimestamp;
  //   }
  // }

  // if (!orderBaseAmount || !orderQuoteAmount)
  //   throw new BaseError('An unknown error occurred while looking up Order - no amounts found on XRPL Ledger object');

  // const orderBaseRate = parseFloat(await fetchTransferRate(this, orderBaseAmount));
  // const orderQuoteRate = parseFloat(await fetchTransferRate(this, orderQuoteAmount));

  // const orderBaseValue = parseAmountValue(orderBaseAmount);
  // const orderQuoteValue = parseAmountValue(orderQuoteAmount);

  // const orderPrice = orderQuoteValue / orderBaseValue;
  // const orderCost = orderFilled * orderPrice;

  // const orderFeeCurrency = getAmountCurrencyCode(orderSide === OrderSide.Buy ? orderQuoteAmount : orderBaseAmount);
  // const orderFeeRate = orderSide === OrderSide.Buy ? orderQuoteRate : orderBaseRate;
  // const orderFees = orderFilled * orderFeeRate;

  // const orderFee: Fee = {
  //   currency: orderFeeCurrency,
  //   cost: orderFees.toString(),
  // };

  // if (orderFee.cost != 0) {
  //   orderFee.rate = orderFeeRate.toString();
  //   orderFee.percentage = true;
  // }

  // /**
  //  * Compile final Order object and return
  //  */
  // const order: Order = {
  //   id,
  //   clientOrderId: orderIdHash,
  //   datetime: rippleTimeToISOTime(orderTimestamp),
  //   timestamp: rippleTimeToUnixTime(orderTimestamp),
  //   lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
  //   status: orderStatus,
  //   symbol: getMarketSymbol(orderBaseAmount, orderQuoteAmount),
  //   type: OrderType.Limit,
  //   timeInForce: orderTimeInForce,
  //   side: orderSide,
  //   amount: orderBaseValue.toString(),
  //   price: orderPrice.toString(),
  //   average: (orderTrades.length ? totalTradesPrice / orderTrades.length : 0).toString(), // as cool as dividing by zero is, we shouldn't do it
  //   filled: orderFilled.toString(),
  //   remaining: (orderBaseValue - orderFilled).toString(),
  //   cost: orderCost.toString(),
  //   trades: orderTrades,
  //   fee: orderFee,
  //   info: { Offer: offer },
  // };

  // return order;
}

export default fetchOrder;
