import { Transaction, TransactionAndMetadata, TransactionMetadata, TxResponse } from 'xrpl';
import { ResponseOnlyTxInfo } from 'xrpl/dist/npm/models/common';
import { Offer } from 'xrpl/dist/npm/models/ledger';

export interface AccountTransaction {
  ledger_index: number;
  meta: string | TransactionMetadata;
  tx?: Transaction & ResponseOnlyTxInfo;
  tx_blob?: string;
  validated: boolean;
}

export interface AccountTxResult<Transaction> {
  validated: boolean;
  meta: string | TransactionMetadata;
  tx?: Transaction & ResponseOnlyTxInfo;
}

export type TxResult<T> = TxResponse['result'] & T;
export type TxBaseResponse<T> = T;

export type TransactionData = TransactionAndMetadata & { offers: Offer[] };
