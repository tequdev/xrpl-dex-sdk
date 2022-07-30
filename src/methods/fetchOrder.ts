import { ArgumentsRequired, OrderNotFound, Trade } from 'ccxt';
import _ from 'lodash';
import {
  AccountTxRequest,
  AccountTxResponse,
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  LedgerEntryResponse,
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
  OrderId,
} from '../models';
import { Order } from '../models/ccxt/Order';
import { getMarketSymbol, parseCurrencyAmount } from '../utils';

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

const handleAccountTxErrors = (accountTxResult: AccountTxResponse) => {
  if (accountTxResult.status === 'error') {
    const { error, error_message, error_code } = accountTxResult as unknown as ErrorResponse;
    if (error_message || error === XrplErrorTypes.EntryNotFound) {
      throw new OrderNotFound(`${error_code ? error_code + ':' : ''} ${error_message || error}`);
    }
  } else if (accountTxResult.result.transactions.length === 0) {
    throw new OrderNotFound('No transactions found');
  }
};

async function fetchOrder(
  this: Client,
  /** The Order ID hash */
  id: OrderId,
  symbol: MarketSymbol | undefined = undefined,
  params: FetchOrderParams
): Promise<FetchOrderResponse> {
  const { account } = params;

  /**
   * Validate request
   */
  if (!id) throw new ArgumentsRequired('`id` field is required');
  if (!account) throw new ArgumentsRequired('Params field `account` is required');

  /**
   * Look up Offer
   */
  const offerResult = await this.request({
    command: 'ledger_entry',
    ledger_index: 'validated',
    index: id,
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

  // // Trade = OfferCreate transactions (from any account) that modify the Order
  // const tradeTxns: AccountTransaction['tx'][] = [];

  const trades: Trade[] = [];

  let filled = 0;
  let remaining = amount;

  let status = OrderStatus.Open;

  /**
   * Look up Transaction that created this Offer
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

    handleAccountTxErrors(accountTxResult);

    if (accountTxResult.result.transactions.length < limit) hasNextPage = false;
    marker = accountTxResult.result.marker;

    for (let t = 0, tl = accountTxResult.result.transactions.length; t < tl; t += 1) {
      const accountTx = accountTxResult.result.transactions[t] as AccountTransaction;

      if (!accountTx.tx) continue;

      if (accountTx.tx.TransactionType === 'OfferCreate' && accountTx.tx.Sequence === offer.Sequence) {
        offerCreateTx = accountTx.tx;

        // TODO: finish the Trades logic here
        // TODO: remember to account for flags that will affect how you interpret these results

        // if (typeof meta === 'object') {
        //   const createdNodes: Hash[] = [];
        //   const modifiedNodes: Hash[] = [];
        //   const deletedNodes: Hash[] = [];
        //   for (let n = 0, nl = meta.AffectedNodes.length; n < nl; n += 1) {
        //     if (meta.AffectedNodes[n].hasOwnProperty('CreatedNode')) {
        //       const { CreatedNode } = meta.AffectedNodes[n] as CreatedNode;
        //       // An OfferCreate transaction may or may not create an object in the ledger,
        //       // depending on how much was matched and whether the transaction used flags
        //       // such as tfImmediateOrCancel
        //       if (CreatedNode.LedgerEntryType === 'Offer') {
        //         createdNodes.push(CreatedNode.LedgerIndex);
        //       }
        //     } else if (meta.AffectedNodes[n].hasOwnProperty('ModifiedNode')) {
        //       const { ModifiedNode } = meta.AffectedNodes[n] as ModifiedNode;
        //       // A ModifiedNode of type Offer indicates an Offer that was matched and partially consumed
        //       if (ModifiedNode.LedgerEntryType === 'Offer') {
        //         modifiedNodes.push(ModifiedNode.LedgerIndex);
        //       }
        //     } else if (meta.AffectedNodes[n].hasOwnProperty('DeletedNode')) {
        //       const { DeletedNode } = meta.AffectedNodes[n] as DeletedNode;
        //       // A DeletedNode of type Offer can indicate a matching Offer that was fully consumed,
        //       // an Offer that was found to be expired or unfunded at the time of processing, or
        //       // an Offer that was canceled as part of placing a new Offer.
        //       if (DeletedNode.LedgerEntryType === 'Offer') {
        //         deletedNodes.push(DeletedNode.LedgerIndex);
        //         if (
        //           DeletedNode.FinalFields.hasOwnProperty('Account') &&
        //           tx.Account === DeletedNode.FinalFields.Account
        //         ) {
        //           status = OrderStatus.Canceled;
        //         }
        //       }
        //     }
        //   }
        //   if (!createdNodes.length) {
        //     // TODO: finish figuring out the statuses
        //     status = OrderStatus.Closed;
        //   }
        //   // hasCreatedNode                                     = Created unfilled Offer
        //   // hasCreatedNode   hasModifiedNode                   = Created partially filled Offer (and partially consumed another)
        //   // hasCreatedNode                     hasDeletedNode  = Created partially filled Offer object (and fully consumed another)
        //   //                  hasModifiedNode                   = Fully filled this Offer (by partially consuming another)
        //   //                  hasModifiedNode   hasDeletedNode  = Fully filled this Offer (by partially and fully consuming others)
        //   //                                    hasDeletedNode  = Fully filled this Offer (and consumed another)
        //   //                                    hasDeletedNode  = Found an expired/unfunded Offer and removed it
        // }
      }
    }
  }
  if (!offerCreateTx) throw new OrderNotFound("Couldn't find matching Order transaction");

  const cost = filled * price;

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

  // TODO: figure out the average filling price
  let average: number | undefined;

  const response: Order = {
    id,
    datetime: rippleTimeToISOTime(offerCreateTx.date || 0),
    timestamp: rippleTimeToUnixTime(offerCreateTx.date || 0),
    lastTradeTimestamp,
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
    info: { ledger_entry: JSON.stringify(offerResult) },
  };

  return response;
}

export default fetchOrder;
