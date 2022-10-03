import { BadRequest } from 'ccxt';
import _ from 'lodash';
import { Readable } from 'stream';
import {
  dropsToXrp,
  OfferCreateFlags,
  rippleTimeToISOTime,
  rippleTimeToUnixTime,
  SubscribeRequest,
  TransactionStream,
} from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { MarketSymbol, SDKContext, Trade, AffectedNode, WatchTradesResponse } from '../models';
import {
  BN,
  fetchTransferRate,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOrderOrTradeId,
  getQuoteAmountKey,
  getTakerOrMaker,
} from '../utils';

/**
 * Listens for new Trades for a given market symbol. Returns a {@link WatchTradesResponse}.
 *
 * @category Methods
 */
async function watchTrades(
  this: SDKContext,
  /** Filter Trades by market symbol */
  symbol: MarketSymbol
): Promise<WatchTradesResponse> {
  if (!symbol) throw new BadRequest('Must provide a market symbol');

  const tradeStream = new Readable({ read: () => this });

  await this.client.request({
    command: 'subscribe',
    streams: ['transactions'],
  } as SubscribeRequest);

  this.client.on('transaction', async (tx: TransactionStream) => {
    const transaction = tx.transaction;
    if (
      typeof transaction !== 'object' ||
      transaction.TransactionType !== 'OfferCreate' ||
      typeof tx.meta !== 'object' ||
      !transaction.Sequence
    )
      return;

    const side =
      typeof transaction.Flags === 'number' && !(transaction.Flags & OfferCreateFlags.tfSell) ? 'buy' : 'sell';

    const marketSymbol = getMarketSymbol(transaction[getBaseAmountKey(side)], transaction[getQuoteAmountKey(side)]);

    if (marketSymbol !== symbol) {
      return;
    }

    for (const affectedNode of tx.meta.AffectedNodes) {
      const { LedgerEntryType, FinalFields } = Object.values(affectedNode)[0] as AffectedNode;

      if (LedgerEntryType !== 'Offer' || !FinalFields) continue;

      const offer = FinalFields as unknown as Offer;
      const orderId = getOrderOrTradeId(offer.Account, offer.Sequence);

      const baseAmount = offer[getBaseAmountKey(side)];
      const quoteAmount = offer[getQuoteAmountKey(side)];

      const baseRate = await fetchTransferRate(this.client, baseAmount);
      const quoteRate = await fetchTransferRate(this.client, quoteAmount);

      const baseCurrency = getAmountCurrencyCode(baseAmount);
      const quoteCurrency = getAmountCurrencyCode(quoteAmount);

      const baseValue =
        baseCurrency === 'XRP' ? BN(dropsToXrp(parseAmountValue(baseAmount))) : BN(parseAmountValue(baseAmount));
      const quoteValue =
        quoteCurrency === 'XRP' ? BN(dropsToXrp(parseAmountValue(quoteAmount))) : BN(parseAmountValue(quoteAmount));

      const amount = baseValue;
      const price = quoteValue.dividedBy(baseValue);
      const cost = amount.times(price);

      const feeRate = side === 'buy' ? quoteRate : baseRate;
      const feeCost = (side === 'buy' ? quoteValue : baseValue).times(feeRate);

      const trade: Trade = {
        id: getOrderOrTradeId(transaction.Account, transaction.Sequence),
        order: orderId,
        datetime: rippleTimeToISOTime(transaction.date || 0),
        timestamp: rippleTimeToUnixTime(transaction.date || 0),
        symbol,
        type: 'limit',
        side,
        amount: amount.toString(),
        price: price.toString(),
        takerOrMaker: getTakerOrMaker(side),
        cost: cost.toString(),
        info: { transaction },
      };

      if (feeCost.isGreaterThan(0)) {
        trade.fee = {
          currency: side === 'buy' ? quoteCurrency : baseCurrency,
          cost: feeCost.toString(),
          rate: feeRate.toString(),
          percentage: true,
        };
      }

      if (trade) tradeStream.emit('update', trade);
    }
  });

  return tradeStream;
}

export default watchTrades;
