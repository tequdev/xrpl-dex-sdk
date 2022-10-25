import _ from 'lodash';
import { rippleTimeToUnixTime } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  FetchMyTradesParams,
  FetchMyTradesResponse,
  MarketSymbol,
  UnixTimestamp,
  SDKContext,
  Trade,
  ArgumentsRequired,
  AccountAddress,
  Sequence,
} from '../models';
import { fetchAccountTxns, getMarketSymbol, getOfferFromNode, getTradeFromData, validateMarketSymbol } from '../utils';

/**
 * Fetch the SDK user's {@link Trades} for a given market symbol. Returns a {@link FetchMyTradesResponse}.
 *
 * @category Methods
 *
 * @param symbol - {@link MarketSymbol} to filter Trades by
 * @param since - (Optional) Only return Trades since this date
 * @param limit - (Optional) Total number of Trades to return (default is 20)
 * @param params - (Optional) A {@link FetchMyTradesParams} object
 * @returns A {@link FetchMyTradesResponse} object
 */
async function fetchMyTrades(
  this: SDKContext,
  symbol: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchMyTradesParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchMyTradesResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchMyTrades call');
  validateMarketSymbol(symbol);

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
      txCount += 1;
      if (trades.length >= limit || txCount >= params.searchLimit) break;

      if (
        !transaction.tx?.Sequence ||
        typeof transaction.meta !== 'object' ||
        transaction.tx.TransactionType !== 'OfferCreate' ||
        !transaction.tx.date ||
        getMarketSymbol(transaction.tx) !== symbol
      )
        continue;

      /** Filter by date if `since` is defined */
      if (since && rippleTimeToUnixTime(transaction.tx.date) < since) {
        hasNextPage = false;
        continue;
      }

      for (const affectedNode of transaction.meta.AffectedNodes) {
        const offer = getOfferFromNode(affectedNode);

        if (!offer) continue;

        const trade = await getTradeFromData.call(
          this,
          {
            date: transaction.tx.date,
            Flags: offer.Flags as number,
            OrderAccount: offer.Account as AccountAddress,
            OrderSequence: offer.Sequence as Sequence,
            Account: transaction.tx.Account,
            Sequence: transaction.tx.Sequence,
            TakerPays: offer.TakerPays as Amount,
            TakerGets: offer.TakerGets as Amount,
          },
          { transaction }
        );

        if (trade) trades.push(trade);
      }
    }

    hasNextPage = trades.length < limit && txCount < params.searchLimit;
  }

  // Sort oldest-to-newest
  if (trades.length) trades.sort((a, b) => a.timestamp - b.timestamp);

  return trades;
}

export default fetchMyTrades;
