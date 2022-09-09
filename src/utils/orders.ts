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
  // rippleTimeToISOTime,
  // rippleTimeToUnixTime,
  TxRequest,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import {
  AccountAddress,
  AccountSequencePair,
  // Fee,
  Node,
  OrderSide,
  // OrderType,
  // Trade,
  TransactionData,
  XrplErrorTypes,
} from '../models';
// import { getAmountCurrencyCode, getMarketSymbol } from './conversions';
// import { fetchTransferRate } from './markets';
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

export const getOrderSideFromTx = (tx: TxResponse['result']) =>
  tx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;
export const getOrderSideFromOffer = (offer: Offer) =>
  offer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

export const getBaseAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerPays' : 'TakerGets');
export const getQuoteAmountKey = (side: OrderSide) => (side === OrderSide.Buy ? 'TakerGets' : 'TakerPays');
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
export const getTakerOrMaker = (side: OrderSide) => (side === OrderSide.Buy ? 'taker' : 'maker');

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
