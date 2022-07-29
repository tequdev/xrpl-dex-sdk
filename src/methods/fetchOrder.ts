import { ArgumentsRequired, BadRequest, OrderNotFound } from 'ccxt';
import {
  AccountTxRequest,
  BookOffer,
  BookOffersRequest,
  BookOffersResponse,
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  TxRequest,
  unixTimeToRippleTime,
} from 'xrpl';
import { Offer, OfferFlags } from 'xrpl/dist/npm/models/ledger';
import {
  AccountTransaction,
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  OrderSide,
  OrderType,
  OrderStatus,
  OrderTimeInForce,
  XrplErrorTypes,
} from '../models';
import { getMarketSymbol, stringToInt } from '../utils';

async function fetchOrder(
  this: Client,
  /** The Sequence number of the Order */
  id: string,
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams
): Promise<FetchOrderResponse> {
  const { account } = params;

  /**
   * Validate
   */
  if (!id) throw new ArgumentsRequired('`id` field is required');
  if (!account) throw new ArgumentsRequired('Params field `account` is required');

  const offerSequence = stringToInt(id);
  if (!offerSequence) throw new BadRequest('`id` field should be an integer in the form of a string');

  /**
   * Look up Offer
   */
  const offerResult = await this.request({
    command: 'ledger_entry',
    ledger_index: 'validated',
    offer: {
      account,
      seq: offerSequence,
    },
  } as LedgerEntryRequest);

  if (offerResult.status === 'error') {
    const { error, error_message, error_code } = offerResult as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (!offerResult.result.node) {
    throw new OrderNotFound('No object found for this Order');
  }

  const offer = offerResult.result.node as Offer;

  /**
   * Look up Offer's OfferCreate transaction
   */
  const limit = 20;
  let hasNextPage = true;
  let marker: unknown;

  let offerCreateTx: AccountTransaction['tx'] | undefined;

  while (hasNextPage) {
    const accountTxResult = await this.request({
      command: 'account_tx',
      account,
      ledger_index_max: -1,
      ledger_index_min: -1,
      binary: false,
      limit,
      marker,
    } as AccountTxRequest);

    // TODO: add error handling here

    if (accountTxResult.result.transactions.length < limit) hasNextPage = false;
    marker = accountTxResult.result.marker;

    for (let t = 0, tl = accountTxResult.result.transactions.length; t < tl; t += 1) {
      const accountTx = accountTxResult.result.transactions[t] as AccountTransaction;

      if (accountTx.tx && accountTx.tx.Sequence === offerSequence) {
        offerCreateTx = accountTx.tx;
        hasNextPage = false;
        break;
      }
    }
  }
  if (!offerCreateTx) throw new OrderNotFound("Couldn't find matching Order transaction");

  /**
   * Look up order in the Order Book to get funding data
   */
  let bookOffer: BookOffer | undefined;

  const { result: bookOffersResult }: BookOffersResponse = await this.request({
    command: 'book_offers',
    taker: account,
    taker_gets: offer.TakerGets,
    taker_pays: offer.TakerPays,
    ledger_index: 'validated',
  } as BookOffersRequest);

  for (let o = 0, ol = bookOffersResult.offers.length; o < ol; o += 1) {
    if (bookOffersResult.offers[o].Sequence === offerSequence) {
      bookOffer = bookOffersResult.offers[o];
      break;
    }
  }
  if (!bookOffer) throw new OrderNotFound("Couldn't find Order on order book to get funding data");

  /**
   * Look up timestamp of last transaction to modify the Offer
   */
  const lastTx = await this.request({
    command: 'tx',
    transaction: offer.PreviousTxnID,
  } as TxRequest);

  const lastTradeTimestamp = lastTx.result.date || unixTimeToRippleTime(0);

  /**
   * Assemble final Order object
   */
  const side = offer.Flags === OfferFlags.lsfSell ? OrderSide.Sell : OrderSide.Buy;

  const base = side === OrderSide.Buy ? offer.TakerPays : offer.TakerGets;
  const quote = side === OrderSide.Buy ? offer.TakerGets : offer.TakerPays;

  const response: FetchOrderResponse = {
    id,
    datetime: rippleTimeToISOTime(offerCreateTx.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTx.date || 0),
    lastTradeTimestamp,
    status: OrderStatus.Open,
    symbol: getMarketSymbol(base, quote),
    type: OrderType.Limit,
    timeInForce: offer.Flags === OfferFlags.lsfPassive ? OrderTimeInForce.PostOnly : undefined,
    side,
    trades: [],
    fee: {
      currency: 'XRP',
      cost: 0,
    },
    info: { ledger_entry: JSON.stringify(offerResult) },
  };

  return response;
}

export default fetchOrder;
