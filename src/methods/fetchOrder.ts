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
} from '../models';
import { Order, Trade } from '../models';
import { getMarketSymbol, parseCurrencyAmount, stringToInt } from '../utils';

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

  const trades: Trade[] = [];

  let totalTradePrice = 0;
  let baseFilled = 0;
  let quoteFilled = 0;

  /**
   * Loop back through Transactions to get Trades data
   */
  let offerCreateTx: TxResponse['result'] | undefined;
  let lastTradeTimestamp;
  let requestNonce = 1;

  let hasPreviousTx = true;
  let previousTxId = offer.PreviousTxnID;

  /*
    1. For a given Offer, look up its most recent transaction
    2. If that transaction is from a different Account…
        1. Look through the AffectedNodes for the given Offer
        2. In the given Offer’s ModifiedNode…
            1. Subtract the FinalFields TakerGets/TakerPays values from the PreviousFields values
            2. Assemble Trade data from the Offer that modified the given Offer
            3. Add that value to the Order’s “filled” amount
            4. Get the PreviousTxnId from the ModifiedNode and return to step 1
  */

  while (hasPreviousTx) {
    const previousTxRequest: TxRequest = {
      id: requestNonce,
      command: 'tx',
      transaction: previousTxId,
      binary: false,
    };

    const previousTxResponse = await this.request(previousTxRequest);

    handleTxErrors(previousTxResponse);

    const previousTx = previousTxResponse.result;

    if (previousTx.TransactionType !== 'OfferCreate') {
      throw new BaseError("Unknown issue occurred - Order's previous transaction was not OfferCreate");
    }

    if (previousTx.Account === account) {
      hasPreviousTx = false;
      offerCreateTx = previousTx;
    } else {
      // "Last" trade, meaning the most recent trade
      if (!lastTradeTimestamp) {
        lastTradeTimestamp = previousTx.date;
      }

      if (typeof previousTx.meta === 'object') {
        // TODO: Go through both Modified and Deleted offers here

        const modifiedOffer = _.find(previousTx.meta.AffectedNodes, (node) => {
          if (node.hasOwnProperty('ModifiedNode')) {
            const { ModifiedNode } = node as ModifiedNode;
            return (
              ModifiedNode.LedgerIndex === offer.index && !!ModifiedNode.FinalFields && !!ModifiedNode.PreviousFields
            );
          }
        }) as ModifiedNode | undefined;

        if (!modifiedOffer || !previousTx.Sequence) {
          throw new BaseError('Unknown issue occurred - Sequence is missing from previous transaction object');
        }

        previousTxId = modifiedOffer.ModifiedNode.PreviousTxnID || '';

        // This Offer crossed ours but didn't fully fill it
        const tradeSide = previousTx.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

        const tradeBaseAmount = tradeSide === OrderSide.Buy ? previousTx.TakerPays : previousTx.TakerGets;
        const tradeQuoteAmount = tradeSide === OrderSide.Buy ? previousTx.TakerGets : previousTx.TakerPays;

        const tradeAmount = parseCurrencyAmount(tradeBaseAmount);
        const tradePrice = tradeAmount / parseCurrencyAmount(tradeQuoteAmount);
        totalTradePrice += tradePrice;

        const tradeFee = stringToInt(previousTx.Fee) || 0;

        const trade: Trade = {
          id: previousTx.Sequence.toString(),
          order: id,
          datetime: rippleTimeToISOTime(previousTx.date || 0),
          timestamp: rippleTimeToUnixTime(previousTx.date || 0),
          symbol: getMarketSymbol(tradeBaseAmount, tradeQuoteAmount),
          type: OrderType.Limit,
          side: tradeSide,
          amount: tradeAmount.toString(),
          price: tradePrice.toString(),
          takerOrMaker: tradeSide === OrderSide.Buy ? 'taker' : 'maker', // verify this is correct
          cost: (parseCurrencyAmount(tradeQuoteAmount) + tradeFee).toString(),
          fee: {
            currency: 'XRP',
            cost: tradeFee,
          },
          info: { transaction: previousTx },
        };

        trades.push(trade);

        baseFilled += parseCurrencyAmount(tradeBaseAmount);
        quoteFilled += parseCurrencyAmount(tradeQuoteAmount);
      }
    }
  }

  if (!offerCreateTx) {
    throw new BaseError('Unknown issue occurred - could not find OfferCreate transaction for this order');
  }

  // THESE VALUES HAVE TO COME FROM THE OFFERCREATE TRANSACTION
  // FOLLOW THE PREVIOUSTXNIDs BACKWARDS AND POPULATE AN ARRAY WITH THEM, THEN PROCESS IT
  // SORRY FOR YELLING BUT I WANTED YOU TO REMEMBER THIS

  const baseAmount = side === OrderSide.Buy ? offer.TakerPays : offer.TakerGets;
  const quoteAmount = side === OrderSide.Buy ? offer.TakerGets : offer.TakerPays;

  const price = parseCurrencyAmount(baseAmount) / parseCurrencyAmount(quoteAmount);
  const amount =
    side === OrderSide.Buy
      ? parseCurrencyAmount(baseAmount) + baseFilled
      : parseCurrencyAmount(quoteAmount) + quoteFilled;
  const filled = side === OrderSide.Buy ? baseFilled : quoteFilled;
  const cost = filled * price + (stringToInt(offerCreateTx.Fee) || 0);

  let status = OrderStatus.Open;

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
    symbol: getMarketSymbol(baseAmount, quoteAmount),
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : undefined,
    side,
    price: price,
    average: trades.length ? totalTradePrice / trades.length : 0, // as cool as dividing by zero is, we shouldn't do it
    amount,
    filled,
    remaining: amount - filled,
    cost,
    trades,
    fee: {
      currency: 'XRP',
      cost: offerCreateTx.Fee || 0,
    },
    info: { ledger_entry: offerResult },
  };

  console.log(JSON.stringify(response));

  return response;
}

export default fetchOrder;
