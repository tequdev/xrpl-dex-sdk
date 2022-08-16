import { AccountAddress, CurrencyCode } from '../common';
import { Fee } from './Fees';

export enum TransactionType {
  Deposit = 'deposit',
  Withdrawal = 'withdrawal',
  Transfer = 'transfer',
  Trade = 'trade',
}

export enum TransactionStatus {
  Pending = 'pending',
  Ok = 'ok',
  Failed = 'failed',
  Canceled = 'canceled',
}

export default interface Transaction {
  id: string;
  txid: string;
  timestamp: number;
  datetime: string;
  addressFrom: AccountAddress;
  address: AccountAddress;
  addressTo: AccountAddress;
  tagFrom: string;
  tag: string;
  tagTo: string;
  type: TransactionType;
  amount: number;
  currency: CurrencyCode;
  status: TransactionStatus;
  updated?: number;
  comment?: string;
  fee: Fee;
  info: { [key: string]: any };
}
