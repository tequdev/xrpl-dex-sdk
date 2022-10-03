import { BadRequest } from 'ccxt';
import _ from 'lodash';
import { dropsToXrp, OfferCreateFlags, rippleTimeToISOTime, rippleTimeToUnixTime } from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { parseAmountValue } from 'xrpl/dist/npm/models/transactions/common';
import { DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  FetchMyTradesParams,
  FetchMyTradesResponse,
  MarketSymbol,
  UnixTimestamp,
  SDKContext,
  Trade,
  AffectedNode,
} from '../models';
import {
  BN,
  fetchAccountTxns,
  fetchTransferRate,
  getAmountCurrencyCode,
  getBaseAmountKey,
  getMarketSymbol,
  getOrderOrTradeId,
  getQuoteAmountKey,
  getTakerOrMaker,
} from '../utils';

/**
 * Fetch Trades for a given market symbol. Returns a {@link FetchMyTradesResponse}.
 *
 * @category Methods
 */
async function fetchMyTrades(
  this: SDKContext,
  /** Filter Trades by market symbol */
  symbol: MarketSymbol,
  /** Only return Trades since this date */
  since?: UnixTimestamp,
  /** Total number of Trades to return */
  limit: number = DEFAULT_LIMIT,
  /** eslint-disable-next-line */
  params: FetchMyTradesParams = {}
): Promise<FetchMyTradesResponse> {
  if (!symbol) throw new BadRequest('Must provide a market symbol');

  const searchLimit = params.searchLimit || DEFAULT_SEARCH_LIMIT;
  const sellBaseField = getBaseAmountKey('sell');
  const sellQuoteField = getQuoteAmountKey('sell');
  const buyBaseField = getBaseAmountKey('buy');
  const buyQuoteField = getQuoteAmountKey('buy');

  const trades: Trade[] = [];

  let txCount = 0;
  const requestLimit = DEFAULT_LIMIT;
  let marker: unknown;
  let hasNextPage = trades.length <= limit;

  while (hasNextPage) {
    const accountTxResponse = await fetchAccountTxns(this.client, this.wallet.classicAddress, requestLimit, marker);
    if (!accountTxResponse) break;
    marker = accountTxResponse.result.marker;

    const transactions = accountTxResponse.result.transactions;

    if (!transactions) continue;

    for (const transaction of transactions) {
      if (
        !transaction.tx?.Sequence ||
        typeof transaction.meta !== 'object' ||
        transaction.tx.TransactionType !== 'OfferCreate' ||
        !transaction.tx.date
      )
        continue;

      /** Filter by date if `since` is defined */
      if (since && rippleTimeToUnixTime(transaction.tx.date) < since) {
        continue;
      }

      const side =
        typeof transaction.tx.Flags === 'number' && !(transaction.tx.Flags & OfferCreateFlags.tfSell) ? 'buy' : 'sell';

      const marketSymbol = getMarketSymbol(
        transaction.tx[side === 'buy' ? buyBaseField : sellBaseField],
        transaction.tx[side === 'buy' ? buyQuoteField : sellQuoteField]
      );

      if (marketSymbol !== symbol) continue;

      for (const affectedNode of transaction.meta.AffectedNodes) {
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
          id: getOrderOrTradeId(transaction.tx.Account, transaction.tx.Sequence),
          order: orderId,
          datetime: rippleTimeToISOTime(transaction.tx.date || 0),
          timestamp: rippleTimeToUnixTime(transaction.tx.date || 0),
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

        trades.push(trade);
        if (trades.length >= limit) break;
      }
      txCount += 1;
      if (txCount >= searchLimit) break;
    }

    hasNextPage = trades.length < limit && txCount < searchLimit;
  }

  // Sort oldest-to-newest
  if (trades.length) trades.sort((a, b) => a.timestamp - b.timestamp);

  return trades;
}

export default fetchMyTrades;
