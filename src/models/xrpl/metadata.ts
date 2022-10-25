/**
 * These types are not directly exported by the XRPL.js library,
 * causing typing issues when using its `Node` type.
 */

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
    PreviousFields?: {
      [field: string]: unknown;
    };
  };
}

export type AffectedNodeType = 'CreatedNode' | 'ModifiedNode' | 'DeletedNode';

export interface AffectedNode {
  type: AffectedNodeType;
  LedgerEntryType: string;
  LedgerIndex: string;
  NewFields?: {
    [field: string]: unknown;
  };
  FinalFields?: {
    [field: string]: unknown;
  };
  PreviousFields?: {
    [field: string]: unknown;
  };
  PreviousTxnID?: string;
  PreviouTxnLgrSeq?: number;
}

export type Node = CreatedNode | ModifiedNode | DeletedNode;
