import { AccountAddress } from '../../../../src/models';

export interface AccountTxMocks {
  [account: AccountAddress]: any;
}

const accountTx: AccountTxMocks = {
  r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2: {
    id: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
    result: {
      account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
      ledger_index_max: 75200970,
      ledger_index_min: 32570,
      limit: 20,
      marker: {
        ledger: 75124761,
        seq: 16,
      },
      transactions: [
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'USD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '61452.57711406924',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '0',
                    },
                    HighNode: '1c19',
                    LowLimit: {
                      currency: 'USD',
                      issuer: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
                      value: '1000000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '0B0388546E94E2B339A52C70CE9B7791FDF104F114C94CEACB2A9440819DD435',
                  PreviousFields: {
                    Balance: {
                      currency: 'USD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '59107.73350025497',
                    },
                  },
                  PreviousTxnID: 'A202ADCC23FCD98B295746FDE5F51C9428A0A80CB3E71676B9688687AB3CFEC9',
                  PreviousTxnLgrSeq: 75200514,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'USD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'USD',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '1000000000',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '0',
                    },
                    LowNode: '217f',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '10C3C44E04637F48662C0079043911E9F03ACC7B54738630232405C8FA221440',
                  PreviousFields: {
                    Balance: {
                      currency: 'USD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-2349.5333010419',
                    },
                  },
                  PreviousTxnID: 'CAFE1390615431E25B36A5BC6E133A621825DDAC2BBD8BDF6146F4E5944990B2',
                  PreviousTxnLgrSeq: 75141158,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
                    Balance: '101439694085',
                    Flags: 0,
                    MessageKey: '02000000000000000000000000C40291E3D8888D158B3370626B71BDF2C883E942',
                    OwnerCount: 9,
                    Sequence: 59349455,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '73F7B01109BB599FEDF75529CD8A6521890745E813DD45EC36A73828EDDD56BF',
                  PreviousFields: {
                    Balance: '106694473102',
                  },
                  PreviousTxnID: '634E09AE83E884DC123F5A3816834227CFF76EAAE51BFDCDC74BEFA5FAB7AEC7',
                  PreviousTxnLgrSeq: 75200809,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '15288782189',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 67956679,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '10034003187',
                    Sequence: 67956678,
                  },
                  PreviousTxnID: '0BB92937F061A2400986B9E26BDD15EAD80690F3F35365D9A2B66388B890643B',
                  PreviousTxnLgrSeq: 75147573,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
                    BookDirectory: '79C54A4EBD69AB2EADCE313042F36092BE432423CC6A4F784E0FDA71C3ACA926',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 59349452,
                    TakerGets: '10719392016',
                    TakerPays: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '4783.321588185729',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'F76AEC3EF0E54AC0183C10E7BD0EA661741BD527624549B6B4C36267E19449ED',
                  PreviousFields: {
                    TakerGets: '15974171033',
                    TakerPays: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '7128.165202',
                    },
                  },
                  PreviousTxnID: 'F75DB09A2595167C60F7D7D59108DC8BE60AF55B1459B96FFC67A394F724C088',
                  PreviousTxnLgrSeq: 75200656,
                },
              },
            ],
            TransactionIndex: 30,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75200818,
            Sequence: 67956678,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: {
              currency: 'USD',
              issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
              value: '2349.5333010419',
            },
            TakerPays: '5111930655',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022010CA1EF2DA7440B0974F4BA8ADD914A3C09AB1A9F0E739DBC1795D12CB905E3802200F2B42C6B88B7303A86793334E38546D7D29900E8A5EB275D16EE3AC19CB914B',
            date: 719633970,
            hash: 'B4B64375508F7C9552A0C1B1A115030979861034EEAFF87B62CBA5A42CDB90AC',
            inLedger: 75200810,
            ledger_index: 75200810,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2E3DA601277584832FD6FD035CA723C0BCF48AC2E87E08FD2FDA419F997A8D18',
                  NewFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0AC40B67AED936',
                    Sequence: 67956677,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '2310',
                    },
                    TakerPays: '7000000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '10034003187',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 67956678,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '10034003199',
                    OwnerCount: 12,
                    Sequence: 67956677,
                  },
                  PreviousTxnID: 'CAFE1390615431E25B36A5BC6E133A621825DDAC2BBD8BDF6146F4E5944990B2',
                  PreviousTxnLgrSeq: 75141158,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '5b0ac40b67aed936',
                    Flags: 0,
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0AC40B67AED936',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0AC40B67AED936',
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '12',
            Flags: 0,
            LastLedgerSequence: 75248567,
            Memos: [
              {
                Memo: {
                  MemoData: '38663939386636622D316563362D346263322D383637332D363962373132636331333766',
                },
              },
            ],
            Sequence: 67956677,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: {
              currency: 'USD',
              issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
              value: '2310',
            },
            TakerPays: '7000000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402205F6D470BF7086537C41290D23BCD359BFE21A033D66CE09554C0E786D418F35602203B3C82D290F616FBE50A1C54E9815154CBA233FD1DB882B0BC2BE69920A120EE',
            date: 719427431,
            hash: '0BB92937F061A2400986B9E26BDD15EAD80690F3F35365D9A2B66388B890643B',
            inLedger: 75147573,
            ledger_index: 75147573,
          },
          validated: true,
        },
        // {
        //   meta: {
        //     AffectedNodes: [
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '36414.91640840794',
        //             },
        //             Flags: 1114112,
        //             HighLimit: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '0',
        //             },
        //             HighNode: '1c19',
        //             LowLimit: {
        //               currency: 'USD',
        //               issuer: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
        //               value: '1000000000',
        //             },
        //             LowNode: '0',
        //           },
        //           LedgerEntryType: 'RippleState',
        //           LedgerIndex: '0B0388546E94E2B339A52C70CE9B7791FDF104F114C94CEACB2A9440819DD435',
        //           PreviousFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '38712.63690705192',
        //             },
        //           },
        //           PreviousTxnID: 'E76A1407C041AFDE78CEDEEEB262D9A23D7CCEC9D519FDE13AD5ACD0A7CCCB23',
        //           PreviousTxnLgrSeq: 75140952,
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '0',
        //             },
        //             Flags: 65536,
        //             HighLimit: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '0',
        //             },
        //             HighNode: '2179',
        //             LowLimit: {
        //               currency: 'USD',
        //               issuer: 'rhRNP4rkxrV5oFuCDyUUj3Y5xiXFxNaHxt',
        //               value: '7560911.97',
        //             },
        //             LowNode: '0',
        //           },
        //           LedgerEntryType: 'RippleState',
        //           LedgerIndex: '0DF1AC9023CC5223445E8788DBF089D4560215CB1B7DC2B035BD7AA36D53B0CC',
        //           PreviousFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '56.511869',
        //             },
        //           },
        //           PreviousTxnID: 'F1E2480F46BB91C15402ED26BDA76521CA5E89C9102D72278B5E9F07F55A97F1',
        //           PreviousTxnLgrSeq: 75140928,
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '-2349.5333010419',
        //             },
        //             Flags: 2228224,
        //             HighLimit: {
        //               currency: 'USD',
        //               issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
        //               value: '1000000000',
        //             },
        //             HighNode: '0',
        //             LowLimit: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '0',
        //             },
        //             LowNode: '217f',
        //           },
        //           LedgerEntryType: 'RippleState',
        //           LedgerIndex: '10C3C44E04637F48662C0079043911E9F03ACC7B54738630232405C8FA221440',
        //           PreviousFields: {
        //             Balance: {
        //               currency: 'USD',
        //               issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
        //               value: '0',
        //             },
        //           },
        //           PreviousTxnID: '9949C3A7BF6F6566A185A192BE82E812BE032E00DA8A6FA48D145176F8BEAD6F',
        //           PreviousTxnLgrSeq: 75141140,
        //         },
        //       },
        //       {
        //         DeletedNode: {
        //           FinalFields: {
        //             Account: 'rhRNP4rkxrV5oFuCDyUUj3Y5xiXFxNaHxt',
        //             BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0795479D17968D',
        //             BookNode: '0',
        //             Flags: 0,
        //             OwnerNode: '0',
        //             PreviousTxnID: '4009CB926BD7C2C2D33516DA1F1B2EBD26F0456136BBA9CB187E41BDADADCFE1',
        //             PreviousTxnLgrSeq: 75141158,
        //             Sequence: 75025794,
        //             TakerGets: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '0.11279814171657',
        //             },
        //             TakerPays: '240763',
        //           },
        //           LedgerEntryType: 'Offer',
        //           LedgerIndex: '577713A698BAF29F5B2AEB47246C2E7C39BD61B967D4AB8E09ED21B51B1230D5',
        //           PreviousFields: {
        //             TakerGets: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '56.511869',
        //             },
        //             TakerPays: '120622304',
        //           },
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Account: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
        //             Balance: '158598804339',
        //             Flags: 0,
        //             MessageKey: '02000000000000000000000000C40291E3D8888D158B3370626B71BDF2C883E942',
        //             OwnerCount: 9,
        //             Sequence: 59347293,
        //           },
        //           LedgerEntryType: 'AccountRoot',
        //           LedgerIndex: '73F7B01109BB599FEDF75529CD8A6521890745E813DD45EC36A73828EDDD56BF',
        //           PreviousFields: {
        //             Balance: '153704185880',
        //           },
        //           PreviousTxnID: 'E76A1407C041AFDE78CEDEEEB262D9A23D7CCEC9D519FDE13AD5ACD0A7CCCB23',
        //           PreviousTxnLgrSeq: 75140952,
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Account: 'rhRNP4rkxrV5oFuCDyUUj3Y5xiXFxNaHxt',
        //             Balance: '136881469',
        //             Flags: 0,
        //             OwnerCount: 1,
        //             Sequence: 75025795,
        //           },
        //           LedgerEntryType: 'AccountRoot',
        //           LedgerIndex: '794576422F00129C8ECD7313B1977FB113B85FE373E6716253E75C7816D61869',
        //           PreviousFields: {
        //             Balance: '16499928',
        //             OwnerCount: 2,
        //           },
        //           PreviousTxnID: '4009CB926BD7C2C2D33516DA1F1B2EBD26F0456136BBA9CB187E41BDADADCFE1',
        //           PreviousTxnLgrSeq: 75141158,
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
        //             Balance: '10034003199',
        //             Flags: 0,
        //             OwnerCount: 12,
        //             Sequence: 67956677,
        //           },
        //           LedgerEntryType: 'AccountRoot',
        //           LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
        //           PreviousFields: {
        //             Balance: '15049003214',
        //             Sequence: 67956676,
        //           },
        //           PreviousTxnID: '9949C3A7BF6F6566A185A192BE82E812BE032E00DA8A6FA48D145176F8BEAD6F',
        //           PreviousTxnLgrSeq: 75141140,
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Flags: 0,
        //             Owner: 'rhRNP4rkxrV5oFuCDyUUj3Y5xiXFxNaHxt',
        //             RootIndex: 'ACD1E54B55311A58F3CD1A15AF657C8ECAF52A9B1D787B2271232062FC988947',
        //           },
        //           LedgerEntryType: 'DirectoryNode',
        //           LedgerIndex: 'ACD1E54B55311A58F3CD1A15AF657C8ECAF52A9B1D787B2271232062FC988947',
        //         },
        //       },
        //       {
        //         DeletedNode: {
        //           FinalFields: {
        //             ExchangeRate: '5b0795479d17968d',
        //             Flags: 0,
        //             RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0795479D17968D',
        //             TakerGetsCurrency: '0000000000000000000000005553440000000000',
        //             TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
        //             TakerPaysCurrency: '0000000000000000000000000000000000000000',
        //             TakerPaysIssuer: '0000000000000000000000000000000000000000',
        //           },
        //           LedgerEntryType: 'DirectoryNode',
        //           LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0795479D17968D',
        //         },
        //       },
        //       {
        //         ModifiedNode: {
        //           FinalFields: {
        //             Account: 'rpXhhWmCvDwkzNtRbm7mmD1vZqdfatQNEe',
        //             BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B0795493C659DF3',
        //             BookNode: '0',
        //             Flags: 0,
        //             OwnerNode: '0',
        //             Sequence: 59347292,
        //             TakerGets: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '3471.077176134637',
        //             },
        //             TakerPays: '7408898352',
        //           },
        //           LedgerEntryType: 'Offer',
        //           LedgerIndex: 'F55A0A82C9F0AE0B3A609C383F150CBE3E7926554698FD2BB3F49E1249D2D3FA',
        //           PreviousFields: {
        //             TakerGets: {
        //               currency: 'USD',
        //               issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //               value: '5764.211406318254',
        //             },
        //             TakerPays: '12303516811',
        //           },
        //           PreviousTxnID: '7B54260F710FBD4ACEECBB5DF0AE850EA699A50483CFAFCDDE3FE58F6C9BBDB2',
        //           PreviousTxnLgrSeq: 75140885,
        //         },
        //       },
        //     ],
        //     TransactionIndex: 92,
        //     TransactionResult: 'tesSUCCESS',
        //   },
        //   tx: {
        //     Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
        //     Fee: '15',
        //     Flags: 655360,
        //     LastLedgerSequence: 75141166,
        //     Sequence: 67956676,
        //     SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
        //     TakerGets: '5015000000',
        //     TakerPays: {
        //       currency: 'USD',
        //       issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        //       value: '2281.10018589',
        //     },
        //     TransactionType: 'OfferCreate',
        //     TxnSignature:
        //       '3044022058A59F193B69CF7A5CE053D6355E12531C5F7138C88FA2208AA418052E6B74BE0220436152DD050DF00A4F6AB05649A8137DFC5903895402F442D4AFBFADBFB9FA82',
        //     date: 719402442,
        //     hash: 'CAFE1390615431E25B36A5BC6E133A621825DDAC2BBD8BDF6146F4E5944990B2',
        //     inLedger: 75141158,
        //     ledger_index: 75141158,
        //   },
        //   validated: true,
        // },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '217e',
                    Owner: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                    RootIndex: 'D7AC7D74720E29A563100F2B494BADB198F8A9E9FA46F57AE07123151E0DFA7A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '02904225E84C3BBE9AC932333F91745C79860D81048B406EDF42CCC86E0D820A',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '10C3C44E04637F48662C0079043911E9F03ACC7B54738630232405C8FA221440',
                  NewFields: {
                    Balance: {
                      currency: 'USD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'USD',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '1000000000',
                    },
                    LowLimit: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '0',
                    },
                    LowNode: '217f',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '15049003214',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956676,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '15049003229',
                    OwnerCount: 11,
                    Sequence: 67956675,
                  },
                  PreviousTxnID: '96F1217138371CC8879554F52628088B96C2C2D42510479372C39E5C10462710',
                  PreviousTxnLgrSeq: 75140748,
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'BF1F2A23D614916E3C6ED2DCC389468CFA09045BEDB54C71A05C5E94EA6C6CFE',
                  PreviousTxnID: 'F787A1C5C4117B3987BA9D615CAE0D22975466126971D2920FB55FD63D004B14',
                  PreviousTxnLgrSeq: 75140527,
                },
              },
            ],
            TransactionIndex: 58,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            Flags: 131072,
            LastLedgerSequence: 75141148,
            LimitAmount: {
              currency: 'USD',
              issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
              value: '1000000000',
            },
            Sequence: 67956675,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TransactionType: 'TrustSet',
            TxnSignature:
              '3044022055F2BD9C098BF40AD311AFB40E316D5FB3C66508953ABF19B5ED679B065E4B8B022051D525C39D43255481AA4453004C9012EA54809086A78FA4BA7E65AF584F2008',
            date: 719402372,
            hash: '9949C3A7BF6F6566A185A192BE82E812BE032E00DA8A6FA48D145176F8BEAD6F',
            inLedger: 75141140,
            ledger_index: 75141140,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhwwXWUQkZ1wRZ7Laajo48wcKf53j99Tfh',
                    Balance: '835598748',
                    Flags: 0,
                    OwnerCount: 150,
                    Sequence: 67740387,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '696EE7EF3B612B5337FBBF6B2E9459831AA0FC348E9F0D8F800B8B8EB49C7EFE',
                  PreviousFields: {
                    Balance: '834598748',
                  },
                  PreviousTxnID: 'E1CCC01F9ECAD6112269B444CAEA67791050189AD2B890CD0B2FD7CE6532E4D5',
                  PreviousTxnLgrSeq: 75140744,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '15049003229',
                    Flags: 0,
                    OwnerCount: 11,
                    Sequence: 67956675,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '15050003244',
                    Sequence: 67956674,
                  },
                  PreviousTxnID: '3BA71BA5221ECC84DAA0953EE4C84F47E709940ACC4843C74AD4869CA2842E27',
                  PreviousTxnLgrSeq: 75140141,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-345.5735406031487',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rhwwXWUQkZ1wRZ7Laajo48wcKf53j99Tfh',
                      value: '399959204.3745864',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '0',
                    },
                    LowNode: '10e2',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B9962D3488A4F9D46C000DDFCF7AC592E45B7FC9E664A44EFAA5CB8E62F979B9',
                  PreviousFields: {
                    Balance: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-346.972360118223',
                    },
                  },
                  PreviousTxnID: 'E1CCC01F9ECAD6112269B444CAEA67791050189AD2B890CD0B2FD7CE6532E4D5',
                  PreviousTxnLgrSeq: 75140744,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhwwXWUQkZ1wRZ7Laajo48wcKf53j99Tfh',
                    BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A196685F812F8B9',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '6',
                    Sequence: 67740385,
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '345.6187998250857',
                    },
                    TakerPays: '247103617',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'CE5CB7EB02A9DEA5AFCD02C490092C79781EDA0B10EB3850E50464282DB7087E',
                  PreviousFields: {
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '347.0174794721953',
                    },
                    TakerPays: '248103617',
                  },
                  PreviousTxnID: 'E1CCC01F9ECAD6112269B444CAEA67791050189AD2B890CD0B2FD7CE6532E4D5',
                  PreviousTxnLgrSeq: 75140744,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-35001.19576843035',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '1000000000',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '0',
                    },
                    LowNode: '1786',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'FC14138C38D27EC59342BC0C9346088F0F9F2411391C9DECE18C2AB8EBC0005A',
                  PreviousFields: {
                    Balance: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-34999.79708878325',
                    },
                  },
                  PreviousTxnID: 'A6C0BBE119E3E9A91228AE3234B9A4CE3DB00901C2BDD48FC586E35562ECEF06',
                  PreviousTxnLgrSeq: 74993214,
                },
              },
            ],
            TransactionIndex: 15,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75140756,
            Sequence: 67956674,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: '1000000',
            TakerPays: {
              currency: '534F4C4F00000000000000000000000000000000',
              issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
              value: '1.35794141',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100E18E90B60B911115BB5FBDB6A1D0F285E3DBB748EF31286898D41D8AD89DD4AA02207579C36935C3C86DDDDCB8252959F1A6DECEC0EF8926F6EC78291F89035D58B5',
            date: 719400842,
            hash: '96F1217138371CC8879554F52628088B96C2C2D42510479372C39E5C10462710',
            inLedger: 75140748,
            ledger_index: 75140748,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJdqADxBb8KmRpMzta6TKR3Mu7RMKHMufU',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '18',
                    PreviousTxnID: '9DF8D1ECFB6A3341B2E90D25E80FC63396A6314AE409B4F15F9E4570C6081F72',
                    PreviousTxnLgrSeq: 75138189,
                    Sequence: 67372730,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '035BA1C446640A1BC6DFDF982F50E9B9CAFD5AFE822D260256FCFA0DBDE4E6A4',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2000',
                    },
                    TakerPays: '50000000',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA818ECF0C',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'BB6BF2B9467B7DFFED74DED190D0E98C50A48EFC9063CDA499E4A4DB945847C5',
                    PreviousTxnLgrSeq: 75139744,
                    Sequence: 75043580,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '17E2ACDF9F9EF8D2A61420BCEE2847D463ECF49D8DB6E6CCA855D998163A2F30',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '907.83',
                    },
                    TakerPays: '22695668',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJQkVsmBtRTCfJiX6KsNKG33eyDmRoTD18',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '2',
                    PreviousTxnID: '2DDB4A04C9FB6B33A9D427DA7714D90D57FB55F111BCC31EA19E1C87C32141DD',
                    PreviousTxnLgrSeq: 75136318,
                    Sequence: 67410293,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1A9E952391270EC817A88811FAFD4387A3F7C486F2B851C71F8D48351269E036',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2000',
                    },
                    TakerPays: '50000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rngAJNw3ARdhn4PTV5NLpPxQwVwAvppojf',
                    Balance: '7411911907',
                    Flags: 0,
                    OwnerCount: 475,
                    Sequence: 66879722,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '1F2758461820F722B4703C30EC369DD31B90AD3A200ECBE9821A292E15C5FDB4',
                  PreviousFields: {
                    Balance: '7206911907',
                    OwnerCount: 476,
                  },
                  PreviousTxnID: 'ABB6E33678C431D761024A96467E9BD3CEDC8728D241FF129CB4A69157869034',
                  PreviousTxnLgrSeq: 75139491,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '64DDEEA9CF637AD06F74A98328C157C1DE54FD851B0C4DC4958A8735D2A632DE',
                    PreviousTxnLgrSeq: 75139639,
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '42315.34588015919',
                    },
                    TakerPays: '1057882796',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    Balance: '1197918114',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 70638812,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '260FD720AD6CA0DAF064C36941E87E83CF32D0784C8EDD41746ABB500DCC3813',
                  PreviousFields: {
                    Balance: '1020850584',
                    OwnerCount: 4,
                  },
                  PreviousTxnID: 'D78A4ABFCD82BF7EB53C151C3C87F6088C691BF38F329AA4949F841CC88E2AF7',
                  PreviousTxnLgrSeq: 75138230,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '6949.31693507859',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '43f',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rBJ4wZMP3hoU4hYHwYKfunJN7GehYrUqfy',
                      value: '999999999.9999961',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F46C41BBCD51E92C0FFB8F030A10553399415AB6F3A7BC396295D40BD285D4E',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '8449.31693507859',
                    },
                  },
                  PreviousTxnID: 'DE74645200A9845CE96D34D38D38EE217ED128B3B619C43FFFB69D918FAC1F56',
                  PreviousTxnLgrSeq: 75028853,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-123336.1165752287',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHCzXcg15BMq5ekf6PRhjXkPRGByJoJxdp',
                      value: '999999793.4849596',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '1571',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '3131EB625D942C5D6E344DE9D6D6D14A8870A2F9B66674CB71A1BC91F8442744',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '7FFFEF822A89B4628D396F6B16AC5D5F88CDD9FCFB9E8DBC284654751F74A7E8',
                  PreviousTxnLgrSeq: 75138207,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 65536,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20e8',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                      value: '999872418.29',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '3D0613EB6B81A3052F01C0029C489EB0113804119DFA1CBBA1373DBE74015874',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '907.83',
                    },
                  },
                  PreviousTxnID: 'BA95121BB5C85DB918EB7254C26611961093F17E72E0B44BC06CBD575DB804D8',
                  PreviousTxnLgrSeq: 75139742,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rJQkVsmBtRTCfJiX6KsNKG33eyDmRoTD18',
                    RootIndex: '453179D04CE47005119B338365C15D1ACB1D9FC285C80A392C2410EAE02296F3',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '42B938BCD292C9B518E00B551E33D233122233BC5336ACC54CDE3DCC5D3C4B62',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '17',
                    Owner: 'rJdqADxBb8KmRpMzta6TKR3Mu7RMKHMufU',
                    RootIndex: 'BCBEC8A5DB6B7FD2F17E357AE4AA2660BA7F1B55E09291CD2AF8969E99CA59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4E18F4F903601AA74A4A2EE47F208C1ACC3E76F2CEEB65307E3EB9E6AA789D49',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C303D7718E2',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'DBF3EA46669325C76D6EED8918969DC3F099DBF22525AEDE94961B039C742FD6',
                    PreviousTxnLgrSeq: 75138213,
                    Sequence: 70638809,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '6899.920346270744',
                    },
                    TakerPays: '176932470',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '57163A4BD8754C05C2CC03B7E40D8D1EED061EC72DB5A966B2AA9D9085FC34B0',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '6902.553824501662',
                    },
                    TakerPays: '177000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBJ4wZMP3hoU4hYHwYKfunJN7GehYrUqfy',
                    Balance: '170180944',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 65781716,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '588DB360AEEB21C201B8D931361A7EF0169E216C805841BC749CBBDC93ED371C',
                  PreviousFields: {
                    Balance: '132680944',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: '1D35244DECBFEF82948198019405436D2BB943107049A7C2074288C236697242',
                  PreviousTxnLgrSeq: 75138268,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rp1BEqwtHG5sGAKxo8UrcbJfdNcEUATFMF',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091BF1C5344000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '5273697B21192617A7E86106416B08970E3ED539AB7FE7A50166CBA89DB22F95',
                    PreviousTxnLgrSeq: 75139280,
                    Sequence: 66952341,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5F2CE87C1B7963F1FB8A6D58C340C247B44C1DA4E29836FE58818BE0E08A3B0C',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '400',
                    },
                    TakerPays: '10256000',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rBJ4wZMP3hoU4hYHwYKfunJN7GehYrUqfy',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '1D35244DECBFEF82948198019405436D2BB943107049A7C2074288C236697242',
                    PreviousTxnLgrSeq: 75138268,
                    Sequence: 65781715,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '60557B71A1F68AD0B79ECBD0A5D4E2A3FC6CC7AABCAB97AA3E9981A36962D4CB',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1500',
                    },
                    TakerPays: '37500000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rJQkVsmBtRTCfJiX6KsNKG33eyDmRoTD18',
                      value: '999865719.0151175',
                    },
                    HighNode: '2',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20ed',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '65CD7DC3D6C68DAD2865BA485ED2079C371A810BC05B9790B57A7E6C7CDB446A',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-2000',
                    },
                  },
                  PreviousTxnID: 'F553B4BAD1EEC8B177A6877230E62C163F0CBC856BEF6C8514A9B45B432BB705',
                  PreviousTxnLgrSeq: 75091817,
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '708DFAB14E5C50113951B4F3EC57163C472FBC45B0BFB3663FC6787472322198',
                  PreviousTxnID: 'BA64BCAD4C0862D6A6FAD0D998A330F9A237E785754AAADF5327D161B6C88770',
                  PreviousTxnLgrSeq: 75139555,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rJdqADxBb8KmRpMzta6TKR3Mu7RMKHMufU',
                      value: '999937672',
                    },
                    HighNode: '5',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '1b79',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '74B1FCCB7849D59D133EF79A6CA0317E188F8567B445953584124479CF922A6F',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-2000',
                    },
                  },
                  PreviousTxnID: '42267A409F545A90409FD1861A64662A0FD5795B74558AD69846ECB7AE572D86',
                  PreviousTxnLgrSeq: 75022079,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '20ee',
                    Owner: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                    RootIndex: 'F215BD3306D5BF1597BCAB6177A8B1A73D253350AE4E1F1FBB91442A6AC7912B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '760F9F4CEA6C82A4EEE73D542539B92B8F605910BEEE11F16EE42161EE9EF34B',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '131460.9768592577',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '1e6d',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rngAJNw3ARdhn4PTV5NLpPxQwVwAvppojf',
                      value: '999903202.8376633',
                    },
                    LowNode: '15',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '84AF2B2FE9B09E23F2C69641783FCEC2BF944B7164D016C7745D35CF638D8273',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '139660.9768592577',
                    },
                  },
                  PreviousTxnID: 'E78E9A1099B1474AEE5E1AED76E6E18908FAAA5CAA786E89B91F9BFA27B90C06',
                  PreviousTxnLgrSeq: 75130815,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rHCzXcg15BMq5ekf6PRhjXkPRGByJoJxdp',
                    Balance: '28000000',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 67533965,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '8A795006BBFEE7AF51DD8FD7128441693D8DDD1313ABB5B9812221922C2F1823',
                  PreviousFields: {
                    Balance: '3154218999',
                    Sequence: 67533964,
                  },
                  PreviousTxnID: 'E475EA136F0EE24DE84E197E56850E8D256B8A88105EDDF9D2ED463AE892BDF2',
                  PreviousTxnLgrSeq: 75138795,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rJQkVsmBtRTCfJiX6KsNKG33eyDmRoTD18',
                    Balance: '221432984',
                    Flags: 0,
                    OwnerCount: 16,
                    Sequence: 67410296,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '94913638BC119F0D495839E84A918EC72BD28C45927D999ADA56895EC8F9D6EB',
                  PreviousFields: {
                    Balance: '171432984',
                    OwnerCount: 17,
                  },
                  PreviousTxnID: '38956AE475826371F4574E20A647B396A59FA6FC8EA2778105A208625C811B43',
                  PreviousTxnLgrSeq: 75139423,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    RootIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    Balance: '304800722',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 75043667,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AEDAC400CF4CB328DE74505F69795360B1248E062B973DE7F966DC4DF2912E8',
                  PreviousFields: {
                    Balance: '282105054',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: 'B0F4D6308E0A6787B48E35BF156933B5598C9A11664E36E8D0AC2991486816E7',
                  PreviousTxnLgrSeq: 75140139,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '15050003244',
                    Flags: 0,
                    OwnerCount: 11,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13992120448',
                    OwnerCount: 12,
                  },
                  PreviousTxnID: '64DDEEA9CF637AD06F74A98328C157C1DE54FD851B0C4DC4958A8735D2A632DE',
                  PreviousTxnLgrSeq: 75139639,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r4i96FuLWGHBH8nXJdN8F6m24RJGcLHMEq',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C73217E3840',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '19',
                    Sequence: 67575375,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '41342.3532076492',
                    },
                    TakerPays: '1060247634',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A27B4A24474B7C14E638E6CD7E78C9ACF2F38FB767BB02813F9B22DDB9C50256',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '88496.4103631638',
                    },
                    TakerPays: '2269539647',
                  },
                  PreviousTxnID: '09513B262710589DD3051DE57EE3DB81F77BC68F72F9D4C3B97A846C174ACEEA',
                  PreviousTxnLgrSeq: 75136057,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rngAJNw3ARdhn4PTV5NLpPxQwVwAvppojf',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '2d',
                    PreviousTxnID: 'ABB6E33678C431D761024A96467E9BD3CEDC8728D241FF129CB4A69157869034',
                    PreviousTxnLgrSeq: 75139491,
                    Sequence: 66879721,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A40A4E950E2A60CD4E037F25B1766FDA165BE6C49CC67E80B4E99DFF6485D8B5',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '8200',
                    },
                    TakerPays: '205000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r39rBggWHTUN95x31mAdxPCC7XnhuHRHor',
                    Balance: '24362529662',
                    Flags: 0,
                    MessageKey: '02000000000000000000000000CC68FD0E56410D776B0A579873E8A4E87D2821C9',
                    OwnerCount: 197,
                    Sequence: 3094558,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'A5DE3E755190FEBE0EFAC30024CB563D21856C666B57C3B59A8F14A938FA2F70',
                  PreviousFields: {
                    Balance: '24056004685',
                    OwnerCount: 198,
                  },
                  PreviousTxnID: '81F1F4463709C4C7989C92BB4D6E0BEE852783658EFCF4D67C6E42ACDD65598B',
                  PreviousTxnLgrSeq: 75140059,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    RootIndex: 'A7740C4DEC5CDAA5D2996BA01DA108225F279FEA87FC53C28D031773AF7F4808',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A7740C4DEC5CDAA5D2996BA01DA108225F279FEA87FC53C28D031773AF7F4808',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r4i96FuLWGHBH8nXJdN8F6m24RJGcLHMEq',
                    Balance: '10119639601',
                    Flags: 0,
                    OwnerCount: 161,
                    Sequence: 67575376,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'A7C36522C8D306C192ED64C56584D6C3FC8C463077CA037BA261F1329E838546',
                  PreviousFields: {
                    Balance: '8910347588',
                  },
                  PreviousTxnID: '09513B262710589DD3051DE57EE3DB81F77BC68F72F9D4C3B97A846C174ACEEA',
                  PreviousTxnLgrSeq: 75136057,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '39481.37696541534',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '1697',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r39rBggWHTUN95x31mAdxPCC7XnhuHRHor',
                      value: '1000000000',
                    },
                    LowNode: 'b74f',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'AB43B8E70C5A427F17087802617ED6481F112C9F18FAD2B7504925EA18576D61',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '51435.06623641434',
                    },
                  },
                  PreviousTxnID: '7FFFEF822A89B4628D396F6B16AC5D5F88CDD9FCFB9E8DBC284654751F74A7E8',
                  PreviousTxnLgrSeq: 75138207,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0.0000000077',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '42315.34588016689',
                    },
                  },
                  PreviousTxnID: '64DDEEA9CF637AD06F74A98328C157C1DE54FD851B0C4DC4958A8735D2A632DE',
                  PreviousTxnLgrSeq: 75139639,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rBJ4wZMP3hoU4hYHwYKfunJN7GehYrUqfy',
                    RootIndex: 'B10FE810EF269E4D54A302058F9C1FD50A19877C9947E3C26AA2F813AB30B600',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'B10FE810EF269E4D54A302058F9C1FD50A19877C9947E3C26AA2F813AB30B600',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rp1BEqwtHG5sGAKxo8UrcbJfdNcEUATFMF',
                    Balance: '109678371',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 66952342,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B3F2F8F4A97E3EF6D5C302C49D686AA3DF091F34E96CD06028E9403267629AF8',
                  PreviousFields: {
                    Balance: '99422371',
                    OwnerCount: 4,
                  },
                  PreviousTxnID: '5273697B21192617A7E86106416B08970E3ED539AB7FE7A50166CBA89DB22F95',
                  PreviousTxnLgrSeq: 75139280,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 2097152,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                      value: '0',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20ef',
                    PreviousTxnID: '4AE26437B9400E6A879466E1F74378CB10C1A0122CBAF29968076E4C31127CB7',
                    PreviousTxnLgrSeq: 75136100,
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'BC83628DB1535AA507EBEF18684017A937CE0570BF1DAC4C5A8B613887AB482A',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-6905.194268555997',
                    },
                    Flags: 2228224,
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '2c',
                    Owner: 'rngAJNw3ARdhn4PTV5NLpPxQwVwAvppojf',
                    RootIndex: '778835C974AB3F072F0DA6BAC09E5A923267FFC76B9030E27B5FAAA9A690FCB8',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'C2236FA3168EB7DDFCB0B39CB9C0726F77F1B4E2CDD46AA585BED577EE9BF809',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C2FA338DC0D',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'EEBE35BA37F3691DE6D72D3D24E51213F31CFAFFB6DE013D7F469912A55A65DF',
                    PreviousTxnLgrSeq: 75138230,
                    Sequence: 70638810,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C2B9CDA594F815E314EC2E04845B31DB7AE1A9E45EACAD1D3EE96E6B355887ED',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '6902.560790325079',
                    },
                    TakerPays: '177000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: 'ed5a',
                    IndexPrevious: 'ed58',
                    Owner: 'r39rBggWHTUN95x31mAdxPCC7XnhuHRHor',
                    RootIndex: '1C2C02B3CF15DD8E5B1260F313162DF61528B1D3B9407B0785DB978940C048B6',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'DE3ECAD52D6FEA0F2C3292158A550CCBC0167D84FC09FC1F17A269F7046B407D',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908e1ba818ecf0c',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA818ECF0C',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA818ECF0C',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908e1bc2418caf4',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908e1bc9bf04000',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC9BF04000',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '59091bf1c5344000',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091BF1C5344000',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091BF1C5344000',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '59091c2fa338dc0d',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C2FA338DC0D',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C2FA338DC0D',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '59091c303d7718e2',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C303D7718E2',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C303D7718E2',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '59091c30d8dfb99f',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C30D8DFB99F',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C30D8DFB99F',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r39rBggWHTUN95x31mAdxPCC7XnhuHRHor',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959091C30D8DFB99F',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'ed59',
                    PreviousTxnID: '98C0242E1AD90A78E214E20E3BF43D79775DC449AD43B5623659341E767C1045',
                    PreviousTxnLgrSeq: 75136128,
                    Sequence: 3094301,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'EE770F26B33DCCF76F8F7F540B1AA820747889E751CD25037730A68C37C5E622',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '11953.689270999',
                    },
                    TakerPays: '306524977',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-41342.3532076492',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'r4i96FuLWGHBH8nXJdN8F6m24RJGcLHMEq',
                      value: '999999793.484754',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '15c9',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F3D34C48DA5445FBE8EEE13D4FF8BE391199ABC138BB38074C2208F62F846D4B',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-88496.4103631638',
                    },
                  },
                  PreviousTxnID: '4FD6025AE5F810D020731FEF71C15F50C3052707795D7EB638CA0C84A226949A',
                  PreviousTxnLgrSeq: 75125975,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rJdqADxBb8KmRpMzta6TKR3Mu7RMKHMufU',
                    Balance: '338250034',
                    Flags: 0,
                    OwnerCount: 41,
                    Sequence: 67372731,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F91EBB3AAEA11457780A558C817EEA9D77B26A94E1BB0F3FA5873E47838007AC',
                  PreviousFields: {
                    Balance: '288250034',
                    OwnerCount: 42,
                  },
                  PreviousTxnID: '9DF8D1ECFB6A3341B2E90D25E80FC63396A6314AE409B4F15F9E4570C6081F72',
                  PreviousTxnLgrSeq: 75138189,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rp1BEqwtHG5sGAKxo8UrcbJfdNcEUATFMF',
                    RootIndex: 'F9A85EDA6EAA0020B628299D8676FEC89C1F066BA722C6FC4883AFFF0946FAB2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F9A85EDA6EAA0020B628299D8676FEC89C1F066BA722C6FC4883AFFF0946FAB2',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '228800.0530845444',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: 'aae',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rp1BEqwtHG5sGAKxo8UrcbJfdNcEUATFMF',
                      value: '999999793.999522',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'FCC91EC4FF0DCF2599478DAB908099438EEDDF628197396AFCE1FDBF473064D0',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '229200.0530845444',
                    },
                  },
                  PreviousTxnID: '6F1A367EF15547585345F3F2095D914A28591F93ABF8896491F7FCEAE8778CEA',
                  PreviousTxnLgrSeq: 74906130,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rHCzXcg15BMq5ekf6PRhjXkPRGByJoJxdp',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75140149,
            Sequence: 67533964,
            SigningPubKey: '029E2EED4CEE446FC2F8631C9B7359A2DCF5977CE8EBB83C4522493A089FF53E08',
            TakerGets: '3126218999',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '119390.93785225',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100F36F4C078DE4B55843676E38FB651F56E4EFE5F3C189DDB90B3CC6D422972EBE02207A69D0355EC127C74D9D5B86676D4A855FC551968743D752C0EFB81E658B93C7',
            date: 719398491,
            hash: '3BA71BA5221ECC84DAA0953EE4C84F47E709940ACC4843C74AD4869CA2842E27',
            inLedger: 75140141,
            ledger_index: 75140141,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '42315.34588015919',
                    },
                    TakerPays: '1057882796',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '62315.36196504339',
                    },
                    TakerPays: '1557882796',
                  },
                  PreviousTxnID: '81D22DFF02381B3E74D0A76CAF0E0EED6BDDA54BEF7645F1F00B1006F7F0F431',
                  PreviousTxnLgrSeq: 75139610,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rUHnM5YX4kmNmwJKUt9QbvEAesYzofiHub',
                    Balance: '128007071',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 68626284,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '459BBE586FF567D753D8B060433D65E499193725FABF1EDBB1C0F76A0EE48EB1',
                  PreviousFields: {
                    Balance: '628007086',
                    Sequence: 68626283,
                  },
                  PreviousTxnID: '4D746BA5B9BF5D140D954ACE87121606B3F2AB4C4D790D9A5B3F08332D326027',
                  PreviousTxnLgrSeq: 75139586,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20000.0160848842',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20ef',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rUHnM5YX4kmNmwJKUt9QbvEAesYzofiHub',
                      value: '999999739.481601',
                    },
                    LowNode: '1',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '8AF4247FFA48C194700C8BF22AACB9CA6A77C844E970D7860CB88EDFCB3129FC',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: 'BA64BCAD4C0862D6A6FAD0D998A330F9A237E785754AAADF5327D161B6C88770',
                  PreviousTxnLgrSeq: 75139555,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13992120448',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13492120448',
                  },
                  PreviousTxnID: '81D22DFF02381B3E74D0A76CAF0E0EED6BDDA54BEF7645F1F00B1006F7F0F431',
                  PreviousTxnLgrSeq: 75139610,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '42315.34588016689',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '62315.36196505109',
                    },
                  },
                  PreviousTxnID: '81D22DFF02381B3E74D0A76CAF0E0EED6BDDA54BEF7645F1F00B1006F7F0F431',
                  PreviousTxnLgrSeq: 75139610,
                },
              },
            ],
            TransactionIndex: 38,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rUHnM5YX4kmNmwJKUt9QbvEAesYzofiHub',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75139647,
            Sequence: 68626283,
            SigningPubKey: '03C3E517ABB5DCDD71A06D2DCA7D74C783F46D488016F3B8B4755F8AA338946327',
            TakerGets: '500000000',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '19417.49134714',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30450221009EBB569F4A6E707D1A3E81DB298A676F8F288D237CDB939888E71E146E71403602203E7283C338B93EB7B5B258F600FF2492971692F788E101E07B68B769BFE83C4B',
            date: 719396532,
            hash: '64DDEEA9CF637AD06F74A98328C157C1DE54FD851B0C4DC4958A8735D2A632DE',
            inLedger: 75139639,
            ledger_index: 75139639,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rgAuQy4opX23g8UguUNLGFpy9qZFhgBDy',
                    Balance: '6167350342',
                    EmailHash: '7A7A1DA3094C6D192A5B3036BEAF0014',
                    Flags: 0,
                    OwnerCount: 45,
                    Sequence: 67409391,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '0C2BC374E32126EE8EB163DAA0E2646B72FE87056ECF30790BD62C303545F945',
                  PreviousFields: {
                    Balance: '6367350357',
                    Sequence: 67409390,
                  },
                  PreviousTxnID: '0CE09C0D7E7C4D6D13B5113A397DD6C125644DEC27405AC307A8F7226A15471D',
                  PreviousTxnLgrSeq: 75136794,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '62315.36196504339',
                    },
                    TakerPays: '1557882796',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '64317.9947356479',
                    },
                    TakerPays: '1607948575',
                  },
                  PreviousTxnID: '4DC0B470328153B1F2F8465BB8C089DEFEB7BE60EDDAE4DA7DB5FE3121F3A2FF',
                  PreviousTxnLgrSeq: 75139275,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 65536,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20e8',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                      value: '999872418.29',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '3D0613EB6B81A3052F01C0029C489EB0113804119DFA1CBBA1373DBE74015874',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '5997.390579062916',
                    },
                  },
                  PreviousTxnID: '7A551B9AD369BC9F39626E457BC0D03A6AA2EC10589B56BD11E2A28230C97810',
                  PreviousTxnLgrSeq: 75139501,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7FCEDFEC',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '7A551B9AD369BC9F39626E457BC0D03A6AA2EC10589B56BD11E2A28230C97810',
                    PreviousTxnLgrSeq: 75139501,
                    Sequence: 75043548,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '887.184775826177',
                    },
                    TakerPays: '22179539',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '7EDB2D3245F064B3859983EA24BEA208901490589E5922205069DB33CBF90B82',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '6884.575354889093',
                    },
                    TakerPays: '172113760',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    RootIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    Balance: '304434713',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 75043571,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AEDAC400CF4CB328DE74505F69795360B1248E062B973DE7F966DC4DF2912E8',
                  PreviousFields: {
                    Balance: '154500492',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: '2657A74D57EE85FFE89C8B546F9AC5164F7D02B94081CBF1A9D00D368D733267',
                  PreviousTxnLgrSeq: 75139608,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13492120448',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13442054669',
                  },
                  PreviousTxnID: '4DC0B470328153B1F2F8465BB8C089DEFEB7BE60EDDAE4DA7DB5FE3121F3A2FF',
                  PreviousTxnLgrSeq: 75139275,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '62315.36196505109',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '64317.9947356556',
                    },
                  },
                  PreviousTxnID: '4DC0B470328153B1F2F8465BB8C089DEFEB7BE60EDDAE4DA7DB5FE3121F3A2FF',
                  PreviousTxnLgrSeq: 75139275,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '59777.92978216376',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '14b4',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rgAuQy4opX23g8UguUNLGFpy9qZFhgBDy',
                      value: '1000000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'E58E2C671FA29C700AE2DECFD695DDE1CE4C37FA84C2CFC5E31BDEFCC4EF7617',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '51777.90643249634',
                    },
                  },
                  PreviousTxnID: '0CE09C0D7E7C4D6D13B5113A397DD6C125644DEC27405AC307A8F7226A15471D',
                  PreviousTxnLgrSeq: 75136794,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908e1ba7fcedfec',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7FCEDFEC',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7FCEDFEC',
                },
              },
            ],
            TransactionIndex: 46,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rgAuQy4opX23g8UguUNLGFpy9qZFhgBDy',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75139618,
            Sequence: 67409390,
            SigningPubKey: '03E8FC8A6542A5B230BB3699EABF4328C789655FA45237F36079D1EC6F8ED79772',
            TakerGets: '200000000',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '7766.99840724',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304502210098EC4C93E93A70107CD66B7FE34F8ECA8E0599BAF57B08C166391B73572964C6022057565A5BC42D3ACED6D2C4A220FEF917A85E0C09DD836E916078BD21D0A2735C',
            date: 719396421,
            hash: '81D22DFF02381B3E74D0A76CAF0E0EED6BDDA54BEF7645F1F00B1006F7F0F431',
            inLedger: 75139610,
            ledger_index: 75139610,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '64317.9947356479',
                    },
                    TakerPays: '1607948575',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '65374.49300502183',
                    },
                    TakerPays: '1634361011',
                  },
                  PreviousTxnID: '4AA089D3D7BA05D97636034A7B9C3A53C4CB918A0B66FC5FD98E692520C0A750',
                  PreviousTxnLgrSeq: 75139088,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rKNjeHt3KZeD3RJ1ZUrCpJRaNCHD9mHbtL',
                    Balance: '5810223903',
                    Flags: 0,
                    OwnerCount: 8,
                    Sequence: 87609,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '4653ACD81B1AF9099069C72D3DBDBA73B902839ED63824B89CF4092A33347777',
                  PreviousFields: {
                    Balance: '5836642339',
                    OwnerCount: 7,
                    Sequence: 87608,
                  },
                  PreviousTxnID: '8EFF1D5B02075C6D947C07786EA51E98937759D1BE90B4E6CA5EB9B13C7AE081',
                  PreviousTxnLgrSeq: 75139275,
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '708DFAB14E5C50113951B4F3EC57163C472FBC45B0BFB3663FC6787472322198',
                  PreviousTxnID: 'BD3E542737C0B94D0BA05B7B7622D9A1582977E1630BE2C98408DBDA5FD4DA72',
                  PreviousTxnLgrSeq: 75139011,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '20ee',
                    Owner: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                    RootIndex: 'F215BD3306D5BF1597BCAB6177A8B1A73D253350AE4E1F1FBB91442A6AC7912B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '760F9F4CEA6C82A4EEE73D542539B92B8F605910BEEE11F16EE42161EE9EF34B',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '898A9145ABEA43D9B5CB410B9761CBD361F39B7C65B77B985BEB6020D6C97931',
                  NewFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-1056.498269373932',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rKNjeHt3KZeD3RJ1ZUrCpJRaNCHD9mHbtL',
                      value: '0',
                    },
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20ef',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13442054669',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13415642233',
                  },
                  PreviousTxnID: '4AA089D3D7BA05D97636034A7B9C3A53C4CB918A0B66FC5FD98E692520C0A750',
                  PreviousTxnLgrSeq: 75139088,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '64317.9947356556',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '65374.49300502953',
                    },
                  },
                  PreviousTxnID: '4AA089D3D7BA05D97636034A7B9C3A53C4CB918A0B66FC5FD98E692520C0A750',
                  PreviousTxnLgrSeq: 75139088,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rKNjeHt3KZeD3RJ1ZUrCpJRaNCHD9mHbtL',
                    RootIndex: 'C8DD81DC08AE4C6A076B2B53DACBAABC0EF700D3E2FFE761F5B93C01B7C86770',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'C8DD81DC08AE4C6A076B2B53DACBAABC0EF700D3E2FFE761F5B93C01B7C86770',
                },
              },
            ],
            TransactionIndex: 24,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rKNjeHt3KZeD3RJ1ZUrCpJRaNCHD9mHbtL',
            Fee: '6000',
            Flags: 131072,
            Sequence: 87608,
            SigningPubKey: '03D4FEF50DF0579211A26EDEF2FF77ABC0C3CE9C0915F4074A3FD0FB9CA9E5A78E',
            TakerGets: '26415077',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '1056.498269373932',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402205DE454CA7DD13CED2C2E897DE30479E6CCA93DAE29ED7E9B386B49BD827895AE02206F3FCBCC23007CB7B911671A25BBDBD1162657C70C7E844BDCDF6588E85FF858',
            date: 719395101,
            hash: '4DC0B470328153B1F2F8465BB8C089DEFEB7BE60EDDAE4DA7DB5FE3121F3A2FF',
            inLedger: 75139275,
            ledger_index: 75139275,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rfb4Huc1PvJ3GNR82to8DXT6w1EcgF66VE',
                    RootIndex: '0EB88A9CFFAAFE7C3221E2A2BE8B9866D6BAD30EE6C8DF277E2AC1C82D53F70E',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '0EB88A9CFFAAFE7C3221E2A2BE8B9866D6BAD30EE6C8DF277E2AC1C82D53F70E',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMzKAfzmHaJCdzTUCEh2BcVLXqN6EjFoMh',
                    Balance: '36055079',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 74471832,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '102323113206088A56EAF931FB9FB6CE3A5F2B8568E4D8B4ED35E37B5663127B',
                  PreviousFields: {
                    Balance: '63392144',
                    Sequence: 74471831,
                  },
                  PreviousTxnID: '72CD10286C2DBED18419F65E3AD7B66F68F8648CE39B705857687770D422AE1C',
                  PreviousTxnLgrSeq: 75101108,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '65374.49300502183',
                    },
                    TakerPays: '1634361011',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '65467.30567966582',
                    },
                    TakerPays: '1636681326',
                  },
                  PreviousTxnID: 'B8CC37889B7B77FD8AA85EF3C7396FB95C610B6AE90F168C8B1486FA5CA02B8C',
                  PreviousTxnLgrSeq: 75139014,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rfb4Huc1PvJ3GNR82to8DXT6w1EcgF66VE',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9B9854919F0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '17C498D7DDC2BCA0C8BCE2E768BCF888EEFA9E694EDF26B407CC5B3089EC64D6',
                    PreviousTxnLgrSeq: 75139084,
                    Sequence: 71115454,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '348740BE4FD93FAF77124284BBC1918E7E432A5017930B2D94B4481A2B0042A7',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1004.207971',
                    },
                    TakerPays: '25016735',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '8.740388249283',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '2070',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rfb4Huc1PvJ3GNR82to8DXT6w1EcgF66VE',
                      value: '999866323.2855374',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '394339F9175F7B301364B4CA8CE8BD9A54C91AEFDDD66EA75D89B9DBB54D3DFA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1012.948359249283',
                    },
                  },
                  PreviousTxnID: '7FFFEF822A89B4628D396F6B16AC5D5F88CDD9FCFB9E8DBC284654751F74A7E8',
                  PreviousTxnLgrSeq: 75138207,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rfb4Huc1PvJ3GNR82to8DXT6w1EcgF66VE',
                    Balance: '1055330186',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 71115455,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '7AE7B9D14B2D9B1880490B2DF6D6C6F38CF8A3166E7BA2E94488E3A50DD99AB0',
                  PreviousFields: {
                    Balance: '1030313451',
                    OwnerCount: 4,
                  },
                  PreviousTxnID: '17C498D7DDC2BCA0C8BCE2E768BCF888EEFA9E694EDF26B407CC5B3089EC64D6',
                  PreviousTxnLgrSeq: 75139084,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13415642233',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13413321918',
                  },
                  PreviousTxnID: 'B8CC37889B7B77FD8AA85EF3C7396FB95C610B6AE90F168C8B1486FA5CA02B8C',
                  PreviousTxnLgrSeq: 75139014,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-2144.01525976991',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rMzKAfzmHaJCdzTUCEh2BcVLXqN6EjFoMh',
                      value: '999865719.0201545',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20e9',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'AAD757E8A8ACD6A4041E56AB3ADB4DAC9AF116E77859DB570367A77C098AE45A',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-1046.994614125914',
                    },
                  },
                  PreviousTxnID: 'DC97EE08C634D4F3AC3F7AFBC82EB829A0DC80ACF8D5E557D95A86AAA3CEB399',
                  PreviousTxnLgrSeq: 74995294,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '65374.49300502953',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '65467.30567967352',
                    },
                  },
                  PreviousTxnID: 'B8CC37889B7B77FD8AA85EF3C7396FB95C610B6AE90F168C8B1486FA5CA02B8C',
                  PreviousTxnLgrSeq: 75139014,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908d9b9854919f0',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9B9854919F0',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9B9854919F0',
                },
              },
            ],
            TransactionIndex: 4,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rMzKAfzmHaJCdzTUCEh2BcVLXqN6EjFoMh',
            Fee: '15',
            Flags: 786432,
            LastLedgerSequence: 75139096,
            Sequence: 74471831,
            SigningPubKey: '0302E226F7F35B9A5E8402EE5F6154B018907AA36EE7A39B979A5114571C8EA45C',
            TakerGets: '27337050',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '1043.498452905812',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402202C137D846E8F185B779AFDCEF9FFECBC717298DBE347CB914000EB32C97F936802204F5C8591439ADC124EFBD4A2DD8C96AAC0DA61CA0F346F230A86BAF7A2C4CDD2',
            date: 719394362,
            hash: '4AA089D3D7BA05D97636034A7B9C3A53C4CB918A0B66FC5FD98E692520C0A750',
            inLedger: 75139088,
            ledger_index: 75139088,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DAD4BA3B43BB',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b76',
                    PreviousTxnID: '7E19B2B8D591B7A935E86BB9DFC6C8A1BA8E0573387E139A2FFC1634850EE895',
                    PreviousTxnLgrSeq: 75138980,
                    Sequence: 74920750,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4012.185801',
                    },
                    TakerPays: '100000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '0A2CECD2A7E350506EBC68C91CE95E2AFD974EF495B17629576161DB87C32357',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1b78',
                    IndexPrevious: '1b76',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '13ED2826F456E9F606AEC842BB58260765435AF8723490D6B150CA26825D1C9B',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '65467.30567966582',
                    },
                    TakerPays: '1636681326',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '73616.36711349602',
                    },
                    TakerPays: '1840407698',
                  },
                  PreviousTxnID: '6D04DBC165D36823418C57404F23A155C819527235A8AFFE9553DA96EDE60EAC',
                  PreviousTxnLgrSeq: 75138110,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    Balance: '52369968',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 73813108,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '269BCD627D502B5AEB6B5E365C18661EC8BACEC10956DDEA7D6BD93C4F6F2D99',
                  PreviousFields: {
                    Balance: '25002423',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'C703FE5873018587C077479FE79D61C343E2CAF52F7EB77F1016A7A1564E2143',
                  PreviousTxnLgrSeq: 75138997,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7DAD9D0D',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '26A96B66D807F7EC32A5FA9EE15E5871830B2AFDA52F92252AC83FEDEBF2452F',
                    PreviousTxnLgrSeq: 75139014,
                    Sequence: 75043455,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3500000000000000e-26',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '36E05DA12868FCEE7D17292CE397E185C8764EDCA664E13DCF6BD316CFE8A369',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1256.942454073',
                    },
                    TakerPays: '31423447',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnn4aWocb3ZtL8zgC394P8RLxCVnkAW7pq',
                    Balance: '37413299',
                    Flags: 0,
                    MessageKey: '02000000000000000000000000D4BB7A7ACCBFFCB51529F1DB33673DA7A8D88C33',
                    OwnerCount: 9,
                    Sequence: 63192884,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '37C47E3FB466C8475BA2522040125AD469301AC988B5D704E374CFC7F4C52560',
                  PreviousFields: {
                    Balance: '837413314',
                    Sequence: 63192883,
                  },
                  PreviousTxnID: '1C29C02823C82B597175A66B27611BAB120B9AA10BFDCB30DCC20EF1A2FA2EE4',
                  PreviousTxnLgrSeq: 75138957,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 65536,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20e8',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                      value: '999872418.29',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '3D0613EB6B81A3052F01C0029C489EB0113804119DFA1CBBA1373DBE74015874',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1256.942454072965',
                    },
                  },
                  PreviousTxnID: '07CE7C5450D8FCBD72AB088B5EF1730884CE44C7798AE0F5D54E49FC50796A5E',
                  PreviousTxnLgrSeq: 75139011,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9E4E9388D8A',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b78',
                    PreviousTxnID: '8AEDA282AB9592DBFE1EA51B272AE78ABD5B2E9C5AFD5625C5A74DBF1CF5FEDC',
                    PreviousTxnLgrSeq: 75139008,
                    Sequence: 74920813,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '40550DA69D9896C3D5A0ACD08F0F166041731C13D4DA629EA4889FDD36521128',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4013.844549',
                    },
                    TakerPays: '100000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpqC74BW9Dxkerch1v9VWV9uM1yEkRGg7K',
                    Balance: '517572378',
                    Flags: 0,
                    OwnerCount: 40,
                    Sequence: 66599067,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '43091B881543A031118CBB68E285C4AB6FB5BB7B7152FC3E9BA3D77D881D8727',
                  PreviousFields: {
                    Balance: '307568139',
                    OwnerCount: 41,
                  },
                  PreviousTxnID: '768A2F3DE6B8C091A11C5E8673E97704082A811534CDE35A11032D6F4EE0F328',
                  PreviousTxnLgrSeq: 75138942,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    Balance: '696572527',
                    Flags: 0,
                    OwnerCount: 76,
                    Sequence: 70893958,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '4F7BC1BE763E253402D0CA5E58E7003D326BEA2FEB5C0FEE228660F795466F6E',
                  PreviousFields: {
                    Balance: '538700943',
                    OwnerCount: 79,
                  },
                  PreviousTxnID: '9C188D47AB8EC42C8FF34AC72AD63459296339ADA9DF405CD31CA1B160A030A8',
                  PreviousTxnLgrSeq: 75139012,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1b77',
                    IndexPrevious: '1b75',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '6013E05E0B3A9C2BF7390F2895EA683FA838FD15BC1528338C328BC7AA0B969D',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    Balance: '997930793',
                    Flags: 0,
                    OwnerCount: 81,
                    Sequence: 74920831,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '63B5C2B6C56B54D4F0B19865CC4A6C3D3B0151568F499EEC5994C61DFF5B5683',
                  PreviousFields: {
                    Balance: '891340026',
                    OwnerCount: 85,
                  },
                  PreviousTxnID: '7DA387A5B65566413FC2FB8BF80260A9D4DFD78FEC9EA86BBDB399350D27B266',
                  PreviousTxnLgrSeq: 75139014,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '1b77',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '640960E1C8643ABD5BBDAB8583981A8BB0281E47CF73B2326F6359F3C39D48D2',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    Balance: '88011270',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 71567599,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '656C21AEFB139F5C375A4BE6A4A3CAE86D7E2B09B8F66C41E421566F329FE978',
                  PreviousFields: {
                    Balance: '24995224',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: '9D85F55471D532172F466D136DDBCBFD2FD3A571FBC4DCCF9D7A4B79D768537B',
                  PreviousTxnLgrSeq: 75138999,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5F075CC8D8',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '842',
                    PreviousTxnID: 'EDCC43EE7324B11C8AE736639B3B27689C8DCA43FDD98ECBA7F10429FE27FDF6',
                    PreviousTxnLgrSeq: 75138992,
                    Sequence: 70893930,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '6CA5027E89D411BF7541B26EF67A0EABF72CF7AA5645DA770037CDB024456A29',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4012.999721',
                    },
                    TakerPays: '100000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '2085',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                      value: '999866291.8831663',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '80ECE4489443AE90BD642B2373CB0F9A105297642DB4214AFD5474D2D71F1BD8',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2528.853114',
                    },
                  },
                  PreviousTxnID: '7FFFEF822A89B4628D396F6B16AC5D5F88CDD9FCFB9E8DBC284654751F74A7E8',
                  PreviousTxnLgrSeq: 75138207,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA9AB25133A5',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '842',
                    PreviousTxnID: 'B1D891E0180377DB55FA41286D2208EC1C4719C5C907B887FCB489C47009FAAC',
                    PreviousTxnLgrSeq: 75138983,
                    Sequence: 70893925,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1690.439366',
                    },
                    TakerPays: '42128416',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8C4FEB3FDDBEEFFD4FD7A9DCBE3FF7C5EFAA84D458263558AA62E402AFE0B028',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4012.58706',
                    },
                    TakerPays: '100000000',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5A94464604',
                    BookNode: '0',
                    Expiration: 750930008,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'A3C5345EE515D8A85FECF1CF5F7E5824F32FED197C82418C42C6DD042E8C15E9',
                    PreviousTxnLgrSeq: 75138999,
                    Sequence: 71567597,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4.171736',
                    },
                    TakerPays: '103954',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8FECEE1154C923D3CE41AF586D0AF5E4DA38905B84B46B1BDF4B9138FDAC98F2',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2533.02485',
                    },
                    TakerPays: '63120000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    RootIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    Balance: '302530047',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 75043456,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AEDAC400CF4CB328DE74505F69795360B1248E062B973DE7F966DC4DF2912E8',
                  PreviousFields: {
                    Balance: '271106600',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: '26A96B66D807F7EC32A5FA9EE15E5871830B2AFDA52F92252AC83FEDEBF2452F',
                  PreviousTxnLgrSeq: 75139014,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13413321918',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13209595546',
                  },
                  PreviousTxnID: '6D04DBC165D36823418C57404F23A155C819527235A8AFFE9553DA96EDE60EAC',
                  PreviousTxnLgrSeq: 75138110,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '8',
                    Owner: 'rpqC74BW9Dxkerch1v9VWV9uM1yEkRGg7K',
                    RootIndex: '25FE47EB9DA481109DD48052D9F14EF6F61E173B33844C3F016167EFBA0187E1',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A783F495BE699D6D0331E090427FA469B64348C299196410495BD78AFBCEECC9',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    RootIndex: 'A856F9E3251C3702628E34144E139F6B0BB677F94325C0AF2C69E86969A39277',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A856F9E3251C3702628E34144E139F6B0BB677F94325C0AF2C69E86969A39277',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20ea',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                      value: '999865772',
                    },
                    LowNode: '31',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'A8B87AF5936DE1AFEE1466E650B0A6016F22410BACB927FF31D8924A29391959',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '6335.147415',
                    },
                  },
                  PreviousTxnID: '7A9A31450C67C20F2DCD801CEBF93BB4DDF7824FC56304A6C662DC03302E4AFE',
                  PreviousTxnLgrSeq: 75138828,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '65467.30567967352',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '73616.36711350372',
                    },
                  },
                  PreviousTxnID: '6D04DBC165D36823418C57404F23A155C819527235A8AFFE9553DA96EDE60EAC',
                  PreviousTxnLgrSeq: 75138110,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5CCE2769E4',
                    BookNode: '0',
                    Expiration: 750929995,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '26C731F99258BF4A2017E6096FD736076201EBB323C1D0D229E61375915EF575',
                    PreviousTxnLgrSeq: 75138996,
                    Sequence: 73813106,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4.111545',
                    },
                    TakerPays: '102455',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'B1A7AE935088483AB99CFA968B5025CC35A3A6F19072EAF3F66E51DC0C1E1732',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1102.375248',
                    },
                    TakerPays: '27470000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '52064.25577859647',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '4a5',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rnn4aWocb3ZtL8zgC394P8RLxCVnkAW7pq',
                      value: '1000000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'C35C7E7FE421C6D0D8D3E9CCBD327BEA8D2F5714070904FE6B01F45C85F9471A',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20000.62362827675',
                    },
                  },
                  PreviousTxnID: '900220703571E617C270F7E791AC889FEA7830CAA7B35B3039667F1F06B9F814',
                  PreviousTxnLgrSeq: 75081513,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DB12A062E175',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '842',
                    PreviousTxnID: '76760544A6BF1378C5815C814FB554CBE9AB1424039086D4EB70B3C94A81E2E2',
                    PreviousTxnLgrSeq: 75138973,
                    Sequence: 70893914,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4011.757884',
                    },
                    TakerPays: '100000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'CD06CC8AC7646C3398F3A07C03B7E6047A506CF64D6494B94EE284D517EF8447',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA208F7C2F5F',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b77',
                    PreviousTxnID: '92FB125B22A1A1823CB9B864BB675A8912879E8AF0BAD3CC4EFF5F4F76762183',
                    PreviousTxnLgrSeq: 75139001,
                    Sequence: 74920794,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3748.91593527084',
                    },
                    TakerPays: '93409233',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'CD56FA46BB11D88E264D4D04FC0898CAB6E5D796DC5415481C32C33B1A32F2E1',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4013.431841',
                    },
                    TakerPays: '100000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '1d1a',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rpqC74BW9Dxkerch1v9VWV9uM1yEkRGg7K',
                      value: '1000000000',
                    },
                    LowNode: '7',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'CE80020D0A2302A47BFB42738DB96F837779F4ED0D02935B0F713E388A31CC7C',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '8417.0035756874',
                    },
                  },
                  PreviousTxnID: '46BE1084F2ADC041B986DAF553B6898C006D43A62FCAA3D4D74388E5B10DC47A',
                  PreviousTxnLgrSeq: 75136652,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    RootIndex: 'D112C7F3D34ACB0BA80AA6DF2D0AFF5F57E3FB474BF61AD1C5135A18348A9EEA',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'D112C7F3D34ACB0BA80AA6DF2D0AFF5F57E3FB474BF61AD1C5135A18348A9EEA',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '843',
                    IndexPrevious: '841',
                    Owner: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    RootIndex: '2527CE3E43FD231C568C475728683870BEC2CE18D8BF7CD9D30A1370095CF647',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'DEF43E02D4675EE14666DB300133DE2B8B04451590C7BDF2E598882BE6F7E4A6',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908d9e4e9388d8a',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9E4E9388D8A',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908D9E4E9388D8A',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908da208f7c2f5f',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA208F7C2F5F',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA208F7C2F5F',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908da5a94464604',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5A94464604',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5A94464604',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908da5cce2769e4',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5CCE2769E4',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5CCE2769E4',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908da5f075cc8d8',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5F075CC8D8',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5F075CC8D8',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908da9ab25133a5',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA9AB25133A5',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA9AB25133A5',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908dad4ba3b43bb',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DAD4BA3B43BB',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DAD4BA3B43BB',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908db12a062e175',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DB12A062E175',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DB12A062E175',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908dd3074904048',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DD3074904048',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DD3074904048',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908e1ba7dad9d0d',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7DAD9D0D',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BA7DAD9D0D',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20ea',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                      value: '999865772',
                    },
                    LowNode: 'dff',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F23E02DC396E866BB673212E6E8A912767287A52482228C4731B38405CC0280B',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '4278.36045472916',
                    },
                  },
                  PreviousTxnID: '5DCCF35DBB68B7B29D7E7345BFDDB54ACD40DF137A86AFA7EC9E11D381FCC1F6',
                  PreviousTxnLgrSeq: 75138888,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20cc',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                      value: '999866292',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F3257047F79C1A56B1FD3CC40482352D866F4D514659C03E748ABE9F7E1FFE92',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1098.263703',
                    },
                  },
                  PreviousTxnID: '7FFFEF822A89B4628D396F6B16AC5D5F88CDD9FCFB9E8DBC284654751F74A7E8',
                  PreviousTxnLgrSeq: 75138207,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DA5F075CC8D8',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b77',
                    PreviousTxnID: 'F0E83C2E354DF0917166A575C933DAF2B700CBCEE9A020C752E9D4D3614805DE',
                    PreviousTxnLgrSeq: 75138993,
                    Sequence: 74920782,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '4012.999721',
                    },
                    TakerPays: '100000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'F6E30976B267E196D69F8214538A3299106AC8866EBEBB26261AB249BD1B8114',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpqC74BW9Dxkerch1v9VWV9uM1yEkRGg7K',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DD3074904048',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '9',
                    PreviousTxnID: '6C09829AE1C9C1A4B11F4B8AD5901B11A00B82CC3B86476F8455984998621178',
                    PreviousTxnLgrSeq: 75138921,
                    Sequence: 66599065,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FDA734EF2C11E929A2275A76AD8BE78AF341FB0D513D2B6AB242A4968F17AA35',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '8417.0035756874',
                    },
                    TakerPays: '210004239',
                  },
                },
              },
            ],
            TransactionIndex: 64,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rnn4aWocb3ZtL8zgC394P8RLxCVnkAW7pq',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75139022,
            Sequence: 63192883,
            SigningPubKey: '02FAC33A86B614A6364350FEB1DA44B83B5583D1CCB91220FEF352EAC5C9A56ADA',
            TakerGets: '800000000',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '31091.04076922',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100C4ABC00C9A721711039F8FC2D65056FFBE9D8EF345B1867D0229FAAC3AD8A21502201256E61EFC3584549DACA61F44297E1152B0FB89832FA08FAAC8C0365AFE6D09',
            date: 719394072,
            hash: 'B8CC37889B7B77FD8AA85EF3C7396FB95C610B6AE90F168C8B1486FA5CA02B8C',
            inLedger: 75139014,
            ledger_index: 75139014,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '73616.36711349602',
                    },
                    TakerPays: '1840407698',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '75536.3686576449',
                    },
                    TakerPays: '1888407698',
                  },
                  PreviousTxnID: 'CFFF67D4FB235B7D23C4B2BBCF4F1E1AD6415D852E4536348710C8BBE7CA8A87',
                  PreviousTxnLgrSeq: 75137979,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsbhQfc5Yg4zemcV7W5pnyJsogJav82p94',
                    Balance: '37005669',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 65948420,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '704587DAD2DE1B824865A0DDBA27953A5F73CB7AB756099517694C8DB326BBB9',
                  PreviousFields: {
                    Balance: '85005684',
                    Sequence: 65948419,
                  },
                  PreviousTxnID: '6F50E01B8F7837699F9CC687D5496DD595F43D18D816ACD0F6426BABDFB18CCD',
                  PreviousTxnLgrSeq: 73786020,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13209595546',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '13161595546',
                  },
                  PreviousTxnID: 'CFFF67D4FB235B7D23C4B2BBCF4F1E1AD6415D852E4536348710C8BBE7CA8A87',
                  PreviousTxnLgrSeq: 75137979,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '73616.36711350372',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '75536.3686576526',
                    },
                  },
                  PreviousTxnID: 'CFFF67D4FB235B7D23C4B2BBCF4F1E1AD6415D852E4536348710C8BBE7CA8A87',
                  PreviousTxnLgrSeq: 75137979,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1920.002644148884',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '2bf',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rsbhQfc5Yg4zemcV7W5pnyJsogJav82p94',
                      value: '1000000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'D6FE526D3E0818B739809A2A1F615B5CC5DBB895C281E04DD98F037875269A37',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0.0011',
                    },
                  },
                  PreviousTxnID: '2FB6BA6A2B22A4E8F7CEAB77AFDE8D791B86971AB549F04AC07484F0EF248FEB',
                  PreviousTxnLgrSeq: 73045652,
                },
              },
            ],
            TransactionIndex: 41,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsbhQfc5Yg4zemcV7W5pnyJsogJav82p94',
            Fee: '15',
            Flags: 655360,
            LastLedgerSequence: 75138118,
            Sequence: 65948419,
            SigningPubKey: '025250364B7FD362F2728975B454F29DE5AAD587F0B81DB4E9EBCF9DA48128B830',
            TakerGets: '48000000',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '1864.07916878',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30450221008E0CD9036CBFE3886BB9A85031F2A21936CBCA393D2565838F0BE5D52E79214C022050FBD8FEC917606FFF56BA8383105E11703CDEAEB5CFCE2ACDD25CE4B3513D70',
            date: 719390532,
            hash: '6D04DBC165D36823418C57404F23A155C819527235A8AFFE9553DA96EDE60EAC',
            inLedger: 75138110,
            ledger_index: 75138110,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '75536.3686576449',
                    },
                    TakerPays: '1888407698',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '128905.3994193443',
                    },
                    TakerPays: '3222632394',
                  },
                  PreviousTxnID: '54AC2812514865F5C8DBBFD2CB3DFA104895959B5300A6313C728DE2EA86D7AF',
                  PreviousTxnLgrSeq: 75136101,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '11',
                    Owner: 'r92at4MvrvbhwnnBReKPqHvzdrqQxWNj2B',
                    RootIndex: 'CEDF412D1E1F5808F7D751CB0B0E1B08DBE4AEA30331A0714C90C1474FE4383E',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4699AD24F3744F8433023A84AAD93E02743A5BB68BF3682DF9AB699624E5C002',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '359583.5953801635',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '1b3c',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rpnKdCHWSgxHt2XXuHeqLkKCAfckRtKgcA',
                      value: '1000000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '4B64B6227FBC090AA2BF267E5540CB6B308FB2C74C1105027DD6A16D37643A74',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '303579.8848746691',
                    },
                  },
                  PreviousTxnID: '68FF46E3E18146239E29D6CB8DCB8753A0CF9FB4390BD1D56B4F9D400B8C74FD',
                  PreviousTxnLgrSeq: 75137896,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '9805.16617712742',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '14b9',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r92at4MvrvbhwnnBReKPqHvzdrqQxWNj2B',
                      value: '1000000000',
                    },
                    LowNode: '1',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '8289978F1F9CE38978BD00007B8C2A98B79832110D3DEAFD587B2E89D0B10DED',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '12439.84592092245',
                    },
                  },
                  PreviousTxnID: 'D9C1B205D1A9E628DA65CA05427F732325F31023D617744A9C139D375B0FD12A',
                  PreviousTxnLgrSeq: 75137976,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '13161595546',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '11827370850',
                  },
                  PreviousTxnID: '7C80A4D3AB0FBF5A486438AB0E6FE5C888AAA7E598DB5203F005E6925E881061',
                  PreviousTxnLgrSeq: 75136121,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r92at4MvrvbhwnnBReKPqHvzdrqQxWNj2B',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DFEAF2A62000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '12',
                    PreviousTxnID: 'D9C1B205D1A9E628DA65CA05427F732325F31023D617744A9C139D375B0FD12A',
                    PreviousTxnLgrSeq: 75137976,
                    Sequence: 67388666,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '9C9B97F9EACE3BC7EA0E889772D063803265DCFF6BC0EF39F9B36E6356ECAE40',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2634.679743795036',
                    },
                    TakerPays: '65814300',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r92at4MvrvbhwnnBReKPqHvzdrqQxWNj2B',
                    Balance: '511019274',
                    Flags: 0,
                    OwnerCount: 183,
                    Sequence: 67388668,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'AF1A430D5E7F50AD8F77CA0C29FD75F2333BA859CD3ED084CE8C6A8EE8F710F8',
                  PreviousFields: {
                    Balance: '445204974',
                    OwnerCount: 184,
                  },
                  PreviousTxnID: 'D9C1B205D1A9E628DA65CA05427F732325F31023D617744A9C139D375B0FD12A',
                  PreviousTxnLgrSeq: 75137976,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '75536.3686576526',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '128905.399419352',
                    },
                  },
                  PreviousTxnID: '54AC2812514865F5C8DBBFD2CB3DFA104895959B5300A6313C728DE2EA86D7AF',
                  PreviousTxnLgrSeq: 75136101,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpnKdCHWSgxHt2XXuHeqLkKCAfckRtKgcA',
                    Balance: '104000000',
                    Flags: 0,
                    OwnerCount: 47,
                    Sequence: 67865101,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'C7BACD599D4AAF899E2036B36C3CB356C6A421E81A96EBF6D449E5092416E681',
                  PreviousFields: {
                    Balance: '1504039011',
                    Sequence: 67865100,
                  },
                  PreviousTxnID: '03E3DD69959DAC3664BAAD3F57EBAD10D7BEB97651545D963DA0051BF56A2296',
                  PreviousTxnLgrSeq: 75137967,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5908dfeaf2a62000',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DFEAF2A62000',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908DFEAF2A62000',
                },
              },
            ],
            TransactionIndex: 36,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rpnKdCHWSgxHt2XXuHeqLkKCAfckRtKgcA',
            Fee: '15',
            Flags: 2148007936,
            LastLedgerSequence: 75137987,
            Sequence: 67865100,
            SigningPubKey: '0399D28AB6A70EC1A3ACFE940943716CD486DDB90ABB7270D018C5373C33756E66',
            TakerGets: '1400039011',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '56001.56044',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30440220382A9C174BD73BD52BB9BE85E9AA2D97D10941BCB771553C9C8C1F29531EB172022003B02A0F9203AD4BD01DA6242B11388A59E76B7A06163C1E2D802E974F625BA6',
            date: 719390022,
            hash: 'CFFF67D4FB235B7D23C4B2BBCF4F1E1AD6415D852E4536348710C8BBE7CA8A87',
            inLedger: 75137979,
            ledger_index: 75137979,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: 'FA42474CFF8A9B628B954F21420BF06C5877CD0E16B586571228401A2163584F',
                    PreviousTxnLgrSeq: 75126338,
                    Sequence: 67956670,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '233612.58788142',
                    },
                    TakerPays: '6073920000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '82AC2E034FE6FFFF117DDF7D62F70B2144534C196884BA3D921A39440CC45C88',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '11827370850',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956674,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '11827370865',
                    OwnerCount: 13,
                    Sequence: 67956673,
                  },
                  PreviousTxnID: 'D8B8467278307CB58257CADFBADC9923394E145937E721ACFF32CA08CB31BF5B',
                  PreviousTxnLgrSeq: 75136107,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '59093caef28bdf04',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                },
              },
            ],
            TransactionIndex: 52,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            LastLedgerSequence: 75136129,
            OfferSequence: 67956670,
            Sequence: 67956673,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TransactionType: 'OfferCancel',
            TxnSignature:
              '304402203861700E427380A3137966DF0D5E21B649FF303CEB2558B6B534F21ED0CD4A2D022041BC7D6C20591FEB7EAC7241277173CB38A3E1A38985ABC1315B86B5935CAFA9',
            date: 719382841,
            hash: '7C80A4D3AB0FBF5A486438AB0E6FE5C888AAA7E598DB5203F005E6925E881061',
            inLedger: 75136121,
            ledger_index: 75136121,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590E35FA931A0000',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '52BFCDAFEF078F257BFDE642C2A7A4623A89D0B942AFA3B634626449D3E560FA',
                    PreviousTxnLgrSeq: 74994037,
                    Sequence: 67956617,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '500000',
                    },
                    TakerPays: '20000000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '01BED711C924452AED9C6B83CC7B224CF07301798E014EA95E50704E571D2478',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '11827370865',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 67956673,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '11827370880',
                    OwnerCount: 14,
                    Sequence: 67956672,
                  },
                  PreviousTxnID: '54AC2812514865F5C8DBBFD2CB3DFA104895959B5300A6313C728DE2EA86D7AF',
                  PreviousTxnLgrSeq: 75136101,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '590e35fa931a0000',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590E35FA931A0000',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590E35FA931A0000',
                },
              },
            ],
            TransactionIndex: 33,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            LastLedgerSequence: 75136115,
            OfferSequence: 67956617,
            Sequence: 67956672,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TransactionType: 'OfferCancel',
            TxnSignature:
              '304502210096086127E592D36B5AED7A7BD17120D428D44F949CB6E9ABB32F3E5127BF9D5E022013EC5DF618F4E387E8D9F2EB5967CF1E2D6197B9FDC27B0E833826D81B427F88',
            date: 719382790,
            hash: 'D8B8467278307CB58257CADFBADC9923394E145937E721ACFF32CA08CB31BF5B',
            inLedger: 75136107,
            ledger_index: 75136107,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7',
                    Balance: '1233342153',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 73702375,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '0C43A8B86466FFDD7C207163ACDB88B57E99F936E64A03AA91C61D017A0A78E8',
                  PreviousFields: {
                    Balance: '1272147392',
                    Sequence: 73702374,
                  },
                  PreviousTxnID: 'BF228FA0808867A3096245A60299A682B34573ED9060C1B6F30523537BB639A7',
                  PreviousTxnLgrSeq: 75136097,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '128905.3994193443',
                    },
                    TakerPays: '3222632394',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '130457.6094193443',
                    },
                    TakerPays: '3261437613',
                  },
                  PreviousTxnID: '4AE26437B9400E6A879466E1F74378CB10C1A0122CBAF29968076E4C31127CB7',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1552.21',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20d0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7',
                      value: '1000000000000000e-1',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '90A58C159CCD269F0F71FA6C8B23C8E5C76FCA41B4A611733B7B158F983B8D50',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: 'BF59560138865F73C0E3F952E1ECEC53CF6E229BC9E8CBD9ABC5FB86F3EF87D6',
                  PreviousTxnLgrSeq: 75135450,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '11827370880',
                    Flags: 0,
                    OwnerCount: 14,
                    Sequence: 67956672,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '11788565661',
                  },
                  PreviousTxnID: '4AE26437B9400E6A879466E1F74378CB10C1A0122CBAF29968076E4C31127CB7',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '128905.399419352',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '130457.609419352',
                    },
                  },
                  PreviousTxnID: '4AE26437B9400E6A879466E1F74378CB10C1A0122CBAF29968076E4C31127CB7',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
            ],
            TransactionIndex: 35,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7',
            Fee: '20',
            Flags: 131072,
            LastLedgerSequence: 75136122,
            Sequence: 73702374,
            SigningPubKey: 'EDEFA8F91DBE7BE5C9E6F0479788BD65A0399BFD60C8BBF4B59A123A74CCD83CCB',
            TakerGets: '40745451',
            TakerPays: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '1552.21',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '933167DDBFDD16152D739219A8FFE5F8768EDEEC034BA6996A6F30217BD3D283AD966951D1E039E1A438197CC2AB1552B79A3B60FBF6EB1BBE7AADB836F77200',
            date: 719382762,
            hash: '54AC2812514865F5C8DBBFD2CB3DFA104895959B5300A6313C728DE2EA86D7AF',
            inLedger: 75136101,
            ledger_index: 75136101,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1F86F591C900',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1782',
                    PreviousTxnID: '8FAA41C85D38A82C0721C0DD841CDB31AB88C1DEEA7C1BC0B3C1DD1C38B03ECC',
                    PreviousTxnLgrSeq: 75136007,
                    Sequence: 74884952,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '0017AB49BFC7FACA035FAB358086034395AB2985FE1761EFCEF0999CF4DD2EA4',
                  PreviousFields: {
                    TakerGets: '70000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2782.719926',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257DF04EFF',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '5A3CBAED3F682D17C499A5424EF3C8D83D78449A54AFECD7AA1904C95628811E',
                    PreviousTxnLgrSeq: 75136100,
                    Sequence: 70638696,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '06B560B5E2698A552CB1B7FE86A1C06E93F2C40C0C6982CC1A7B46C91C17A0C1',
                  PreviousFields: {
                    TakerGets: '87000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3452.419687460927',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: 'c49',
                    IndexPrevious: 'c47',
                    Owner: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    RootIndex: '2F0DE1938C657002B5C6CC2CEEF85AE19C64F74CF7234A3BA2EF5F67C12C2D1A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '075C20CF1EC7AAB1DCDD70DDFF2408FB77D11DA8340BFAA966ED5C580ADF118E',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    Balance: '952030053',
                    Flags: 0,
                    OwnerCount: 84,
                    Sequence: 74885167,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '075E8FCFD124B5C1BFDCD999226F7D3D190ED74A71474A28F4D704022AC83FBC',
                  PreviousFields: {
                    Balance: '1162030053',
                    OwnerCount: 87,
                  },
                  PreviousTxnID: '7CEA4792DEDB09703449B41219381FB9194164DAAC38F5BDE93A3471932AF821',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'raYbn9ECkAtTV7FYdxwUxbgbUEqK46wqud',
                    Balance: '208000000',
                    Flags: 0,
                    OwnerCount: 98,
                    Sequence: 68318699,
                    TicketCount: 1,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '0ABBB5FA39B15126FD4DCD5D9D228A1081466060C1CBDD2E63213E8820F577BD',
                  PreviousFields: {
                    Balance: '944455666',
                    OwnerCount: 99,
                  },
                  PreviousTxnID: '64503088AC78CAAD9F78D41307267453B339F65BA49E5C76B5F022BD72AB0E0C',
                  PreviousTxnLgrSeq: 75135930,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1AA6A8830000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b31',
                    PreviousTxnID: 'E35994779055431D47E3EB786219A0D989B690F12314C13CFB7E349EFA98203C',
                    PreviousTxnLgrSeq: 75136076,
                    Sequence: 74914656,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '163C1D194087C0B25971510C217B75CA56A84CB2E69D8C4BB9E791EA5423AF2B',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3969.952768',
                    },
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '22898D92DE29711DFC3BA9DC8B66DA9BCA40CD3C557EED6E08A3854080041671',
                  NewFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    Flags: 131072,
                    Sequence: 67956671,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '130457.6094193443',
                    },
                    TakerPays: '3261437613',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257FBA127F',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'F030EF85454F4FD5AE4A98459E98796310DE446C5D694B18A663329C7D7B9E11',
                    PreviousTxnLgrSeq: 75136098,
                    Sequence: 75042805,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '23241119C5CA021D73846203D1CB12FEE7A982B80166BA5308CED2BE590B7552',
                  PreviousFields: {
                    TakerGets: '282984584',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '11229.6730624763',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19847816441D',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '119CAB7C5049E18A74B0DB07550060BF419E2953143D520D85296B5B85C1CA4B',
                    PreviousTxnLgrSeq: 75136095,
                    Sequence: 70638694,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2355445BFF1D851C47582D2BC83BC0120016F46145E2E261150F44E786C1D41B',
                  PreviousFields: {
                    TakerGets: '87000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3452.77458109507',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '1b31',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '25614C27A7AE0C88D52370A972C011D93617BA6F3870949FCA50F65A1C7D0B6C',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    Balance: '1020851952',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 70638698,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '260FD720AD6CA0DAF064C36941E87E83CF32D0784C8EDD41746ABB500DCC3813',
                  PreviousFields: {
                    Balance: '1194851952',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: 'EF5A7A4E050A299131514C78EB1582DC2583B018C1AEEB0EE465FD24B7FD1D2D',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    Balance: '25002772',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 73812825,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '269BCD627D502B5AEB6B5E365C18661EC8BACEC10956DDEA7D6BD93C4F6F2D99',
                  PreviousFields: {
                    Balance: '52722772',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'B3605EE74FECF69A5704B9BD9754391B346D97CF7F80E5B46B2031962817F20C',
                  PreviousTxnLgrSeq: 75136090,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E198710422980',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b31',
                    PreviousTxnID: '227DB8FE3862F6DFFF8EF84900D90BBDA68ACD6AEF0D660D694D7079050023EE',
                    PreviousTxnLgrSeq: 75136091,
                    Sequence: 74914698,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2BE471FAC541B6186D33383E2B4AD29D524C01912C5D9995E57D750423EF1643',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3968.717558',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '11229.6730624763',
                    },
                    Flags: 65536,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20e8',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                      value: '999872418.29',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '3D0613EB6B81A3052F01C0029C489EB0113804119DFA1CBBA1373DBE74015874',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '1C6BA4F57035BAA371A7079B6A7950B9324DD62901DF595B30E61B4AC382FA98',
                  PreviousTxnLgrSeq: 75135552,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '824',
                    IndexPrevious: '822',
                    Owner: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    RootIndex: '2527CE3E43FD231C568C475728683870BEC2CE18D8BF7CD9D30A1370095CF647',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '46607F1E1B4B5A1F02C01E1F41CC6D1081EDF737CE8938E7220CA28C0965416F',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1b32',
                    IndexPrevious: '1b30',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '484EBB08EB5C45673E29175F76E2572C1D00C87EB5A66CB8EB14C8DB8C1856F1',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1782',
                    IndexPrevious: '177e',
                    Owner: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    RootIndex: 'A13647E14DEF2A34123CCE9861941D0E0291A7CC36AEF1565A16FCF2FAB127A5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4F6101C7E37AFDE2BAAC4FBE2F8CC82DB557ABCCA7B865C5E5977C1580E07B9D',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    Balance: '286144771',
                    Flags: 0,
                    OwnerCount: 101,
                    Sequence: 70890192,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '4F7BC1BE763E253402D0CA5E58E7003D326BEA2FEB5C0FEE228660F795466F6E',
                  PreviousFields: {
                    Balance: '586144771',
                    OwnerCount: 104,
                  },
                  PreviousTxnID: '37D6F1FD638B5BAA698F3A7129279766278A2C5901C304CDAFA592FDE64F5F15',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    Balance: '243734300',
                    Flags: 0,
                    OwnerCount: 94,
                    Sequence: 74914723,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '63B5C2B6C56B54D4F0B19865CC4A6C3D3B0151568F499EEC5994C61DFF5B5683',
                  PreviousFields: {
                    Balance: '643734300',
                    OwnerCount: 98,
                  },
                  PreviousTxnID: '12DFAB3F42990E1C5A8D398A21A020B3B77A0D01AAFF3AB0E4A9ABE3C51B4739',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    Balance: '24996234',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 71567390,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '656C21AEFB139F5C375A4BE6A4A3CAE86D7E2B09B8F66C41E421566F329FE978',
                  PreviousFields: {
                    Balance: '88786234',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'E50C40CBFA0FA9F78D7F12AD6F7FDF973AB9791CCA0DAA4D21D50E276F05DFAE',
                  PreviousTxnLgrSeq: 75136093,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E198710422980',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'c49',
                    PreviousTxnID: 'FB8173CC2023BE859E4DC93BA3016B12A8B1E9396A2C172CC5E6956FEA4AE73F',
                    PreviousTxnLgrSeq: 75136092,
                    Sequence: 74530592,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '7034D38F77D68A21F9E407DE6BF0EA269AA5F88FD9D1AF6F38E1DD8EA5D35021',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3968.717558',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '708DFAB14E5C50113951B4F3EC57163C472FBC45B0BFB3663FC6787472322198',
                  PreviousTxnID: 'F60F8DD807C6413EC4F6F10D3C9FE073CD395D0CABBC2AB84F1565E12468A1FF',
                  PreviousTxnLgrSeq: 75135674,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B0930A933C0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '823',
                    PreviousTxnID: '3F4678544E9458D574FE058291DA8CDEB8C7DF88404814670ECC47CF605CC9E2',
                    PreviousTxnLgrSeq: 75136071,
                    Sequence: 70890138,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '7551398EE53B0609F277A6877D5CA4075EB2AEEFEA0B22B2EFBC8287A249FF15',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3970.375959',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '20ee',
                    Owner: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                    RootIndex: 'F215BD3306D5BF1597BCAB6177A8B1A73D253350AE4E1F1FBB91442A6AC7912B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '760F9F4CEA6C82A4EEE73D542539B92B8F605910BEEE11F16EE42161EE9EF34B',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E204545E52CDB',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1782',
                    PreviousTxnID: '9D95DC741F5F2D5AB5EE248B520D4011B79DD8B3A198B048A5B5CC775D9191CF',
                    PreviousTxnLgrSeq: 75136000,
                    Sequence: 74884934,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '7B7EC3CDCCB2639B3F02CD4E930E7ABF4256D630EE36958938BCC7EB7381115D',
                  PreviousFields: {
                    TakerGets: '70000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2783.2921',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2531.895563',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '2085',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                      value: '999866291.8831663',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '80ECE4489443AE90BD642B2373CB0F9A105297642DB4214AFD5474D2D71F1BD8',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '7119320CD59ACA7ADAF32B10E468835DA2AB3379866B6C383572DE85F3E11747',
                  PreviousTxnLgrSeq: 75135440,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E28B1870F6',
                    BookNode: '0',
                    Expiration: 750918726,
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '667EECE26418D698976D9762A6C092D1BEB62E32D1AC13858CC5713C99096458',
                    PreviousTxnLgrSeq: 75136092,
                    Sequence: 71567388,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8D5B31D63325DFA4B8577C1BA656365DBCA936D342B4825A0CA3C72D3DBAAE02',
                  PreviousFields: {
                    TakerGets: '63790000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2531.895563',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    RootIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '972B22E694FB92591A1669084E0D640B46AD257CD70DD97B5B27228107B264A2',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E192815700BC0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'c49',
                    PreviousTxnID: 'E86CC68279790428FF43AB2D33DEACA0CD8B02922E3E3D910E6C63D7E3EE27D1',
                    PreviousTxnLgrSeq: 75136098,
                    Sequence: 74530612,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '98181A9E6C27965526882BA7389865A9CEF30190C5D8641362B8332A14AF6403',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3968.309623',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r9C47nTV3aQazuUwtA2FCyoxwdzs5U65pR',
                    Balance: '16499988',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 75042806,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AEDAC400CF4CB328DE74505F69795360B1248E062B973DE7F966DC4DF2912E8',
                  PreviousFields: {
                    Balance: '299484572',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'F030EF85454F4FD5AE4A98459E98796310DE446C5D694B18A663329C7D7B9E11',
                  PreviousTxnLgrSeq: 75136098,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '11788565661',
                    Flags: 0,
                    OwnerCount: 14,
                    Sequence: 67956672,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '9193615423',
                    OwnerCount: 13,
                    Sequence: 67956671,
                  },
                  PreviousTxnID: 'FA42474CFF8A9B628B954F21420BF06C5877CD0E16B586571228401A2163584F',
                  PreviousTxnLgrSeq: 75126338,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B683879BC00',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'c48',
                    PreviousTxnID: 'C25D3536F134CFE95E5EEA241EEE6D90C7C5D967BAE0E061EBC8CC9094FEE2B9',
                    PreviousTxnLgrSeq: 75136065,
                    Sequence: 74530509,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A1D30E5117BC4BAF6F161D6BB75F9D40B594C57A2B0AF1F556C6BA0593EAC80D',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3970.784112',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                    RootIndex: 'A7740C4DEC5CDAA5D2996BA01DA108225F279FEA87FC53C28D031773AF7F4808',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A7740C4DEC5CDAA5D2996BA01DA108225F279FEA87FC53C28D031773AF7F4808',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    RootIndex: 'A856F9E3251C3702628E34144E139F6B0BB677F94325C0AF2C69E86969A39277',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A856F9E3251C3702628E34144E139F6B0BB677F94325C0AF2C69E86969A39277',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '11908.649364',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20ea',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                      value: '999865772',
                    },
                    LowNode: '31',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'A8B87AF5936DE1AFEE1466E650B0A6016F22410BACB927FF31D8924A29391959',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '7119320CD59ACA7ADAF32B10E468835DA2AB3379866B6C383572DE85F3E11747',
                  PreviousTxnLgrSeq: 75135440,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '130457.609419352',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20dd',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                      value: '999865719.06089',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B0254AD6BD44AA5FB9F2B4FB146E250AC5AA3798777CEAF2B1CE12FF8EDB67DA',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '233612.5878814276',
                    },
                  },
                  PreviousTxnID: '8C7EF33B1F7FB1C6EAB7670CB99E0B22A48E37E7B04D61105E5B493D9C76376D',
                  PreviousTxnLgrSeq: 75124760,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '13',
                    Owner: 'raYbn9ECkAtTV7FYdxwUxbgbUEqK46wqud',
                    RootIndex: '36ED605F6C1B5EE18763A9BB4B5A81C7B4FB7DA39AF1234BF3C01C856F07599A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'B6DBAB0D93293D52DC87E73599EA19CB3452A88403C04AA94DCB3B5522C70E3B',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19257df04eff',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257DF04EFF',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257DF04EFF',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19257fba127f',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257FBA127F',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19257FBA127F',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1928131cf400',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1928131CF400',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1928131CF400',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e192815700bc0',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E192815700BC0',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E192815700BC0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19847816441d',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19847816441D',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19847816441D',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e198710422980',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E198710422980',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E198710422980',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1989a87e1b80',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1989A87E1B80',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1989A87E1B80',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19e28b1870f6',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E28B1870F6',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E28B1870F6',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19e520fdc5f6',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E520FDC5F6',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E520FDC5F6',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e19e8a5ef9c40',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E8A5EF9C40',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E8A5EF9C40',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1a47a5f13dc0',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1A47A5F13DC0',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1A47A5F13DC0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1aa6a8830000',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1AA6A8830000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1AA6A8830000',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1b0930a933c0',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B0930A933C0',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B0930A933C0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1b683879bc00',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B683879BC00',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1B683879BC00',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e1f86f591c900',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1F86F591C900',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1F86F591C900',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e204545e52cdb',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E204545E52CDB',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E204545E52CDB',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e21048daa5692',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E21048DAA5692',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E21048DAA5692',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e2bd2271005b8',
                    Flags: 0,
                    RootIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E2BD2271005B8',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000454C530000000000',
                    TakerPaysIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E2BD2271005B8',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'BC83628DB1535AA507EBEF18684017A937CE0570BF1DAC4C5A8B613887AB482A',
                  NewFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-6905.194268555997',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rJd8FRtPomK7kzQECntpDahKsuMNXZKq9U',
                      value: '0',
                    },
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20ef',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'c48',
                    Owner: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    RootIndex: '2F0DE1938C657002B5C6CC2CEEF85AE19C64F74CF7234A3BA2EF5F67C12C2D1A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BE5AD25E63C40E88926C29C1253CFD143CE3D61E7B4352603447860FD91D1498',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E520FDC5F6',
                    BookNode: '0',
                    Expiration: 750918715,
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: 'BCBB8191127CFD56D7077D9FEA6DFEDA6772B2ABA908C05ECFD752FF23AFF05A',
                    PreviousTxnLgrSeq: 75136089,
                    Sequence: 73812823,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C10D06C2BBD89FD05F23E7EF8E8D821F3920CFF24B152753EC2920442CE85948',
                  PreviousFields: {
                    TakerGets: '27720000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '1100.240498',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1989A87E1B80',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '824',
                    PreviousTxnID: '800427B0B307784956A27AC364587276D32EFD9FFECF69D932EE791F8F49722E',
                    PreviousTxnLgrSeq: 75136091,
                    Sequence: 70890176,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'CEB7135575CE35540877504251FDA331FBFFBE88B42B293FBE6C5311C05CB2A6',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3968.728702',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E19E8A5EF9C40',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b31',
                    PreviousTxnID: '9BE0418EB100A38428261456C50EB0C1B6D41379A4CD1CDFD4027D45A378806B',
                    PreviousTxnLgrSeq: 75136084,
                    Sequence: 74914678,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'CFCB482EC79C043B8FB786431AA99522087D2A8971008F1E658653231982B5A0',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3969.136681',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r9hvGUtvGdZ8k5hSqud9Y1u4RiAD1MA2zU',
                    RootIndex: 'D112C7F3D34ACB0BA80AA6DF2D0AFF5F57E3FB474BF61AD1C5135A18348A9EEA',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'D112C7F3D34ACB0BA80AA6DF2D0AFF5F57E3FB474BF61AD1C5135A18348A9EEA',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1A47A5F13DC0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '824',
                    PreviousTxnID: '918120380E8B5FB7C9399D112E7D78E4094E435FA7AB8523BED3B941DA5F3627',
                    PreviousTxnLgrSeq: 75136081,
                    Sequence: 70890158,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'D75A9BD70716A9B7AFA3644D6E4B59F8C95333225AB5044F38B074D33B84A322',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3969.544703',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1783',
                    IndexPrevious: '1781',
                    Owner: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    RootIndex: 'A13647E14DEF2A34123CCE9861941D0E0291A7CC36AEF1565A16FCF2FAB127A5',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'D92632B2D7A11BF08263583F9B7DF96BCAAD4DAEBDDA9B0695087CF3306F3389',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-10470.59190843333',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                      value: '999865772',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    LowNode: '20d6',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'DB30D68E8BDCBF83C9F9E3B3BBF9B75505F4CBEC9391C3D6813C3BB578893CDB',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-2120.71270243333',
                    },
                  },
                  PreviousTxnID: 'B0F07DB7B4D5603C5B68D6E2B98D438DBF09CE0ED4E28B3A2D892CFB4D8BBE43',
                  PreviousTxnLgrSeq: 75135109,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '823',
                    Owner: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    RootIndex: '2527CE3E43FD231C568C475728683870BEC2CE18D8BF7CD9D30A1370095CF647',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'DC41D138EF09AEB9B7B607CC6F6F61F6CD15E35287D6356F2824CD0693C30C6B',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    Balance: '636363637',
                    Flags: 0,
                    OwnerCount: 82,
                    Sequence: 74530619,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'E107C3A9D56E220124FE86F462DFF8BE3F1B858848BEA7E76075585359337CFF',
                  PreviousFields: {
                    Balance: '1036363637',
                    OwnerCount: 86,
                  },
                  PreviousTxnID: '457C38759F29F1F2D7F1AA845F43E11D3C961639CD5B973DD0F6BF99C3EF95CF',
                  PreviousTxnLgrSeq: 75136100,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '15877.355996',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20e9',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                      value: '999865772',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'E35785ED262865E08D47AAD7F3B61B0A4408F5EB927C749A9D24BDCD2F21A830',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '7119320CD59ACA7ADAF32B10E468835DA2AB3379866B6C383572DE85F3E11747',
                  PreviousTxnLgrSeq: 75135440,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                  NewFields: {
                    ExchangeRate: '5908e1bc2418caf4',
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C75995908E1BC2418CAF4',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'raYbn9ECkAtTV7FYdxwUxbgbUEqK46wqud',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E2BD2271005B8',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '14',
                    PreviousTxnID: 'BC40F462F8F10A80F34EBF9F54B34300B2D7B722ECA1EC2F39FEC60C9DD23F65',
                    PreviousTxnLgrSeq: 75135290,
                    Sequence: 68318687,
                    TakerGets: '15644334',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '624.02608695652',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'E6AAC021F348CD379D5A8821381AB6332E329DC35E153B959B738CECB710E528',
                  PreviousFields: {
                    TakerGets: '752100000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '30000',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1928131CF400',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1b32',
                    PreviousTxnID: '9D2E6CF5EE5BE2E4DEC9BE475E1603A2737C57CC9D172342638E91A176D3C7BF',
                    PreviousTxnLgrSeq: 75136098,
                    Sequence: 74914719,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'EF091D83B23CD85F0DD74972B514927B76ABC55991F738990F449AF4D2EED1CD',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3968.309584',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '15876.116591',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20ea',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                      value: '999865772',
                    },
                    LowNode: 'dff',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F23E02DC396E866BB673212E6E8A912767287A52482228C4731B38405CC0280B',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '319B69C36E324CA1911026439ED18E5FD4B79CEBB999CB7423DA3AD4A6C9D1FE',
                  PreviousTxnLgrSeq: 75135460,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1100.240498',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '20cc',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'rpHpkvzxxb64hKELcEnjHSGe2zs5xPR2zR',
                      value: '999866292',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F3257047F79C1A56B1FD3CC40482352D866F4D514659C03E748ABE9F7E1FFE92',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '7119320CD59ACA7ADAF32B10E468835DA2AB3379866B6C383572DE85F3E11747',
                  PreviousTxnLgrSeq: 75135440,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '29375.97391304348',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                    HighNode: '1f71',
                    LowLimit: {
                      currency: 'ELS',
                      issuer: 'raYbn9ECkAtTV7FYdxwUxbgbUEqK46wqud',
                      value: '1000000000',
                    },
                    LowNode: '2',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'F63FBE1919FF168FB94E5CFBFF822650FD6B0623B68EADDC433A2A05C9E7500A',
                  PreviousFields: {
                    Balance: {
                      currency: 'ELS',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '64503088AC78CAAD9F78D41307267453B339F65BA49E5C76B5F022BD72AB0E0C',
                  PreviousTxnLgrSeq: 75135930,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpDtSuZFC29AcmjgwVbJgHkSkMnbrPpaK9',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E1A47A5F13DC0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'c48',
                    PreviousTxnID: '8AD658C748B104AA0953734BE6DE35415DC43CAB7E8764EF8261D474E6ED375B',
                    PreviousTxnLgrSeq: 75136080,
                    Sequence: 74530559,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FCA781C9DF8E40B8345D53396C3C8ADF9DA2A3F615DD4BD857AD4438BD75AB62',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '3969.544703',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rMffDj93JAQvogvJ2k8196DeAt5HcpdDQC',
                    BookDirectory: 'BA592BA6C9BD95B4AB466550FFFFB58DE5D5A6130A53DD7E500E21048DAA5692',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1781',
                    PreviousTxnID: '2F815354F547AD968A01470189B353B7E5E1998B1D18A77D277C2041FC83C9D9',
                    PreviousTxnLgrSeq: 75135993,
                    Sequence: 74884915,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FFA8E99CC081A5373AA301A31B8E4E164F6CA5055F4EDC65366E0EE18205AA70',
                  PreviousFields: {
                    TakerGets: '70000000',
                    TakerPays: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '2783.86718',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 35,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '12',
            Flags: 524288,
            LastLedgerSequence: 75237095,
            Memos: [
              {
                Memo: {
                  MemoData: '39313861396438312D343135632D343536312D383933662D653331396162643762366263',
                },
              },
            ],
            Sequence: 67956671,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '233612.58788142',
            },
            TakerPays: '5840310000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100D97EC1B0D44DA0F873E3B998B14FB0DCCADA408F55516AB05084B5F02597A23802206FB734A5111A531DA3ECF5D04410922B4DDE7D8A09E0324653C6544D529CD8C1',
            date: 719382761,
            hash: '4AE26437B9400E6A879466E1F74378CB10C1A0122CBAF29968076E4C31127CB7',
            inLedger: 75136100,
            ledger_index: 75136100,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '82AC2E034FE6FFFF117DDF7D62F70B2144534C196884BA3D921A39440CC45C88',
                  NewFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                    Flags: 131072,
                    Sequence: 67956670,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '233612.58788142',
                    },
                    TakerPays: '6073920000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '9193615423',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 67956671,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '9193615435',
                    OwnerCount: 12,
                    Sequence: 67956670,
                  },
                  PreviousTxnID: 'E3B73C1132991D7A110E5DD0685C654C6BEFC3BF257DAFC9C23EA584A6D88945',
                  PreviousTxnLgrSeq: 75125279,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                  NewFields: {
                    ExchangeRate: '59093caef28bdf04',
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C759959093CAEF28BDF04',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                },
              },
            ],
            TransactionIndex: 12,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '12',
            Flags: 524288,
            LastLedgerSequence: 75227332,
            Memos: [
              {
                Memo: {
                  MemoData: '33343166653334622D363061612D343765342D613835392D393161316630643432373638',
                },
              },
            ],
            Sequence: 67956670,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '233612.58788142',
            },
            TakerPays: '6073920000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100FEF213FB52E5F091CAF861D78F3CFD7D379551755D345FEA7714C52CC2DAB70A02205B7F3A73E41603177BB25E875BF98C5B40E0448D49153A77503A7E238654155B',
            date: 719344862,
            hash: 'FA42474CFF8A9B628B954F21420BF06C5877CD0E16B586571228401A2163584F',
            inLedger: 75126338,
            ledger_index: 75126338,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: 'EAB05CEBADD3FD858F3378864A7BAD0F285718BC8943CD8EDE87CFBCC110AB36',
                    PreviousTxnLgrSeq: 75124770,
                    Sequence: 67956668,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '249340.84568655',
                    },
                    TakerPays: '5984180000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1F71D06AA62FC80A42E80C9707D0285685CEF1532A07C4DB8491E04A4E10AF7F',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '9193615435',
                    Flags: 0,
                    OwnerCount: 12,
                    Sequence: 67956670,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '9193615450',
                    OwnerCount: 13,
                    Sequence: 67956669,
                  },
                  PreviousTxnID: 'EAB05CEBADD3FD858F3378864A7BAD0F285718BC8943CD8EDE87CFBCC110AB36',
                  PreviousTxnLgrSeq: 75124770,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '590886c9845fa9be',
                    Flags: 0,
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                },
              },
            ],
            TransactionIndex: 26,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '15',
            LastLedgerSequence: 75125287,
            OfferSequence: 67956668,
            Sequence: 67956669,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TransactionType: 'OfferCancel',
            TxnSignature:
              '30450221009FC173C3DE2EDB4E456229C4ECBFF24105659FB67AD61B0876A6C6A4F71DC12402206870A86AB9481F958BBB1540AC0DA8D8CA0C01D666FC894A0D7DD7D6AF0F31E7',
            date: 719340782,
            hash: 'E3B73C1132991D7A110E5DD0685C654C6BEFC3BF257DAFC9C23EA584A6D88945',
            inLedger: 75125279,
            ledger_index: 75125279,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    RootIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '002AC2687FF454DCB14BE1CE122E725A9064801A2158574B23FC8F0CE55FFBBE',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1F71D06AA62FC80A42E80C9707D0285685CEF1532A07C4DB8491E04A4E10AF7F',
                  NewFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    BookDirectory: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                    Flags: 131072,
                    Sequence: 67956668,
                    TakerGets: {
                      currency: 'ELS',
                      issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
                      value: '249340.84568655',
                    },
                    TakerPays: '5984180000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
                    Balance: '9193615450',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 67956669,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9BA165CD08A7322C7129533A94701F1E757597F9F5982C1FB56A7798D517C90A',
                  PreviousFields: {
                    Balance: '9193615462',
                    OwnerCount: 12,
                    Sequence: 67956668,
                  },
                  PreviousTxnID: '98899976326F97772D85C46F5AB8D1586742F876285F2E1AC14729E86DD0FA6B',
                  PreviousTxnLgrSeq: 75124761,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                  NewFields: {
                    ExchangeRate: '590886c9845fa9be',
                    RootIndex: 'E5C94F1371961189FB277B38B4FB0AA0423970BB4A3C7599590886C9845FA9BE',
                    TakerGetsCurrency: '000000000000000000000000454C530000000000',
                    TakerGetsIssuer: 'B55A1A058BEB283284811E4E9ACA8432194C59E5',
                  },
                },
              },
            ],
            TransactionIndex: 39,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'r3KC7iM1GPLmvg1MVTXbXmoC87yyyuFRf2',
            Fee: '12',
            Flags: 524288,
            LastLedgerSequence: 75225763,
            Memos: [
              {
                Memo: {
                  MemoData: '66623038363763392D353062382D343431332D613633652D366165363933636562633665',
                },
              },
            ],
            Sequence: 67956668,
            SigningPubKey: '029386F44D83472C9B67BFEBF2ACE8E1FBDF1A306F5A4151F007563A9678BE64E7',
            TakerGets: {
              currency: 'ELS',
              issuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
              value: '249340.84568655',
            },
            TakerPays: '5984180000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304502210098C4608494EE6D1C6E7CB5C0CAE78EDD624E5CFDEBDC275F67EFEDD9F4EA63D2022012A54358812EA831D6C61997D47AABABF9E0EB3C4B65DD1A08A96F2282D15627',
            date: 719338812,
            hash: 'EAB05CEBADD3FD858F3378864A7BAD0F285718BC8943CD8EDE87CFBCC110AB36',
            inLedger: 75124770,
            ledger_index: 75124770,
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
  rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ: {
    id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
    result: {
      account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
      ledger_index_max: 31536988,
      ledger_index_min: 30987978,
      limit: 20,
      marker: {
        ledger: 31323564,
        seq: 0,
      },
      transactions: [
        {
          meta: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '3940DB7822EE56B55F7A193A73EE31E1B652FF4F1B50F3215A0F3DC15FEE9D38',
                    PreviousTxnLgrSeq: 31320335,
                    Sequence: 30419159,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '16932648961E46E60E1963D7C44F6AD2BF278ABFB38873E01A2CF8934BD376C7',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '5992D511E17617AAC7DA2C4EADBB4EAD6EBF5C045C0DB7F05B6C1C12E1976633',
                    PreviousTxnLgrSeq: 31323559,
                    Sequence: 30419167,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1C1417646DE1354BE0FABA4F2FF4FBD3195F8F20AEDF2AC6F13840C29C5AED54',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '48000000',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '50999263',
                    OwnerCount: 19,
                  },
                  PreviousTxnID: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '23749AAE4096AC1750E0632C233BEA8540A5A2E55010AA56195F2258FE6626EE',
                    PreviousTxnLgrSeq: 31323564,
                    Sequence: 30419168,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '23EF3A2F5EF5FCF9A31D9F55C190AB8F7E5292AC25744083C423E9D0A583A979',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '95.1999263',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '94.9',
                    },
                  },
                  PreviousTxnID: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'D50380FE1769D64449E66B08A90E1530A567EF03F8FB98783B88047E6487154C',
                    PreviousTxnLgrSeq: 31323447,
                    Sequence: 30419163,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '62F4DDDAA3FCABCCE0B87F4CD465BF1CAD82DB3FF528C6EEE5411909CA537121',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'BF66F24D33D98FB92DF628161E6D36A3ED76E9262E854B7A1EB10F04F431FD9B',
                    PreviousTxnLgrSeq: 31339006,
                    Sequence: 30419172,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '744144177C08E1268CF3FD54E3F950839C2CFEA112DB1D88AD52CDBE4B1C93B8',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '715498993',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972168,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '712499740',
                    Sequence: 29972167,
                  },
                  PreviousTxnID: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20.29571206770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20.59563836770409',
                    },
                  },
                  PreviousTxnID: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2732499E863E14C425EB000CE43017EAE78F14FDE3C52DB93B5C3BC836593D6F',
                    PreviousTxnLgrSeq: 31339002,
                    Sequence: 30419171,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A0D0098444378756A03084FE1024F7D049B02E553708A3235E5C9F69C334DFBE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '59166BAFEA944F4D89695816F5800997CD8960338EF8EE6F12C36FCDF514EE22',
                    PreviousTxnLgrSeq: 31320227,
                    Sequence: 30419156,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'AB222F1F856BB65797669A3DDEEA97E5A49A75796B8B2CDB7847E5782D257497',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '5C38DFDE6F5998B334A2D2737512CBFEB303933DBDD0CB8BAF0A8E07689DC033',
                    PreviousTxnLgrSeq: 31320339,
                    Sequence: 30419160,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'DBB38EEE9F4547FA523FCCCCCA7A49283E0FB6D877BFD3F6535CCA500A2BFC68',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'C484DFA04DA28934A3490868D0E2EC4B0AA74F8DB4DB1F26290F12AC6E895F41',
                    PreviousTxnLgrSeq: 31323452,
                    Sequence: 30419164,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'F1296D09F3CA31F9DD1756F2651820BB87395AA1E24B310F121BEA5F84AB96DC',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
                    PreviousTxnLgrSeq: 31522842,
                    Sequence: 30419155,
                    TakerGets: '48000737',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '4.8000737',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FC4B3AC6764E0218BD946CA0E0E463D2553345F30A3A34651F9FE62753DC10ED',
                  PreviousFields: {
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 6,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972167,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '0.2999263',
            },
            TakerPays: '2999263',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022007DB81ED9D9CDF6EE41C128A62FD432A17F4F77A8D749C29578AC32617F0901B02204BCF030A9B36699E92AD9F49A7ED226CC7ABA14D4C2F0148B23272B88BAB8988',
            date: 717587790,
            hash: '03175FA35CBFB0B646FC8E69DF393138B7DD81063309EE15C63BB8AAF1B85404',
            inLedger: 31524078,
            ledger_index: 31524078,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '50999263',
                    Flags: 0,
                    OwnerCount: 19,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '99999263',
                  },
                  PreviousTxnID: '25DA361EF5C0A0689FE0136F62A6EBF0321BF18BCA6E62961943DF735C50042C',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '94.9',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '90',
                    },
                  },
                  PreviousTxnID: '25DA361EF5C0A0689FE0136F62A6EBF0321BF18BCA6E62961943DF735C50042C',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '712499740',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972167,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '663499750',
                    Sequence: 29972166,
                  },
                  PreviousTxnID: '25DA361EF5C0A0689FE0136F62A6EBF0321BF18BCA6E62961943DF735C50042C',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20.59563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '25.49563836770409',
                    },
                  },
                  PreviousTxnID: '25DA361EF5C0A0689FE0136F62A6EBF0321BF18BCA6E62961943DF735C50042C',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419155,
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FC4B3AC6764E0218BD946CA0E0E463D2553345F30A3A34651F9FE62753DC10ED',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  PreviousTxnID: '158788918A2643339FCA833E4EDF6369712966719C043BC43AFACEB2E94391AF',
                  PreviousTxnLgrSeq: 31320222,
                },
              },
            ],
            TransactionIndex: 4,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972166,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '4.9',
            },
            TakerPays: '49000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30440220464DBC8F951E2B91EDCD6A0AF0F5FA36FAC01D1F591F3D7CF9A19696CEBE3AA802203D6500A28D13AB7C5A3CBD9616D1AF857C556D6939E5F956F5579D0CE4D38B13',
            date: 717583902,
            hash: '041EA1377E3A2C8A40BECF9183AEADE3E332FE0CB4F810E372C4D9189F85D4E6',
            inLedger: 31522842,
            ledger_index: 31522842,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '99999263',
                    Flags: 0,
                    OwnerCount: 19,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '199999263',
                    OwnerCount: 20,
                  },
                  PreviousTxnID: 'F7F5F42A476C390B417B8BBF9407278AC0C6F142FC928718903A431A6A069E0A',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '90',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '80',
                    },
                  },
                  PreviousTxnID: 'F7F5F42A476C390B417B8BBF9407278AC0C6F142FC928718903A431A6A069E0A',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '663499750',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972166,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '563499760',
                    Sequence: 29972165,
                  },
                  PreviousTxnID: 'F7F5F42A476C390B417B8BBF9407278AC0C6F142FC928718903A431A6A069E0A',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '25.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '35.49563836770409',
                    },
                  },
                  PreviousTxnID: 'F7F5F42A476C390B417B8BBF9407278AC0C6F142FC928718903A431A6A069E0A',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '6E47F207F3022EC447DADFE9BA9964F920127FFF4A09A7D1B4785CE4077DB1FC',
                    PreviousTxnLgrSeq: 31319494,
                    Sequence: 30419152,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C85F4EFDD1AB21E60AB72CE5BA5E3D03AE74E20532BE0811372BD4897EB64831',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 3,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972165,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TakerPays: '100000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304502210080E70BE19D2A3AED98063C073D4B2DF73F26CD2F6AFD4B181A013CAB11A3FD0A022019F70F401C2299F92246E74278DB142811E358A1A705C9AB7F98850EDAA218AF',
            date: 717583902,
            hash: '25DA361EF5C0A0689FE0136F62A6EBF0321BF18BCA6E62961943DF735C50042C',
            inLedger: 31522842,
            ledger_index: 31522842,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '77D8B4889A59DDAE101900317AC415A83983459BCE0FAE3FD8CD41B8122095BF',
                    PreviousTxnLgrSeq: 31319490,
                    Sequence: 30419151,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '199999263',
                    Flags: 0,
                    OwnerCount: 20,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '299999263',
                    OwnerCount: 21,
                  },
                  PreviousTxnID: '9CDB2A90DBFE1E9E14965FB850DBD9D8EFEE35838714E314395B5F1E14BA1FED',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '80',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '70',
                    },
                  },
                  PreviousTxnID: '9CDB2A90DBFE1E9E14965FB850DBD9D8EFEE35838714E314395B5F1E14BA1FED',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '563499760',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972165,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '463499770',
                    Sequence: 29972164,
                  },
                  PreviousTxnID: '9CDB2A90DBFE1E9E14965FB850DBD9D8EFEE35838714E314395B5F1E14BA1FED',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '35.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '45.49563836770409',
                    },
                  },
                  PreviousTxnID: '9CDB2A90DBFE1E9E14965FB850DBD9D8EFEE35838714E314395B5F1E14BA1FED',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
            ],
            TransactionIndex: 2,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972164,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TakerPays: '100000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402201E6BDE712598135A1B0072D715A82256737E5E7228FF7C6296E904EB5CFE7D4C022061869A457B3DB10338476CBF27602BB0246C47B2A218A3A2A4E8731DACED91B6',
            date: 717583902,
            hash: 'F7F5F42A476C390B417B8BBF9407278AC0C6F142FC928718903A431A6A069E0A',
            inLedger: 31522842,
            ledger_index: 31522842,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '299999263',
                    Flags: 0,
                    OwnerCount: 21,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '399999263',
                    OwnerCount: 22,
                  },
                  PreviousTxnID: '678807F4F164E35A6612373F331C6516665C8466498F2A50E65698D260A4E677',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '70',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '60',
                    },
                  },
                  PreviousTxnID: '678807F4F164E35A6612373F331C6516665C8466498F2A50E65698D260A4E677',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '463499770',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972164,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '363499780',
                    Sequence: 29972163,
                  },
                  PreviousTxnID: '678807F4F164E35A6612373F331C6516665C8466498F2A50E65698D260A4E677',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '45.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '55.49563836770409',
                    },
                  },
                  PreviousTxnID: '678807F4F164E35A6612373F331C6516665C8466498F2A50E65698D260A4E677',
                  PreviousTxnLgrSeq: 31522842,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9441DF51FBB70B2481AC33AAD42CB6763E9C5CCDC3D7080F3117F812F8E9EE95',
                    PreviousTxnLgrSeq: 31319254,
                    Sequence: 30419148,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'B241F3EF7E491A240DAF1EEA8ACC9DAE0F67169C2E2D98C597565EB89D73B5E7',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972163,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TakerPays: '100000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100F62D97E577E4D207148A75089BFA0CC4542D389076A8B3F7874EC8309950C1F0022074A3D8DF2DEF444FA4370A120486F2CAF7DA5ED2BD96237A5F907688581F0824',
            date: 717583902,
            hash: '9CDB2A90DBFE1E9E14965FB850DBD9D8EFEE35838714E314395B5F1E14BA1FED',
            inLedger: 31522842,
            ledger_index: 31522842,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '399999263',
                    Flags: 0,
                    OwnerCount: 22,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '450999263',
                    OwnerCount: 23,
                  },
                  PreviousTxnID: '9C426309DCDAA6769E6621F7B93FE365B076FB43E01C51E3D42B472F3A50CFD8',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '60',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '54.9',
                    },
                  },
                  PreviousTxnID: '9C426309DCDAA6769E6621F7B93FE365B076FB43E01C51E3D42B472F3A50CFD8',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9C426309DCDAA6769E6621F7B93FE365B076FB43E01C51E3D42B472F3A50CFD8',
                    PreviousTxnLgrSeq: 31521583,
                    Sequence: 30419147,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5465864FB6F87AE484225CEA5115DF97034ED160ED1FF132E81C1CF0C9C48799',
                  PreviousFields: {
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '363499780',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972163,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '312499790',
                    Sequence: 29972162,
                  },
                  PreviousTxnID: '604F2D6E1FE7C9F1C4709601646BEB7370E0D6B95C6AA5A72C57342FA7EAC77C',
                  PreviousTxnLgrSeq: 31522834,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '55.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '60.59563836770409',
                    },
                  },
                  PreviousTxnID: '34C345B6E4AC4183FFE7DB45B310F91B060E946F1B63B319ED4674F25BA9B21B',
                  PreviousTxnLgrSeq: 31522608,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972162,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '5.1',
            },
            TakerPays: '51000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30440220060AECC910B6C4BA2A1703D275D5E5F51765DA39034D79B71B459D7D3342017E0220756B29329E1640E9957C262E2F12AD92989CD7336F5F9091B0450FB347F9C032',
            date: 717583902,
            hash: '678807F4F164E35A6612373F331C6516665C8466498F2A50E65698D260A4E677',
            inLedger: 31522842,
            ledger_index: 31522842,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '450999263',
                    Flags: 0,
                    OwnerCount: 23,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '499999263',
                  },
                  PreviousTxnID: '7FFEEC476118043F0FE88845EE74F37E3EDC23850C587CF696792E0D6F8EEC2D',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '54.9',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '50',
                    },
                  },
                  PreviousTxnID: '7FFEEC476118043F0FE88845EE74F37E3EDC23850C587CF696792E0D6F8EEC2D',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419147,
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5465864FB6F87AE484225CEA5115DF97034ED160ED1FF132E81C1CF0C9C48799',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  PreviousTxnID: '097AE3CB1A90039F7A2FA0364FE2DFB493CA26A829C6386A7530596DEB8FCC9D',
                  PreviousTxnLgrSeq: 31319247,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '392999900',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972151,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '343999910',
                    Sequence: 29972150,
                  },
                  PreviousTxnID: '7FFEEC476118043F0FE88845EE74F37E3EDC23850C587CF696792E0D6F8EEC2D',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '53.59563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '58.49563836770409',
                    },
                  },
                  PreviousTxnID: '7FFEEC476118043F0FE88845EE74F37E3EDC23850C587CF696792E0D6F8EEC2D',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
            ],
            TransactionIndex: 2,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972150,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '4.9',
            },
            TakerPays: '49000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100C7E260102A5C812F9706822CCDF849F785AFB2036625AB297DB34BAD002FBAFA02204E4BED3C465C67DF925C90317485026BAB6E791F7D466E988A705BE88666AEB2',
            date: 717579981,
            hash: '9C426309DCDAA6769E6621F7B93FE365B076FB43E01C51E3D42B472F3A50CFD8',
            inLedger: 31521583,
            ledger_index: 31521583,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '499999263',
                    Flags: 0,
                    OwnerCount: 23,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '599999263',
                    OwnerCount: 24,
                  },
                  PreviousTxnID: '10F81617D5BEEBAADDD56174ED004CEF78E1BE51F947A84546580531D0C4588F',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '50',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '40',
                    },
                  },
                  PreviousTxnID: '10F81617D5BEEBAADDD56174ED004CEF78E1BE51F947A84546580531D0C4588F',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '343999910',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972150,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '243999920',
                    Sequence: 29972149,
                  },
                  PreviousTxnID: '10F81617D5BEEBAADDD56174ED004CEF78E1BE51F947A84546580531D0C4588F',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '772D80229E5724235FF773509C954ADCE9626959EEAB14B506E2D90A20BE8554',
                    PreviousTxnLgrSeq: 31319204,
                    Sequence: 30419144,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '93525B34EF778F025D54819D2EA73E84A8EA8FD53581D2F2B31A28DF9C15268D',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '58.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '68.49563836770409',
                    },
                  },
                  PreviousTxnID: '10F81617D5BEEBAADDD56174ED004CEF78E1BE51F947A84546580531D0C4588F',
                  PreviousTxnLgrSeq: 31521583,
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972149,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TakerPays: '100000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100EF2628554D8F63C129035F05C444F910D1C5794957BE738029160B0A467A08D9022037337B8DA0B434F7085FB07F917C7D238AF6242BA1285868387E0CD4ECC884C8',
            date: 717579981,
            hash: '7FFEEC476118043F0FE88845EE74F37E3EDC23850C587CF696792E0D6F8EEC2D',
            inLedger: 31521583,
            ledger_index: 31521583,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '599999263',
                    Flags: 0,
                    OwnerCount: 24,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '650999263',
                    OwnerCount: 25,
                  },
                  PreviousTxnID: 'F7F686E2FD693D486D8BE12E7730AB4075CA53B807A6FAAE204558A803BCB921',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '40',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '34.9',
                    },
                  },
                  PreviousTxnID: 'F7F686E2FD693D486D8BE12E7730AB4075CA53B807A6FAAE204558A803BCB921',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'F7F686E2FD693D486D8BE12E7730AB4075CA53B807A6FAAE204558A803BCB921',
                    PreviousTxnLgrSeq: 31521438,
                    Sequence: 30419143,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5E3F388EFA1DEB1E7BB07DDAA3AFB18A9CBEA2B9F4BC4FE2CCC7EF20BA92921A',
                  PreviousFields: {
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '243999920',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972149,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '192999930',
                    Sequence: 29972148,
                  },
                  PreviousTxnID: '9EC20CF4A8CF3886A14BF483BBA0EC9FB255CC12204314A88C4F990210DD6148',
                  PreviousTxnLgrSeq: 31521549,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '68.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '73.59563836770409',
                    },
                  },
                  PreviousTxnID: '9EC20CF4A8CF3886A14BF483BBA0EC9FB255CC12204314A88C4F990210DD6148',
                  PreviousTxnLgrSeq: 31521549,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972148,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '5.1',
            },
            TakerPays: '51000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022100BFCE5F5D005C635396C835BEC7D71A1325A21CE840A32A48F9D57843E485DEDE021F34DF84C2EC6187473BEA75D98B9A84413E9418C6E3E65B26B4D028BBBC9A57',
            date: 717579981,
            hash: '10F81617D5BEEBAADDD56174ED004CEF78E1BE51F947A84546580531D0C4588F',
            inLedger: 31521583,
            ledger_index: 31521583,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '650999263',
                    Flags: 0,
                    OwnerCount: 25,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '699999263',
                  },
                  PreviousTxnID: '45F46FC080366FA1BA1DC70A8FA08357EA8DA2622DEE06BCB4F07F77A86AC53D',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '34.9',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '30',
                    },
                  },
                  PreviousTxnID: '45F46FC080366FA1BA1DC70A8FA08357EA8DA2622DEE06BCB4F07F77A86AC53D',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419143,
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5E3F388EFA1DEB1E7BB07DDAA3AFB18A9CBEA2B9F4BC4FE2CCC7EF20BA92921A',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  PreviousTxnID: '435821D873D548558B4CB5EC95BC42C5045F0E1C8CD2F3490A813CAF323EB861',
                  PreviousTxnLgrSeq: 31319052,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '215999950',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972146,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '166999960',
                    Sequence: 29972145,
                  },
                  PreviousTxnID: '45F46FC080366FA1BA1DC70A8FA08357EA8DA2622DEE06BCB4F07F77A86AC53D',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '71.59563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '76.49563836770409',
                    },
                  },
                  PreviousTxnID: '45F46FC080366FA1BA1DC70A8FA08357EA8DA2622DEE06BCB4F07F77A86AC53D',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
            ],
            TransactionIndex: 2,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972145,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '4.9',
            },
            TakerPays: '49000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304502210095EBFD6F4BB500806413E763852A630189908117178227B130F6D13F75B63EB20220731D987090AFEF3D733288CBA927B98136283A6E5151A0189DF442EC0353C26F',
            date: 717579513,
            hash: 'F7F686E2FD693D486D8BE12E7730AB4075CA53B807A6FAAE204558A803BCB921',
            inLedger: 31521438,
            ledger_index: 31521438,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '699999263',
                    Flags: 0,
                    OwnerCount: 25,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '799999263',
                    OwnerCount: 26,
                  },
                  PreviousTxnID: '215ABE04F93329199B4BCFA60B758C3F0925C031B58197EB6316911B4D01885A',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '30',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20',
                    },
                  },
                  PreviousTxnID: '215ABE04F93329199B4BCFA60B758C3F0925C031B58197EB6316911B4D01885A',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '166999960',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972145,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '66999970',
                    Sequence: 29972144,
                  },
                  PreviousTxnID: '215ABE04F93329199B4BCFA60B758C3F0925C031B58197EB6316911B4D01885A',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9CA1C59CBF9523EADC0BE4AEDD33186FF0A2D98714DC621AA7022DADF5FC9050',
                    PreviousTxnLgrSeq: 31318946,
                    Sequence: 30419142,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '912A7710CC4F8568E61C4E54B14583CDC0A6985A0AB09941413A45F0C8E1DA16',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '76.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '86.49563836770409',
                    },
                  },
                  PreviousTxnID: '215ABE04F93329199B4BCFA60B758C3F0925C031B58197EB6316911B4D01885A',
                  PreviousTxnLgrSeq: 31521438,
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972144,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TakerPays: '100000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100C2B9A5B97B62EA78F711DAB909A47092D682998B878CD2714617914E06583CFF022066395F9F6DD6F89DFD6145127DAA39298F117CF8F906EF6878F6B467ED394704',
            date: 717579513,
            hash: '45F46FC080366FA1BA1DC70A8FA08357EA8DA2622DEE06BCB4F07F77A86AC53D',
            inLedger: 31521438,
            ledger_index: 31521438,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '799999263',
                    Flags: 0,
                    OwnerCount: 26,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '850999263',
                    OwnerCount: 27,
                  },
                  PreviousTxnID: '2D14793E6C52C180A1B0DF70964AA477DE47460454F7DA3F82E8996111DC82BC',
                  PreviousTxnLgrSeq: 31480562,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '14.9',
                    },
                  },
                  PreviousTxnID: '2D14793E6C52C180A1B0DF70964AA477DE47460454F7DA3F82E8996111DC82BC',
                  PreviousTxnLgrSeq: 31480562,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2D14793E6C52C180A1B0DF70964AA477DE47460454F7DA3F82E8996111DC82BC',
                    PreviousTxnLgrSeq: 31480562,
                    Sequence: 30419141,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '47D31443D3EE537F716DFF984FA25A17C9CDC20A7405CC3D6DFAFE455A5C07E4',
                  PreviousFields: {
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '66999970',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972144,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '15999980',
                    Sequence: 29972143,
                  },
                  PreviousTxnID: '5C95826CB929E3AF22E8549ECC6C86F3470D81FCF55BA931D4BD41BEFC763D60',
                  PreviousTxnLgrSeq: 31521430,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '86.49563836770409',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '91.59563836770409',
                    },
                  },
                  PreviousTxnID: '340B20B560CEA3BD1D626A9702EA64C5B4F062427A6EE5DBAB9EED55C376DC57',
                  PreviousTxnLgrSeq: 31521368,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29972143,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '5.1',
            },
            TakerPays: '51000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100F26AA7FB6471EE8A86551BA52E9619CACCF8C1739B9C92FC524B5B920361994C022076DA65AA6ADBEE799E27BBCDE3FA21147D4775E74A03DA0D02102D443633A2E4',
            date: 717579513,
            hash: '215ABE04F93329199B4BCFA60B758C3F0925C031B58197EB6316911B4D01885A',
            inLedger: 31521438,
            ledger_index: 31521438,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    RootIndex: '0BE723A0155DA2B696C9339FCAABFCE788A606C849DA97D5103E1725DA4AC294',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '0BE723A0155DA2B696C9339FCAABFCE788A606C849DA97D5103E1725DA4AC294',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '850999263',
                    Flags: 0,
                    OwnerCount: 27,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '889999263',
                  },
                  PreviousTxnID: 'D466FF95ECFC24E91358C32E169F2C60C10D94B32BE3AE84147CFF8196633EA5',
                  PreviousTxnLgrSeq: 31369839,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '19.019758829768',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                      value: '5',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '23DFE74ABA189564F64F4C88C6C07D11385016BBD4EDCBCC278329E2F8F52D01',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '18.019758829768',
                    },
                  },
                  PreviousTxnID: 'F7BC13549828CB816E81C895779CA6593ED28C7DF52E072EEA997375B8550427',
                  PreviousTxnLgrSeq: 31480539,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '14.9',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '11',
                    },
                  },
                  PreviousTxnID: 'D466FF95ECFC24E91358C32E169F2C60C10D94B32BE3AE84147CFF8196633EA5',
                  PreviousTxnLgrSeq: 31369839,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419141,
                    TakerGets: '51000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '5.1',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '47D31443D3EE537F716DFF984FA25A17C9CDC20A7405CC3D6DFAFE455A5C07E4',
                  PreviousFields: {
                    TakerGets: '90000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '9',
                    },
                  },
                  PreviousTxnID: 'D466FF95ECFC24E91358C32E169F2C60C10D94B32BE3AE84147CFF8196633EA5',
                  PreviousTxnLgrSeq: 31369839,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4d204c22370c8ba3',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D204C22370C8BA3',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D204C22370C8BA3',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                    Balance: '133512756',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29972130,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85080FDD1B28D529E9BCCAD3E24C0803698BA16BC9DF5E413DEE4FD87EA9B700',
                  PreviousFields: {
                    Balance: '83512766',
                    Sequence: 29972129,
                  },
                  PreviousTxnID: '4536CB1ABF08D109CA07AD62BA21E6585CAF65A8A12811ACF5384BCBF5848A6C',
                  PreviousTxnLgrSeq: 31480546,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    Balance: '715788354',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 29662592,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '91DFCB8EB74EB7D6ED4BFA226453830CA79A94CE139BA4D5C4DAE97182C314EC',
                  PreviousFields: {
                    Balance: '726788354',
                    OwnerCount: 3,
                  },
                  PreviousTxnID: 'F7BC13549828CB816E81C895779CA6593ED28C7DF52E072EEA997375B8550427',
                  PreviousTxnLgrSeq: 31480539,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '81.29019088944323',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
                      value: '100',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '94893963B34FA469A845B48AD92C44BE38E60205AFE27028292279ECEBC62363',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '86.19019088944323',
                    },
                  },
                  PreviousTxnID: 'F7BC13549828CB816E81C895779CA6593ED28C7DF52E072EEA997375B8550427',
                  PreviousTxnLgrSeq: 31480539,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D204C22370C8BA3',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'B1D2C1322EDC5C28DB600A2EFE308192C18FE47CEB3ED899F02E52F4BA0C547E',
                    PreviousTxnLgrSeq: 31480519,
                    Sequence: 29662590,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '9BF97B340433CDF0ECE7CA77C8DF0BE4F5CDF3F17C3751C38F4326195F1E234D',
                  PreviousFields: {
                    TakerGets: '11000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '1',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsWKbMAytbvShMJ5tWkiVhXt8xMsJq3wrA',
            Fee: '10',
            Flags: 2147483648,
            Sequence: 29972129,
            SigningPubKey: '032E76146EA567C8E6F280BC2A77A46960A11D51070788901CAAB7263C3A0A3BAC',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '5',
            },
            TakerPays: '50000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402202D5459B11CB0EF7180531289CB7DAEE6A308F31462F381F4B333E8A291C6F62B02200976AD2488E7A92FE4C8F2C547CBBCF681AB90C6452CC42413AEFBE032F61542',
            date: 717446653,
            hash: '2D14793E6C52C180A1B0DF70964AA477DE47460454F7DA3F82E8996111DC82BC',
            inLedger: 31480562,
            ledger_index: 31480562,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '889999263',
                    Flags: 0,
                    OwnerCount: 27,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '899999263',
                  },
                  PreviousTxnID: '3DF1F4423CBFF0E30363AF38F32EC71C179165E8447AF34EAE9950A300F701C1',
                  PreviousTxnLgrSeq: 31369834,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '19.019758829768',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                      value: '5',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '23DFE74ABA189564F64F4C88C6C07D11385016BBD4EDCBCC278329E2F8F52D01',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20.019758829768',
                    },
                  },
                  PreviousTxnID: '3DF1F4423CBFF0E30363AF38F32EC71C179165E8447AF34EAE9950A300F701C1',
                  PreviousTxnLgrSeq: 31369834,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '11',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '10',
                    },
                  },
                  PreviousTxnID: '3DF1F4423CBFF0E30363AF38F32EC71C179165E8447AF34EAE9950A300F701C1',
                  PreviousTxnLgrSeq: 31369834,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419141,
                    TakerGets: '90000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '9',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '47D31443D3EE537F716DFF984FA25A17C9CDC20A7405CC3D6DFAFE455A5C07E4',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  PreviousTxnID: 'AF5D1EEF78ADA008B98818901450B0D77F3788E25447A7876AC47FF5523CDA01',
                  PreviousTxnLgrSeq: 31318854,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    Balance: '715688674',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 29662560,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '91DFCB8EB74EB7D6ED4BFA226453830CA79A94CE139BA4D5C4DAE97182C314EC',
                  PreviousFields: {
                    Balance: '705688684',
                    Sequence: 29662559,
                  },
                  PreviousTxnID: '3DF1F4423CBFF0E30363AF38F32EC71C179165E8447AF34EAE9950A300F701C1',
                  PreviousTxnLgrSeq: 31369834,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29662559,
            SigningPubKey: '03FDF3ED9A0DC15D0165517CDCAD1429D793BB40332917BBDCCC236ACC12C39993',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '1',
            },
            TakerPays: '10000000',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3045022100912D444903E160549D80AB1D6F5C5F77B8BC24F17629A50B34FC00DE868F38C302205121A67D2826C0884243B8E1614276B9EDB1AC6D709427324AE3DCC1D166E1E3',
            date: 717103302,
            hash: 'D466FF95ECFC24E91358C32E169F2C60C10D94B32BE3AE84147CFF8196633EA5',
            inLedger: 31369839,
            ledger_index: 31369839,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '899999263',
                    Flags: 0,
                    OwnerCount: 27,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '989999265',
                    OwnerCount: 28,
                  },
                  PreviousTxnID: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
                  PreviousTxnLgrSeq: 31369826,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '20.019758829768',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                      value: '5',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '23DFE74ABA189564F64F4C88C6C07D11385016BBD4EDCBCC278329E2F8F52D01',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '29.019759029768',
                    },
                  },
                  PreviousTxnID: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
                  PreviousTxnLgrSeq: 31369826,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '10',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0.9999998',
                    },
                  },
                  PreviousTxnID: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
                  PreviousTxnLgrSeq: 31369826,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
                    PreviousTxnLgrSeq: 31369826,
                    Sequence: 30419140,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2F77730C678089043AAC76501D66167B7964B85DB5180405C57533177E35B593',
                  PreviousFields: {
                    TakerGets: '90000002',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '9.0000002',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    Balance: '705688684',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 29662559,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '91DFCB8EB74EB7D6ED4BFA226453830CA79A94CE139BA4D5C4DAE97182C314EC',
                  PreviousFields: {
                    Balance: '615688692',
                    Sequence: 29662558,
                  },
                  PreviousTxnID: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
                  PreviousTxnLgrSeq: 31369826,
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29662558,
            SigningPubKey: '03FDF3ED9A0DC15D0165517CDCAD1429D793BB40332917BBDCCC236ACC12C39993',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '9.0000002',
            },
            TakerPays: '90000002',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022012553DA33FA2CC75C55B19D0D7E4C08F4E8FC933598D028E5AD5E5A9D00A806F022030DFBE76B70D2DDE103FDAC6FC4D8F58A01E909EBF8E5C110D082781B7FEA145',
            date: 717103290,
            hash: '3DF1F4423CBFF0E30363AF38F32EC71C179165E8447AF34EAE9950A300F701C1',
            inLedger: 31369834,
            ledger_index: 31369834,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '989999265',
                    Flags: 0,
                    OwnerCount: 28,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '999999263',
                    OwnerCount: 27,
                  },
                  PreviousTxnID: 'BF66F24D33D98FB92DF628161E6D36A3ED76E9262E854B7A1EB10F04F431FD9B',
                  PreviousTxnLgrSeq: 31339006,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '29.019759029768',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '3',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                      value: '5',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '23DFE74ABA189564F64F4C88C6C07D11385016BBD4EDCBCC278329E2F8F52D01',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '30.01975888317971',
                    },
                  },
                  PreviousTxnID: '6D549EF0AEC090F77ED1EE84F405528CFA7DF000226EA6F1E020042BC8F34CB5',
                  PreviousTxnLgrSeq: 31369795,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '2F73A021E8A49E57D82B57E4484689A5324FBADA28346A0443799BAF2B8AD86D',
                  NewFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0.9999998',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                      value: '0',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    Sequence: 30419140,
                    TakerGets: '90000002',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '9.0000002',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2F77730C678089043AAC76501D66167B7964B85DB5180405C57533177E35B593',
                  PreviousFields: {
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  PreviousTxnID: '009569922FFC63DDD452E76B6CFFBD90FF8E674A8199C30248337A489965062F',
                  PreviousTxnLgrSeq: 31318783,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '3',
                    Owner: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                    RootIndex: '4FAB8A9BC2C0E622D3BBFF9C75D817455FE393A718B5A414082D96226C1D8CCC',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '473948EBC8369395041461B4D8E67892BD2AA9701FE322FF6CFC38F7F8DBE494',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhHWLgp5Tb3PfMcExGyNLk7rQGjZ71Z44S',
                    Balance: '885123117',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 31294063,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '4F1F9752C5DEE0A4A8CB0649AEAC6B247E8130969EB02EAB3F40F9784CC5A5C2',
                  PreviousFields: {
                    Balance: '885123118',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: '6D549EF0AEC090F77ED1EE84F405528CFA7DF000226EA6F1E020042BC8F34CB5',
                  PreviousTxnLgrSeq: 31369795,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhHWLgp5Tb3PfMcExGyNLk7rQGjZ71Z44S',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D1EE4A64AEA9BD3',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '6D549EF0AEC090F77ED1EE84F405528CFA7DF000226EA6F1E020042BC8F34CB5',
                    PreviousTxnLgrSeq: 31369795,
                    Sequence: 31294062,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '6516866AE4A626C4D7B416ABFA2F6B22FC85973BE750978EF7612672F9256D73',
                  PreviousFields: {
                    TakerGets: '1',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0.000000053411713',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4d1ee4a64aea9bd3',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D1EE4A64AEA9BD3',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4D1EE4A64AEA9BD3',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '10',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'TST',
                      issuer: 'rhHWLgp5Tb3PfMcExGyNLk7rQGjZ71Z44S',
                      value: '0',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '76B13302F3DC4A39D98E760D64DE554429F3C65881E529266A6D65ABE7AC966A',
                  PreviousFields: {
                    Balance: {
                      currency: 'TST',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '9.999999946588287',
                    },
                  },
                  PreviousTxnID: '6D549EF0AEC090F77ED1EE84F405528CFA7DF000226EA6F1E020042BC8F34CB5',
                  PreviousTxnLgrSeq: 31369795,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
                    Balance: '615688692',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 29662558,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '91DFCB8EB74EB7D6ED4BFA226453830CA79A94CE139BA4D5C4DAE97182C314EC',
                  PreviousFields: {
                    Balance: '605688703',
                    Sequence: 29662557,
                  },
                  PreviousTxnID: '1B8051A81EBF6D9650EE01C4B986957ACB50F926FE63BF7482D41F15AAA818F7',
                  PreviousTxnLgrSeq: 31369825,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rhHWLgp5Tb3PfMcExGyNLk7rQGjZ71Z44S',
                    RootIndex: 'C3CA118BEE32EF717B8A8FB25274C4C4839DBEDC1D3D81FB962DA118F51654AE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'C3CA118BEE32EF717B8A8FB25274C4C4839DBEDC1D3D81FB962DA118F51654AE',
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'E9D51582719D9591393D88318C07B19B413150CA07C76E9B7A03097EDECE2364',
                  PreviousTxnID: 'F55E40E42FF95FDD289E20D17EB5C6DBF574E54CEFAC70C56D0175175C92235F',
                  PreviousTxnLgrSeq: 31369749,
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rsKbfunjbcP6u3BgFy6Nd3BFHSuND2hZLa',
            Fee: '10',
            Flags: 2147614720,
            Sequence: 29662557,
            SigningPubKey: '03FDF3ED9A0DC15D0165517CDCAD1429D793BB40332917BBDCCC236ACC12C39993',
            TakerGets: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '0.999999946588287',
            },
            TakerPays: '9999999',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30440220751BD72AD7965ED3145E2C69F2AA60C3F46A27EF5FE5CBF5B14801C8B382898102201EB0928D3C92E46AB9291A3F2018C9ACA44681E3C8A586A25188CC585DED8792',
            date: 717103262,
            hash: '610B39F48448FBE5B73B8D2218CAA132033476D9AC7CEFD345989D4F2F8F967F',
            inLedger: 31369826,
            ledger_index: 31369826,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '999999263',
                    Flags: 0,
                    OwnerCount: 27,
                    Sequence: 30419173,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '999999275',
                    OwnerCount: 26,
                    Sequence: 30419172,
                  },
                  PreviousTxnID: '2732499E863E14C425EB000CE43017EAE78F14FDE3C52DB93B5C3BC836593D6F',
                  PreviousTxnLgrSeq: 31339002,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '744144177C08E1268CF3FD54E3F950839C2CFEA112DB1D88AD52CDBE4B1C93B8',
                  NewFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    Sequence: 30419172,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            Fee: '12',
            Flags: 0,
            LastLedgerSequence: 31339024,
            Sequence: 30419172,
            SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
            TakerGets: '100000000',
            TakerPays: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '30450221008A2F03613F5A4E88C53708EECBC5FE5FA57BEC2F2996EA53BA22738FA7B5AE6B022066728661F0D0612BC3D38892671AAB0BEA8A9007DD523786FC1B089EB850B3E7',
            date: 717008202,
            hash: 'BF66F24D33D98FB92DF628161E6D36A3ED76E9262E854B7A1EB10F04F431FD9B',
            inLedger: 31339006,
            ledger_index: 31339006,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '999999275',
                    Flags: 0,
                    OwnerCount: 26,
                    Sequence: 30419172,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '999999287',
                    OwnerCount: 25,
                    Sequence: 30419171,
                  },
                  PreviousTxnID: 'AD989C68C318DE1548E29AA8506AD5AA6F085006C50FD922349A153E63E6B36A',
                  PreviousTxnLgrSeq: 31338999,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e038d7ea4c68000',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A0D0098444378756A03084FE1024F7D049B02E553708A3235E5C9F69C334DFBE',
                  NewFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                    Sequence: 30419171,
                    TakerGets: '100000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            Fee: '12',
            Flags: 0,
            LastLedgerSequence: 31339020,
            Sequence: 30419171,
            SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
            TakerGets: '100000000',
            TakerPays: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022060BE11036637E6408BEAF365095471949F26FEE6F3C51A79162F935802BB15D302206036CF9D56738001D93DC8F5751E3DFD1899A7BF6BCD88663310B724C28011A1',
            date: 717008191,
            hash: '2732499E863E14C425EB000CE43017EAE78F14FDE3C52DB93B5C3BC836593D6F',
            inLedger: 31339002,
            ledger_index: 31339002,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '999999287',
                    Flags: 0,
                    OwnerCount: 25,
                    Sequence: 30419171,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '999999299',
                    OwnerCount: 26,
                    Sequence: 30419170,
                  },
                  PreviousTxnID: '2D61CE9D2CF43641D8FD995A197CB30CF2C5D928B99CC31B590757C9E8F38645',
                  PreviousTxnLgrSeq: 31338997,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e03bd5ce357af28',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2D61CE9D2CF43641D8FD995A197CB30CF2C5D928B99CC31B590757C9E8F38645',
                    PreviousTxnLgrSeq: 31338997,
                    Sequence: 30419169,
                    TakerGets: '95000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C3D56B5BDD8516FA7230A62C0B26D192C5105B5F710769152A342BAC0C5D5CB7',
                },
              },
            ],
            TransactionIndex: 2,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            Fee: '12',
            Flags: 0,
            LastLedgerSequence: 31339017,
            OfferSequence: 30419169,
            Sequence: 30419170,
            SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
            TransactionType: 'OfferCancel',
            TxnSignature:
              '3045022100943273813403346508C79DAEC243B0C53C5AC8288A273C10E89C88DDF931F6E502201EBBBC67B3FE45D474DE1AA4F5DDE2F3143674721CE94F1DF8BCC5CACAE6458E',
            date: 717008181,
            hash: 'AD989C68C318DE1548E29AA8506AD5AA6F085006C50FD922349A153E63E6B36A',
            inLedger: 31338999,
            ledger_index: 31338999,
          },
          validated: true,
        },
        {
          meta: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    Balance: '999999299',
                    Flags: 0,
                    OwnerCount: 26,
                    Sequence: 30419170,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
                  PreviousFields: {
                    Balance: '999999311',
                    OwnerCount: 25,
                    Sequence: 30419169,
                  },
                  PreviousTxnID: '23749AAE4096AC1750E0632C233BEA8540A5A2E55010AA56195F2258FE6626EE',
                  PreviousTxnLgrSeq: 31323564,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '4e03bd5ce357af28',
                    Flags: 0,
                    RootIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005453540000000000',
                    TakerPaysIssuer: 'F2F97C4301C80D60F86653A319AA7F302C70B83B',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    RootIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '7C4EB13AF583729FE599090F65C7A6011811576F4D38ADC014567F231973F663',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C3D56B5BDD8516FA7230A62C0B26D192C5105B5F710769152A342BAC0C5D5CB7',
                  NewFields: {
                    Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                    BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E03BD5CE357AF28',
                    Sequence: 30419169,
                    TakerGets: '95000000',
                    TakerPays: {
                      currency: 'TST',
                      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
                      value: '10',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
          tx: {
            Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            Fee: '12',
            Flags: 0,
            LastLedgerSequence: 31339015,
            Sequence: 30419169,
            SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
            TakerGets: '95000000',
            TakerPays: {
              currency: 'TST',
              issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
              value: '10',
            },
            TransactionType: 'OfferCreate',
            TxnSignature:
              '3044022075ECDEECF1E1A8CD0367201790BE492B62405B7C59CF96C16DB5DCB60BE2E14C02200E94585E9A78DAF40244FCF1F56F0F239A0E323A2CB126D09CC027872970FCB9',
            date: 717008173,
            hash: '2D61CE9D2CF43641D8FD995A197CB30CF2C5D928B99CC31B590757C9E8F38645',
            inLedger: 31338997,
            ledger_index: 31338997,
          },
          validated: true,
        },
      ],
      validated: true,
    },
    status: 'success',
    type: 'response',
  },
};

export default accountTx;
