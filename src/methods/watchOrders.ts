import _ from 'lodash';
import { Readable } from 'stream';
import { OfferCreate, SubscribeRequest, TransactionStream } from 'xrpl';
import { ResponseOnlyTxInfo } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import {
  MarketSymbol,
  WatchOrdersParams,
  SDKContext,
  Node,
  Order,
  Trade,
  OrderStatus,
  WatchOrdersResponse,
} from '../models';
import {
  BN,
  getMarketSymbol,
  getOfferFromNode,
  getOrderFromData,
  getTradeFromData,
  validateMarketSymbol,
} from '../utils';

/**
 * Listens for new {@link Orders} for a single {@link Market} pair. Returns a Promise
 * resolving to a {@link WatchOrdersResponse}.
 *
 * @category Methods
 *
 * @param symbol - (Optional) {@link MarketSymbol} to filter Orders by
 * @param params - (Optional) A {@link WatchOrdersParams} object
 * @returns A Promise resolving to a {@link WatchOrdersResponse} object
 */
async function watchOrders(
  this: SDKContext,
  symbol?: MarketSymbol,
  params: WatchOrdersParams = {}
): Promise<WatchOrdersResponse> {
  if (symbol) validateMarketSymbol(symbol);

  const showOpen = params.showOpen || true;
  const showClosed = params.showClosed || true;
  const showCanceled = params.showCanceled || true;

  const orderStream = new Readable({ read: () => this });

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  this.client.on('error', async (error: unknown) => {
    console.error(error as Error);
    throw error as Error;
  });

  this.client.on('transaction', async (tx: TransactionStream) => {
    if (!tx.validated || tx.transaction.TransactionType !== 'OfferCreate') return;

    const transaction = tx.transaction as OfferCreate & ResponseOnlyTxInfo;
    if (!transaction.Sequence) return;

    /** Filter by symbol (if applicable) */
    if (symbol && getMarketSymbol(transaction) !== symbol) return;

    const tradeOffers: Offer[] = [];
    const parsedNodes: Node[] = [];

    tx.meta?.AffectedNodes.forEach((affectedNode: Node) => {
      const offer = getOfferFromNode(affectedNode);
      if (offer && offer.Account !== transaction.Account) {
        tradeOffers.push(offer);
        parsedNodes.push(affectedNode);
      }
    });

    const trades: Trade[] = [];
    let order: Order | undefined;
    let orderStatus: OrderStatus = 'open';
    let filled = BN(0);
    let fillPrice = BN(0);
    let totalFillPrice = fillPrice;

    for (const offer of tradeOffers) {
      if (!offer.Sequence) continue;

      const trade = await getTradeFromData.call(
        this,
        {
          date: transaction.date ?? 0,
          Flags: offer.Flags as number,
          OrderAccount: transaction.Account,
          OrderSequence: transaction.Sequence,
          Account: offer.Account,
          Sequence: offer.Sequence,
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
      }
    }

    order = await getOrderFromData.call(
      this,
      {
        status: orderStatus,
        date: transaction.date ?? 0,
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
      { transaction }
    );

    /** Filter by status if `showOpen`, `showClosed`, or `showCanceled` is defined */
    if (
      (order?.status === 'open' && !showOpen) ||
      (order?.status === 'closed' && !showClosed) ||
      (order?.status === 'canceled' && !showCanceled)
    ) {
      return;
    }

    if (order) orderStream.emit('update', order);
  });

  return orderStream;
}

export default watchOrders;
