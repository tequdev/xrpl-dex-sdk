import _ from 'lodash';
import { LedgerRequest, OfferCreateFlags, rippleTimeToUnixTime } from 'xrpl';
import { DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import { FetchOrdersParams, FetchOrdersResponse, MarketSymbol, UnixTimestamp, SDKContext, Order } from '../models';
import { getBaseAmountKey, getMarketSymbol, getOrderOrTradeId, getQuoteAmountKey } from '../utils';

async function fetchOrders(
  this: SDKContext,
  /** Filter Orders by market symbol */
  symbol?: MarketSymbol,
  /** Only return Orders since this date */
  since?: UnixTimestamp,
  /** Total number of Orders to return */
  limit: number = DEFAULT_LIMIT,
  /** eslint-disable-next-line */
  params: FetchOrdersParams = {}
): Promise<FetchOrdersResponse> {
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

    const ledgerResponse = await this.client.request(ledgerRequest);

    /** Filter by date if `since` is defined */
    if (since && rippleTimeToUnixTime(ledgerResponse.result.ledger.close_time) < since) {
      hasNextPage = false;
      continue;
    }

    previousLedgerHash = ledgerResponse.result.ledger.parent_hash;

    const transactions = ledgerResponse.result.ledger.transactions;

    if (!transactions) continue;

    let txCount = 0;

    for (const transaction of transactions) {
      if (typeof transaction !== 'object' || !transaction.Sequence) continue;

      if (transaction.TransactionType === 'OfferCancel') {
        //
      } else if (transaction.TransactionType === 'OfferCreate') {
        /** Filter by market symbol if `symbol` is defined */
        if (symbol) {
          const txSide =
            typeof transaction.Flags === 'number' &&
            (transaction.Flags & OfferCreateFlags.tfSell) === OfferCreateFlags.tfSell
              ? 'sell'
              : 'buy';

          const baseAmount = transaction[getBaseAmountKey(txSide)];
          const quoteAmount = transaction[getQuoteAmountKey(txSide)];
          const marketSymbol = getMarketSymbol(baseAmount, quoteAmount);
          if (marketSymbol !== symbol) continue;
        }

        const orderId = getOrderOrTradeId(transaction.Account, transaction.Sequence);

        const order = await this.fetchOrder(orderId, undefined, { searchLimit });

        if (!order) continue;

        /** Filter by status if `showOpen`, `showClosed`, or `showCanceled` is defined */
        if (
          (order.status === 'open' && !showOpen) ||
          (order.status === 'closed' && !showClosed) ||
          (order.status === 'canceled' && !showCanceled)
        )
          continue;

        orders.push(order);

        if (orders.length >= limit) break;
      }
      txCount += 1;
      if (txCount >= searchLimit) break;
    }

    hasNextPage = orders.length < limit && txCount < searchLimit;
  }

  return orders;
}

export default fetchOrders;
