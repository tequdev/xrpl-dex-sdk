import { LedgerRequest, rippleTimeToUnixTime } from 'xrpl';
import { Amount } from 'xrpl/dist/npm/models/common';
import { DEFAULT_LIMIT, DEFAULT_SEARCH_LIMIT } from '../constants';
import {
  AccountAddress,
  ArgumentsRequired,
  FetchTradesParams,
  FetchTradesResponse,
  MarketSymbol,
  Sequence,
  Trade,
  UnixTimestamp,
} from '../models';
import SDK from '../sdk';
import { getMarketSymbol, getOfferFromNode, getTradeFromData, normalizeSymbol, validateMarketSymbol } from '../utils';

/**
 * Fetch {@link models.Trade}s for a given {@link models.MarketSymbol}. Returns a {@link models.FetchTradesResponse} with any
 * matching Trades.
 *
 * @category Methods
 *
 * @link https://docs.ccxt.com/en/latest/manual.html?#querying-multiple-orders-and-trades
 *
 * @param symbol - (Optional) {@link models.MarketSymbol} to filter Trades by
 * @param since - (Optional) Only return Trades since sdk date
 * @param limit - (Optional) Total number of Trades to return (default is 20)
 * @param params - (Optional) A {@link models.FetchTradesParams} object
 * @returns {@link models.FetchTradesResponse}
 */
async function fetchTrades(
  sdk: SDK,
  symbol: MarketSymbol,
  since?: UnixTimestamp,
  limit: number = DEFAULT_LIMIT,
  params: FetchTradesParams = {
    searchLimit: DEFAULT_SEARCH_LIMIT,
  }
): Promise<FetchTradesResponse> {
  if (!symbol) throw new ArgumentsRequired('Missing required arguments for fetchTrades call');
  validateMarketSymbol(symbol);

  const trades: Trade[] = [];

  let txCount = 0;
  let hasNextPage = trades.length <= limit;
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

    /** Filter by date if `since` is defined */
    if (since && rippleTimeToUnixTime(ledgerResponse.result.ledger.close_time) < since) {
      hasNextPage = false;
      continue;
    }

    previousLedgerHash = ledgerResponse.result.ledger.parent_hash;

    const transactions = ledgerResponse.result.ledger.transactions;

    if (!transactions) continue;

    for (const transaction of transactions) {
      txCount += 1;
      if (trades.length >= limit || txCount >= params.searchLimit) break;

      if (
        typeof transaction !== 'object' ||
        !transaction.Sequence ||
        !transaction.metaData ||
        transaction.TransactionType !== 'OfferCreate' ||
        getMarketSymbol(transaction) !== normalizeSymbol(symbol)
      )
        continue;

      for (const affectedNode of transaction.metaData.AffectedNodes) {
        const offer = getOfferFromNode(affectedNode);

        if (!offer) continue;

        const trade = await getTradeFromData.call(
          sdk,
          {
            date: ledgerResponse.result.ledger.close_time,
            Flags: offer.Flags as number,
            OrderAccount: offer.Account as AccountAddress,
            OrderSequence: offer.Sequence as Sequence,
            Account: transaction.Account,
            Sequence: transaction.Sequence,
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

export default fetchTrades;
