import {
  AccountTxRequest,
  AccountTxResponse,
  Client,
  dropsToXrp,
  ErrorResponse,
  LedgerEntryRequest,
  OfferCreate,
  OfferCreateFlags,
  RippledError,
  TransactionMetadata,
  TxRequest,
  TxResponse,
  unixTimeToRippleTime,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { AccountAddress, AccountSequencePair, AccountTransaction, Node, OrderSide, TransactionData, TxResult, XrplErrorTypes } from '../models';
import { divideAmountValues, subtractAmounts } from './numbers';

/**
 * Parsers
 */
export const parseOrderId = (orderId: string) => {
  const [account, sequenceString] = orderId.split(':');
  const sequence = parseInt(sequenceString);
  return { account, sequence, sequenceString };
};

/**
 * Getters
 */
export const getOrderOrTradeId = (account: AccountAddress, sequence: number) => `${account}:${sequence}`;

export const getOrderSideFromTx = (tx: TxResponse['result']): OrderSide =>
  tx.Flags === OfferFlags.lsfSell ? 'sell' : 'buy';
export const getOrderSideFromOffer = (offer: Offer): OrderSide => (offer.Flags === OfferFlags.lsfSell ? 'sell' : 'buy');

export const getBaseAmountKey = (side: OrderSide) => (side === 'buy' ? 'TakerPays' : 'TakerGets');
export const getQuoteAmountKey = (side: OrderSide) => (side === 'buy' ? 'TakerGets' : 'TakerPays');
export const getAmountKeys = (side: OrderSide): [base: string, quote: string] => [
  getBaseAmountKey(side),
  getQuoteAmountKey(side),
];

export const getOrderBaseAmount = (offer: Offer) => offer[getBaseAmountKey(getOrderSideFromOffer(offer))];
export const getOrderQuoteAmount = (offer: Offer) => offer[getQuoteAmountKey(getOrderSideFromOffer(offer))];

export const getOrderAmountValue = (amount: Amount) =>
  typeof amount === 'object' ? parseAmountValue(amount) : parseFloat(dropsToXrp(parseAmountValue(amount)));

export const getOrderPrice = (baseAmount: Amount, quoteAmount: Amount) => divideAmountValues(baseAmount, quoteAmount);
export const getOrderCost = (baseAmount: Amount, price: number) => parseAmountValue(baseAmount) * price;

// TODO: verify this result is correct
export const getTakerOrMaker = (side: OrderSide) => (side === 'buy' ? 'taker' : 'maker');

/**
 * Returns an Offer Ledger object from an AffectedNode
 */
export const getOfferFromNode = (node: Node): Offer | undefined => {
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

/**
 * Returns an Offer Ledger object from a Transaction
 */
export const getOfferFromTransaction = (
  transaction: TransactionData<OfferCreate>['transaction']
): Offer | undefined => {
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
 * Fetchers
 */

/**
 * Fetches an Offer's Ledger entry, or returns undefined if not found
 */
export const fetchOfferEntry = async (client: Client, orderId: AccountSequencePair): Promise<Offer | undefined> => {
  const { account, sequence } = parseOrderId(orderId);
  try {
    const offerResult = await client.request({
      command: 'ledger_entry',
      ledger_index: 'validated',
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
export const fetchTxn = async (client: Client, txnHash: string): Promise<TxResponse | undefined> => {
  try {
    return await client.request({
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
export const fetchAccountTxns = async (
  client: Client,
  account: AccountAddress,
  limit?: number,
  marker?: any
): Promise<AccountTxResponse | undefined> => {
  try {
    return await client.request({
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
   * Filter out irrelevant Transactions, parse AffectedNodes, and normalize results
   */
 export const parseTransaction = (
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
// /**
//  * Trades
//  */
// export const getTrade = async (
//   client: Client,
//   orderId: string,
//   affectedOffer: Offer,
//   txData: TransactionData<OfferCreate>
// ): Promise<Trade | undefined> => {
//   const { date, transaction } = txData;

//   if (!transaction.Sequence) return;

//   const tradeSide = transaction.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

//   const tradeBaseAmount = affectedOffer[getBaseAmountKey(tradeSide)];
//   const tradeQuoteAmount = affectedOffer[getQuoteAmountKey(tradeSide)];

//   const tradeBaseRate = parseFloat(await fetchTransferRate(client, tradeBaseAmount));
//   const tradeQuoteRate = parseFloat(await fetchTransferRate(client, tradeQuoteAmount));

//   const tradeBaseValue = parseAmountValue(tradeBaseAmount);
//   const tradeQuoteValue = parseAmountValue(tradeQuoteAmount);

//   const tradePrice = tradeQuoteValue / tradeBaseValue;
//   const tradeCost = tradeBaseValue * tradePrice;

//   const tradeFeeCurrency = getAmountCurrencyCode(tradeSide === OrderSide.Buy ? tradeQuoteAmount : tradeBaseAmount);
//   const tradeFeeRate = tradeSide === OrderSide.Buy ? tradeQuoteRate : tradeBaseRate;
//   const tradeFees = tradeBaseValue * tradeFeeRate;

//   const tradeFee: Fee = {
//     currency: tradeFeeCurrency,
//     cost: tradeFees.toString(),
//   };

//   if (tradeFee.cost != 0) {
//     tradeFee.rate = tradeFeeRate.toString();
//     tradeFee.percentage = true;
//   }

//   return {
//     id: getOrderOrTradeId(transaction.Account, transaction.Sequence),
//     order: orderId,
//     datetime: rippleTimeToISOTime(date || 0),
//     timestamp: rippleTimeToUnixTime(date || 0),
//     symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
//     type: OrderType.Limit,
//     side: tradeSide,
//     amount: tradeBaseValue.toString(),
//     price: tradePrice.toString(),
//     takerOrMaker: getTakerOrMaker(tradeSide),
//     cost: tradeCost.toString(),
//     fee: tradeFee,
//     info: txData,
//   } as Trade;
// };
