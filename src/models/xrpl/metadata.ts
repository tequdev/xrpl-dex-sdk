export interface CreatedNode {
  CreatedNode: {
    LedgerEntryType: string;
    LedgerIndex: string;
    NewFields: {
      [field: string]: unknown;
    };
  };
}
export interface ModifiedNode {
  ModifiedNode: {
    LedgerEntryType: string;
    LedgerIndex: string;
    FinalFields?: {
      [field: string]: unknown;
    };
    PreviousFields?: {
      [field: string]: unknown;
    };
    PreviousTxnID?: string;
    PreviouTxnLgrSeq?: number;
  };
}
export interface DeletedNode {
  DeletedNode: {
    LedgerEntryType: string;
    LedgerIndex: string;
    FinalFields: {
      [field: string]: unknown;
    };
  };
}
