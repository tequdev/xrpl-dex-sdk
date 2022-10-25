import { Transaction, TransactionMetadata } from 'xrpl';
import { ResponseOnlyTxInfo } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';

export interface Warning {
  id: number;
  message: string;
  details?: { [key: string]: string };
}

export interface BaseTxResponse {
  id: number | string;
  status?: 'success' | string;
  type: 'response' | string;
  result: unknown;
  warning?: 'load';
  warnings?: Warning[];
  forwarded?: boolean;
  api_version?: number;
}

export interface TxResponse extends BaseTxResponse {
  result: {
    hash: string;
    ledger_index?: number;
    meta?: TransactionMetadata | string;
    validated?: boolean;
    date?: number;
  } & Transaction;
  searched_all?: boolean;
}

export type LedgerTransaction<T> = T & {
  metaData?: TransactionMetadata | undefined;
};

export interface AccountTransaction {
  ledger_index: number;
  meta: string | TransactionMetadata;
  tx?: Transaction & ResponseOnlyTxInfo;
  tx_blob?: string;
  validated: boolean;
}

export type TxResult<T> = TxResponse['result'] & T;

export type TransactionData<T> = {
  transaction: T;
  metadata: TransactionMetadata;
  offers: Offer[];
  previousTxnId: string | undefined;
  date: number;
};
