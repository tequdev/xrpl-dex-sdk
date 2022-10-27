import _ from 'lodash';
import { OfferCreate } from 'xrpl';
import { DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  FetchOrderParams,
  FetchOrderResponse,
  MarketSymbol,
  OrderId,
  TransactionData,
  Order,
  Trade,
  ArgumentsRequired,
  OrderNotFound,
  UnixTimestamp,
} from '../models';
import SDK from '../sdk';
import {
  BN,
  fetchTxn,
  getMostRecentTx,
  getOrderFromData,
  getTradeFromData,
  parseOrderId,
  parseTransaction,
  validateMarketSymbol,
  validateOrderId,
} from '../utils';

/**
 * Fetches an {@link models.Order} from the dEX. Returns a {@link models.FetchOrderResponse} with the matching Order.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-orders
 *
 * @param id - {@link models.OrderId} of the Order to fetch
 * @param symbol - (Optional) The {@link models.MarketSymbol} of the Order to fetch
 * @param params - (Optional) A {@link models.FetchOrderParams} object
 * @returns {@link models.FetchOrderResponse}
 */
async function fetchOrder(
  sdk: SDK,
  id: OrderId,
  /* eslint-disable-next-line */
  symbol?: MarketSymbol,
  params: FetchOrderParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchOrderResponse> {
  if (!id) throw new ArgumentsRequired('Missing required arguments for fetchOrder call');
  validateOrderId(id);
  if (symbol) validateMarketSymbol(symbol);

  try {
    /**
     * Set things up
     */
    const { account, sequence } = parseOrderId(id);
    const transactions: TransactionData<OfferCreate>[] = [];

    const previousTxn = await getMostRecentTx(sdk.client, id, params.searchLimit);

    if (!previousTxn) throw new OrderNotFound(`Couldn't find data for Order ID: "${id}"`);

    let orderStatus = previousTxn?.orderStatus ?? 'open';
    let previousTxnId = previousTxn?.previousTxnId;
    let previousTxnData = previousTxn?.previousTxnData;

    if (previousTxnData) transactions.push(previousTxnData);

    /**
     * Build a Transaction history for sdk Order
     */
    while (previousTxnId) {
      const previousTxnResponse = await fetchTxn(sdk.client, previousTxnId);

      if (previousTxnResponse) {
        previousTxnData = parseTransaction(id, previousTxnResponse);
        if (previousTxnData) {
          transactions.push(previousTxnData);
          previousTxnId = previousTxnData.previousTxnId;
        }
      }
    }

    if (!transactions.length) throw new OrderNotFound(`Couldn't find data for OrderId ${id}`);
    // if (!transactions.length) return;

    /**
     * Parse the Transaction history for Trade and Order objects
     */
    const trades: Trade[] = [];
    let order: Order | undefined;
    let lastTradeTimestamp: UnixTimestamp | undefined;
    let filled = BN(0);
    let fillPrice = BN(0);
    let totalFillPrice = fillPrice;

    // Newest to oldest
    transactions.sort((a, b) => b.date - a.date);

    for (const transactionData of transactions) {
      const { transaction, offers, date } = transactionData;

      for (const offer of offers) {
        if (!offer.Sequence) continue;

        const trade = await getTradeFromData.call(
          sdk,
          {
            date,
            Flags: offer.Flags as number,
            OrderAccount: offer.Account,
            OrderSequence: offer.Sequence,
            Account: account,
            Sequence: sequence,
            TakerPays: offer.TakerPays,
            TakerGets: offer.TakerGets,
          },
          { offer }
        );

        if (trade) {
          trades.push(trade);
          filled = filled.plus(trade.amount);
          fillPrice = BN(trade.price);
          totalFillPrice = totalFillPrice.plus(fillPrice);
          if (!lastTradeTimestamp) lastTradeTimestamp = date;
        }
      }

      if (transaction.Account === account && transaction.Sequence === sequence) {
        if (!transactions.length) throw new OrderNotFound(`Couldn't find data for OrderId ${id}`);

        order = await getOrderFromData.call(
          sdk,
          {
            status: orderStatus,
            date,
            lastTradeTimestamp,
            filled,
            fillPrice,
            totalFillPrice,
            trades,
            Flags: transaction.Flags as number,
            Account: transaction.Account,
            Sequence: transaction.Sequence,
            TakerPays: transaction.TakerPays,
            TakerGets: transaction.TakerGets,
          },
          { transactionData }
        );
      }
    }

    if (order) return order;
    else throw new OrderNotFound(`Couldn't find data for OrderId ${id}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default fetchOrder;
