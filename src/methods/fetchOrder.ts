// import { BadResponse, BaseError, OrderNotFound } from 'ccxt';
import _ from 'lodash';
import {
  AccountTxRequest,
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  // OfferCancel,
  OfferCreate,
  // OfferCreateFlags,
  RippledError,
  TransactionAndMetadata,
  // rippleTimeToISOTime,
  // rippleTimeToUnixTime,
  TransactionMetadata,
  TxRequest,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
// import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
// import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
// import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { DEFAULT_LIMIT } from '../constants';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  // OrderType,
  // OrderStatus,
  // OrderTimeInForce,
  ModifiedNode,
  DeletedNode,
  // CreatedNode,
  // Fee,
  // OrderSide,
  // Order,
  // Trade,
  AccountSequencePair,
  AccountTransaction,
  Node,
  XrplErrorTypes,
  TxResult,
  CreatedNode,
  TransactionData,
} from '../models';
import {
  // fetchOffer,
  // fetchTransferRate,
  // getAmountCurrencyCode,
  // getMarketSymbol,
  // getTradeOfferFromNode,
  // getOrderSideFromOffer,
  // getTrade,
  parseOrderId,
  subtractAmounts,
  // subtractAmounts,
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
   * Filter out irrelevant AffectedNodes
   *
   * If given an OrderId, returns Nodes with the same Account and Sequence
   * If not, return all Modified/Deleted Offers
   */
  // const parseAffectedNodes = (orderId: AccountSequencePair, affectedNodes: Node[]): Node[] => {
  //   // if (orderId) {
  //   //   const { account, sequenceNumber } = parseOrderId(orderId);
  //   //   const result = _.find(affectedNodes, (affectedNode: Node) => {
  //   //     const ledgerObject = affectedNode.hasOwnProperty('ModifiedNode')
  //   //       ? (affectedNode as ModifiedNode).ModifiedNode.FinalFields
  //   //       : affectedNode.hasOwnProperty('DeletedNode')
  //   //       ? (affectedNode as DeletedNode).DeletedNode.FinalFields
  //   //       : undefined;
  //   //     return (
  //   //       ledgerObject?.LedgerEntryType === 'Offer' &&
  //   //       ledgerObject?.Account === account &&
  //   //       ledgerObject?.Sequence === sequenceNumber
  //   //     );
  //   //   });
  //   //   return result ? [result] : [];
  //   // } else {
  //   //   return _.filter(affectedNodes, (affectedNode: Node) => {
  //   //     if (affectedNode.hasOwnProperty('ModifiedNode')) {
  //   //       const fields = (affectedNode as ModifiedNode).ModifiedNode.FinalFields;
  //   //       return fields?.LedgerEntryType === 'Offer';
  //   //     } else if (affectedNode.hasOwnProperty('DeletedNode')) {
  //   //       const fields = (affectedNode as DeletedNode).DeletedNode.FinalFields;
  //   //       return fields?.LedgerEntryType === 'Offer';
  //   //     } else {
  //   //       return false;
  //   //     }
  //   //   });
  //   // }
  // };

  /**
   * Returns an Offer Ledger object from an AffectedNode
   */
  const getOfferFromNode = (node: Node): Offer | undefined => {
    let ledgerEntryType;
    let fields: Offer | undefined;
    let previousFields: Offer | undefined;

    if (node.hasOwnProperty('ModifiedNode')) {
      ledgerEntryType = (node as ModifiedNode).ModifiedNode.LedgerEntryType;
      fields = (node as ModifiedNode).ModifiedNode.FinalFields as unknown as Offer;
      if (fields) {
        fields.PreviousTxnID = (node as ModifiedNode).ModifiedNode.PreviousTxnID || '';
        fields.PreviousTxnLgrSeq = (node as ModifiedNode).ModifiedNode.PreviouTxnLgrSeq || 0;
      }
      previousFields = (node as ModifiedNode).ModifiedNode.PreviousFields as unknown as Offer;
    } else if (node.hasOwnProperty('DeletedNode')) {
      ledgerEntryType = (node as DeletedNode).DeletedNode.LedgerEntryType;
      fields = (node as DeletedNode).DeletedNode.FinalFields as unknown as Offer;
      previousFields = (node as DeletedNode).DeletedNode.PreviousFields as unknown as Offer;
    } else if (node.hasOwnProperty('CreatedNode')) {
      ledgerEntryType = (node as CreatedNode).CreatedNode.LedgerEntryType;
      fields = (node as CreatedNode).CreatedNode.NewFields as unknown as Offer;
    }

    if (ledgerEntryType !== 'Offer' || !fields) return;

    return {
      ...(fields as unknown as Offer),
      TakerGets: previousFields
        ? subtractAmounts(previousFields.TakerGets as Amount, fields.TakerGets as Amount)
        : (fields as unknown as Offer).TakerGets,
      TakerPays: previousFields
        ? subtractAmounts(previousFields.TakerPays as Amount, fields.TakerPays as Amount)
        : (fields as unknown as Offer).TakerPays,
    };
  };

  /**
   * Filter out irrelevant Transactions and parse AffectedNodes
   */
  const parseTransaction = (
    orderId: AccountSequencePair,
    transaction: TxResponse | AccountTransaction
  ): TransactionData | undefined => {
    const { account, sequenceNumber } = parseOrderId(orderId);
    const orderLedgerIndex = hashOfferId(account, sequenceNumber);

    const tx = transaction.hasOwnProperty('result')
      ? ((transaction as TxResponse).result as TxResult<OfferCreate>)
      : ((transaction as AccountTransaction).tx as TxResult<OfferCreate>);

    const meta = transaction.hasOwnProperty('result')
      ? ((transaction as TxResponse).result.meta as TransactionMetadata)
      : ((transaction as AccountTransaction).meta as TransactionMetadata);

    if (!tx.hash || tx?.TransactionType !== 'OfferCreate' || typeof meta !== 'object') return;

    const parsedNodes: Node[] = [];
    const nodeOffers: Offer[] = [];

    if (tx.Account === account && tx.Sequence === sequenceNumber) {
      meta.AffectedNodes.forEach((affectedNode: Node) => {
        const nodeOffer = getOfferFromNode(affectedNode);
        if (!nodeOffer || nodeOffer.Account === account) return;
        parsedNodes.push(affectedNode);
        nodeOffers.push(nodeOffer);
      });
      // parsedNodes = meta.AffectedNodes.filter((affectedNode: Node) => {
      //   const node = affectedNode.hasOwnProperty('ModifiedNode')
      //     ? ((affectedNode as ModifiedNode).ModifiedNode.FinalFields as unknown as Offer)
      //     : affectedNode.hasOwnProperty('DeletedNode')
      //     ? ((affectedNode as DeletedNode).DeletedNode.FinalFields as unknown as Offer)
      //     : (undefined as unknown as Offer);
      //   return node?.LedgerEntryType === 'Offer' && node?.Account !== account;
      // });
      previousTxnId = undefined;
    } else {
      const foundNode = meta.AffectedNodes.find((affectedNode: Node) => {
        if (affectedNode.hasOwnProperty('ModifiedNode')) {
          const { LedgerEntryType, LedgerIndex, PreviousTxnID } = (affectedNode as ModifiedNode).ModifiedNode;
          if (LedgerEntryType === 'Offer' && PreviousTxnID && LedgerIndex === orderLedgerIndex) {
            previousTxnId = PreviousTxnID;
            return true;
          }
        } else if (affectedNode.hasOwnProperty('DeletedNode')) {
          const { LedgerEntryType, LedgerIndex, FinalFields } = (affectedNode as DeletedNode).DeletedNode;
          if (LedgerEntryType === 'Offer' && LedgerIndex === orderLedgerIndex) {
            previousTxnId = (FinalFields as unknown as Offer).PreviousTxnID;
            return true;
          }
        }
      });
      // this Txn doesn't involve our Order - return undefined
      if (!foundNode) return;
      parsedNodes = [foundNode];
    }

    console.log('\nparseTransaction() parsedNodes: %O', parsedNodes);

    return {
      transaction: {
        ...tx,
      },
      metadata: {
        ...meta,
        AffectedNodes: parsedNodes,
      } as TransactionMetadata,
    };
  };

  /**
   * Fetches an Offer's Ledger entry, or undefined if not found
   */
  const fetchOfferEntry = async (orderId: AccountSequencePair): Promise<Offer | undefined> => {
    const { account, sequenceNumber } = parseOrderId(orderId);
    try {
      const offerResult = await this.request({
        command: 'ledger_entry',
        ledger_index: params.ledger_index || 'validated',
        offer: {
          account,
          seq: sequenceNumber,
        },
      } as LedgerEntryRequest);
      return offerResult.result.node as Offer;
    } catch (err: unknown) {
      const error = err as RippledError;
      if ((error.data as ErrorResponse).error !== XrplErrorTypes.EntryNotFound) throw error;
    }
  };

  /**
   * Fetches a Transaction, or undefined if not found
   */
  const fetchTxn = async (txnHash: string): Promise<TxResponse | undefined> => {
    try {
      return await this.request({
        command: 'tx',
        transaction: txnHash,
      } as TxRequest);
    } catch (err: unknown) {
      const error = err as RippledError;
      if ((error.data as ErrorResponse).error !== XrplErrorTypes.EntryNotFound) throw error;
    }
  };

  /**
   * Fetch all Transactions for a given Order, starting with the most recent
   */
  const { account, sequenceNumber } = parseOrderId(id);
  const orderLedgerIndex = hashOfferId(account, sequenceNumber);

  console.log('\nOrder %s LedgerIndex: %s', id, orderLedgerIndex);

  const transactions: TxResult<OfferCreate>[] = [];

  let previousTxnId: string | undefined;
  let previousTxnData: TransactionAndMetadata | undefined;

  const ledgerOffer = await fetchOfferEntry(id);

  // Get Order's PreviousTxnID
  if (ledgerOffer) {
    previousTxnId = ledgerOffer.PreviousTxnID;
    const previousTxnResponse = await fetchTxn(previousTxnId);
    if (!previousTxnResponse || typeof previousTxnResponse.result.meta !== 'object') {
      previousTxnId = undefined;
      return;
    }
    const { meta, ...previousTxn } = previousTxnResponse.result;
    previousTxnData = { metadata: meta, transaction: previousTxn };
  } else {
    const maxSearch = params.max_search || 500;

    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;
    let page = 1;

    while (hasNextPage) {
      const accountTxResponse = await this.request({
        command: 'account_tx',
        account,
        ledger_index_min: -1,
        ledger_index_max: -1,
        binary: false,
        limit,
        marker,
      } as AccountTxRequest);

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

  // while (previousTxnId) {
  //   const previousTxnResponse = await this.request({
  //     command: 'tx',
  //     transaction: previousTxnId,
  //   } as TxRequest);
  //   console.log('previousTxnResponse: %O', previousTxnResponse);
  //   previousTxnId = undefined;
  //   // transactions.push(previousTxn);
  // }

  console.log('\npreviousTxnId: %s', previousTxnId);
  console.log('\npreviousTxnData: %s', previousTxnData);
  console.log(JSON.stringify(previousTxnData));
  console.log(transactions);
  // console.log(JSON.stringify(transactions));

  return;

  // /**
  //  * Look up Offer data
  //  */

  // const offer = await fetchOffer(this, account, sequenceNumber, params);
  // if (!offer) throw new OrderNotFound(`Order ${id} not found`);

  // /**
  //  * Prepare Order return data
  //  */
  // const orderTrades: Trade[] = [];
  // const orderSide = getOrderSideFromOffer(offer);
  // const orderIdHash = hashOfferId(account, sequenceNumber);

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
