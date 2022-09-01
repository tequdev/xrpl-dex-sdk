import { BadRequest } from 'ccxt';
import {
  AccountTxRequest,
  Client,
  dropsToXrp,
  ErrorResponse,
  LedgerEntryRequest,
  OfferCreate,
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
  Fee,
  FetchOrderParams,
  OrderSide,
  OrderType,
  Trade,
  TxResult,
  XrplErrorTypes,
} from '../models';
import { getAmountCurrencyCode, getMarketSymbol } from './conversions';
import { fetchTransferRate } from './markets';
import { divideAmountValues } from './numbers';

/**
 * Orders
 */
export const parseOrderId = (orderId: string) => {
  const [account, sequence] = orderId.split(':');
  const sequenceNumber = parseInt(sequence);
  return { account, sequence, sequenceNumber };
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
export const getTrade = async (client: Client, orderId: string, txResponse: TxResponse) => {
  if (txResponse.result.TransactionType !== 'OfferCreate') {
    throw new BadRequest(`Cannot get Trade data from TransactionType ${txResponse.result.TransactionType}`);
  }

  const tx = txResponse.result as TxResult<OfferCreate>;

  if (!tx.Sequence) throw new BadRequest(`Couldn't find Sequence number for Transaction hash ${tx.hash}`);

  const tradeSide = getOrderSideFromTx(tx);

  const tradeBaseAmount = tx[getBaseAmountKey(tradeSide)];
  const tradeQuoteAmount = tx[getQuoteAmountKey(tradeSide)];

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

  const trade: Trade = {
    id: getOrderOrTradeId(tx.Account, tx.Sequence),
    order: orderId,
    datetime: rippleTimeToISOTime(tx.date || 0),
    timestamp: rippleTimeToUnixTime(tx.date || 0),
    symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
    type: OrderType.Limit,
    side: tradeSide,
    amount: tradeBaseValue.toString(),
    price: tradePrice.toString(),
    takerOrMaker: getTakerOrMaker(tradeSide),
    cost: tradeCost.toString(),
    fee: tradeFee,
    info: { Transaction: tx },
  };

  return trade;
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
    let offer: Offer | undefined;

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

      for (const transaction of accountTxResponse.result.transactions) {
        if (transaction.tx?.TransactionType === 'OfferCreate' && transaction.tx?.Sequence === sequence) {
          offer = {
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

          marker = undefined;

          break;
        }
      }

      if (!marker || limit * page >= maxSearch) hasNextPage = false;
      else page += 1;
    }

    return offer;
  }
};
