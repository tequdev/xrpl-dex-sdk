import { ArgumentsRequired, OrderNotFound } from 'ccxt';
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
  DeletedNode,
  ModifiedNode,
  CreatedNode,
} from '../models';
import { Order, Trade } from '../models';
import { getMarketSymbol, parseCurrencyAmount, stringToInt, xrplOfferToCcxtTrade } from '../utils';

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
  /** Not used */
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

  const base = side === OrderSide.Buy ? offer.TakerPays : offer.TakerGets;
  const quote = side === OrderSide.Buy ? offer.TakerGets : offer.TakerPays;

  const price = parseCurrencyAmount(quote);
  const amount = parseCurrencyAmount(base);

  const trades: Trade[] = [];

  let filled = 0;
  let remaining = amount;

  const updateFilledRemaining = (trade: Trade) => {
    filled += stringToInt(trade.amount) || 0;
    remaining -= stringToInt(trade.amount) || 0;
  };

  let status = OrderStatus.Open;

  /**
   * Loop back through Transactions to get Trades data
   */
  let offerCreateTx: TxResponse['result'] | undefined;
  let previousTxId = offer.PreviousTxnID;
  let lastTradeTimestamp;

  let hasPreviousTx = true;

  while (hasPreviousTx) {
    const previousTxResponse = await this.request({
      command: 'tx',
      transaction: previousTxId,
      binary: false,
    } as TxRequest);

    handleTxErrors(previousTxResponse);

    const { meta, TransactionType, Account, date } = previousTxResponse.result;

    // We're going backwards, so the most recent date is what we want
    if (!lastTradeTimestamp) {
      lastTradeTimestamp = date;
    }

    if (TransactionType === 'OfferCreate' && Account === account) {
      hasPreviousTx = false;
    }

    const createdNodes: CreatedNode['CreatedNode'][] = [];
    const modifiedNodes: ModifiedNode['ModifiedNode'][] = [];
    const deletedNodes: DeletedNode['DeletedNode'][] = [];

    if (typeof meta === 'object') {
      if (meta.TransactionResult !== 'tesSUCCESS') {
        status = OrderStatus.Rejected;
      }

      for (let n = 0, nl = meta.AffectedNodes.length; n < nl; n += 1) {
        if (meta.AffectedNodes[n].hasOwnProperty('CreatedNode')) {
          const { CreatedNode } = meta.AffectedNodes[n] as CreatedNode;
          if (CreatedNode.LedgerEntryType === 'Offer') {
            createdNodes.push(CreatedNode);
          }
        } else if (meta.AffectedNodes[n].hasOwnProperty('ModifiedNode')) {
          const { ModifiedNode } = meta.AffectedNodes[n] as ModifiedNode;
          if (ModifiedNode.LedgerEntryType === 'Offer') {
            modifiedNodes.push(ModifiedNode);
          }
        } else if (meta.AffectedNodes[n].hasOwnProperty('DeletedNode')) {
          const { DeletedNode } = meta.AffectedNodes[n] as DeletedNode;
          if (DeletedNode.LedgerEntryType === 'Offer') {
            deletedNodes.push(DeletedNode);
          }
        }
      }
    }

    // Get Trades
    if (modifiedNodes.length) {
      for (let n = 0, nl = modifiedNodes.length; n < nl; n += 1) {
        const trade = xrplOfferToCcxtTrade(
          modifiedNodes[n].FinalFields as unknown as Offer,
          previousTxResponse,
          modifiedNodes[n].PreviousFields as unknown as Offer | undefined
        );
        trades.push(trade);
        updateFilledRemaining(trade);
      }
    }
    if (deletedNodes.length) {
      for (let n = 0, nl = deletedNodes.length; n < nl; n += 1) {
        const trade = xrplOfferToCcxtTrade(deletedNodes[n].FinalFields as unknown as Offer, previousTxResponse);
        trades.push(trade);
        updateFilledRemaining(trade);
      }
    }

    if (status !== OrderStatus.Rejected && !createdNodes.length) {
      status = OrderStatus.Closed;
    }
  }

  const cost = filled * price;

  // TODO: figure out the average filling price
  let average: number | undefined;

  /**
   * Compile final Order object and return
   */
  const response: Order = {
    id,
    datetime: rippleTimeToISOTime(offerCreateTx?.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTx?.date || 0),
    lastTradeTimestamp: rippleTimeToUnixTime(lastTradeTimestamp || 0),
    status,
    symbol: getMarketSymbol(base, quote),
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : undefined,
    side,
    price,
    average,
    amount,
    filled,
    remaining,
    cost,
    trades,
    fee: {
      currency: 'XRP',
      cost: 0,
    },
    info: { ledger_entry: offerResult },
  };

  return response;
}

export default fetchOrder;
