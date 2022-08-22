import { ArgumentsRequired, BaseError, OrderNotFound } from 'ccxt';
import _ from 'lodash';
import {
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  LedgerEntryResponse,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TxRequest,
  TxResponse,
} from 'xrpl';
// import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  OrderSide,
  OrderType,
  OrderStatus,
  OrderTimeInForce,
  XrplErrorTypes,
  ModifiedNode,
  DeletedNode,
  // CreatedNode,
} from '../models';
import { Order, Trade } from '../models';
import {
  getBaseAmountKey,
  getMarketSymbol,
  // getOrderSideFromOffer,
  // getOfferNodes,
  // getOrderSideFromOffer,
  getOrderSideFromTx,
  // getOrderSideFromTx,
  getQuoteAmountKey,
  parseCurrencyAmount,
  stringToInt,
} from '../utils';

const handleLedgerEntryErrors = (offerResult: LedgerEntryResponse) => {
  if (offerResult.status === 'error') {
    const { error, error_message, error_code } = offerResult as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!offerResult.result.node) {
    throw new OrderNotFound('No object found for this Order');
  }
};

const handleTxErrors = (txResult: TxResponse) => {
  if (txResult.status === 'error') {
    const { error, error_message, error_code } = txResult as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!txResult.result) {
    throw new OrderNotFound('No transactions found');
  }
};

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

  const sequence = stringToInt(id);

  /**
   * Validate request
   */
  if (!sequence) throw new ArgumentsRequired('`id` field expects an integer as a string');
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
  const side = offer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  if (!symbol) symbol = getMarketSymbol(offer[getBaseAmountKey(side)], offer[getQuoteAmountKey(side)]);

  const trades: Trade[] = [];

  let status = OrderStatus.Open;
  let fee = 0;
  let totalTradesPrice = 0;
  let baseFilled = 0;
  let quoteFilled = 0;

  /**
   * Loop back through Transactions to get Trades data
   */
  const offerTransactions: TxResponse['result'][] = [];

  let offerCreateTx: TxResponse['result'] | undefined;
  let lastTradeTimestamp;
  let requestNonce = 0;

  // let hasPreviousTx = true;
  let previousTxnId: string | undefined = offer.PreviousTxnID;

  /**
   * Get a list of Transactions affecting this Offer
   */
  while (previousTxnId) {
    // console.log('PreviousTxnId: %s', previousTxnId);

    const previousTxResponse: TxResponse = await this.request({
      id: (requestNonce += 1),
      command: 'tx',
      transaction: previousTxnId,
      binary: false,
    } as TxRequest);

    handleTxErrors(previousTxResponse);

    const previousTx = previousTxResponse.result;

    console.log(previousTx);

    if (!previousTx.meta || typeof previousTx.meta !== 'object') {
      throw new BaseError('Unknown issue occurred - could not find metadata for Order transactions');
    } else if (previousTx.TransactionType !== 'OfferCreate') {
      throw new BaseError("Unknown issue occurred - Order's previous transaction was not OfferCreate");
    } else if (!previousTx.Sequence) {
      throw new BaseError('Unknown issue occurred - Sequence is missing from previous transaction object');
    }

    // Look for ModifiedNodes
    //  If previousTx isn't ours, check the ModifiedNodes for our offer
    //    Collate data about the previouxTx that modified our ModifiedOffer
    //    Use ModifiedOffer's PreviousTxnID
    //  If previousTx is ours, check the ModifiedNodes for offers
    //    For each modified offer, collate data about the ModifiedOffer our previouxTx modified
    //    No PreviousTxnID - this is our original transaction
    // Look for DeletedNodes
    //  If previousTx isn't ours, check the DeletedNodes for our offer
    //    Collate data about the previouxTx that deleted our ModifiedOffer
    //    Use DeletedOffer.FinalField's PreviousTxnID
    //  If previousTx is ours, check the DeletedNodes for offers
    //    For each deleted offer, collate data about the DeletedOffer our previouxTx modified
    //    No PreviousTxnID - this is our original transaction

    const previousTxSide = getOrderSideFromTx(previousTx);
    const previousTxBaseAmount = previousTx[getBaseAmountKey(previousTxSide)];
    const previousTxQuoteAmount = previousTx[getQuoteAmountKey(previousTxSide)];

    for (const node of previousTx.meta.AffectedNodes) {
      const modifiedNode = (node as ModifiedNode).ModifiedNode;
      const deletedNode = (node as DeletedNode).DeletedNode;

      if (modifiedNode?.LedgerEntryType !== 'Offer' && deletedNode?.LedgerEntryType !== 'Offer') continue;

      if (previousTx.Account !== account) {
        // This is not our Transaction, so one of the AffectedNodes is our Offer

        previousTxnId =
          modifiedNode?.PreviousTxnID || (deletedNode?.FinalFields['PreviousTxnID'] as string | undefined);

        // console.log('ModifiedNode: ', modifiedNode);
        // console.log('DeletedNode: ', deletedNode);
        console.log('previousTxnId: ', previousTxnId);

        const previousTxPrice = parseCurrencyAmount(previousTxBaseAmount) / parseCurrencyAmount(previousTxQuoteAmount);

        const trade: Trade = {
          id: previousTx.Sequence.toString(),
          order: id,
          datetime: rippleTimeToISOTime(previousTx.date || 0),
          timestamp: rippleTimeToUnixTime(previousTx.date || 0),
          symbol,
          type: OrderType.Limit,
          side: previousTxSide,
          amount: previousTxBaseAmount.toString(),
          price: previousTxPrice.toString(),
          takerOrMaker: previousTxSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
          cost: (parseCurrencyAmount(previousTxBaseAmount) * previousTxPrice).toString(),
          fee: {
            currency: 'XRP',
            cost: previousTx.Fee || '0',
          },
          info: { transaction: previousTx },
        };

        trades.push(trade);

        totalTradesPrice += previousTxPrice;
        baseFilled += parseCurrencyAmount(previousTxBaseAmount);
        quoteFilled += parseCurrencyAmount(previousTxQuoteAmount);

        if (deletedNode) {
          status = OrderStatus.Closed;
        }
        // } else if (previousTx.Account === account && previousTx.Sequence === sequence) {
        //   // Original OfferCreate txn

        //   previousTxnId = undefined;

        //   console.log('ModifiedNode: ', modifiedNode);
        //   console.log('DeletedNode: ', deletedNode);
        //   console.log('previousTxnId: ', previousTxnId);

        //   const nodeFinal =
        //     (modifiedNode?.FinalFields as unknown as Offer | undefined) ||
        //     (deletedNode?.FinalFields as unknown as Offer | undefined);
        //   const nodePrevious = modifiedNode?.FinalFields as unknown as Offer | undefined;

        //   if (!nodeFinal || (modifiedNode && !nodePrevious)) {
        //     throw new BaseError(
        //       `FinalFields or PreviousFields is missing from Ledger object ${
        //         modifiedNode.LedgerIndex || deletedNode.LedgerIndex
        //       }`
        //     );
        //   }

        //   const tradeSide = getOrderSideFromOffer(nodeFinal);
        //   const tradeBaseValue = nodePrevious
        //     ? parseCurrencyAmount(nodePrevious[getBaseAmountKey(tradeSide)], nodeFinal[getBaseAmountKey(tradeSide)])
        //     : parseCurrencyAmount(nodeFinal[getBaseAmountKey(tradeSide)]);
        //   const tradeQuoteValue = nodePrevious
        //     ? parseCurrencyAmount(nodePrevious[getQuoteAmountKey(tradeSide)], nodeFinal[getQuoteAmountKey(tradeSide)])
        //     : parseCurrencyAmount(nodeFinal[getQuoteAmountKey(tradeSide)]);
        //   const tradePrice = tradeBaseValue / tradeQuoteValue;

        //   const trade: Trade = {
        //     id: (nodeFinal?.Sequence || nodeFinal?.Sequence).toString(),
        //     order: id,
        //     datetime: rippleTimeToISOTime(previousTx.date || 0),
        //     timestamp: rippleTimeToUnixTime(previousTx.date || 0),
        //     symbol,
        //     type: OrderType.Limit,
        //     side: tradeSide,
        //     amount: tradeBaseValue.toString(),
        //     price: tradePrice.toString(),
        //     takerOrMaker: previousTxSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
        //     cost: (tradeBaseValue * tradePrice).toString(),
        //     fee: {
        //       currency: 'XRP',
        //       cost: 0,
        //     },
        //     info: { transaction: previousTx },
        //   };

        //   trades.push(trade);

        //   totalTradesPrice += tradePrice;
        //   baseFilled += tradeBaseValue;
        //   quoteFilled += tradeQuoteValue;
      } else {
        previousTxnId = undefined;
      }
    }

    // if (previousTx.Account !== account) {
    //   if (!lastTradeTimestamp) lastTradeTimestamp = previousTx.date;

    //   for (const node of previousTx.meta.AffectedNodes) {
    //     // This is someone else's Transaction that affected our Offer

    //     if (node.hasOwnProperty('DeletedNode')) {
    //       // This offer crossed ours and fully filled it
    //       const { LedgerIndex, FinalFields } = (node as DeletedNode).DeletedNode;
    //       if (LedgerIndex !== offer.index) continue;

    //       const tradeSide = getOrderSideFromTx(previousTx);
    //       const tradeBaseAmountKey = getBaseAmountKey(tradeSide);
    //       const tradeQuoteAmountKey = getQuoteAmountKey(tradeSide);

    //       const tradeBaseAmount = parseCurrencyAmount(FinalFields[tradeBaseAmountKey] as Amount);
    //       const tradeQuoteAmount = parseCurrencyAmount(FinalFields[tradeQuoteAmountKey] as Amount);

    //       const tradePrice = tradeBaseAmount / tradeQuoteAmount;

    //       totalTradesPrice += tradePrice;
    //       baseFilled += tradeBaseAmount;
    //       quoteFilled += tradeQuoteAmount;

    //       previousTxnId = FinalFields['PreviousTxnID'] as string;

    //       trades.push({
    //         id: previousTx.Sequence.toString(),
    //         order: id,
    //         datetime: rippleTimeToISOTime(previousTx.date || 0),
    //         timestamp: rippleTimeToUnixTime(previousTx.date || 0),
    //         symbol: getMarketSymbol(
    //           previousTx[tradeBaseAmountKey] as Amount,
    //           previousTx[tradeQuoteAmountKey] as Amount
    //         ),
    //         type: OrderType.Limit,
    //         side: tradeSide,
    //         amount: tradeBaseAmount.toString(),
    //         price: tradePrice.toString(),
    //         takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
    //         cost: (tradeBaseAmount * tradePrice).toString(),
    //         fee: {
    //           currency: 'XRP',
    //           cost: previousTx.Fee || '0',
    //         },
    //         info: { transaction: previousTx },
    //       });
    //     }

    //     if (node.hasOwnProperty('ModifiedNode')) {
    //       // This Offer crossed ours but didn't fully fill it
    //       const { LedgerIndex, FinalFields, PreviousFields, PreviousTxnID } = (node as ModifiedNode).ModifiedNode;
    //       if (LedgerIndex !== offer.index || !FinalFields || !PreviousFields) continue;

    //       const tradeSide = getOrderSideFromTx(previousTx);
    //       const tradeBaseAmountKey = getBaseAmountKey(tradeSide);
    //       const tradeQuoteAmountKey = getQuoteAmountKey(tradeSide);

    //       const tradeBaseAmount = parseCurrencyAmount(
    //         PreviousFields[tradeBaseAmountKey] as Amount,
    //         FinalFields[tradeBaseAmountKey] as Amount
    //       );
    //       const tradeQuoteAmount = parseCurrencyAmount(
    //         PreviousFields[tradeQuoteAmountKey] as Amount,
    //         FinalFields[tradeQuoteAmountKey] as Amount
    //       );

    //       const tradePrice = tradeBaseAmount / tradeQuoteAmount;

    //       totalTradesPrice += tradePrice;
    //       baseFilled += tradeBaseAmount;
    //       quoteFilled += tradeQuoteAmount;

    //       previousTxnId = PreviousTxnID;

    //       trades.push({
    //         id: previousTx.Sequence.toString(),
    //         order: id,
    //         datetime: rippleTimeToISOTime(previousTx.date || 0),
    //         timestamp: rippleTimeToUnixTime(previousTx.date || 0),
    //         symbol: getMarketSymbol(
    //           previousTx[tradeBaseAmountKey] as Amount,
    //           previousTx[tradeQuoteAmountKey] as Amount
    //         ),
    //         type: OrderType.Limit,
    //         side: tradeSide,
    //         amount: tradeBaseAmount.toString(),
    //         price: tradePrice.toString(),
    //         takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
    //         cost: (tradeBaseAmount * tradePrice).toString(),
    //         fee: {
    //           currency: 'XRP',
    //           cost: previousTx.Fee || '0',
    //         },
    //         info: { transaction: previousTx },
    //       });
    //     }
    //   }

    // const modifiedOffer = _.find(previousTx.meta.AffectedNodes, (node) => {
    //   if (node.hasOwnProperty('ModifiedNode')) {
    //     const { ModifiedNode } = node as ModifiedNode;
    //     return ModifiedNode.LedgerIndex === offer.index && ModifiedNode.FinalFields && ModifiedNode.PreviousFields;
    //   }
    // }) as ModifiedNode | undefined;

    // if (!modifiedOffer || !previousTx.Sequence) {
    //   throw new BaseError('Unknown issue occurred - Sequence is missing from previous transaction object');
    // }
  }

  // for (const node of previousTx.meta.AffectedNodes) {
  //   let affectedNode: ModifiedNode['ModifiedNode'] | DeletedNode['DeletedNode'] | undefined;
  //   let affectedOffer: Offer | undefined;
  //   let affectedOfferPrevious: Offer | undefined;

  //   if (node.hasOwnProperty('ModifiedNode')) {
  //     const { ModifiedNode } = node as ModifiedNode;
  //     if (ModifiedNode.LedgerEntryType !== 'Offer' || !ModifiedNode.FinalFields || !ModifiedNode.PreviousFields)
  //       continue;
  //     affectedNode = ModifiedNode;
  //     affectedOffer = ModifiedNode.FinalFields as unknown as Offer;
  //     affectedOfferPrevious = ModifiedNode.PreviousFields as unknown as Offer;
  //   } else if (node.hasOwnProperty('DeletedNode')) {
  //     const { DeletedNode } = node as DeletedNode;
  //     if (DeletedNode.LedgerEntryType !== 'Offer') continue;
  //     affectedNode = DeletedNode;
  //     affectedOffer = DeletedNode.FinalFields as unknown as Offer;
  //   }

  //   if (!affectedOffer) continue;

  //   const isMyOffer = affectedOffer.Account === account;
  //   const isMyOfferCreateTx = previousTx.Account === account && previousTx.Sequence === sequence;

  //   if (isMyOfferCreateTx) {
  //     fee = stringToInt(previousTx.Fee) || 0;
  //   }

  //   const tradeSide = getOrderSideFromOffer(affectedOffer);
  //   const tradeBaseAmountKey = getBaseAmountKey(tradeSide);
  //   const tradeQuoteAmountKey = getQuoteAmountKey(tradeSide);

  //   const tradeBaseAmount = parseCurrencyAmount(
  //     affectedOfferPrevious
  //       ? (affectedOfferPrevious[tradeBaseAmountKey] as Amount)
  //       : (affectedOffer[tradeBaseAmountKey] as Amount),
  //     affectedOfferPrevious ? (affectedOffer[tradeBaseAmountKey] as Amount) : undefined
  //   );
  //   const tradeQuoteAmount = parseCurrencyAmount(
  //     affectedOfferPrevious
  //       ? (affectedOfferPrevious[tradeQuoteAmountKey] as Amount)
  //       : (affectedOffer[tradeQuoteAmountKey] as Amount),
  //     affectedOfferPrevious ? (affectedOffer[tradeQuoteAmountKey] as Amount) : undefined
  //   );

  //   const tradePrice = tradeBaseAmount / tradeQuoteAmount;

  //   totalTradesPrice += tradePrice;
  //   baseFilled += tradeBaseAmount;
  //   quoteFilled += tradeQuoteAmount;

  //   const tradeId = (isMyOffer ? previousTx.Sequence : affectedOffer.Sequence).toString();
  //   const orderId = (isMyOffer ? affectedOffer.Sequence : previousTx.Sequence).toString();
  //   previousTxnId = isMyOffer ? _.get(affectedNode, 'PreviousTxnId') : undefined;

  //   trades.push({
  //     id: tradeId,
  //     order: orderId,
  //     datetime: rippleTimeToISOTime(previousTx.date || 0),
  //     timestamp: rippleTimeToUnixTime(previousTx.date || 0),
  //     symbol: getMarketSymbol(
  //       affectedOffer[tradeBaseAmountKey] as Amount,
  //       affectedOffer[tradeQuoteAmountKey] as Amount
  //     ),
  //     type: OrderType.Limit,
  //     side: tradeSide,
  //     amount: tradeBaseAmount.toString(),
  //     price: tradePrice.toString(),
  //     takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
  //     cost: (tradeBaseAmount * tradePrice).toString(),
  //     fee: {
  //       currency: 'XRP',
  //       cost: previousTx.Fee || '0',
  //     },
  //     info: { transaction: previousTx },
  //   });
  // }

  // if (previousTx.Account === account) {
  //   hasPreviousTx = false;
  //   offerTransactions.push(previousTx);
  // } else {
  //   const offerNode = _.find(previousTx.meta.AffectedNodes, (node) => {
  //     if (node.hasOwnProperty('ModifiedNode')) {
  //       const { ModifiedNode } = node as ModifiedNode;
  //       if (ModifiedNode.LedgerIndex === offer.index && !!ModifiedNode.FinalFields && !!ModifiedNode.PreviousFields) {
  //         previousTxnId = ModifiedNode.PreviousTxnID;
  //         return true;
  //       }
  //     } else if (node.hasOwnProperty('DeletedNode')) {
  //       const { DeletedNode } = node as DeletedNode;
  //       if (DeletedNode.LedgerIndex === offer.index) {
  //         previousTxnId = DeletedNode.FinalFields.PreviousTxnId as string | undefined;
  //         return true;
  //       }
  //     }
  //   }) as ModifiedNode | DeletedNode | undefined;

  //   if (offerNode) {
  //     offerTransactions.push(previousTx);
  //   }

  //   if (!previousTxnId) {
  //     hasPreviousTx = false;
  //   }
  // }
  // }

  /**
   * Parse Transactions and aggregate Trades and Order data
   */

  // Sort transactions by oldest to newest
  offerTransactions.reverse();

  // let takerGetsFilled = 0;
  // let takerPaysFilled = 0;

  /*

    1. For a given Offer, fetch and loop through its transactions (following PreviousTxnId back)
    2. If that transaction is from a different Account... (it's a crossing Offer's OfferCreate transaction)
        1. Loop through the Transaction's AffectedNodes and look for our Offer's Sequence/Account
        2. If our Offer is a ModifiedNode... (this Offer partially filled yours)
            1. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
            2. Assemble Trade data from the ModifiedNode's FinalFields object
            3. Add that value to the Order’s “filled” amount
        3. If our Offer is a DeletedNode... (this Offer fully filled yours)
            1. Assemble Trade data from the DeletedNodes's FinalFields object
            2. Add the crossing Offer value to the Order’s “filled” amount
            3. Set the Order status to "Closed"
    3. If that transaction is from the same Account... (it's our Offer's OfferCreate transaction)
        1. Look through the AffectedNodes
        2. If the selected node is a ModifiedNode...
            1. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
            2. Assemble Trade data from the ModifiedNode's FinalFields object
            3. Add that value to the Order’s “filled” amount
        3. If the selected node is a DeletedNode...
            1. Assemble Trade data from the DeletedNodes's FinalFields object
            2. Add the Offer's value to the Order’s “filled” amount

  */

  // for (const offerTx of offerTransactions) {
  //   if (!offerTx.Sequence) throw new BaseError(`Sequence is missing from transaction ${offerTx.hash}. Aborting...`);
  //   else if (typeof offerTx.meta !== 'object')
  //     throw new BaseError(`Metadata is missing from transaction ${offerTx.hash}. Aborting...`);

  //   // 1. If that transaction is from the same Account... (it's our Offer's OfferCreate transaction)
  //   if (offerTx.Account === account && offerTx.Sequence === sequence) {
  //     // 2. Look through the AffectedNodes
  //     for (const affectedNode of offerTx.meta.AffectedNodes) {
  //       // 3. If the selected node is a ModifiedNode, it means our Offer was filled and another partially filled
  //       if (affectedNode.hasOwnProperty('ModifiedNode')) {
  //         const { ModifiedNode } = affectedNode as ModifiedNode;

  //         if (ModifiedNode.LedgerEntryType !== 'Offer') continue;
  //         if (!ModifiedNode.FinalFields || !ModifiedNode.PreviousFields)
  //           throw new BaseError(`FinalFields or PreviousFields is missing from transaction ${offerTx.hash}`);

  //         const tradePreviousFields = ModifiedNode.PreviousFields as unknown as Offer;
  //         const tradeFinalFields = ModifiedNode.FinalFields as unknown as Offer;

  //         const tradeSide = offerTx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  //         const tradeBaseAmountKey = tradeSide === OrderSide.Buy ? 'TakerPays' : 'TakerGets';
  //         const tradeQuoteAmountKey = tradeSide === OrderSide.Buy ? 'TakerGets' : 'TakerPays';

  //         // 4. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
  //         const tradePreviousBaseAmount = tradePreviousFields[tradeBaseAmountKey];
  //         const tradeFinalBaseAmount = tradeFinalFields[tradeBaseAmountKey];

  //         const tradePreviousQuoteAmount = tradePreviousFields[tradeQuoteAmountKey];
  //         const tradeFinalQuoteAmount = tradeFinalFields[tradeQuoteAmountKey];

  //         const tradeBaseAmount = parseCurrencyAmount(tradeFinalBaseAmount, tradePreviousBaseAmount);
  //         const tradeQuoteAmount = parseCurrencyAmount(tradeFinalQuoteAmount, tradePreviousQuoteAmount);
  //         const tradePrice = tradeBaseAmount / tradeQuoteAmount;

  //         // 5. Assemble Trade data from the ModifiedNode's FinalFields object
  //         const trade: Trade = {
  //           id: offerTx.Sequence.toString(),
  //           order: id,
  //           datetime: rippleTimeToISOTime(offerTx.date || 0),
  //           timestamp: rippleTimeToUnixTime(offerTx.date || 0),
  //           symbol: getMarketSymbol(tradeFinalFields[tradeBaseAmountKey], tradeFinalFields[tradeQuoteAmountKey]),
  //           type: OrderType.Limit,
  //           side: tradeSide,
  //           amount: tradeBaseAmount.toString(),
  //           price: tradePrice.toString(),
  //           takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
  //           cost: (tradeBaseAmount * tradePrice).toString(),
  //           fee: {
  //             currency: 'XRP',
  //             cost: offerTx.Fee || '0',
  //           },
  //           info: { transaction: offerTx },
  //         };
  //         trades.push(trade);

  //         // 6. Add that value to the Order’s “filled” amount
  //         totalTradesPrice += tradePrice;
  //         baseFilled += tradeBaseAmount;
  //         quoteFilled += tradeQuoteAmount;
  //       } else if (affectedNode.hasOwnProperty('DeletedNode')) {
  //         const { DeletedNode } = affectedNode as DeletedNode;

  //         if (DeletedNode.LedgerEntryType !== 'Offer') continue;

  //         const tradeSide = offerTx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  //         const tradeBaseAmountKey = tradeSide === OrderSide.Buy ? 'TakerPays' : 'TakerGets';
  //         const tradeQuoteAmountKey = tradeSide === OrderSide.Buy ? 'TakerGets' : 'TakerPays';

  //         // 4. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
  //         const tradeBaseAmount = parseCurrencyAmount(DeletedNode.FinalFields[tradeBaseAmountKey] as Amount);
  //         const tradeQuoteAmount = parseCurrencyAmount(DeletedNode.FinalFields[tradeQuoteAmountKey] as Amount);
  //         const tradePrice = tradeBaseAmount / tradeQuoteAmount;

  //         // 5. Assemble Trade data from the DeletedNode's FinalFields object
  //         const trade: Trade = {
  //           id: offerTx.Sequence.toString(),
  //           order: id,
  //           datetime: rippleTimeToISOTime(offerTx.date || 0),
  //           timestamp: rippleTimeToUnixTime(offerTx.date || 0),
  //           symbol: getMarketSymbol(tradeBaseAmountKey, tradeQuoteAmountKey),
  //           type: OrderType.Limit,
  //           side: tradeSide,
  //           amount: tradeBaseAmount.toString(),
  //           price: tradePrice.toString(),
  //           takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
  //           cost: (tradeBaseAmount * tradePrice).toString(),
  //           fee: {
  //             currency: 'XRP',
  //             cost: offerTx.Fee || '0',
  //           },
  //           info: { transaction: offerTx },
  //         };
  //         trades.push(trade);

  //         // 7. If the selected node is a DeletedNode...
  //         // 8. Assemble Trade data from the DeletedNodes's FinalFields object
  //         // 9. Add the Offer's value to the Order’s “filled” amount
  //         totalTradesPrice += tradePrice;
  //         baseFilled += tradeBaseAmount;
  //         quoteFilled += tradeQuoteAmount;
  //       }
  //     }
  //   } else {
  //     /*
  //       2. If that transaction is from a different Account... (it's a crossing Offer's OfferCreate transaction)
  //         1. Loop through the Transaction's AffectedNodes and look for our Offer's Sequence/Account
  //         2. If our Offer is a ModifiedNode... (this Offer partially filled yours)
  //             1. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
  //             2. Assemble Trade data from the ModifiedNode's FinalFields object
  //             3. Add that value to the Order’s “filled” amount
  //         3. If our Offer is a DeletedNode... (this Offer fully filled yours)
  //             1. Assemble Trade data from the DeletedNodes's FinalFields object
  //             2. Add the crossing Offer value to the Order’s “filled” amount
  //             3. Set the Order status to "Closed"
  //     */
  //   }

  // if (typeof offerTx.meta === 'object') {
  //   // const createdNodes: CreatedNode['CreatedNode'][] = [];
  //   // const modifiedNodes: ModifiedNode['ModifiedNode'][] = [];
  //   // const deletedNodes: DeletedNode['DeletedNode'][] = [];
  //   _.forEach(offerTx.meta.AffectedNodes, (affectedNode) => {
  //     let tradeOffer: Offer | undefined;
  //     if (affectedNode.hasOwnProperty('ModifiedNode')) {
  //       const { ModifiedNode } = affectedNode as ModifiedNode;
  //       if (ModifiedNode.LedgerEntryType === 'Offer') {
  //         if (!ModifiedNode.FinalFields || !ModifiedNode.PreviousFields) {
  //           throw new BaseError(
  //             "Unknown issue occurred - FinalFields or PreviousFields are missing in this Offer's ModifiedNode"
  //           );
  //         } else if (!offerTx.Sequence) {
  //           throw new BaseError('Unknown issue occurred - Sequence is missing from transaction');
  //         }
  //         tradeOffer = ModifiedNode.FinalFields as unknown as Offer;
  //       }
  //     } else if (affectedNode.hasOwnProperty('DeletedNode')) {
  //       const { DeletedNode } = affectedNode as DeletedNode;
  //       if (DeletedNode.LedgerEntryType === 'Offer') {
  //         if (!offerTx.Sequence) {
  //           throw new BaseError('Unknown issue occurred - Sequence is missing from transaction');
  //         }
  //         tradeOffer = DeletedNode.FinalFields as unknown as Offer;
  //       }
  //     }
  //     if (tradeOffer) {
  //       const tradeSide = tradeOffer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;
  //       const tradeBaseAmount = tradeSide === OrderSide.Buy ? tradeOffer.TakerPays : tradeOffer.TakerGets;
  //       const tradeQuoteAmount = tradeSide === OrderSide.Buy ? tradeOffer.TakerGets : tradeOffer.TakerPays;
  //       const tradeAmount = parseCurrencyAmount(tradeBaseAmount);
  //       const tradePrice = tradeAmount / parseCurrencyAmount(tradeQuoteAmount);
  //       const tradeFee = stringToInt(offerTx.Fee) || 0;
  //       const trade: Trade = {
  //         id: tradeOffer.Sequence.toString(),
  //         order: id,
  //         datetime: rippleTimeToISOTime(offerTx.date || 0),
  //         timestamp: rippleTimeToUnixTime(offerTx.date || 0),
  //         symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
  //         type: OrderType.Limit,
  //         side: tradeSide,
  //         amount: tradeAmount.toString(),
  //         price: tradePrice.toString(),
  //         takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
  //         cost: (tradeAmount * tradePrice).toString(),
  //         fee: {
  //           currency: 'XRP',
  //           cost: tradeFee,
  //         },
  //         info: { transaction: tradeOffer },
  //       };
  //       trades.push(trade);
  //       totalTradesPrice += tradePrice;
  //       baseFilled += parseCurrencyAmount(tradeBaseAmount);
  //       quoteFilled += parseCurrencyAmount(tradeQuoteAmount);
  //     }
  //   });
  // console.log('Transaction: %s', offerTx.hash);
  // console.log('CreatedNodes: %O', createdNodes);
  // console.log('ModifiedNodes: %O', modifiedNodes);
  // console.log('DeletedNodes: %O', deletedNodes);
  // hasCreatedNode                                     = Created unfilled Offer, no Trades
  // hasCreatedNode   hasModifiedNode                   = Created partially filled Offer, has Trades
  // hasCreatedNode                     hasDeletedNode  = Created partially filled Offer object, has Trades
  // hasCreatedNode   hasModifiedNode   hasDeletedNode  = Created partially filled Offer object, partially and fully consumed others
  //                  hasModifiedNode                   = Fully filled this Offer, has Trades
  //                  hasModifiedNode   hasDeletedNode  = Fully filled this Offer, has Trades
  //                                    hasDeletedNode  = Fully filled this Offer, has Trades
  //                                    hasDeletedNode  = Found an expired/unfunded Offer and removed it
  // }
  // }

  // requestNonce = 0;
  // hasPreviousTx = true;
  // previousTxnId = offer.PreviousTxnID;

  // while (hasPreviousTx) {
  //   const previousTxRequest: TxRequest = {
  //     id: (requestNonce += 1),
  //     command: 'tx',
  //     transaction: previousTxnId,
  //     binary: false,
  //   };

  //   const previousTxResponse = await this.request(previousTxRequest);

  //   handleTxErrors(previousTxResponse);

  //   const previousTx = previousTxResponse.result;

  //   if (previousTx.TransactionType !== 'OfferCreate') {
  //     throw new BaseError("Unknown issue occurred - Order's previous transaction was not OfferCreate");
  //   }

  //   if (previousTx.Account === account) {
  //     hasPreviousTx = false;
  //     offerCreateTx = previousTx;
  //   } else {
  //     // "Last" trade, meaning the most recent trade
  //     if (!lastTradeTimestamp) {
  //       lastTradeTimestamp = previousTx.date;
  //     }

  //     if (typeof previousTx.meta === 'object') {
  //       // TODO: Go through both Modified and Deleted offers here

  //       const modifiedOffer = _.find(previousTx.meta.AffectedNodes, (node) => {
  //         if (node.hasOwnProperty('ModifiedNode')) {
  //           const { ModifiedNode } = node as ModifiedNode;
  //           return (
  //             ModifiedNode.LedgerIndex === offer.index && !!ModifiedNode.FinalFields && !!ModifiedNode.PreviousFields
  //           );
  //         }
  //       }) as ModifiedNode | undefined;

  //       if (!modifiedOffer || !previousTx.Sequence) {
  //         throw new BaseError('Unknown issue occurred - Sequence is missing from previous transaction object');
  //       }

  //       previousTxnId = modifiedOffer.ModifiedNode.PreviousTxnID || '';

  //       // This Offer crossed ours but didn't fully fill it
  //       const tradeSide = previousTx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  //       const tradeBaseAmount = tradeSide === OrderSide.Buy ? previousTx.TakerPays : previousTx.TakerGets;
  //       const tradeQuoteAmount = tradeSide === OrderSide.Buy ? previousTx.TakerGets : previousTx.TakerPays;

  //       const tradeAmount = parseCurrencyAmount(tradeBaseAmount);
  //       const tradePrice = tradeAmount / parseCurrencyAmount(tradeQuoteAmount);
  //       totalTradesPrice += tradePrice;

  //       const tradeFee = stringToInt(previousTx.Fee) || 0;

  //       const trade: Trade = {
  //         id: previousTx.Sequence.toString(),
  //         order: id,
  //         datetime: rippleTimeToISOTime(previousTx.date || 0),
  //         timestamp: rippleTimeToUnixTime(previousTx.date || 0),
  //         symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
  //         type: OrderType.Limit,
  //         side: tradeSide,
  //         amount: tradeAmount.toString(),
  //         price: tradePrice.toString(),
  //         takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
  //         cost: (tradeAmount * tradePrice).toString(),
  //         fee: {
  //           currency: 'XRP',
  //           cost: tradeFee,
  //         },
  //         info: { transaction: previousTx },
  //       };

  //       trades.push(trade);

  //       baseFilled += parseCurrencyAmount(tradeBaseAmount);
  //       quoteFilled += parseCurrencyAmount(tradeQuoteAmount);
  //     }
  //   }
  // }

  // if (!offerCreateTx) {
  //   throw new BaseError('Unknown issue occurred - could not find OfferCreate transaction for this order');
  // }

  // THESE VALUES HAVE TO COME FROM THE OFFERCREATE TRANSACTION
  // FOLLOW THE PREVIOUSTXNIDs BACKWARDS AND POPULATE AN ARRAY WITH THEM, THEN PROCESS IT
  // SORRY FOR YELLING BUT I WANTED YOU TO REMEMBER THIS

  const baseAmount = side === OrderSide.Buy ? offer.TakerPays : offer.TakerGets;
  const quoteAmount = side === OrderSide.Buy ? offer.TakerGets : offer.TakerPays;

  const amount =
    side === OrderSide.Buy
      ? parseCurrencyAmount(baseAmount) + baseFilled
      : parseCurrencyAmount(quoteAmount) + quoteFilled;
  const price = parseCurrencyAmount(baseAmount) / parseCurrencyAmount(quoteAmount);
  const filled = side === OrderSide.Buy ? baseFilled : quoteFilled;

  // if (offerCreateTx.meta.TransactionResult !== 'tesSUCCESS') {
  //   status = OrderStatus.Rejected;
  // }
  // if (status !== OrderStatus.Rejected && !createdNodes.length) {
  //   status = OrderStatus.Closed;
  // }

  /**
   * Compile final Order object and return
   */
  const response: Order = {
    id,
    datetime: rippleTimeToISOTime(offerCreateTx?.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTx?.date || 0),
    lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
    status,
    symbol,
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : undefined,
    side,
    price: price,
    average: trades.length ? totalTradesPrice / trades.length : 0, // as cool as dividing by zero is, we shouldn't do it
    amount,
    filled,
    remaining: amount - filled,
    cost: filled * price,
    trades,
    fee: {
      currency: 'XRP',
      cost: fee,
    },
    info: { ledger_entry: offerResult },
  };

  // console.log(JSON.stringify(response));

  return response;
}

export default fetchOrder;
