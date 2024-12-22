import { LedgerRequest, rippleTimeToUnixTime } from 'xrpl';
import { DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import { DeletedNode, FetchOrdersParams, FetchOrdersResponse, MarketSymbol, Order, UnixTimestamp } from '../models';
import SDK from '../sdk';
import { getMarketSymbol, getOrderId, validateMarketSymbol } from '../utils';

/**
 * Retrieves {@link models.OrderBook} data for multiple {@link models.Market} pairs. Returns a
 * {@link models.FetchOrdersResponse} with a list of any matching Orders.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-multiple-orders-and-trades
 *
 * @param symbol - (Optional) {@link models.MarketSymbol} to filter {@link models.Order}s by
 * @param since - (Optional) Only return Orders since sdk date
 * @param limit - (Optional) Total number of entries to return (default is 20)
 * @param params - (Optional) A {@link models.FetchOrdersParams} object
 * @returns {@link models.FetchOrdersResponse}
 */
async function fetchOrders(
  sdk: SDK,
  symbol?: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchOrdersParams = {}
): Promise<FetchOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const searchLimit = params.searchLimit || DEFAULT_SEARCH_LIMIT;
  const showOpen = params.showOpen || true;
  const showClosed = params.showClosed || true;
  const showCanceled = params.showCanceled || true;

  const orders: Order[] = [];

  let hasNextPage = orders.length <= limit;
  let previousLedgerHash: string | undefined;

  while (hasNextPage) {
    const ledgerRequest: LedgerRequest = {
      command: 'ledger',
      transactions: true,
      expand: true,
    };
    if (previousLedgerHash) ledgerRequest.ledger_hash = previousLedgerHash;
    else ledgerRequest.ledger_index = 'validated';

    const ledgerResponse = await sdk.client.request(ledgerRequest);

    const ledger = ledgerResponse.result.ledger;

    /** Filter by date if `since` is defined */
    if (since && rippleTimeToUnixTime(ledger.close_time) < since) {
      hasNextPage = false;
      continue;
    }

    previousLedgerHash = ledger.parent_hash;

    const transactions = ledger.transactions;

    if (!transactions) continue;

    let txCount = 0;

    for (const transaction of transactions) {
      txCount += 1;
      if (orders.length >= limit || txCount >= searchLimit) break;

      if (
        typeof transaction !== 'object' ||
        !transaction.metaData ||
        !transaction.Sequence ||
        (transaction.TransactionType !== 'OfferCancel' && transaction.TransactionType !== 'OfferCreate')
      )
        continue;

      /** Filter by market symbol if `symbol` is defined */

      if (symbol) {
        let txSymbol: MarketSymbol | undefined;
        if (transaction.TransactionType === 'OfferCancel') {
          for (const node of transaction.metaData.AffectedNodes) {
            if (node.hasOwnProperty('DeletedNode')) {
              const affectedOffer = (node as DeletedNode).DeletedNode.FinalFields;
              if (affectedOffer.Account === transaction.Account && affectedOffer.Sequence === transaction.Sequence) {
                txSymbol = getMarketSymbol(affectedOffer);
                break;
              }
            }
          }
        } else {
          txSymbol = getMarketSymbol(transaction);
        }
        if (txSymbol !== symbol) continue;
      }

      const orderId = getOrderId(transaction.Account, transaction.Sequence);

      const order = await sdk.fetchOrder(orderId, undefined, { searchLimit });

      if (!order) continue;

      /** Filter by status if `showOpen`, `showClosed`, or `showCanceled` is defined */
      if (
        (order.status === 'open' && !showOpen) ||
        (order.status === 'closed' && !showClosed) ||
        (order.status === 'canceled' && !showCanceled)
      )
        continue;

      orders.push(order);
    }

    hasNextPage = orders.length < limit && txCount < searchLimit;
  }

  return orders;
}

export default fetchOrders;
