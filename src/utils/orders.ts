// import { BadRequest } from 'ccxt';
import {
  AccountTxRequest,
  Client,
  dropsToXrp,
  ErrorResponse,
  LedgerEntryRequest,
  OfferCreate,
  // OfferCreate,
  RippledError,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TxResponse,
} from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { DEFAULT_LIMIT } from '../constants';
import {
  AccountAddress,
  // AccountTransaction,
  // AccountTxResult,
  DeletedNode,
  Fee,
  FetchOrderParams,
  ModifiedNode,
  Node,
  OrderSide,
  OrderType,
  Trade,
  // Transaction,
  TransactionData,
  // TxResult,
  XrplErrorTypes,
} from '../models';
import { getAmountCurrencyCode, getMarketSymbol } from './conversions';
import { fetchTransferRate } from './markets';
import { divideAmountValues, subtractAmounts } from './numbers';

/**
 * Offers
 */
export const getTradeOfferFromNode = (node: Node, account: AccountAddress) => {
  let affectedOffer: Offer | undefined;

  if (node.hasOwnProperty('ModifiedNode')) {
    const { LedgerEntryType, FinalFields, PreviousFields } = (node as ModifiedNode).ModifiedNode;
    if (LedgerEntryType !== 'Offer' || !FinalFields || !PreviousFields || FinalFields.Account === account) return;

    const updatedOrderTakerGets = subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount);
    const updatedOrderTakerPays = subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount);

    affectedOffer = {
      ...(FinalFields as unknown as Offer),
      TakerGets: updatedOrderTakerGets,
      TakerPays: updatedOrderTakerPays,
    };
  } else if (node.hasOwnProperty('DeletedNode')) {
    const { LedgerEntryType, FinalFields, PreviousFields } = (node as DeletedNode).DeletedNode;
    if (LedgerEntryType !== 'Offer' || FinalFields.Account === account) return;

    affectedOffer = FinalFields as unknown as Offer;
    if (PreviousFields) {
      affectedOffer.TakerGets = subtractAmounts(PreviousFields.TakerGets as Amount, FinalFields.TakerGets as Amount);
      affectedOffer.TakerPays = subtractAmounts(PreviousFields.TakerPays as Amount, FinalFields.TakerPays as Amount);
    }
  }

  return affectedOffer;
};

/**
 * Orders
 */
export const parseOrderId = (orderId: string) => {
  const [account, sequenceString] = orderId.split(':');
  const sequence = parseInt(sequenceString);
  return { account, sequence, sequenceString };
};

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
 * Trades
 */
export const getTrade = async (
  client: Client,
  orderId: string,
  affectedOffer: Offer,
  txData: TransactionData<OfferCreate>
): Promise<Trade | undefined> => {
  const { date, transaction } = txData;

  if (!transaction.Sequence) return;

  const tradeSide = transaction.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  const tradeBaseAmount = affectedOffer[getBaseAmountKey(tradeSide)];
  const tradeQuoteAmount = affectedOffer[getQuoteAmountKey(tradeSide)];

  const tradeBaseRate = parseFloat(await fetchTransferRate(client, tradeBaseAmount));
  const tradeQuoteRate = parseFloat(await fetchTransferRate(client, tradeQuoteAmount));

  const tradeBaseValue = parseAmountValue(tradeBaseAmount);
  const tradeQuoteValue = parseAmountValue(tradeQuoteAmount);

  const tradePrice = tradeQuoteValue / tradeBaseValue;
  const tradeCost = tradeBaseValue * tradePrice;

  const tradeFeeCurrency = getAmountCurrencyCode(tradeSide === OrderSide.Buy ? tradeQuoteAmount : tradeBaseAmount);
  const tradeFeeRate = tradeSide === OrderSide.Buy ? tradeQuoteRate : tradeBaseRate;
  const tradeFees = tradeBaseValue * tradeFeeRate;

  const tradeFee: Fee = {
    currency: tradeFeeCurrency,
    cost: tradeFees.toString(),
  };

  if (tradeFee.cost != 0) {
    tradeFee.rate = tradeFeeRate.toString();
    tradeFee.percentage = true;
  }

  return {
    id: getOrderOrTradeId(transaction.Account, transaction.Sequence),
    order: orderId,
    datetime: rippleTimeToISOTime(date || 0),
    timestamp: rippleTimeToUnixTime(date || 0),
    symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    type: OrderType.Limit,
    side: tradeSide,
    amount: tradeBaseValue.toString(),
    price: tradePrice.toString(),
    takerOrMaker: getTakerOrMaker(tradeSide),
    cost: tradeCost.toString(),
    fee: tradeFee,
    info: txData,
  } as Trade;
};

export const fetchOffer = async (
  client: Client,
  account: AccountAddress,
  sequence: number,
  params: FetchOrderParams
): Promise<Offer | undefined> => {
  const { ledger_index } = params;

  const maxSearch = params.max_search || 500;

  try {
    const offerResult = await client.request({
      command: 'ledger_entry',
      ledger_index: ledger_index || 'validated',
      offer: {
        account,
        seq: sequence,
      },
    } as LedgerEntryRequest);

    return offerResult.result.node as Offer;
  } catch (err: unknown) {
    const error = err as RippledError;

    if ((error.data as ErrorResponse).error !== XrplErrorTypes.EntryNotFound) return;

    // This Offer was either closed or canceled - let's do some sleuthing to figure it out

    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;
    let page = 1;

    while (hasNextPage) {
      const accountTxResponse = await client.request({
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
        if (
          !transaction.meta ||
          !transaction.tx ||
          transaction.tx.TransactionType !== 'OfferCreate' ||
          typeof transaction.meta !== 'object'
        )
          continue;

        if (transaction.tx.Account !== account || transaction.tx.Sequence !== sequence) {
          for (const node of transaction.meta.AffectedNodes) {
            let offerFields: Offer | undefined;
            if (
              node.hasOwnProperty('ModifiedNode') &&
              (node as ModifiedNode).ModifiedNode.LedgerEntryType === 'Offer' &&
              (node as ModifiedNode).ModifiedNode.FinalFields?.Account === account &&
              (node as ModifiedNode).ModifiedNode.FinalFields?.Sequence === sequence
            ) {
              offerFields = (node as ModifiedNode).ModifiedNode.FinalFields as unknown as Offer;
            } else if (
              node.hasOwnProperty('DeletedNode') &&
              (node as DeletedNode).DeletedNode.LedgerEntryType === 'Offer' &&
              (node as DeletedNode).DeletedNode.FinalFields.Account === account &&
              (node as DeletedNode).DeletedNode.FinalFields.Sequence === sequence
            ) {
              offerFields = (node as DeletedNode).DeletedNode.FinalFields as unknown as Offer;
            }
            if (offerFields) {
              return {
                index: hashOfferId(account, sequence),
                LedgerEntryType: 'Offer',
                Flags: typeof offerFields.Flags === 'number' ? offerFields.Flags : 0,
                Account: offerFields.Account,
                Sequence: offerFields.Sequence,
                TakerPays: offerFields.TakerPays,
                TakerGets: offerFields.TakerGets,
                BookDirectory: '',
                BookNode: '0',
                OwnerNode: '0',
                PreviousTxnID: transaction.tx.hash || '',
                PreviousTxnLgrSeq: transaction.tx.LastLedgerSequence || 0,
              };
            }
          }
        } else {
          return {
            index: hashOfferId(account, sequence),
            LedgerEntryType: 'Offer',
            Flags: typeof transaction.tx.Flags === 'number' ? transaction.tx.Flags : 0,
            Account: transaction.tx.Account,
            Sequence: transaction.tx.Sequence,
            TakerPays: transaction.tx.TakerPays,
            TakerGets: transaction.tx.TakerGets,
            BookDirectory: '',
            BookNode: '0',
            OwnerNode: '0',
            PreviousTxnID: transaction.tx.hash || '',
            PreviousTxnLgrSeq: transaction.tx.LastLedgerSequence || 0,
          };
        }
      }

      if (!marker || limit * page >= maxSearch) hasNextPage = false;
      else page += 1;
    }
  }
};
