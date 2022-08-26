import {
  AccountTxRequest,
  Client,
  ErrorResponse,
  LedgerEntryRequest,
  OfferCreate,
  RippledError,
  TxRequest,
} from 'xrpl';
import { Offer } from 'xrpl/dist/npm/models/ledger';
import { hashOfferId } from 'xrpl/dist/npm/utils/hashes';
import { DEFAULT_LIMIT } from '../constants';
import { AccountAddress, TxResult, XrplErrorTypes } from '../models';
import { handleLedgerEntryErrors, handleTxErrors } from './errors';

export const fetchOffer = async (
  client: Client,
  account: AccountAddress,
  sequence: number
): Promise<Offer | undefined> => {
  try {
    const offerResult = await client.request({
      command: 'ledger_entry',
      ledger_index: 'validated',
      offer: {
        account,
        seq: sequence,
      },
    } as LedgerEntryRequest);

    handleLedgerEntryErrors(offerResult);

    return offerResult.result.node as Offer;
  } catch (err: unknown) {
    const error = err as RippledError;

    if ((error.data as ErrorResponse).error !== XrplErrorTypes.EntryNotFound) return;

    // This Offer was either closed or canceled - let's do some sleuthing to figure it out
    let offer: Offer | undefined;

    const limit = DEFAULT_LIMIT;
    let marker: unknown;
    let hasNextPage = true;

    while (hasNextPage) {
      const accountTxResponse = await client.request({
        command: 'account_tx',
        account,
        ledger_index_min: -1,
        ledger_index_max: -1,
        binary: false,
        limit,
        marker,
      } as AccountTxRequest);

      // Let's find the transaction that created or canceled this Offer

      handleTxErrors(accountTxResponse);

      marker = accountTxResponse.result.marker;
      if (!marker) hasNextPage = false;

      for (const transaction of accountTxResponse.result.transactions) {
        if (transaction.tx && transaction.tx.Sequence === sequence) {
          const offerCreateTxResponse = await client.request({
            command: 'tx',
            transaction: transaction.tx.hash,
            binary: false,
          } as TxRequest);

          handleTxErrors(offerCreateTxResponse);

          const offerCreateTx = offerCreateTxResponse.result as TxResult<OfferCreate>;

          if (offerCreateTx.Sequence) {
            // TODO: create some typing that only requires Flags, TakerGets, TakerPays, and PreviouxTxnID
            offer = {
              index: hashOfferId(account, sequence),
              LedgerEntryType: 'Offer',
              Flags: typeof offerCreateTx.Flags === 'number' ? offerCreateTx.Flags : 0,
              Account: offerCreateTx.Account,
              Sequence: offerCreateTx.Sequence,
              TakerPays: offerCreateTx.TakerPays,
              TakerGets: offerCreateTx.TakerGets,
              BookDirectory: '',
              BookNode: '0',
              OwnerNode: '0',
              PreviousTxnID: offerCreateTx.hash,
              PreviousTxnLgrSeq: offerCreateTx.LastLedgerSequence || 0,
            };
          }
        }
      }
    }

    return offer;
  }
};
