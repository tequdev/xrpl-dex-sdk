const request = 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT:68056636';

const mocks = {
  ledger_entry: {
    error: 'entryNotFound',
    id: 'example_get_offer',
    ledger_hash: 'EE8816F6CCCEE268F2B226700F69842E9BE6528219400EB69A1D1309A6127384',
    ledger_index: 75221865,
    request: {
      command: 'ledger_entry',
      id: 'example_get_offer',
      ledger_index: 'validated',
      offer: {
        account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
        seq: 68056636,
      },
    },
    status: 'error',
    type: 'response',
    validated: true,
  },
  account_tx: {
    id: 2,
    result: {
      account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
      ledger_index_max: 75221876,
      ledger_index_min: 32570,
      limit: 20,
      marker: {
        ledger: 75221256,
        seq: 92,
      },
      transactions: [
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                    Balance: '1581581544',
                    Flags: 0,
                    OwnerCount: 141,
                    Sequence: 63060396,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '214972AF37F7FDCF85160C20425B028236041EF1D07D954ED7E50DCE5AE6D913',
                  PreviousFields: {
                    Balance: '1581581789',
                  },
                  PreviousTxnID: '10D876FDFA7612638FBDCE6CB8C4C5B77D932E267C572BD2A332E761C5B5925A',
                  PreviousTxnLgrSeq: 75213527,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                    Balance: '47469723',
                    Flags: 0,
                    OwnerCount: 18,
                    Sequence: 68056637,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '49E8CF246D88331A13A785F5AD03F6EFF18942BBC35F0F78D1A2FBD01DB8930A',
                  PreviousFields: {
                    Balance: '47469490',
                    Sequence: 68056636,
                  },
                  PreviousTxnID: 'A59FA101F77E356194E9AABB22F12356FB0755D8D5CEAFCA8C34B8C66130C43B',
                  PreviousTxnLgrSeq: 75221150,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2669777202.686947',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '0',
                    },
                    HighNode: '341',
                    LowLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                      value: '1995871462140839e-4',
                    },
                    LowNode: 'a',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '61C5B0C43DF2545193D9D1502CD05661077ED158AB925A05D243B2815A3E5865',
                  PreviousFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2669637514.471045',
                    },
                  },
                  PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
                  PreviousTxnLgrSeq: 75208750,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                      value: '1999995010000000e-4',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '0',
                    },
                    LowNode: '28a',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '6CA5DA0987D19A9DB6303C6FDB068BB2B7E97AFA400F1544B918FB705258C6DF',
                  PreviousFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-139688.215902106',
                    },
                  },
                  PreviousTxnID: 'F4DFB159B4B4D58110F051525B4D7F6D31ADF73B09912BDBE04A99431A774852',
                  PreviousTxnLgrSeq: 68630321,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                    BookDirectory: 'BEC2286C1874FA75CAEF5400BD329C376B6A1E91B183CF8257144A253563A335',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'b',
                    Sequence: 63060308,
                    TakerGets: '1894505',
                    TakerPays: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '1081968607.050789',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'AEFC753E7183B4739686D216F4CEA1D2C9354E21DD13DDBB298C4B294AFF7D73',
                  PreviousFields: {
                    TakerGets: '1894750',
                    TakerPays: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '1082108295.266691',
                    },
                  },
                  PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
                  PreviousTxnLgrSeq: 75208750,
                },
              },
            ],
            TransactionIndex: 5,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
            Fee: '12',
            Flags: 2148007936,
            Sequence: 68056636,
            SigningPubKey: '0211A1D17690C3A0264D14B1863892E22E1ECDA542149AFDB6E56B9A02522271CC',
            TakerGets: {
              currency: '585245626F6F6B00000000000000000000000000',
              issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
              value: '139688.215902106',
            },
            TakerPays: '244',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402200FD856E4F1A9B8876B6CAB7A72BA6FBFDF16E12BA3C59DF145830F45C0B340DE0220255D0FD6E84F75B20F535D051D070A6690BA351D5F4FB08758482E7CFA374762',
            date: 719712601,
            hash: '0D16CDADC1889E4B7F35277EA13609CAE4C1182B88D4334B28ED596016BD7D70',
            inLedger: 75221159,
            ledger_index: 75221159,
          },
          validated: true,
        },
        {
          tx: {
            Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
            Fee: '12',
            Flags: 2148007936,
            Sequence: 68056636,
            SigningPubKey: '0211A1D17690C3A0264D14B1863892E22E1ECDA542149AFDB6E56B9A02522271CC',
            TakerGets: {
              currency: '585245626F6F6B00000000000000000000000000',
              issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
              value: '139688.215902106',
            },
            TakerPays: '244',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402200FD856E4F1A9B8876B6CAB7A72BA6FBFDF16E12BA3C59DF145830F45C0B340DE0220255D0FD6E84F75B20F535D051D070A6690BA351D5F4FB08758482E7CFA374762',
            date: 719712601,
            hash: '0D16CDADC1889E4B7F35277EA13609CAE4C1182B88D4334B28ED596016BD7D70',
            inLedger: 75221159,
            ledger_index: 75221159,
          },
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                    Balance: '1581581544',
                    Flags: 0,
                    OwnerCount: 141,
                    Sequence: 63060396,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '214972AF37F7FDCF85160C20425B028236041EF1D07D954ED7E50DCE5AE6D913',
                  PreviousFields: {
                    Balance: '1581581789',
                  },
                  PreviousTxnID: '10D876FDFA7612638FBDCE6CB8C4C5B77D932E267C572BD2A332E761C5B5925A',
                  PreviousTxnLgrSeq: 75213527,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                    Balance: '47469723',
                    Flags: 0,
                    OwnerCount: 18,
                    Sequence: 68056637,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '49E8CF246D88331A13A785F5AD03F6EFF18942BBC35F0F78D1A2FBD01DB8930A',
                  PreviousFields: {
                    Balance: '47469490',
                    Sequence: 68056636,
                  },
                  PreviousTxnID: 'A59FA101F77E356194E9AABB22F12356FB0755D8D5CEAFCA8C34B8C66130C43B',
                  PreviousTxnLgrSeq: 75221150,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2669777202.686947',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '0',
                    },
                    HighNode: '341',
                    LowLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                      value: '1995871462140839e-4',
                    },
                    LowNode: 'a',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '61C5B0C43DF2545193D9D1502CD05661077ED158AB925A05D243B2815A3E5865',
                  PreviousFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2669637514.471045',
                    },
                  },
                  PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
                  PreviousTxnLgrSeq: 75208750,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                      value: '1999995010000000e-4',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '0',
                    },
                    LowNode: '28a',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '6CA5DA0987D19A9DB6303C6FDB068BB2B7E97AFA400F1544B918FB705258C6DF',
                  PreviousFields: {
                    Balance: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-139688.215902106',
                    },
                  },
                  PreviousTxnID: 'F4DFB159B4B4D58110F051525B4D7F6D31ADF73B09912BDBE04A99431A774852',
                  PreviousTxnLgrSeq: 68630321,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                    BookDirectory: 'BEC2286C1874FA75CAEF5400BD329C376B6A1E91B183CF8257144A253563A335',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'b',
                    Sequence: 63060308,
                    TakerGets: '1894505',
                    TakerPays: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '1081968607.050789',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'AEFC753E7183B4739686D216F4CEA1D2C9354E21DD13DDBB298C4B294AFF7D73',
                  PreviousFields: {
                    TakerGets: '1894750',
                    TakerPays: {
                      currency: '585245626F6F6B00000000000000000000000000',
                      issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                      value: '1082108295.266691',
                    },
                  },
                  PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
                  PreviousTxnLgrSeq: 75208750,
                },
              },
            ],
            TransactionIndex: 5,
            TransactionResult: 'tesSUCCESS',
          },
          validated: true,
        },
      ],
      used_postgres: true,
      validated: true,
      warnings: [
        {
          id: 1004,
          message:
            'This is a reporting server.  The default behavior of a reporting server is to only return validated data. If you are looking for not yet validated data, include "ledger_index : current" in your request, which will cause this server to forward the request to a p2p node. If the forward is successful the response will include "forwarded" : "true"',
        },
      ],
    },
    status: 'success',
    type: 'response',
  },
  account_info: {
    id: 2,
    result: {
      account_data: {
        Account: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
        Balance: '9994455',
        Domain: '68747470733A2F2F787265626F6F6B2E636F6D',
        Flags: 10027008,
        LedgerEntryType: 'AccountRoot',
        OwnerCount: 0,
        PreviousTxnID: '92AFF5F572E8A21E46A5863FF20218C99EDCC1D162C41EA9CB1DDA7344556F0C',
        PreviousTxnLgrSeq: 75221187,
        RegularKey: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        Sequence: 67901705,
        index: '9B57157BCF403A4544D0A4704279AC00EE5B5ABDE03A81C9F3FAD008AB337D37',
      },
      ledger_hash: '7E2FDBA21A7FC2B546BFF049F3B80AD05DD1E279848949479E97AF3AB8EFC3ED',
      ledger_index: 75221972,
      validated: true,
    },
    status: 'success',
    type: 'response',
  },
};

const expectedResponse = {
  id: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT:68056636',
  clientOrderId: 'F5C299CD3C7E9E88DB14F69147455598423259BD8C6C80854BFA5EF13BCA0267',
  datetime: '2022-10-22T00:10:01.000Z',
  timestamp: 1666397401000,
  status: 'closed',
  symbol: '585245626F6F6B00000000000000000000000000+rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR/XRP',
  type: 'limit',
  timeInForce: 'GTC',
  side: 'sell',
  amount: '139688.215902106',
  price: '1.7467472e-9',
  average: '1.753906e-9',
  filled: '139688.215902',
  remaining: '1.06e-7',
  cost: '0.000244999999999813',
  trades: [
    {
      id: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT:68056636',
      order: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z:63060308',
      datetime: '2022-10-22T00:10:01.000Z',
      timestamp: 1666397401000,
      symbol: '585245626F6F6B00000000000000000000000000+rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR/XRP',
      type: 'limit',
      side: 'buy',
      amount: '139688.215902',
      price: '1.753906e-9',
      takerOrMaker: 'taker',
      cost: '0.000244999999999813',
      info: {
        offer: {
          Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
          BookDirectory: '',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
          PreviousTxnLgrSeq: 0,
          Sequence: 63060308,
          TakerGets: '245',
          TakerPays: {
            currency: '585245626F6F6B00000000000000000000000000',
            issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
            value: '139688.215902',
          },
          index: 'AEFC753E7183B4739686D216F4CEA1D2C9354E21DD13DDBB298C4B294AFF7D73',
        },
      },
    },
  ],
  info: {
    transactionData: {
      transaction: {
        Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
        Fee: '12',
        Flags: 2148007936,
        Sequence: 68056636,
        SigningPubKey: '0211A1D17690C3A0264D14B1863892E22E1ECDA542149AFDB6E56B9A02522271CC',
        TakerGets: {
          currency: '585245626F6F6B00000000000000000000000000',
          issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
          value: '139688.215902106',
        },
        TakerPays: '244',
        TransactionType: 'OfferCreate',
        TxnSignature:
          '304402200FD856E4F1A9B8876B6CAB7A72BA6FBFDF16E12BA3C59DF145830F45C0B340DE0220255D0FD6E84F75B20F535D051D070A6690BA351D5F4FB08758482E7CFA374762',
        date: 719712601,
        hash: '0D16CDADC1889E4B7F35277EA13609CAE4C1182B88D4334B28ED596016BD7D70',
        inLedger: 75221159,
        ledger_index: 75221159,
      },
      metadata: {
        AffectedNodes: [
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                Balance: '1581581544',
                Flags: 0,
                OwnerCount: 141,
                Sequence: 63060396,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: '214972AF37F7FDCF85160C20425B028236041EF1D07D954ED7E50DCE5AE6D913',
              PreviousFields: {
                Balance: '1581581789',
              },
              PreviousTxnID: '10D876FDFA7612638FBDCE6CB8C4C5B77D932E267C572BD2A332E761C5B5925A',
              PreviousTxnLgrSeq: 75213527,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                Balance: '47469723',
                Flags: 0,
                OwnerCount: 18,
                Sequence: 68056637,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: '49E8CF246D88331A13A785F5AD03F6EFF18942BBC35F0F78D1A2FBD01DB8930A',
              PreviousFields: {
                Balance: '47469490',
                Sequence: 68056636,
              },
              PreviousTxnID: 'A59FA101F77E356194E9AABB22F12356FB0755D8D5CEAFCA8C34B8C66130C43B',
              PreviousTxnLgrSeq: 75221150,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '2669777202.686947',
                },
                Flags: 1114112,
                HighLimit: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                  value: '0',
                },
                HighNode: '341',
                LowLimit: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                  value: '1995871462140839e-4',
                },
                LowNode: 'a',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: '61C5B0C43DF2545193D9D1502CD05661077ED158AB925A05D243B2815A3E5865',
              PreviousFields: {
                Balance: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '2669637514.471045',
                },
              },
              PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
              PreviousTxnLgrSeq: 75208750,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '0',
                },
                Flags: 2228224,
                HighLimit: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rPWULQi9iEB3M3rGSoFoTLZDrkYmznhgrT',
                  value: '1999995010000000e-4',
                },
                HighNode: '0',
                LowLimit: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                  value: '0',
                },
                LowNode: '28a',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: '6CA5DA0987D19A9DB6303C6FDB068BB2B7E97AFA400F1544B918FB705258C6DF',
              PreviousFields: {
                Balance: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-139688.215902106',
                },
              },
              PreviousTxnID: 'F4DFB159B4B4D58110F051525B4D7F6D31ADF73B09912BDBE04A99431A774852',
              PreviousTxnLgrSeq: 68630321,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
                BookDirectory: 'BEC2286C1874FA75CAEF5400BD329C376B6A1E91B183CF8257144A253563A335',
                BookNode: '0',
                Flags: 0,
                OwnerNode: 'b',
                Sequence: 63060308,
                TakerGets: '1894505',
                TakerPays: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                  value: '1081968607.050789',
                },
              },
              LedgerEntryType: 'Offer',
              LedgerIndex: 'AEFC753E7183B4739686D216F4CEA1D2C9354E21DD13DDBB298C4B294AFF7D73',
              PreviousFields: {
                TakerGets: '1894750',
                TakerPays: {
                  currency: '585245626F6F6B00000000000000000000000000',
                  issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
                  value: '1082108295.266691',
                },
              },
              PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
              PreviousTxnLgrSeq: 75208750,
            },
          },
        ],
        TransactionIndex: 5,
        TransactionResult: 'tesSUCCESS',
      },
      offers: [
        {
          Account: 'rMhcvA4SaZrXpPPwhEcfbnsjp4Qe87tb9Z',
          BookDirectory: '',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: '2407CD7E6030C1B6F4A9A167A8BDC0DC47F728E277F62C6FE258BDAD770651EC',
          PreviousTxnLgrSeq: 0,
          Sequence: 63060308,
          TakerGets: '245',
          TakerPays: {
            currency: '585245626F6F6B00000000000000000000000000',
            issuer: 'rMgfWUcBd45TXyszMb5LnopD5SDnAmDZsR',
            value: '139688.215902',
          },
          index: 'AEFC753E7183B4739686D216F4CEA1D2C9354E21DD13DDBB298C4B294AFF7D73',
        },
      ],
      date: 719712601,
    },
  },
  lastTradeTimestamp: 1666397401000,
};

const fetchOrder = {
  mocks,
  request,
  expectedResponse,
};

export default fetchOrder;
