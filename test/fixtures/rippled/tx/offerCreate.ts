import { OfferCreate, TxResponse } from 'xrpl';
import offerCreateBuy from './offerCreateBuy.json';
import offerCreateSell from './offerCreateSell.json';

const buyAktXrpOffer1 = {
  id: 1,
  result: {
    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
    Fee: '12',
    Flags: 0,
    LastLedgerSequence: 30420032,
    Sequence: 30419115,
    SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
    TakerGets: '20',
    TakerPays: {
      currency: 'AKT',
      issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
      value: '25',
    },
    TransactionType: 'OfferCreate',
    TxnSignature:
      '3044022003447921590982406308AD5AD2C0A3211F529229136435A1BA2B4038CD98AD640220620C406DBDA9BF21C4D6AAA0FFC2B3C969934A2923EFFA9DBFC0DC254FEDB8AF',
    date: 714097491,
    hash: '2A666127126AFF17D41BA491E5FC3E6CC970642E3F3ABB7858746CD6089BE75D',
    inLedger: 30420014,
    ledger_index: 30420014,
    meta: {
      AffectedNodes: [
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
              Balance: '999999924',
              Flags: 0,
              OwnerCount: 1,
              Sequence: 30419116,
            },
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
            PreviousFields: {
              Balance: '999999956',
              Sequence: 30419115,
            },
            PreviousTxnID: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
            PreviousTxnLgrSeq: 30419712,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '35',
              },
              Flags: 1114112,
              HighLimit: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '0',
              },
              HighNode: '0',
              LowLimit: {
                currency: 'AKT',
                issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                value: '0',
              },
              LowNode: '0',
            },
            LedgerEntryType: 'RippleState',
            LedgerIndex: '3CDA6AE71A9B26F8460B09E3B77142B3CF57513E9C8CDA6CA17A3DB340C9C40A',
            PreviousFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '10',
              },
            },
            PreviousTxnID: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
            PreviousTxnLgrSeq: 30419712,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
              Balance: '999999992',
              Domain: '6578616D706C652E636F6D',
              Flags: 786432,
              OwnerCount: 2,
              Sequence: 30419058,
            },
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '81B14268BCE9EBDFCE9E7A1CB9074EC6208CB32C8EC3A5E9752EAFFEA1CBB7A8',
            PreviousFields: {
              Balance: '999999972',
            },
            PreviousTxnID: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
            PreviousTxnLgrSeq: 30419712,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
              BookDirectory: '203FEB02A5A97B4F348B30577807B4ED600CA192CCAFE44E541C6BF526340000',
              BookNode: '0',
              Flags: 131072,
              OwnerNode: '0',
              Sequence: 30419057,
              TakerGets: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '90',
              },
              TakerPays: '72',
            },
            LedgerEntryType: 'Offer',
            LedgerIndex: 'ABBDE28603ED3040FB76701A4CD130E301553432B89A74C3D09BCFB7B6F5FCAA',
            PreviousFields: {
              TakerGets: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '115',
              },
              TakerPays: '92',
            },
            PreviousTxnID: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
            PreviousTxnLgrSeq: 30419712,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '89.825',
              },
              Flags: 65536,
              HighLimit: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '0',
              },
              HighNode: '0',
              LowLimit: {
                currency: 'AKT',
                issuer: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
                value: '1000000000',
              },
              LowNode: '0',
            },
            LedgerEntryType: 'RippleState',
            LedgerIndex: 'E4EE9C23AAB2D59DC3484EA2DB4BD81B0E6BC5166F76668DD27B988FEA980A15',
            PreviousFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '114.95',
              },
            },
            PreviousTxnID: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
            PreviousTxnLgrSeq: 30419712,
          },
        },
      ],
      TransactionIndex: 0,
      TransactionResult: 'tesSUCCESS',
    },
    validated: true,
  },
  status: 'success',
  type: 'response',
};

const buyAktXrpOffer2 = {
  id: 1,
  result: {
    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
    Fee: '12',
    Flags: 0,
    LastLedgerSequence: 30419730,
    Sequence: 30419114,
    SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
    TakerGets: '8',
    TakerPays: {
      currency: 'AKT',
      issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
      value: '10',
    },
    TransactionType: 'OfferCreate',
    TxnSignature:
      '304402203F4D264966C9EE989D88F98579044A75939E9BF63D4043D9651E380B1A2B6F53022022252337A5A33F0DFEE01A4771AA5A13C5F3B3875B21789FF9C9F79B78387AC9',
    date: 714096510,
    hash: '65DA7BD3AF2C6BBF94226354264A5B83DEC4F232C3BE4CAFD8FBB28A97C0DE37',
    inLedger: 30419712,
    ledger_index: 30419712,
    meta: {
      AffectedNodes: [
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
              Balance: '999999956',
              Flags: 0,
              OwnerCount: 1,
              Sequence: 30419115,
            },
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
            PreviousFields: {
              Balance: '999999976',
              OwnerCount: 0,
              Sequence: 30419114,
            },
            PreviousTxnID: '8608179FF0A2E5215186994C35C7F4BF806F95B10DE6950DED496DD1E7285048',
            PreviousTxnLgrSeq: 30419583,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Flags: 0,
              Owner: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
              RootIndex: '2F22989AFAAD91E895C9A790A5672524DB5E97FAAC17166C7F57839D2A6C99F7',
            },
            LedgerEntryType: 'DirectoryNode',
            LedgerIndex: '2F22989AFAAD91E895C9A790A5672524DB5E97FAAC17166C7F57839D2A6C99F7',
          },
        },
        {
          ModifiedNode: {
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '33019674673A4EB0F7FF7306579C0D4CC31F4604831A96F49BE24D12AEAB3E28',
            PreviousTxnID: 'EFDCBAA458B511576CF5CB410E9F12A9374E3B1B599DE90CDD1DD8DA630D7E4F',
            PreviousTxnLgrSeq: 30419174,
          },
        },
        {
          CreatedNode: {
            LedgerEntryType: 'RippleState',
            LedgerIndex: '3CDA6AE71A9B26F8460B09E3B77142B3CF57513E9C8CDA6CA17A3DB340C9C40A',
            NewFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '10',
              },
              Flags: 1114112,
              HighLimit: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '0',
              },
              LowLimit: {
                currency: 'AKT',
                issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                value: '0',
              },
            },
          },
        },
        {
          CreatedNode: {
            LedgerEntryType: 'DirectoryNode',
            LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
            NewFields: {
              Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
              RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
            },
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
              Balance: '999999972',
              Domain: '6578616D706C652E636F6D',
              Flags: 786432,
              OwnerCount: 2,
              Sequence: 30419058,
            },
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '81B14268BCE9EBDFCE9E7A1CB9074EC6208CB32C8EC3A5E9752EAFFEA1CBB7A8',
            PreviousFields: {
              Balance: '999999964',
            },
            PreviousTxnID: '7AF934572E90244F6CA1A52D8A70B278F37884956C1C2808F9C63789A3C177F7',
            PreviousTxnLgrSeq: 30419459,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
              BookDirectory: '203FEB02A5A97B4F348B30577807B4ED600CA192CCAFE44E541C6BF526340000',
              BookNode: '0',
              Flags: 131072,
              OwnerNode: '0',
              Sequence: 30419057,
              TakerGets: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '115',
              },
              TakerPays: '92',
            },
            LedgerEntryType: 'Offer',
            LedgerIndex: 'ABBDE28603ED3040FB76701A4CD130E301553432B89A74C3D09BCFB7B6F5FCAA',
            PreviousFields: {
              TakerGets: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '125',
              },
              TakerPays: '100',
            },
            PreviousTxnID: '7AF934572E90244F6CA1A52D8A70B278F37884956C1C2808F9C63789A3C177F7',
            PreviousTxnLgrSeq: 30419459,
          },
        },
        {
          ModifiedNode: {
            FinalFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '114.95',
              },
              Flags: 65536,
              HighLimit: {
                currency: 'AKT',
                issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
                value: '0',
              },
              HighNode: '0',
              LowLimit: {
                currency: 'AKT',
                issuer: 'rpkeJcxB2y5BeAFyycuWwdTTcR3og2a3SR',
                value: '1000000000',
              },
              LowNode: '0',
            },
            LedgerEntryType: 'RippleState',
            LedgerIndex: 'E4EE9C23AAB2D59DC3484EA2DB4BD81B0E6BC5166F76668DD27B988FEA980A15',
            PreviousFields: {
              Balance: {
                currency: 'AKT',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '125',
              },
            },
            PreviousTxnID: 'EFDCBAA458B511576CF5CB410E9F12A9374E3B1B599DE90CDD1DD8DA630D7E4F',
            PreviousTxnLgrSeq: 30419174,
          },
        },
      ],
      TransactionIndex: 0,
      TransactionResult: 'tesSUCCESS',
    },
    validated: true,
  },
  status: 'success',
  type: 'response',
};

export default {
  buy: {
    [(offerCreateBuy as TxResponse).result.Account]: {
      [(offerCreateBuy as TxResponse).result.Sequence!]: offerCreateBuy,
    },
    [buyAktXrpOffer1.result.Account]: {
      [buyAktXrpOffer1.result.Sequence]: buyAktXrpOffer1,
    },
    [buyAktXrpOffer2.result.Account]: {
      [buyAktXrpOffer2.result.Sequence]: buyAktXrpOffer2,
    },
  },
  sell: {
    [(offerCreateSell as TxResponse).result.Account]: {
      [(offerCreateSell as TxResponse).result.Sequence!]: offerCreateSell,
    },
  },
};
