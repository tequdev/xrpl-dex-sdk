const sellAktXrpOffer = {
  result: {
    index: 'ABBDE28603ED3040FB76701A4CD130E301553432B89A74C3D09BCFB7B6F5FCAA',
    ledger_hash: 'E0A4E1E26C0D8CC6862765A5ECA6F92D7FF3989063D9A291DBD1A82407BF81B5',
    ledger_index: 30603997,
    node: {
      Account: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
      BookDirectory: '203FEB02A5A97B4F348B30577807B4ED600CA192CCAFE44E541C6BF526340000',
      BookNode: '0',
      Flags: 131072,
      LedgerEntryType: 'Offer',
      OwnerNode: '0',
      PreviousTxnID: '2A666127126AFF17D41BA491E5FC3E6CC970642E3F3ABB7858746CD6089BE75D',
      PreviousTxnLgrSeq: 30420014,
      Sequence: 30419057,
      TakerGets: {
        currency: 'AKT',
        issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
        value: '90',
      },
      TakerPays: '72',
      index: 'ABBDE28603ED3040FB76701A4CD130E301553432B89A74C3D09BCFB7B6F5FCAA',
    },
    validated: true,
  },
  status: 'success',
  type: 'response',
};

export default {
  offers: {
    sell: {
      [sellAktXrpOffer.result.node.Account]: {
        [sellAktXrpOffer.result.node.Sequence]: sellAktXrpOffer,
      },
    },
  },
};
