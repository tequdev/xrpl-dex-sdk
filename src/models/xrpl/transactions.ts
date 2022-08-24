import { Transaction, TransactionMetadata, TxResponse } from 'xrpl';
import { ResponseOnlyTxInfo } from 'xrpl/dist/npm/models/common';

export interface AccountTransaction {
  ledger_index: number;
  meta: string | TransactionMetadata;
  tx?: Transaction & ResponseOnlyTxInfo;
  tx_blob?: string;
  validated: boolean;
}

export type TxResult<T> = TxResponse['result'] & T;
