import { LedgerEntry } from 'xrpl/dist/npm/models/ledger';

export type LabeledLedgerEntry = {
  ledgerEntryType: string;
} & LedgerEntry;

export interface BinaryLedgerEntry {
  data: string;
}

export type State = {
  index: string;
} & (BinaryLedgerEntry | LabeledLedgerEntry);
