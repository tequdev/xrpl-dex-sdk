const ledgerMocks = {
  id: 14,
  result: {
    ledger: {
      accepted: true,
      account_hash: '08AD094D241551B985E600D20B212C8F88B4544866C66E0005279118DFBCFF1A',
      close_flags: 0,
      close_time: 719712601,
      close_time_human: '2022-Oct-22 00:10:01.000000000 UTC',
      close_time_resolution: 10,
      closed: true,
      hash: 'F092F106CDBCE276C787279D530D59868A573C1F169DED455F501DC2655A791D',
      ledger_hash: 'F092F106CDBCE276C787279D530D59868A573C1F169DED455F501DC2655A791D',
      ledger_index: '75221159',
      parent_close_time: 719712600,
      parent_hash: 'A8C237492725C08D088A635B085BC9A2C6AA8E12404B426F986CD6BFBA394346',
      seqNum: '75221159',
      totalCoins: '99989242190771497',
      total_coins: '99989242190771497',
      transaction_hash: '902109F7C80CEE72BF613EB18279E6FC366AB9B16F6D1765715CC9D459A659C2',
      transactions: [
        {
          Account: 'rK7Yx4KAueTVzjLL3BZR4rWG9fUkbXKczA',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221177,
          Sequence: 70724486,
          SigningPubKey: 'ED6736AA14F5C83E752DE4CD63A8AC0161BA70053E47B4314799F44F7CA501AD4C',
          TakerGets: {
            currency: 'INR',
            issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
            value: '10000',
          },
          TakerPays: {
            currency: 'XWM',
            issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
            value: '70068.298931',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '18B48D8F77332B6FDC788171058F4F3038E7F75A5A4A13A882BC49581C6AE092FF787672B25510EB80C476981EBADA8FDB393EDBD87711B1D4F8380FC9C85503',
          hash: '221DFA826BC1FB6868FD2AE31832A00CAF677A522B42D49E417EA4C7F3536BD8',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '6C8658FE4A0979F443D4C18DAD96EEB19981A1852F8BDCAD5518E4ACBD26CC00',
                  NewFields: {
                    ExchangeRate: '5518e4acbd26cc00',
                    RootIndex: '6C8658FE4A0979F443D4C18DAD96EEB19981A1852F8BDCAD5518E4ACBD26CC00',
                    TakerGetsCurrency: '000000000000000000000000494E520000000000',
                    TakerGetsIssuer: '5B938085B75A11527A99460796DA9F6EABF18430',
                    TakerPaysCurrency: '00000000000000000000000058574D0000000000',
                    TakerPaysIssuer: 'C54A3F48A019790E40786237A11BE6062D2ECD87',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rK7Yx4KAueTVzjLL3BZR4rWG9fUkbXKczA',
                    RootIndex: 'C82115EC81ED04E81832EF05ED54140915A247CDAF91D1594EECD2424D5BED39',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'C82115EC81ED04E81832EF05ED54140915A247CDAF91D1594EECD2424D5BED39',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rK7Yx4KAueTVzjLL3BZR4rWG9fUkbXKczA',
                    Balance: '316678062',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 70724487,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'CC3F3C3758D2691CCCB134BE35314A2AEC40939EEE9EAF3ECDB1FE297BBDBBF7',
                  PreviousFields: {
                    Balance: '316678077',
                    OwnerCount: 8,
                    Sequence: 70724486,
                  },
                  PreviousTxnID: 'D50C9EC1808107EE413B6BFAA22968A64A63AB3FFC367019764B564020FC1D44',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'E327B06C221C7076F0F396AF405B60B25B28633E00693217A24A38E86BD90D7C',
                  NewFields: {
                    Account: 'rK7Yx4KAueTVzjLL3BZR4rWG9fUkbXKczA',
                    BookDirectory: '6C8658FE4A0979F443D4C18DAD96EEB19981A1852F8BDCAD5518E4ACBD26CC00',
                    Sequence: 70724486,
                    TakerGets: {
                      currency: 'INR',
                      issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
                      value: '9999.999847434575',
                    },
                    TakerPays: {
                      currency: 'XWM',
                      issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
                      value: '70068.298931',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 0,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r4aYzMP3NtrW9kFae7HbgDNg8MBsf53Fhp',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221177,
          Sequence: 68399650,
          SigningPubKey: '03771B682E7D5488643BBDD4707F59F6BC34DD3BD933E70CA5756EEDC11DA1C8A3',
          TakerGets: {
            currency: 'GBP',
            issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
            value: '1000',
          },
          TakerPays: {
            currency: 'XWM',
            issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
            value: '651128.333878',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022012CCDFF95E2F0CD0C031A317A5BE4F53B25ECDC5FE8A28087510CA757912889C022059C0B8650F7C45CAACD0AEB4ECC5DE9654E85FB06C82ACB779A084C330983D5D',
          hash: 'D7E39F3753A09FF8ACAF5252AC014BFE07937E532A2EF5FFEFFD608E1EA0A0CF',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '066EE26B2B5D315DFD31DC751520CC00189C6E39B627A2CC571721FBD77AC400',
                  NewFields: {
                    ExchangeRate: '571721fbd77ac400',
                    RootIndex: '066EE26B2B5D315DFD31DC751520CC00189C6E39B627A2CC571721FBD77AC400',
                    TakerGetsCurrency: '0000000000000000000000004742500000000000',
                    TakerGetsIssuer: '5B938085B75A11527A99460796DA9F6EABF18430',
                    TakerPaysCurrency: '00000000000000000000000058574D0000000000',
                    TakerPaysIssuer: 'C54A3F48A019790E40786237A11BE6062D2ECD87',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r4aYzMP3NtrW9kFae7HbgDNg8MBsf53Fhp',
                    Balance: '316577765',
                    Flags: 0,
                    OwnerCount: 10,
                    Sequence: 68399651,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '09DB41DBCE99C0FC183EE6F3FEDC5CA8959B6A74A79B93383E89C0B3C667269F',
                  PreviousFields: {
                    Balance: '316577780',
                    OwnerCount: 9,
                    Sequence: 68399650,
                  },
                  PreviousTxnID: '8BF76FA407F5018F086CC008052E67690137ED288DA561E1DF628C94724A390E',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8F9DB372E36AA3668EE1C69D100FAC2579D57C420F2B54A148F014265307A751',
                  NewFields: {
                    Account: 'r4aYzMP3NtrW9kFae7HbgDNg8MBsf53Fhp',
                    BookDirectory: '066EE26B2B5D315DFD31DC751520CC00189C6E39B627A2CC571721FBD77AC400',
                    OwnerNode: '7a',
                    Sequence: 68399650,
                    TakerGets: {
                      currency: 'GBP',
                      issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
                      value: '999.9989769738408',
                    },
                    TakerPays: {
                      currency: 'XWM',
                      issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
                      value: '651128.333878',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'r4aYzMP3NtrW9kFae7HbgDNg8MBsf53Fhp',
                    RootIndex: 'DABD41EA673161E999A7728EC3FC435DD4AA8BC8CB3394CC429DE64951D8FF8A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F4804555C00641191AEDBFDA4DF2870E6478F63EC822CAA4E076965CC4CF883A',
                },
              },
            ],
            TransactionIndex: 1,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
          Fee: '12',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          Sequence: 74621860,
          SigningPubKey: 'ED7B44FD2C5CC5003CAD21A442AB690235E33CB8CC4FE334A9CEE5809694CF7A94',
          TakerGets: '29290100',
          TakerPays: {
            currency: 'CHP',
            issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
            value: '272.5234',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '575C28A8D80C51955045EC595FE16EE7D724E37CC839C98FF65E0C03FFE4FCAECB453BC4A26E6800C6639B2B8EEEC0B779B4880079C643650540021D3822700E',
          hash: 'C50CDD8ED40D9BC77E8023F5E76EBCE00AED581E8C53EC13F96949D9C132E1C7',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '09410F6E74734594A53AC0DF3D0384019B61C1F2C21CB78624A51736694FBCB3',
                  NewFields: {
                    Account: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    BookDirectory: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                    Sequence: 74621860,
                    TakerGets: '29290100',
                    TakerPays: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '272.5234',
                    },
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                  NewFields: {
                    ExchangeRate: '4f210e325cd33e4b',
                    RootIndex: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                    TakerPaysCurrency: '0000000000000000000000004348500000000000',
                    TakerPaysIssuer: '29D6F101A87C602769158C14CF5833DBB2BCBDDC',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    RootIndex: '8560A5B4626B74178F853AB1AA71627EF88480EF3FDCEC95F2A816007CFFAC71',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '8560A5B4626B74178F853AB1AA71627EF88480EF3FDCEC95F2A816007CFFAC71',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    Balance: '58350830',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 74621861,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F6033C5EDD0733E08690FED7ADF9E561D68B9FFA832CF548AC2FDC7FAD5567C5',
                  PreviousFields: {
                    Balance: '58350842',
                    OwnerCount: 1,
                    Sequence: 74621860,
                  },
                  PreviousTxnID: '9C9E41E12E5AE59C7CBB833F740B1ACA265078399DB964467AACAE07B7549CD1',
                  PreviousTxnLgrSeq: 75221155,
                },
              },
            ],
            TransactionIndex: 2,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rPYF6siyMR29wS1KTgTT28GkeDkprPNGMD',
          Amount: '31000000',
          Destination: 'rnv5HvdYyhHQaHHKR1qRUE2gG9N6xqM8mC',
          Fee: '12',
          Flags: 2147483648,
          LastLedgerSequence: 75221163,
          Sequence: 73788114,
          SigningPubKey: 'EDACAB026F00B80BB3BB2C086B2AF4132588D99677288899E1EBBFA378ECB7C0C7',
          TransactionType: 'Payment',
          TxnSignature:
            'BA7EBCE3BAC51B7D23021A2CD765CB3EF5351B36FBF3A0AA738A1B08C393D659834D88A76111D2F907C16D893AB2DEA11C9733BC59899EF40F200497E9E11308',
          hash: 'E098C4DC74F21BCDA6BB8CE8502D78F305C18CE95810266A520336545A40FA89',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rPYF6siyMR29wS1KTgTT28GkeDkprPNGMD',
                    Balance: '20362260',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 73788115,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'AB712FB29F5663B298FD54E02C2ABD5B867DC4081AB1A24E64162EFD934D741C',
                  PreviousFields: {
                    Balance: '51362272',
                    Sequence: 73788114,
                  },
                  PreviousTxnID: 'FF5922E54828647245807C2ABEE6E6C0AB2F8E25AE127064AFBF005D4D7161E6',
                  PreviousTxnLgrSeq: 75221154,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnv5HvdYyhHQaHHKR1qRUE2gG9N6xqM8mC',
                    Balance: '582063157',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 73891506,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'C1AE71D357D96054E8A654E660117CBA4479F602D93B952B50ADD92D531EAACD',
                  PreviousFields: {
                    Balance: '551063157',
                  },
                  PreviousTxnID: '48C555D7FC2790E1638CD9301DA25EDC33A9748086F6075D455D7A036E2FE275',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
            ],
            TransactionIndex: 3,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: '31000000',
          },
        },
        {
          Account: 'rPR1Pr5uiDHM7qEYcSPCwC9Kp8b82X59Hh',
          Expiration: 719712839,
          Fee: '20',
          Flags: 0,
          LastLedgerSequence: 75221168,
          OfferSequence: 70086133,
          Sequence: 70086135,
          SigningPubKey: '039422594D7C543F6322063426E50DF17214160E0C63003355696CE21AECF49CFA',
          TakerGets: '50000000',
          TakerPays: {
            currency: 'RPR',
            issuer: 'r3qWgpz2ry3BhcRJ8JE6rxM8esrfhuKp4R',
            value: '714.1994454468114',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100CC94108AF445F21CCB17FEC46852C03F709439EBDE4095B42BD897E90318859002203F73FE9349C4E26D280C8553616B5694AF4A7CC1ABC37F8F9325E055C46EF30B',
          hash: '2337C7ED34217BA14CDC0993321F811A6DDD1ACD9CFE9C51DAFEB2F241C638DC',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C885005131F087D4136',
                  NewFields: {
                    ExchangeRate: '5005131f087d4136',
                    RootIndex: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C885005131F087D4136',
                    TakerPaysCurrency: '0000000000000000000000005250520000000000',
                    TakerPaysIssuer: '55F59DCE629497D6FB3F5F1235BE6525244018C1',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '50051329d82cbfcc',
                    Flags: 0,
                    RootIndex: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C8850051329D82CBFCC',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000005250520000000000',
                    TakerPaysIssuer: '55F59DCE629497D6FB3F5F1235BE6525244018C1',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C8850051329D82CBFCC',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rPR1Pr5uiDHM7qEYcSPCwC9Kp8b82X59Hh',
                    Balance: '215152713',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 70086136,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '5305E2D911B93E831418CF465AC868873ED7F6A3B09D93B84364C1504921C743',
                  PreviousFields: {
                    Balance: '215152733',
                    Sequence: 70086135,
                  },
                  PreviousTxnID: 'EF4E297E9AFBD519787183AD102E062DAFAC59DA9F281957F12C197E714F0031',
                  PreviousTxnLgrSeq: 75221152,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rPR1Pr5uiDHM7qEYcSPCwC9Kp8b82X59Hh',
                    RootIndex: 'BB9D5BD8F6DE8F12CC6F95AE0362EA801545E5AA8E744B14EC6915528DA15BF3',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BB9D5BD8F6DE8F12CC6F95AE0362EA801545E5AA8E744B14EC6915528DA15BF3',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'E6684EC73223995BDA5AD7A0293F5D53D3A62451D74AB92E2C7D1269F4846E2D',
                  NewFields: {
                    Account: 'rPR1Pr5uiDHM7qEYcSPCwC9Kp8b82X59Hh',
                    BookDirectory: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C885005131F087D4136',
                    Expiration: 719712839,
                    Sequence: 70086135,
                    TakerGets: '50000000',
                    TakerPays: {
                      currency: 'RPR',
                      issuer: 'r3qWgpz2ry3BhcRJ8JE6rxM8esrfhuKp4R',
                      value: '714.1994454468114',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rPR1Pr5uiDHM7qEYcSPCwC9Kp8b82X59Hh',
                    BookDirectory: '00B72D4B7F630043F7FDDCC58FD873818FD890CD123C2C8850051329D82CBFCC',
                    BookNode: '0',
                    Expiration: 719712779,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '5762C275F5C9CAE704D08F0EE44BA5DEE7D467293D919C3976499D9CF55EAC19',
                    PreviousTxnLgrSeq: 75221143,
                    Sequence: 70086133,
                    TakerGets: '50000000',
                    TakerPays: {
                      currency: 'RPR',
                      issuer: 'r3qWgpz2ry3BhcRJ8JE6rxM8esrfhuKp4R',
                      value: '714.2226624757503',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FE085D4511D75FEF6D2B156C16996036A6867E8BB0122073C37FCED622162134',
                },
              },
            ],
            TransactionIndex: 4,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
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
          hash: '0D16CDADC1889E4B7F35277EA13609CAE4C1182B88D4334B28ED596016BD7D70',
          metaData: {
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
        },
        {
          Account: 'rP8owsg78HwAMpoqvTBdHRtk59R1uWViBT',
          Amount: '5000000',
          Destination: 'rK2UiBT2rz66Z5dFNaZQKpT7cVh7gk341b',
          Fee: '12',
          LastLedgerSequence: 75221167,
          Sequence: 67889641,
          SigningPubKey: '03D35CD3048EC7867046B126F90D847A1F98FD3555625E2695AFF7E5AF19CC7F1B',
          TransactionType: 'Payment',
          TxnSignature:
            '304402207D30B10BDAB55B4941CDD34948EB4E3E7D90F8F84E68E0DC434E3CE188F8237502202979E2B9BC25C1643EE7E7491EC5B8B8404742D4FAB92F5BFE3B6FF547324665',
          hash: 'D5C048345F01705E0652AAA507A89B14F4C0FB7085D2D73896BED1FE12251A75',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rP8owsg78HwAMpoqvTBdHRtk59R1uWViBT',
                    Balance: '42999730',
                    Flags: 0,
                    OwnerCount: 15,
                    Sequence: 67889642,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '681B32B34DFDE5DAA1E2CE64BCF5DD1DA846166415469C8039328DA5E96BC394',
                  PreviousFields: {
                    Balance: '47999742',
                    Sequence: 67889641,
                  },
                  PreviousTxnID: '46EBE2CB1CDC8F341BB8377F0FFC084963A18604C605B311F35343736B7F69D0',
                  PreviousTxnLgrSeq: 75221123,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rK2UiBT2rz66Z5dFNaZQKpT7cVh7gk341b',
                    Balance: '519999985',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 74858603,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'CA8A25088096572ED8C230DDA46D07D15F51E5945F3FB1D93FF95BB0CF41F79B',
                  PreviousFields: {
                    Balance: '514999985',
                  },
                  PreviousTxnID: 'E542E4BD3326CA868EC5CD6A5FBCE1FE74AC578F06AA656E1698FE00E4204F89',
                  PreviousTxnLgrSeq: 75220384,
                },
              },
            ],
            TransactionIndex: 6,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: '5000000',
          },
        },
        {
          Account: 'rQwAhotHTu7vE2BH56S7bhLrmJp5yCp9Jz',
          Fee: '12',
          Flags: 0,
          LastLedgerSequence: 75221177,
          OfferSequence: 68059106,
          Sequence: 68059114,
          SigningPubKey: '02706F6C767D34E0A1A65CEA85CF34F0654AEA5A058DC54D07EB389ACD3A64FB2A',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3045022100EC00C063FF588DC0C94C9F660C5D4388BD7FEF437971A0514DB0F30B341B6814022005A2117029DB526FFB542F43155BC840A784C09949283974C270A196FDB851C6',
          hash: '9D712920D0FB31C7B56D10EAF7AF0360468618AC24ED96633EFC7B7532840AE6',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rQwAhotHTu7vE2BH56S7bhLrmJp5yCp9Jz',
                    RootIndex: '3292B538619DAD3ADBD59203B8D2FA093B9722C91415679EF35AED3F405F1B99',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '288DFC9D5CBF6A740B198B0581B7B0C0E27D5B10A6BA4BA3FD1514FA8894BFB5',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '5206b8d18c319800',
                    Flags: 0,
                    RootIndex: '6FB01369C66FC94D50EA23B5479CCE87F20D2841DAEE0B525206B8D18C319800',
                    TakerGetsCurrency: '00000000000000000000000058574D0000000000',
                    TakerGetsIssuer: 'C54A3F48A019790E40786237A11BE6062D2ECD87',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '5B938085B75A11527A99460796DA9F6EABF18430',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '6FB01369C66FC94D50EA23B5479CCE87F20D2841DAEE0B525206B8D18C319800',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rQwAhotHTu7vE2BH56S7bhLrmJp5yCp9Jz',
                    BookDirectory: '6FB01369C66FC94D50EA23B5479CCE87F20D2841DAEE0B525206B8D18C319800',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '29',
                    PreviousTxnID: 'E3B81B346C0E078210A8FCC885CCF9A6AD86E5F966A03078F0B5447A7C41E4DC',
                    PreviousTxnLgrSeq: 75221144,
                    Sequence: 68059106,
                    TakerGets: {
                      currency: 'XWM',
                      issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
                      value: '528524.4653975033',
                    },
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
                      value: '1000',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'EAD9FBDC8C24AB0DD2608932721A7A24A6E7BD823DB5E2150331A4666C68A50F',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rQwAhotHTu7vE2BH56S7bhLrmJp5yCp9Jz',
                    Balance: '316004027',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 68059115,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'FDD0F741E4CEFED96FA88567711E1F009EC9384E4E6A3903BD800CD80C50A1C0',
                  PreviousFields: {
                    Balance: '316004039',
                    OwnerCount: 14,
                    Sequence: 68059114,
                  },
                  PreviousTxnID: '08D6C767495E1D003A04C2CD22DBBD9790FC37B157E8979ECD331294760A5031',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
            ],
            TransactionIndex: 7,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221160,
          OfferSequence: 113414776,
          Sequence: 113414780,
          SigningPubKey: '039451ECAC6D4EB75E3C926E7DC7BA7721719A1521502F99EC7EB2FE87CEE9E824',
          TakerGets: '4170969211',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '14754.8035846065',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304502210088C3BBB13D42EDBB2EE2025A482A488BE7F4000731AC17D86654C33FB266CEAA02203886F8B525311D76004C25EE99DC196D7E4DD665796B32BC1CCB1BC813B9C8E7',
          hash: '8F6140F80BAAB7CE75E199725F500A282187B139879D8B20F314583D74B65314',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    RootIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E79917',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'E09B8A35A4CD40EE49422085E7706C447DA883CD2B2F838F1B73D7CA0573851A',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 113414776,
                    TakerGets: '1823130385',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '6449.323737296451',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '29E5F7D281F350B838D792FC225C9E0C74392A098FD22C85703CF7FA51B34402',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    Balance: '4982974100',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 113414781,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '47FE64F9223D604034486F4DA7A175D5DA7F8A096952261CF8F3D77B74DC4AFA',
                  PreviousFields: {
                    Balance: '4982974115',
                    Sequence: 113414780,
                  },
                  PreviousTxnID: 'A577F1DB96670D84C052CBD84D8CDBE20CBEC156D67F7DA31FEC008B9976EE94',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E721F4',
                  NewFields: {
                    ExchangeRate: '4f0c915666e721f4',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E721F4',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0c915666e79917',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E79917',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E79917',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '81AC2E2A25DC1A2900FD68ACBC40CB24E075A0EAF2FE6E06688FE1A5DF72A28F',
                  NewFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0C915666E721F4',
                    Sequence: 113414780,
                    TakerGets: '4170969211',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '14754.8035846065',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 8,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221160,
          OfferSequence: 113414778,
          Sequence: 113414781,
          SigningPubKey: '039451ECAC6D4EB75E3C926E7DC7BA7721719A1521502F99EC7EB2FE87CEE9E824',
          TakerGets: '11725561218',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '45796.28993918856',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402204B3A26869B374A4122569B8A1E1AD1886E072621BCBA6A78A19E8EBDA1769246022044441BFA03641EC95488D34D42F72CB07FBE5929EA414CC7DD7FD015145C5A5D',
          hash: '78F9EACEC1B5ABF9DB5762A86BB49E349344F3B526FE9265146B8EAAF9F7267E',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    RootIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    Balance: '4982974085',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 113414782,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '47FE64F9223D604034486F4DA7A175D5DA7F8A096952261CF8F3D77B74DC4AFA',
                  PreviousFields: {
                    Balance: '4982974100',
                    Sequence: 113414781,
                  },
                  PreviousTxnID: '8F6140F80BAAB7CE75E199725F500A282187B139879D8B20F314583D74B65314',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD034731',
                  NewFields: {
                    ExchangeRate: '4f0de031fd034731',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD034731',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0f51e7a523a40e',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A523A40E',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A523A40E',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A523A40E',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '8771E404D8A439B8C68DBDA7A9E59E77397F2DFC16C887EFC82626E899A731E2',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 113414778,
                    TakerGets: '3635611669',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '15677.41192876064',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '657F7BF2FAF123E317E7582EDB5FC022301A88405F0393BDD070F56204A946F0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'F49306C3D334985985E68AF2F1F7E3A17ACC5DA1DA3687D6F44D0F0BAD67ED74',
                  NewFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD034731',
                    Sequence: 113414781,
                    TakerGets: '11725561218',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '45796.28993918856',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 9,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221160,
          OfferSequence: 113414779,
          Sequence: 113414782,
          SigningPubKey: '039451ECAC6D4EB75E3C926E7DC7BA7721719A1521502F99EC7EB2FE87CEE9E824',
          TakerGets: '15204891214',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '65566.2277964125',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022058CB0F4A1B8D5C5C8F0A6419BE7DD4D1272F0CFAE8011FD6059600A531110E1302202D0AE5DB0D386DB468C9DE2C8EDADEF1B572CC9746F584E4CCF1E4F202A756CD',
          hash: 'AE14F6B898A5A9D52A14E5C2D7A1E148076B931FCC93A0A53B9C0C48FA98120C',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    RootIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    Balance: '4982974070',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 113414783,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '47FE64F9223D604034486F4DA7A175D5DA7F8A096952261CF8F3D77B74DC4AFA',
                  PreviousFields: {
                    Balance: '4982974085',
                    Sequence: 113414782,
                  },
                  PreviousTxnID: '78F9EACEC1B5ABF9DB5762A86BB49E349344F3B526FE9265146B8EAAF9F7267E',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A51CC2F6',
                  NewFields: {
                    ExchangeRate: '4f0f51e7a51cc2f6',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A51CC2F6',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f10ea185dbe78bc',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBE78BC',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBE78BC',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '659AE4CE097E779446795DBE072F29E63A2CEC0BA9DA6FC263DAB4A754A1253F',
                  NewFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0F51E7A51CC2F6',
                    Sequence: 113414782,
                    TakerGets: '15204891214',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '65566.2277964125',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBE78BC',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'A577F1DB96670D84C052CBD84D8CDBE20CBEC156D67F7DA31FEC008B9976EE94',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 113414779,
                    TakerGets: '13534482082',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '64437.53385095154',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'BED74CAC22CF5879F9996B5C0814A9A62E6CDE9AB18A97887CC098C360F66B54',
                },
              },
            ],
            TransactionIndex: 10,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221160,
          OfferSequence: 113414777,
          Sequence: 113414783,
          SigningPubKey: '039451ECAC6D4EB75E3C926E7DC7BA7721719A1521502F99EC7EB2FE87CEE9E824',
          TakerGets: '18048818919',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '85930.24638849954',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022017CE163AF85778FE11FEF7FEF632CD9223D7349A9D90901DFBD984F2087F2EC9022042ABFB804DF3C786A23273560912BB233C383733D41FA45A8E1E2EEF19682E33',
          hash: 'B8CF3F38E75D3AFE5126FBFFBA9B6708DDA6438FE0FD45ABE6CD2FA7F86F675A',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    RootIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '07CE63F6E62E095CAF97BC77572A203D75ECB68219F97505AC5DF2DB061C9D96',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    Balance: '4982974055',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 113414784,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '47FE64F9223D604034486F4DA7A175D5DA7F8A096952261CF8F3D77B74DC4AFA',
                  PreviousFields: {
                    Balance: '4982974070',
                    Sequence: 113414783,
                  },
                  PreviousTxnID: 'AE14F6B898A5A9D52A14E5C2D7A1E148076B931FCC93A0A53B9C0C48FA98120C',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0de031fd01da52',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD01DA52',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD01DA52',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBD7CA4',
                  NewFields: {
                    ExchangeRate: '4f10ea185dbd7ca4',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBD7CA4',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'D76859B157E6AAAD28B58A240092D2CECF4277D90D3454B55FC45A25E51B6C8C',
                  NewFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10EA185DBD7CA4',
                    Sequence: 113414783,
                    TakerGets: '18048818919',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '85930.24638849954',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rQ3fNyLjbvcDaPNS4EAJY8aT9zR3uGk17c',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0DE031FD01DA52',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'A2E9232243757989D7EE48364566AF2F5B87B35C5C20BB588B363E7F7E848E62',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 113414777,
                    TakerGets: '16778197504',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '65530.27042767323',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'E24B612D394D21B613E555FAA729E8A30B8DFFA3F20F54D1437E9BA6CD493DDE',
                },
              },
            ],
            TransactionIndex: 11,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rUqqN1KKvLSknssUXrLX48vtnNdpvaqsZ7',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 25215975,
          Sequence: 25215976,
          SigningPubKey: '022E70597C73E359D20C5939F9A9009B42D51DAD22E633762832E44336B95D177C',
          TakerGets: {
            currency: 'CNY',
            issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
            value: '2762400',
          },
          TakerPays: '1000000000000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402200BE0938E62BB15307EBE5384FFB098E7D9CD5DC3F9B77C20F3587DE48CC072C702205DA5ECA9CC8EFD82866654C6B6991BD4BDD6AF423FFCB4529CF9138A2D6D76C7',
          hash: '1E264967637B719098DE09C92A6A634488326FE6BF55198B541F185A7A92024A',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rUqqN1KKvLSknssUXrLX48vtnNdpvaqsZ7',
                    RootIndex: '1BBEACDDD4D74F0AC4548C926F22916D6B00C59C24FFC036D6D66F0456A3A947',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1BBEACDDD4D74F0AC4548C926F22916D6B00C59C24FFC036D6D66F0456A3A947',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rUqqN1KKvLSknssUXrLX48vtnNdpvaqsZ7',
                    BookDirectory: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDF4549E1C0ED',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2B18A8522EF49F283ABBD8B19C80EB3A1C9DE45C83114B05495ED36392FCCF82',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 25215975,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
                      value: '2760000',
                    },
                    TakerPays: '1000000000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '27B7A0FA9B5D5E5981661AF79C6428D835BB47E203A7EF401294179F54E7E87E',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rUqqN1KKvLSknssUXrLX48vtnNdpvaqsZ7',
                    Balance: '93924498',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 25215977,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '47AA01718D2EEC8C55C99463B8BA8BC4E1EDD346737FE9AC9A715B10653E7326',
                  PreviousFields: {
                    Balance: '93924513',
                    Sequence: 25215976,
                  },
                  PreviousTxnID: '2B18A8522EF49F283ABBD8B19C80EB3A1C9DE45C83114B05495ED36392FCCF82',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDC685EB985D2',
                  NewFields: {
                    ExchangeRate: '5a0cdc685eb985d2',
                    RootIndex: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDC685EB985D2',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: 'CED6E99370D5C00EF4EBF72567DA99F5661BFB3A',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a0cdf4549e1c0ed',
                    Flags: 0,
                    RootIndex: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDF4549E1C0ED',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: 'CED6E99370D5C00EF4EBF72567DA99F5661BFB3A',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDF4549E1C0ED',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '4F74787E85E80F93D6F2D22A05B23318C34D8F64A766C85124EAEE7C47E0AC59',
                  NewFields: {
                    Account: 'rUqqN1KKvLSknssUXrLX48vtnNdpvaqsZ7',
                    BookDirectory: '49789A0B460DC77A2CED9349C432AEA97352345BA3C7313A5A0CDC685EB985D2',
                    Sequence: 25215976,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
                      value: '2762400',
                    },
                    TakerPays: '1000000000000',
                  },
                },
              },
            ],
            TransactionIndex: 12,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
          Expiration: 751248593,
          Fee: '25',
          Flags: 2148007936,
          LastLedgerSequence: 75221160,
          Sequence: 73737604,
          SigningPubKey: '029E1B728C7319FC4A9EB3FB67F5992D05C808BDC39A16BBBA9CE05247FC6AEA76',
          TakerGets: '76400000',
          TakerPays: {
            currency: '434F524500000000000000000000000000000000',
            issuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D',
            value: '125.72653',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100C5705A0813953E41839620263B42A2350FC38C8778E6DE2791C77A5882C0266302204FBAEF6D908AEC28EFFC79DD6B99968DE0AF8DC95203C2E60ECF857BEDBA49C5',
          hash: '7C384C37168984E20820BC4E3FECA65E968F1141BAF77D41ED87934F686953D8',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '3CD8CEC6627BDC97C0FAC1101B03C28DE8CB80C946EE24866BCC5B456882EF0B',
                  NewFields: {
                    Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    BookDirectory: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8B24E166CD4',
                    Expiration: 751248593,
                    Flags: 131072,
                    Sequence: 73737604,
                    TakerGets: '76400000',
                    TakerPays: {
                      currency: '434F524500000000000000000000000000000000',
                      issuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D',
                      value: '125.72653',
                    },
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8B24E166CD4',
                  NewFields: {
                    ExchangeRate: '4f05d8b24e166cd4',
                    RootIndex: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8B24E166CD4',
                    TakerPaysCurrency: '434F524500000000000000000000000000000000',
                    TakerPaysIssuer: '06C4F77E3CBA482FB688F8AA92DCA0A10A8FD774',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    RootIndex: 'BFEF0DE87DD4AA7153645F7DA50BBC09294CB72F0FC1FA7A710DCE88AE8699FD',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BFEF0DE87DD4AA7153645F7DA50BBC09294CB72F0FC1FA7A710DCE88AE8699FD',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    Balance: '136261360',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 73737605,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F38A3A4D8BDD002DF1E6FDB1943C643B1EEB392416EBC30F4E029C601F8089EF',
                  PreviousFields: {
                    Balance: '136261385',
                    OwnerCount: 2,
                    Sequence: 73737604,
                  },
                  PreviousTxnID: '13948F722C7D8C525A74154F88D5DABD9597ECA48F98566CDB536866C66F5959',
                  PreviousTxnLgrSeq: 75221145,
                },
              },
            ],
            TransactionIndex: 13,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
          Fee: '25',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          OfferSequence: 73737602,
          Sequence: 73737605,
          SigningPubKey: '029E1B728C7319FC4A9EB3FB67F5992D05C808BDC39A16BBBA9CE05247FC6AEA76',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3045022100B1D852BC5AFEC2FCC8EABED8F06766BA1662EAE772C2BB6247D2F7F8A4CEF840022016672AC27E44AFCD2128A3A867FBA2B40B4BFC59B8E227376B689B08046B341E',
          hash: '77CF24BF45F3DBB920D995B93FC18EE7A56109F5810B07101BDCAEB3C823DEB6',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    BookDirectory: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8D8FFD68F2E',
                    BookNode: '0',
                    Expiration: 751248540,
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: '0530FD3DEFDB1E2BACA50E7104F7B1C8E2ED7EE466D06635A773559ADC351605',
                    PreviousTxnLgrSeq: 75221145,
                    Sequence: 73737602,
                    TakerGets: '76410000',
                    TakerPays: {
                      currency: '434F524500000000000000000000000000000000',
                      issuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D',
                      value: '125.755685',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '369890E9C23333B8DE041C1B5797727992A8086DE9BEA37CF43D7DC5DFD190BA',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f05d8d8ffd68f2e',
                    Flags: 0,
                    RootIndex: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8D8FFD68F2E',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '434F524500000000000000000000000000000000',
                    TakerPaysIssuer: '06C4F77E3CBA482FB688F8AA92DCA0A10A8FD774',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'B4DFE259D685BAE2D7B72ED8C3C7587FA959B5A565CEC95F4F05D8D8FFD68F2E',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    RootIndex: 'BFEF0DE87DD4AA7153645F7DA50BBC09294CB72F0FC1FA7A710DCE88AE8699FD',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BFEF0DE87DD4AA7153645F7DA50BBC09294CB72F0FC1FA7A710DCE88AE8699FD',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rDG6HxLTMYHVPgFohZEtHfx956XwZYchHL',
                    Balance: '136261335',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 73737606,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F38A3A4D8BDD002DF1E6FDB1943C643B1EEB392416EBC30F4E029C601F8089EF',
                  PreviousFields: {
                    Balance: '136261360',
                    OwnerCount: 3,
                    Sequence: 73737605,
                  },
                  PreviousTxnID: '7C384C37168984E20820BC4E3FECA65E968F1141BAF77D41ED87934F686953D8',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 14,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rDogkw75XgwYfAcX4om7jYUgZyXvQrkh6i',
          Expiration: 719712838,
          Fee: '20',
          Flags: 0,
          LastLedgerSequence: 75221168,
          OfferSequence: 68379814,
          Sequence: 68379815,
          SigningPubKey: '030097132CAD90B40E24F4F0EFFBC332CA613D0A422075CC14B380DFD74E514129',
          TakerGets: {
            currency: '5852646F67650000000000000000000000000000',
            issuer: 'rLqUC2eCPohYvJCEBJ77eCCqVL2uEiczjA',
            value: '2873665.170443925',
          },
          TakerPays: '90000000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100EE8F2D050B5D268E11A85D0EB8E450F7CDD9AC84D336CC1B4981A16DA503D166022045C21DA437C61F83508D01440D88DFC2D0088472896220D1446BD9F6C87797D9',
          hash: '86CFCAF83AB96ECF9FD4A2E16C059FD1185ABD775729FE6686AC706540619BFF',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1625CB95047CF950895D40A29ED1360C19D0C14C5277A3D7C4F180EEDA40E0E7',
                  NewFields: {
                    Account: 'rDogkw75XgwYfAcX4om7jYUgZyXvQrkh6i',
                    BookDirectory: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B206FB454C1B2',
                    Expiration: 719712838,
                    Sequence: 68379815,
                    TakerGets: {
                      currency: '5852646F67650000000000000000000000000000',
                      issuer: 'rLqUC2eCPohYvJCEBJ77eCCqVL2uEiczjA',
                      value: '2873665.170443925',
                    },
                    TakerPays: '90000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rDogkw75XgwYfAcX4om7jYUgZyXvQrkh6i',
                    RootIndex: '49D93CABE69D3B998B618E69880A2BCF6B1C436D4C1F685DFB6DCBC525AFC734',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '49D93CABE69D3B998B618E69880A2BCF6B1C436D4C1F685DFB6DCBC525AFC734',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rDogkw75XgwYfAcX4om7jYUgZyXvQrkh6i',
                    BookDirectory: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B2076F7597B45',
                    BookNode: '0',
                    Expiration: 719712808,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '7833C6A1DDC0EB6F622389236FA5F19DDF98D16FE9820F74DB30C131C2D12CD2',
                    PreviousTxnLgrSeq: 75221151,
                    Sequence: 68379814,
                    TakerGets: {
                      currency: '5852646F67650000000000000000000000000000',
                      issuer: 'rLqUC2eCPohYvJCEBJ77eCCqVL2uEiczjA',
                      value: '2873636.553115242',
                    },
                    TakerPays: '90000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '81F813F47FE82D70488B33D4AC9F87789777DE6ACA0505E3917852EBBBDFD1F5',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rDogkw75XgwYfAcX4om7jYUgZyXvQrkh6i',
                    Balance: '217904148',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 68379816,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85CF66F427A8581423CBADE9DF699E3D09A5AECDE028D8B0E93E194886013E11',
                  PreviousFields: {
                    Balance: '217904168',
                    Sequence: 68379815,
                  },
                  PreviousTxnID: '7833C6A1DDC0EB6F622389236FA5F19DDF98D16FE9820F74DB30C131C2D12CD2',
                  PreviousTxnLgrSeq: 75221151,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B206FB454C1B2',
                  NewFields: {
                    ExchangeRate: '560b206fb454c1b2',
                    RootIndex: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B206FB454C1B2',
                    TakerGetsCurrency: '5852646F67650000000000000000000000000000',
                    TakerGetsIssuer: 'D98817F9CF03AE03FC31F43C8DCEEADF277D5EE7',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '560b2076f7597b45',
                    Flags: 0,
                    RootIndex: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B2076F7597B45',
                    TakerGetsCurrency: '5852646F67650000000000000000000000000000',
                    TakerGetsIssuer: 'D98817F9CF03AE03FC31F43C8DCEEADF277D5EE7',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E52309B0DEF00F10EADE6630F4738B18DF92D5221944F70F560B2076F7597B45',
                },
              },
            ],
            TransactionIndex: 15,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rNPnkCZtPqe9cGyphfinwMePG4zbC6Q6EW',
          Amount: {
            currency: '4241594E414E4100000000000000000000000000',
            issuer: 'rJ9uU9jKxNcsNQM2CLKUhPxNn8P4xmhDVq',
            value: '21',
          },
          Destination: 'rDxpzyzwXohjpcenDtttwaLyL3cjFLkuM',
          Fee: '12',
          Flags: 0,
          LastLedgerSequence: 75221177,
          Sequence: 69416102,
          SigningPubKey: '03AB7ED92BA852B6F9BBF8A51032A8FB5BE6027669CD2A3E177368592A42B2037B',
          TransactionType: 'Payment',
          TxnSignature:
            '3044022039A1C8D38F138134126E8674C51560A332C51B2810139ABF224D9491BD63664E022075C8E55DC8933A144291E8F05DEBCD04FA6D7E7043BE1D127B04E241DA927701',
          hash: 'EAE8F81AEB8EC34DDF68F4763D4CCD019717260D99ABFEBBAF13A5C3E49BED46',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rNPnkCZtPqe9cGyphfinwMePG4zbC6Q6EW',
                    Balance: '15759533',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 69416103,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '2D313287CDA7D49B1D4F2190653BD856A07F16CD72F5E54DFBC1D28060168164',
                  PreviousFields: {
                    Balance: '15759545',
                    Sequence: 69416102,
                  },
                  PreviousTxnID: '59DFA957F9797E86408C855C8DA6EE85D438F6553C74D554FBE06E2E5F2B5F1A',
                  PreviousTxnLgrSeq: 75221153,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '182047.2084048219',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rJ9uU9jKxNcsNQM2CLKUhPxNn8P4xmhDVq',
                      value: '0',
                    },
                    HighNode: 'cb',
                    LowLimit: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rNPnkCZtPqe9cGyphfinwMePG4zbC6Q6EW',
                      value: '21000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'A956CAD97C8D8DD1B91811A9CF1152213E7085C9D7D36CB95CF72980E28C05D5',
                  PreviousFields: {
                    Balance: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '182068.2084048219',
                    },
                  },
                  PreviousTxnID: '59DFA957F9797E86408C855C8DA6EE85D438F6553C74D554FBE06E2E5F2B5F1A',
                  PreviousTxnLgrSeq: 75221153,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '408',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rJ9uU9jKxNcsNQM2CLKUhPxNn8P4xmhDVq',
                      value: '0',
                    },
                    HighNode: 'd5',
                    LowLimit: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rDxpzyzwXohjpcenDtttwaLyL3cjFLkuM',
                      value: '21000000',
                    },
                    LowNode: '3',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'C71385158D8E7BD69AE9D2F8085E0E2D00703E7BC81B54F19D87E02D755F811D',
                  PreviousFields: {
                    Balance: {
                      currency: '4241594E414E4100000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '387',
                    },
                  },
                  PreviousTxnID: '16CC71E56B566FEDA52FE81FFEA69C6F466BC8D205D2FD3C01BE17C93A3E019F',
                  PreviousTxnLgrSeq: 75077637,
                },
              },
            ],
            TransactionIndex: 16,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: {
              currency: '4241594E414E4100000000000000000000000000',
              issuer: 'rJ9uU9jKxNcsNQM2CLKUhPxNn8P4xmhDVq',
              value: '21',
            },
          },
        },
        {
          Account: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
          Fee: '12',
          Flags: 2148007936,
          LastLedgerSequence: 75221160,
          Sequence: 74621628,
          SigningPubKey: 'EDB8F5B41F5DAA7FAAD31568C8194917CB325CBDB57DFAF788C058543733249992',
          TakerGets: {
            currency: 'CHP',
            issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
            value: '519.1808',
          },
          TakerPays: '55800000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            'B6D94CE9F8E1F05AA2757D9998180A657E1AE58D6D1A0F88F4372163278A7E7486903876E2075424C7757386AD0B28537A971BCDFBB723E5AAE1A6B138632604',
          hash: 'B476006F9BE1825BB910DEB1D2193EEFEEBCA6A79C983A35FFA238E03550FEE1',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-393.070731845345',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'CHP',
                      issuer: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                      value: '100000000',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                    LowNode: '41e',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '0812A479CB1CEB5E3F0CD62980EE7DC5BC0A385FB0543667E03F1013B64A3C72',
                  PreviousFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-665.594131845345',
                    },
                  },
                  PreviousTxnID: 'C9112A913C13F791CECF206E86F57EBB04F14A23A617D2C5DF6BD73F9D4E350B',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    BookDirectory: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'C50CDD8ED40D9BC77E8023F5E76EBCE00AED581E8C53EC13F96949D9C132E1C7',
                    PreviousTxnLgrSeq: 75221159,
                    Sequence: 74621860,
                    TakerGets: '0',
                    TakerPays: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '09410F6E74734594A53AC0DF3D0384019B61C1F2C21CB78624A51736694FBCB3',
                  PreviousFields: {
                    TakerGets: '29290100',
                    TakerPays: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '272.5234',
                    },
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                  NewFields: {
                    ExchangeRate: '5a03d17f69fcc36c',
                    RootIndex: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                    TakerGetsCurrency: '0000000000000000000000004348500000000000',
                    TakerGetsIssuer: '29D6F101A87C602769158C14CF5833DBB2BCBDDC',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-277.641011381796',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'CHP',
                      issuer: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                      value: '100000000',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                    LowNode: '425',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '309EFC61B42F8F9DDF9F703FAC3975F229B774FEEC5B95D3847ECDEF46EB520B',
                  PreviousFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-5.117611381796',
                    },
                  },
                  PreviousTxnID: 'D3F91C716D9C05694397B085CF143CE69A9E8950631B32C4212F19AEE76FC183',
                  PreviousTxnLgrSeq: 75221142,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '38B7A8FEE77504564833AE574760A27C83077B2BDDA42BC17DE85AEECC1ED604',
                  NewFields: {
                    Account: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    BookDirectory: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                    Flags: 131072,
                    Sequence: 74621628,
                    TakerGets: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '246.6574',
                    },
                    TakerPays: '26510000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    RootIndex: '4C5F7D63A3439D2212F93DA2C479C7CB2E72B5D3F746E9482FE7E13E08BFBCFB',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4C5F7D63A3439D2212F93DA2C479C7CB2E72B5D3F746E9482FE7E13E08BFBCFB',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    Balance: '49891484',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 74621629,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '78A01327A5367FABFE88DD3439396114ECFC9F62EA057D12A07A28E37137F219',
                  PreviousFields: {
                    Balance: '20601396',
                    OwnerCount: 1,
                    Sequence: 74621628,
                  },
                  PreviousTxnID: '2F681998052DA8D8BBB93EEAA73992913EE07E811524221C24ED56A6630350EE',
                  PreviousTxnLgrSeq: 75221116,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f210e325cd33e4b',
                    Flags: 0,
                    RootIndex: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000004348500000000000',
                    TakerPaysIssuer: '29D6F101A87C602769158C14CF5833DBB2BCBDDC',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '81D36D08B972C3F9E546394352DE7EB7A4A40463FD401B9B4F210E325CD33E4B',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    RootIndex: '8560A5B4626B74178F853AB1AA71627EF88480EF3FDCEC95F2A816007CFFAC71',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '8560A5B4626B74178F853AB1AA71627EF88480EF3FDCEC95F2A816007CFFAC71',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r4cTmkr3GSHq2gGJt1Eb6u3cetoinmTvjN',
                    Balance: '29060730',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 74621861,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F6033C5EDD0733E08690FED7ADF9E561D68B9FFA832CF548AC2FDC7FAD5567C5',
                  PreviousFields: {
                    Balance: '58350830',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'C50CDD8ED40D9BC77E8023F5E76EBCE00AED581E8C53EC13F96949D9C132E1C7',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 17,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911393,
          Sequence: 65911435,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '30440220139BF112BA9615495937CB72E607EFAF68EA0F65987784F4FE804CAEF018F12302200188957ADB0B9BFC71A68C95AFDE9CD7DB947140BE301E23AB8E03765C4C0F4F',
          hash: 'B350EAFD3127DEBA30EDD4B9CC08A1F4AE5F7961559C5B00925291A830A68EFD',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07eeaa7df146c2',
                    Flags: 0,
                    RootIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EEAA7DF146C2',
                    TakerGetsCurrency: '5553445400000000000000000000000000000000',
                    TakerGetsIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EEAA7DF146C2',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EEAA7DF146C2',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: 'F53EFD1235CF7B187F86858FB8A02C1972AED801A620E59F4CD9353987C2EC3C',
                    PreviousTxnLgrSeq: 75221140,
                    Sequence: 65911393,
                    TakerGets: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '730.0143621205349',
                    },
                    TakerPays: '1629932896',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A08DB009A6C369EF57B1C32943D33C39F886D6659ABEFF27887DBC1F1B66444D',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300458',
                    Flags: 0,
                    OwnerCount: 114,
                    Sequence: 65911436,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300468',
                    OwnerCount: 115,
                    Sequence: 65911435,
                  },
                  PreviousTxnID: '33109E46B8E94C7FCCD385EBC03AB2246ABDA5A28DE976B1448C4DE273979F94',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
            ],
            TransactionIndex: 18,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911394,
          Sequence: 65911436,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '304402201CB1B73D630E302E5BA33C997AE58FB124D8CCB859240F0B931A8C733F63A5E202200A7BF8AB2D02428CCEF9D157224BF00281FF423F84C14169A35E9209D9EED98E',
          hash: '0304831AE2D40ECDFA82C5EF5CC510A2A4EDC3E4BB08F507FDEB3BF96D10467C',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B08147D9D22C5AA',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: '7E536E03DE944512B754E2FECA4D9D5518543131AA58C4A6C76B5B0D08970954',
                    PreviousTxnLgrSeq: 75221140,
                    Sequence: 65911394,
                    TakerGets: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '1218.3308790018',
                    },
                    TakerPays: '2770885924',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '60B637BF168F2860B9AE802087CD3590BECBD044AE6F582885C2C8662C233C95',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b08147d9d22c5aa',
                    Flags: 0,
                    RootIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B08147D9D22C5AA',
                    TakerGetsCurrency: '5553445400000000000000000000000000000000',
                    TakerGetsIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B08147D9D22C5AA',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300448',
                    Flags: 0,
                    OwnerCount: 113,
                    Sequence: 65911437,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300458',
                    OwnerCount: 114,
                    Sequence: 65911436,
                  },
                  PreviousTxnID: 'B350EAFD3127DEBA30EDD4B9CC08A1F4AE5F7961559C5B00925291A830A68EFD',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 19,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911395,
          Sequence: 65911437,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3045022100AE4E24EFAA4A2D2615EF2F110C7B8A88617ACAF84C36E980BEC31DDB09E0EBCD02202BCF1D24E7C2067E907C9C18D92578E06AF4DC08C8A12AB9FDF448A8025E4490',
          hash: '15A62E52152B5D33A8EBDCFCAFEC7D235AFCDA723FDCC98CD062A0CE5AF5CAD1',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4e107741fd64e999',
                    Flags: 0,
                    RootIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E107741FD64E999',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '5553445400000000000000000000000000000000',
                    TakerPaysIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E107741FD64E999',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E107741FD64E999',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: 'E290342BDE686DAC7C9709929C7E018921F54B16286B8C9D724C9D95C884DC5C',
                    PreviousTxnLgrSeq: 75221140,
                    Sequence: 65911395,
                    TakerGets: '10344444444',
                    TakerPays: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '4794.365460538889',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '6E32E0D1A16A8459C8D5DB7837F02B7EAE020CC4AD2E66E49FFC955B77B9AD23',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300438',
                    Flags: 0,
                    OwnerCount: 112,
                    Sequence: 65911438,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300448',
                    OwnerCount: 113,
                    Sequence: 65911437,
                  },
                  PreviousTxnID: '0304831AE2D40ECDFA82C5EF5CC510A2A4EDC3E4BB08F507FDEB3BF96D10467C',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 20,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911396,
          Sequence: 65911438,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '304402201759925A816F4688B2C917B82075E1AA4044352A4EFA5C115CD0F5A433D81A4702201E064F9BFD502A6DE2955261039E69F955E93D4E9FC1FBAD9178585FAFE5BBCF',
          hash: '71E0E66574314C35FECACCA698578CDD38334A3D1E72B3D8A74BDB1EA5C8936E',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4e108ed45e1700a4',
                    Flags: 0,
                    RootIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E108ED45E1700A4',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '5553445400000000000000000000000000000000',
                    TakerPaysIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E108ED45E1700A4',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E108ED45E1700A4',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: 'D950E32E879BD2DD4E787BECE72F0E0703DFAA9CE81D253C8F7DE884737581BD',
                    PreviousTxnLgrSeq: 75221140,
                    Sequence: 65911396,
                    TakerGets: '17585555555',
                    TakerPays: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '8195.998567392222',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8063DEF51B734FF4EEEB3ABEAF050A815FF9AC4031A8CA58F2D5FF63046819F6',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300428',
                    Flags: 0,
                    OwnerCount: 111,
                    Sequence: 65911439,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300438',
                    OwnerCount: 112,
                    Sequence: 65911438,
                  },
                  PreviousTxnID: '15A62E52152B5D33A8EBDCFCAFEC7D235AFCDA723FDCC98CD062A0CE5AF5CAD1',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 21,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911383,
          Sequence: 65911439,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '304402203DC1A44BDBC8D20215D54D1F48CCC7C169AA80A156908BF2309545E3B0CAFECB02206221E7986FA76CCD6D8651B16941E4CCC83EB42330453B7005CBE3B826C814BE',
          hash: '37FE6AFFFE93CF2303E6AB30598FADBA23E53954DD1F8CB5B2C9C0FA259C77A8',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CBF5E3E',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: 'C0081013EB0BF3B7BDFA113C1C0861A13B0DCF2B7C54084CB65BC0B73A1EDFA5',
                    PreviousTxnLgrSeq: 75221138,
                    Sequence: 65911383,
                    TakerGets: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '489.4281211472211',
                    },
                    TakerPays: '1078848561',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '46CFDD6D3BAEB3C20CCF74CAD04FC7E1859B0F0A484F65F8228B85E323F62D0B',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300418',
                    Flags: 0,
                    OwnerCount: 110,
                    Sequence: 65911440,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300428',
                    OwnerCount: 111,
                    Sequence: 65911439,
                  },
                  PreviousTxnID: '71E0E66574314C35FECACCA698578CDD38334A3D1E72B3D8A74BDB1EA5C8936E',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07d4cd9cbf5e3e',
                    Flags: 0,
                    RootIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CBF5E3E',
                    TakerGetsCurrency: '0000000000000000000000004555520000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CBF5E3E',
                },
              },
            ],
            TransactionIndex: 22,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911384,
          Sequence: 65911440,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3045022100A337894C2FECA58F8A0F56458AFC82F3F9F6802450E0ADCF95969FE79FF954060220768CEAAE8EFC8E225395985B8526E9FBDF12E1BC8497A55EFD51FFB9A97D1A2E',
          hash: 'C60D946C4182F8583B173AC58248780AD7633D827A45CC34227A13BAC0693B02',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1D415C',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: 'B4F5B09D74FD3D3FDA6B245DB5F559754D4956B82936187B4C25F94CBE7302FC',
                    PreviousTxnLgrSeq: 75221138,
                    Sequence: 65911384,
                    TakerGets: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '818.2291478403735',
                    },
                    TakerPays: '1840530962',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '86D277876161AD537C9D4C91BB834462C7DB654E0A9BB6A37BFD27AE4244AB9F',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300408',
                    Flags: 0,
                    OwnerCount: 109,
                    Sequence: 65911441,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300418',
                    OwnerCount: 110,
                    Sequence: 65911440,
                  },
                  PreviousTxnID: '37FE6AFFFE93CF2303E6AB30598FADBA23E53954DD1F8CB5B2C9C0FA259C77A8',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07fdd30c1d415c',
                    Flags: 0,
                    RootIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1D415C',
                    TakerGetsCurrency: '0000000000000000000000004555520000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1D415C',
                },
              },
            ],
            TransactionIndex: 23,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911385,
          Sequence: 65911441,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3044022018F3B559BF62EFFCF8BDFC98DFB8FD2EDE525999279AD26C537C481E690C9C8C02202AB700443AFBB2FDE48B1AF8730952C6113F18D65048981A1B2CAD6195AD7DDF',
          hash: '92A11A45843B8D0E4584D10AC40344DE85B45012249092DB3A44E42C3586BB59',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10B618B84EF790',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: '4C65481656119C2777468CAF5E071A3F0AB5A7152C0E129B24968B7BFD08B999',
                    PreviousTxnLgrSeq: 75221138,
                    Sequence: 65911385,
                    TakerGets: '76270442931',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '35876.21995751922',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '89854194268CD7478703DCED40617D947A48A14CB2863C46EC24EBF9BCBD018C',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300398',
                    Flags: 0,
                    OwnerCount: 108,
                    Sequence: 65911442,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300408',
                    OwnerCount: 109,
                    Sequence: 65911441,
                  },
                  PreviousTxnID: 'C60D946C4182F8583B173AC58248780AD7633D827A45CC34227A13BAC0693B02',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4e10b618b84ef790',
                    Flags: 0,
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10B618B84EF790',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10B618B84EF790',
                },
              },
            ],
            TransactionIndex: 24,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 65911386,
          Sequence: 65911442,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '304402207E3D736406E3FAA9CB85EA79EBAD79E9A64BF65E8FDD55338233C9F321B3706B02205ABE52FECAF461509902AB0B14D043C6D4348728575129C39FAF8D076065315B',
          hash: 'DDC907E0AA8B61581861EF01A57AF7E24F9719D0751CFED1692252FBFB2D74AE',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BF709E',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: 'a545',
                    PreviousTxnID: '011D9C15A4A823CCC3F2EE36BB66B03766E74C35A5FE6ED5F1DF7B92C94EFF6A',
                    PreviousTxnLgrSeq: 75221138,
                    Sequence: 65911386,
                    TakerGets: '129470650403',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '61299.84894086947',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '691B28129F7A4387D2BCD6E58957CE7CC7CE8505623097CFFAED17E4B3D61978',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300388',
                    Flags: 0,
                    OwnerCount: 107,
                    Sequence: 65911443,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300398',
                    OwnerCount: 108,
                    Sequence: 65911442,
                  },
                  PreviousTxnID: '92A11A45843B8D0E4584D10AC40344DE85B45012249092DB3A44E42C3586BB59',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4e10d22419bf709e',
                    Flags: 0,
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BF709E',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BF709E',
                },
              },
            ],
            TransactionIndex: 25,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911443,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: {
            currency: 'EUR',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '489.1924475771457',
          },
          TakerPays: '1078329065',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100AE2ED0E4D4097A2B3612952C67624252A3675B15107B6B08E652A7669F4072E402204F3B5548B1D6FD89BC2C6AFC97FD8C9DAC8583F276E8B16D1AF13CC0B20784D7',
          hash: '89E1D70E09E307B1C00038A8638DBBB516E077F28FBE526B3CBE4CF7066A085B',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5DC8B7199D41A3E82745D7015976D5A5C111588AB704579D538BAAD428B0F67C',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CC85614',
                    OwnerNode: 'a545',
                    Sequence: 65911443,
                    TakerGets: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '489.1924475771457',
                    },
                    TakerPays: '1078329065',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300378',
                    Flags: 0,
                    OwnerCount: 108,
                    Sequence: 65911444,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300388',
                    OwnerCount: 107,
                    Sequence: 65911443,
                  },
                  PreviousTxnID: 'DDC907E0AA8B61581861EF01A57AF7E24F9719D0751CFED1692252FBFB2D74AE',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CC85614',
                  NewFields: {
                    ExchangeRate: '5b07d4cd9cc85614',
                    RootIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07D4CD9CC85614',
                    TakerGetsCurrency: '0000000000000000000000004555520000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
            ],
            TransactionIndex: 26,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911444,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: {
            currency: 'EUR',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '817.8351472178523',
          },
          TakerPays: '1839644694',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100BF990B21DE8A72530594110CF2F44954238D22AF74C72777766A5D31CA342AC2022069F2459DD9DE0227F9DA4A6FFF1F795D63AE83192DEFB329AC52857350DA9143',
          hash: 'E382E2699AAC992A9428A59B944D8105B05541FEE0241151129132C6CEEDC78F',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '0020B7E1E14C98BE707731C3F1327E292B37893AE185F91B4491434F17FBF958',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1E0A29',
                    OwnerNode: 'a545',
                    Sequence: 65911444,
                    TakerGets: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '817.8351472178523',
                    },
                    TakerPays: '1839644694',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300368',
                    Flags: 0,
                    OwnerCount: 109,
                    Sequence: 65911445,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300378',
                    OwnerCount: 108,
                    Sequence: 65911444,
                  },
                  PreviousTxnID: '89E1D70E09E307B1C00038A8638DBBB516E077F28FBE526B3CBE4CF7066A085B',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1E0A29',
                  NewFields: {
                    ExchangeRate: '5b07fdd30c1e0a29',
                    RootIndex: 'CA462483C85A90DB76D8903681442394D8A5E2D0FFAC259C5B07FDD30C1E0A29',
                    TakerGetsCurrency: '0000000000000000000000004555520000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
            ],
            TransactionIndex: 27,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911445,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: '76354891438',
          TakerPays: {
            currency: 'EUR',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '35957.00138134698',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402203D03293CECE562971D1A6EDB841E6D8B73C23C4FDC994A3CA0279A736C911C3702201E8080C8E878D845CAA5F511D6C5CBF5EA3DBAC71FD8966D123267E354C3D39F',
          hash: '5DB78113B6DEBBF620FE65B44FEAE29146EC5DD27BCF728A6CA20004343D293D',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '50E5382D7A94B9E6A2ADCB96E0791C7B57DD0090C7676AA974719757887FD353',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BAFCB8F63ECD',
                    OwnerNode: 'a545',
                    Sequence: 65911445,
                    TakerGets: '76354891438',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '35957.00138134698',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300358',
                    Flags: 0,
                    OwnerCount: 110,
                    Sequence: 65911446,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300368',
                    OwnerCount: 109,
                    Sequence: 65911445,
                  },
                  PreviousTxnID: 'E382E2699AAC992A9428A59B944D8105B05541FEE0241151129132C6CEEDC78F',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BAFCB8F63ECD',
                  NewFields: {
                    ExchangeRate: '4e10bafcb8f63ecd',
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BAFCB8F63ECD',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
            ],
            TransactionIndex: 28,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911446,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: '129762175638',
          TakerPays: {
            currency: 'EUR',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '61437.8759984506',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100F7AEC782865EB1D52426A13608EFC7E92C0BDF125505F5678A17AAF391D1A57F022071F99540C51C4089DF705455F3FC999A316B4598EF5038ACDDC55E01732078F5',
          hash: '998E20F77AA1C987EC436684B97EBD6685D613864071C4712749D3662CA15F54',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '8598D39BA63F88CD7A7243E5070A3969A7B84F41F1DF8B55174E876F797A7026',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BFE58B',
                    OwnerNode: 'a545',
                    Sequence: 65911446,
                    TakerGets: '129762175638',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '61437.8759984506',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300348',
                    Flags: 0,
                    OwnerCount: 111,
                    Sequence: 65911447,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300358',
                    OwnerCount: 110,
                    Sequence: 65911446,
                  },
                  PreviousTxnID: '5DB78113B6DEBBF620FE65B44FEAE29146EC5DD27BCF728A6CA20004343D293D',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BFE58B',
                  NewFields: {
                    ExchangeRate: '4e10d22419bfe58b',
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10D22419BFE58B',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
            ],
            TransactionIndex: 29,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911447,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: {
            currency: '5553445400000000000000000000000000000000',
            issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
            value: '729.8482001973591',
          },
          TakerPays: '1626730219',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402203A9A39F9751223CAC7E5986F959C520CDF8B5D95DD4C67A9C6220FF135711B6502206525C7A684C22C5857117D7CA0A4741176DDF649864E440B518F2882985F9D6B',
          hash: 'E908A6910A4593B2A5BE79F6AC80D2AA53D5B614A716AD9A04B78F0902B5D055',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '65D1B65F4E192EB64DD115F679C4A44201343016DE7BCEF79D1B4F6C79AB00E1',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EB232694BA06',
                    OwnerNode: 'a545',
                    Sequence: 65911447,
                    TakerGets: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '729.8482001973591',
                    },
                    TakerPays: '1626730219',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EB232694BA06',
                  NewFields: {
                    ExchangeRate: '5b07eb232694ba06',
                    RootIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B07EB232694BA06',
                    TakerGetsCurrency: '5553445400000000000000000000000000000000',
                    TakerGetsIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300338',
                    Flags: 0,
                    OwnerCount: 112,
                    Sequence: 65911448,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300348',
                    OwnerCount: 111,
                    Sequence: 65911447,
                  },
                  PreviousTxnID: '998E20F77AA1C987EC436684B97EBD6685D613864071C4712749D3662CA15F54',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 30,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911448,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: {
            currency: '5553445400000000000000000000000000000000',
            issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
            value: '1218.053569337358',
          },
          TakerPays: '2765441372',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100FC1788D577ECE748FADEC676FC4535B885703D4D96DEC93A2C64CECF2680C003022047B88F284558CA5C2797A4F139AF67EEE996629EC671810DCBF87F4433593657',
          hash: '956A430170BCC0E340781C979271F54AED54FD38884A64AF70E575F5D7CE8D5B',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B0810E572294722',
                  NewFields: {
                    ExchangeRate: '5b0810e572294722',
                    RootIndex: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B0810E572294722',
                    TakerGetsCurrency: '5553445400000000000000000000000000000000',
                    TakerGetsIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300328',
                    Flags: 0,
                    OwnerCount: 113,
                    Sequence: 65911449,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300338',
                    OwnerCount: 112,
                    Sequence: 65911448,
                  },
                  PreviousTxnID: 'E908A6910A4593B2A5BE79F6AC80D2AA53D5B614A716AD9A04B78F0902B5D055',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'D4FB714ED14896905891CF6B44CA7A646A4306043AB223D3F49A61F4780DEE71',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '799BECD7CA247A0647749B9C316898DD239A2C414C27A19C5B0810E572294722',
                    OwnerNode: 'a545',
                    Sequence: 65911448,
                    TakerGets: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '1218.053569337358',
                    },
                    TakerPays: '2765441372',
                  },
                },
              },
            ],
            TransactionIndex: 31,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911449,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: '10344444444',
          TakerPays: {
            currency: '5553445400000000000000000000000000000000',
            issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
            value: '4804.897485966667',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100D792795DFFD45BD98B3FE61C4AF1F40810BBB973935F3823E357A9988CBD095A022020CF982A2304279183216DAD37F04DA45D0A9ECF0C669671F6BCC6CD653BB3A3',
          hash: 'C1B50268B1A3C7EF97F4C8EB14D984D134C667748FF9BBE5C31F8BA8709D6499',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E10808484400F0E',
                  NewFields: {
                    ExchangeRate: '4e10808484400f0e',
                    RootIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E10808484400F0E',
                    TakerPaysCurrency: '5553445400000000000000000000000000000000',
                    TakerPaysIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '9FE7DBB51898B397AEBA1D33F60AB740E0733A89751C9791FA0130E3185CD6E9',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E10808484400F0E',
                    OwnerNode: 'a545',
                    Sequence: 65911449,
                    TakerGets: '10344444444',
                    TakerPays: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '4804.897485966667',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300318',
                    Flags: 0,
                    OwnerCount: 114,
                    Sequence: 65911450,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300328',
                    OwnerCount: 113,
                    Sequence: 65911449,
                  },
                  PreviousTxnID: '956A430170BCC0E340781C979271F54AED54FD38884A64AF70E575F5D7CE8D5B',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 32,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
          Fee: '10',
          Flags: 0,
          LastLedgerSequence: 75221161,
          Sequence: 65911450,
          SigningPubKey: '03C48299E57F5AE7C2BE1391B581D313F1967EA2301628C07AC412092FDC15BA22',
          TakerGets: '17585555555',
          TakerPays: {
            currency: '5553445400000000000000000000000000000000',
            issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
            value: '8214.003132221444',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100D4FCA5135E6B5CBF22D62F2DD67BF2892FDE175C4667A3852B34671B81814F1A02200475F4D1BF04F0E4CCA221B2B47858C4D5ECF43EC4EE77FD7EF6F348F7D2CD15',
          hash: 'D595763750F47BF2B73F460F3CA67F7EF7152DE26C6C79151949E651DA8FA760',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E109824267A0B28',
                  NewFields: {
                    ExchangeRate: '4e109824267a0b28',
                    RootIndex: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E109824267A0B28',
                    TakerPaysCurrency: '5553445400000000000000000000000000000000',
                    TakerPaysIssuer: '06CB988E900D81BAE9217E6FE6B60CD2DDA12767',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: 'a544',
                    Owner: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    RootIndex: 'FDE0DCA95589B07340A7D5BE2FD72AA8EEAC878664CC9B707308B4419333E551',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4BD58ED2856195CB26C4336807537C89F9AE933E3499D1DAD76BCF91C528A0A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '888F47DFFD9F4A2AA7919772E8B36F750058E75C67E2C141128F5AF58BB105E1',
                  NewFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    BookDirectory: '2410509CE58C2F04403737A3FD84B17D66C423554EEF919D4E109824267A0B28',
                    OwnerNode: 'a545',
                    Sequence: 65911450,
                    TakerGets: '17585555555',
                    TakerPays: {
                      currency: '5553445400000000000000000000000000000000',
                      issuer: 'rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq',
                      value: '8214.003132221444',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3rhWeE31Jt5sWmi4QiGLMZnY3ENgqw96W',
                    Balance: '233155300308',
                    Flags: 0,
                    OwnerCount: 115,
                    Sequence: 65911451,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'B1B9AAC12B56B1CFC93DDC8AF6958B50E89509F377ED4825A3D970F249892CE3',
                  PreviousFields: {
                    Balance: '233155300318',
                    OwnerCount: 114,
                    Sequence: 65911450,
                  },
                  PreviousTxnID: 'C1B50268B1A3C7EF97F4C8EB14D984D134C667748FF9BBE5C31F8BA8709D6499',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 33,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r3Vh9ZmQxd3C5CPEB8q7VbRuMPxwuC634n',
          Fee: '20',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 86944761,
          Sequence: 86944766,
          SigningPubKey: '03C71E57783E0651DFF647132172980B1F598334255F01DD447184B5D66501E67A',
          TakerGets: '49076000000',
          TakerPays: {
            currency: 'EUR',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '23141.29704',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100A0BA78D9DD4433F281183101A88C31A09C3FA1DF4B41F012CE2CA5D9F260812F022030FE88991C146CB5DD4A8DDD84A9C31338767827BB03905ABA158D521BC18C04',
          hash: '5370A7F0C9134542135B5FE2601D00F9FA7C865E4917C71D2537FC6F83889B85',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'r3Vh9ZmQxd3C5CPEB8q7VbRuMPxwuC634n',
                    RootIndex: '12F72282F74D437C2E76C4E57710E63779A1825D5A2090FF894FB9A22AF40AAE',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '12F72282F74D437C2E76C4E57710E63779A1825D5A2090FF894FB9A22AF40AAE',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r3Vh9ZmQxd3C5CPEB8q7VbRuMPxwuC634n',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BD2138176C00',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'E491BB13B443C84D79413EAA71780FF710FCA93CFD97DCF1A54DC761646E5365',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 86944761,
                    TakerGets: '49076000000',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '23122.40278',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '5A889743B8B18882D53ED63C4DF612FFD2290FB55C8DFE9F56EA6F8B8D8834C3',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4e10bd2138176c00',
                    Flags: 0,
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BD2138176C00',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10BD2138176C00',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10C0A19DF95000',
                  NewFields: {
                    ExchangeRate: '4e10c0a19df95000',
                    RootIndex: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10C0A19DF95000',
                    TakerPaysCurrency: '0000000000000000000000004555520000000000',
                    TakerPaysIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'BEDAAB3AFF882A2479757DB729B5E7058E910D4DD129B8DB352DFDDE349C1234',
                  NewFields: {
                    Account: 'r3Vh9ZmQxd3C5CPEB8q7VbRuMPxwuC634n',
                    BookDirectory: 'BC05A0B94DB6C7C0B2D9E04573F0463DC15DB8033ABA85624E10C0A19DF95000',
                    Sequence: 86944766,
                    TakerGets: '49076000000',
                    TakerPays: {
                      currency: 'EUR',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '23141.29704',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r3Vh9ZmQxd3C5CPEB8q7VbRuMPxwuC634n',
                    Balance: '49176856528',
                    Flags: 0,
                    OwnerCount: 9,
                    Sequence: 86944767,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'F709D77D5D72E0C96CB029FCE21F3AF34E70ED0D8DB121B2CF961E64E582EEF2',
                  PreviousFields: {
                    Balance: '49176856548',
                    Sequence: 86944766,
                  },
                  PreviousTxnID: '0035B0F8450021FD839108590FF455A3111D1211EDE5B68F672BD1CCC84BE269',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
            ],
            TransactionIndex: 34,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 23866867,
          Sequence: 23866869,
          SigningPubKey: '02D819F0C7B92A1A32E8744F8B9CBD8EAAE3B9DEF8F9FDF5C0A98271C52FC3290C',
          TakerGets: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '38059.10556161127',
          },
          TakerPays: '12929793431',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '30450221009ED45CC152B44FB29718D0797F3BB1498D28FFBE235C77285DBE07A1CED3492E022052C8A03984AC603B3832027E14C0485C7B8C228640D06C443CA1C6FBDFDDD841',
          hash: '65DFFFE194D33EEC100F236ED687209A7F985EB98719ECD23BCC8A2894A27EBC',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB9C51C523C6C',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9F2BF1DE52F997D1BE72DF63FE274B6781E1F1A07CADE14E0DE0FCBAE9CC5FC1',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 23866867,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '2808.613957989724',
                    },
                    TakerPays: '1164144059',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '06555FC95929B48905C13FE5D43CFA3F390C3D0EC855C4E298C1DF2A1A2EA653',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    RootIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C11D1ECA782C4',
                  NewFields: {
                    ExchangeRate: '5a0c11d1eca782c4',
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C11D1ECA782C4',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a0eb9c51c523c6c',
                    Flags: 0,
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB9C51C523C6C',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB9C51C523C6C',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    Balance: '100053985',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 23866870,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '2E4F0496B9428272FE6B8B1F58AF9A25558BCD97A9641F22DADC76E5C0DD031F',
                  PreviousFields: {
                    Balance: '100054000',
                    Sequence: 23866869,
                  },
                  PreviousTxnID: '2A1D9ACDED70FEB2205CB8CEB6C2060CC849B70110D59D687080BFB737996C1A',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'AF3084EDF07513A0EBF529F09EF4DFD3E2E30A1128A7292DF9AFFB414F0C4FC3',
                  NewFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C11D1ECA782C4',
                    Sequence: 23866869,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '38059.10556161127',
                    },
                    TakerPays: '12929793431',
                  },
                },
              },
            ],
            TransactionIndex: 35,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 23866865,
          Sequence: 23866870,
          SigningPubKey: '02D819F0C7B92A1A32E8744F8B9CBD8EAAE3B9DEF8F9FDF5C0A98271C52FC3290C',
          TakerGets: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '12433.29433531317',
          },
          TakerPays: '4663581317',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100AAEE43A23103147714E580F5277EF85EF24DAAA52188A1B183DE57BE66466A3A0220407F017F0B2CE06D018E259442ABA6E50FC15B786C95CBB0924FB394B389FC42',
          hash: '4134BCDC601F8AAD5FCF035CB15C051728A20CC6524045964E6E152B3C53E7C9',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    RootIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a0c148525eb8eb1',
                    Flags: 0,
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C148525EB8EB1',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C148525EB8EB1',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D536824D4A8A8',
                  NewFields: {
                    ExchangeRate: '5a0d536824d4a8a8',
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D536824D4A8A8',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0C148525EB8EB1',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '1CB2CEB3F0A36F5A6FA0BA96EF96D1E6230D8C48C39FC2F85FD644DA5939DF42',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 23866865,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '18588.57308268511',
                    },
                    TakerPays: '6320601534',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1DC581AB3960CFC3EB4DEAB250DDBF2DC604745D1BB156FD5CC4E43D723057A7',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    Balance: '100053970',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 23866871,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '2E4F0496B9428272FE6B8B1F58AF9A25558BCD97A9641F22DADC76E5C0DD031F',
                  PreviousFields: {
                    Balance: '100053985',
                    Sequence: 23866870,
                  },
                  PreviousTxnID: '65DFFFE194D33EEC100F236ED687209A7F985EB98719ECD23BCC8A2894A27EBC',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '896DC3CC69D05AAF76C107FA0C0CE5EC8AE34A2427B2072B311779373C6951EA',
                  NewFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D536824D4A8A8',
                    Sequence: 23866870,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '12433.29433531317',
                    },
                    TakerPays: '4663581317',
                  },
                },
              },
            ],
            TransactionIndex: 36,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 23866866,
          Sequence: 23866871,
          SigningPubKey: '02D819F0C7B92A1A32E8744F8B9CBD8EAAE3B9DEF8F9FDF5C0A98271C52FC3290C',
          TakerGets: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '45751.73468523896',
          },
          TakerPays: '18947092895',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304502210083E527A9BA55FACDEF115BACBBE45BD23154E58AC3873ADEEF18918A2A7C4A1B02202213A7E910A60B4B44E9577EF36402B5AC7297E94A374DF73034058D88A9FB81',
          hash: 'C648D62FE16954B8D8DBF1AA1EE951A47FD6885EB23CC90D7FF3392CACC29CAF',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    RootIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a0d56640dec3759',
                    Flags: 0,
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D56640DEC3759',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D56640DEC3759',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB679D480E11F',
                  NewFields: {
                    ExchangeRate: '5a0eb679d480e11f',
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB679D480E11F',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    Balance: '100053955',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 23866872,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '2E4F0496B9428272FE6B8B1F58AF9A25558BCD97A9641F22DADC76E5C0DD031F',
                  PreviousFields: {
                    Balance: '100053970',
                    Sequence: 23866871,
                  },
                  PreviousTxnID: '4134BCDC601F8AAD5FCF035CB15C051728A20CC6524045964E6E152B3C53E7C9',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '649E57DD5DBAC1CB6763CF20DA1645B9A802309B686915837B466FBFFC01FC03',
                  NewFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0EB679D480E11F',
                    Sequence: 23866871,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '45751.73468523896',
                    },
                    TakerPays: '18947092895',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A0D56640DEC3759',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '44CCAA6502DC74943F1EDA13E886283F7DE2C6110E13F47316F303E6C53E0679',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 23866866,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '33267.04222326162',
                    },
                    TakerPays: '12488987999',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'BE85E2E1008A8BFA880224E23870A1D371979F522C66C00625F3D41F3DE38339',
                },
              },
            ],
            TransactionIndex: 37,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 23866868,
          Sequence: 23866872,
          SigningPubKey: '02D819F0C7B92A1A32E8744F8B9CBD8EAAE3B9DEF8F9FDF5C0A98271C52FC3290C',
          TakerGets: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '9260.227971196511',
          },
          TakerPays: '4234079371',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402203FFEE012D058F961172F4A54FBA0945C18C2A1AD6DB7F10FF5DEA3F98EE670110220570A6AE5BFB0A2EFBC7B3AE87275F5B8E0D4BD81C0236B8FC8DD3CF5214E3863',
          hash: '0C7F8ADF54FAEC1A9DAC233758EC0B1A35E76BB2AF795E0B70DEF5D7C58A304D',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    RootIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '17B5AB3F4D408DE3BF58AD99CD84811A8E2D7452275309ABA506A4B09A66A7B2',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A103E81EC12C0EE',
                  NewFields: {
                    ExchangeRate: '5a103e81ec12c0ee',
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A103E81EC12C0EE',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a10422472405bf8',
                    Flags: 0,
                    RootIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A10422472405BF8',
                    TakerGetsCurrency: '000000000000000000000000434E590000000000',
                    TakerGetsIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A10422472405BF8',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    Balance: '100053940',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 23866873,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '2E4F0496B9428272FE6B8B1F58AF9A25558BCD97A9641F22DADC76E5C0DD031F',
                  PreviousFields: {
                    Balance: '100053955',
                    Sequence: 23866872,
                  },
                  PreviousTxnID: 'C648D62FE16954B8D8DBF1AA1EE951A47FD6885EB23CC90D7FF3392CACC29CAF',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '35D1BF11BC56F3258BDBC4A6B4D41B4AF3F656AE386D5FC7AC26784F245EE22A',
                  NewFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A103E81EC12C0EE',
                    Sequence: 23866872,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '9260.227971196511',
                    },
                    TakerPays: '4234079371',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rBW8YPFaQ8WhHUy3WyKJG3mfnTGUkuw86q',
                    BookDirectory: '1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A10422472405BF8',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2A1D9ACDED70FEB2205CB8CEB6C2060CC849B70110D59D687080BFB737996C1A',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 23866868,
                    TakerGets: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '38017.32964585231',
                    },
                    TakerPays: '17397961543',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'D4857139A6F0C994A4630CE5027246B1010E4999D6BE03562BB02DB97D52282E',
                },
              },
            ],
            TransactionIndex: 38,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
          Amount: {
            currency: 'CX1',
            issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
            value: '2',
          },
          Destination: 'rE1ADnhFiUqEayTSCRZVkgYMWemYjxdx7H',
          Fee: '20',
          LastLedgerSequence: 75221168,
          Memos: [
            {
              Memo: {
                MemoData: '4358312046617563657420F09F8E89',
              },
            },
          ],
          Sequence: 69392194,
          SigningPubKey: '0288511E71CDB53B67E97D5C557664DD6BCDAAC8B0CFAA53B8241E68D330D9914B',
          TransactionType: 'Payment',
          TxnSignature:
            '30450221008C295DD8C50890D948878BB40A1C0F7408BE4B7576DF10C10412206DD7936EBA022001944D57BC90BEC807CD036FD5AD7BFD6342BB66D9C1A772A0FC61590398B23E',
          hash: '62D06B1D90C805C6CDFF6C6D9085E399F8873F2023091E2185E1F2410F5918CA',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                    Balance: '100230017',
                    Domain: '78756D6D2E6170702F6465746563742F786170703A63686F727573782E666175636574',
                    EmailHash: '35EC85C9F70CF78C58C994B265848F05',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 69392195,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '1C6EF6005948FFB273D856F4F2A064A7E35D87A181BF57E1E34CC937A6BA30B8',
                  PreviousFields: {
                    Balance: '100230037',
                    Sequence: 69392194,
                  },
                  PreviousTxnID: '6F85DB39F3001ECB773DDC6C8D99ACCB1EABBD9CD3433EECA2024B61751F816D',
                  PreviousTxnLgrSeq: 75221147,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245264.2679123',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                      value: '1000000000000000e-4',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '4DF9FEEDAC72F631F0EE66AB173281DB1BE2FF8B50C8CDF942484F61678C18DF',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245266.2679123',
                    },
                  },
                  PreviousTxnID: '6F85DB39F3001ECB773DDC6C8D99ACCB1EABBD9CD3433EECA2024B61751F816D',
                  PreviousTxnLgrSeq: 75221147,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1726.1',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: 'b49',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'rE1ADnhFiUqEayTSCRZVkgYMWemYjxdx7H',
                      value: '24999997284.97177',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '89D281B5A83F467B290870D1F06338A1F0304A4BCEF4E1395C2641A9B01CD9C1',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '1724.1',
                    },
                  },
                  PreviousTxnID: '2272492E9549BCD383740E021AB369BE7C1C93E1198302B05836314F77213633',
                  PreviousTxnLgrSeq: 75198246,
                },
              },
            ],
            TransactionIndex: 39,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: {
              currency: 'CX1',
              issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
              value: '2',
            },
          },
        },
        {
          Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
          Amount: {
            currency: 'CX1',
            issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
            value: '2',
          },
          Destination: 'rphnh8aG8oBCdrBcgxYgNY8yVqi3b3XqbT',
          Fee: '20',
          LastLedgerSequence: 75221168,
          Memos: [
            {
              Memo: {
                MemoData: '4358312046617563657420F09F8E89',
              },
            },
          ],
          Sequence: 69392195,
          SigningPubKey: '0288511E71CDB53B67E97D5C557664DD6BCDAAC8B0CFAA53B8241E68D330D9914B',
          TransactionType: 'Payment',
          TxnSignature:
            '30440220715C129B7AE5A7DD87C2DDFAC708DCF081C124615EA049A6AE8EB2FAAE145FAC02207BA76EE8846E1984E46133D4ED4576908C1DED0EBDA3BD462D95F5DFEE4B4349',
          hash: '67F566BC0DE64CCFA625AB9B84BFFFB1C53FA47E4ABEA4621E5D74BDB3717122',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                    Balance: '100229997',
                    Domain: '78756D6D2E6170702F6465746563742F786170703A63686F727573782E666175636574',
                    EmailHash: '35EC85C9F70CF78C58C994B265848F05',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 69392196,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '1C6EF6005948FFB273D856F4F2A064A7E35D87A181BF57E1E34CC937A6BA30B8',
                  PreviousFields: {
                    Balance: '100230017',
                    Sequence: 69392195,
                  },
                  PreviousTxnID: '62D06B1D90C805C6CDFF6C6D9085E399F8873F2023091E2185E1F2410F5918CA',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245262.2679123',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                      value: '1000000000000000e-4',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '4DF9FEEDAC72F631F0EE66AB173281DB1BE2FF8B50C8CDF942484F61678C18DF',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245264.2679123',
                    },
                  },
                  PreviousTxnID: '62D06B1D90C805C6CDFF6C6D9085E399F8873F2023091E2185E1F2410F5918CA',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2730.6034965',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: 'f1',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'rphnh8aG8oBCdrBcgxYgNY8yVqi3b3XqbT',
                      value: '25000000000.00011',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'B207CF4F2D0411937E19D7C232D75212349F52CB5172F0E12B45E7293E6BE0F3',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2728.6034965',
                    },
                  },
                  PreviousTxnID: '7C594968CB3DE2ACB658F19818A96E2D2DAEFC11F26266A8D2418E98F083DDDB',
                  PreviousTxnLgrSeq: 75197737,
                },
              },
            ],
            TransactionIndex: 40,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: {
              currency: 'CX1',
              issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
              value: '2',
            },
          },
        },
        {
          Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
          Amount: {
            currency: 'CX1',
            issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
            value: '2',
          },
          Destination: 'raFkJbcTVNag5NUQNyGWe1GQgzt2Cr5rbF',
          Fee: '20',
          LastLedgerSequence: 75221168,
          Memos: [
            {
              Memo: {
                MemoData: '4358312046617563657420F09F8E89',
              },
            },
          ],
          Sequence: 69392196,
          SigningPubKey: '0288511E71CDB53B67E97D5C557664DD6BCDAAC8B0CFAA53B8241E68D330D9914B',
          TransactionType: 'Payment',
          TxnSignature:
            '3045022100A15963CED9DDAFDCD31CD6EC0727737FB9F406129C29B942C9B1A3C67B522BD502207594DD00300C0047EC0D04A5D4F11850AC734D792D7A2AC6F11F7A3355BCDA70',
          hash: '20D3744D38527AEC947F657EFF612A76109AAD30C5214C25012548B811DEA347',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                    Balance: '100229977',
                    Domain: '78756D6D2E6170702F6465746563742F786170703A63686F727573782E666175636574',
                    EmailHash: '35EC85C9F70CF78C58C994B265848F05',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 69392197,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '1C6EF6005948FFB273D856F4F2A064A7E35D87A181BF57E1E34CC937A6BA30B8',
                  PreviousFields: {
                    Balance: '100229997',
                    Sequence: 69392196,
                  },
                  PreviousTxnID: '67F566BC0DE64CCFA625AB9B84BFFFB1C53FA47E4ABEA4621E5D74BDB3717122',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245260.2679123',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: '4',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'rBy7gEjA6AJytwZAUKYfXvGAf5Y1koFCX1',
                      value: '1000000000000000e-4',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '4DF9FEEDAC72F631F0EE66AB173281DB1BE2FF8B50C8CDF942484F61678C18DF',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '951245262.2679123',
                    },
                  },
                  PreviousTxnID: '67F566BC0DE64CCFA625AB9B84BFFFB1C53FA47E4ABEA4621E5D74BDB3717122',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2810.1',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CX1',
                      issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
                      value: '0',
                    },
                    HighNode: '126',
                    LowLimit: {
                      currency: 'CX1',
                      issuer: 'raFkJbcTVNag5NUQNyGWe1GQgzt2Cr5rbF',
                      value: '24999999751.70077',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'CEA013FF28AADBB3DF5879D6A41BF9F80DCCDA694059E927FD08E43147C7CB50',
                  PreviousFields: {
                    Balance: {
                      currency: 'CX1',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2808.1',
                    },
                  },
                  PreviousTxnID: '79180B3BFC48D604086D292B2EC43D1D3BA9B4F36D1B3335EA820798F0072BFB',
                  PreviousTxnLgrSeq: 75197737,
                },
              },
            ],
            TransactionIndex: 41,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: {
              currency: 'CX1',
              issuer: 'rKk7mu1dNB25fsPEJ4quoQd5B8QmaxewKi',
              value: '2',
            },
          },
        },
        {
          Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
          Fee: '221',
          Flags: 0,
          LastLedgerSequence: 75221159,
          OfferSequence: 73587185,
          Sequence: 73587186,
          SigningPubKey: '033A8B7F3B9E3B3DDD855F616E3599A5A4AFEC9F65863454DDDCFDB87302D78EE7',
          TakerGets: '482000000',
          TakerPays: {
            currency: 'ETH',
            issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
            value: '0.17148114',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100C6462F2AC748FEFC3CF2C35F59D2291E355A7F1D308E6C00476AD5FA329D5CE0022009013AB6D0DE88CF0B24D98C059D94E205ABBF294F60A41F81FD3AAAEA865DDA',
          hash: 'D20D91034B51EDD9AF737A5632D3A1177DA7E459CC8E97F362DBC27F6F0E33D3',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '70E81EED83F43F98FFC1F03B3E25951BEE6A3E22E8D4920FDA6E32AFEEBD11FC',
                  NewFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    BookDirectory: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA3B594B7A800',
                    Sequence: 73587186,
                    TakerGets: '482000000',
                    TakerPays: {
                      currency: 'ETH',
                      issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
                      value: '0.17148114',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4b0ca01242236800',
                    Flags: 0,
                    RootIndex: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA01242236800',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '0000000000000000000000004554480000000000',
                    TakerPaysIssuer: '06CC4A6D023E68AA3499C6DE3E9F2DC52B8BA254',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA01242236800',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA3B594B7A800',
                  NewFields: {
                    ExchangeRate: '4b0ca3b594b7a800',
                    RootIndex: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA3B594B7A800',
                    TakerPaysCurrency: '0000000000000000000000004554480000000000',
                    TakerPaysIssuer: '06CC4A6D023E68AA3499C6DE3E9F2DC52B8BA254',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    BookDirectory: '90B86A84C7F7843673BCF82E565E69498CAEF463F8055ABA4B0CA01242236800',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '1D7BA6666D70A649F982CC6A9FBBA088AF05E38A6CA7EDC0E19280FFAFA0EA3D',
                    PreviousTxnLgrSeq: 75221149,
                    Sequence: 73587185,
                    TakerGets: '482000000',
                    TakerPays: {
                      currency: 'ETH',
                      issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
                      value: '0.17128834',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'BE530F6577076658DC35E79397BA3A311B96DEE0676CDE3AC16F47D24850A0B9',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    Balance: '1064432168',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 73587187,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'BF43D01CC29F38AEE00C9DDB419A43E682D949F88123CB995091744002DC4AAC',
                  PreviousFields: {
                    Balance: '1064432389',
                    Sequence: 73587186,
                  },
                  PreviousTxnID: '1D7BA6666D70A649F982CC6A9FBBA088AF05E38A6CA7EDC0E19280FFAFA0EA3D',
                  PreviousTxnLgrSeq: 75221149,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    RootIndex: 'CC3BEEA5EAD78FB6CBB33CD6AAB20FA2FF3987339AC1E1EE68538815F9A64E82',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CC3BEEA5EAD78FB6CBB33CD6AAB20FA2FF3987339AC1E1EE68538815F9A64E82',
                },
              },
            ],
            TransactionIndex: 42,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
          Fee: '21',
          Flags: 0,
          LastLedgerSequence: 75221159,
          OfferSequence: 73587179,
          Sequence: 73587187,
          SigningPubKey: '033A8B7F3B9E3B3DDD855F616E3599A5A4AFEC9F65863454DDDCFDB87302D78EE7',
          TakerGets: {
            currency: 'ETH',
            issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
            value: '1.55985156',
          },
          TakerPays: '4428000000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022007A9DF1C5F0D3593CE3A7915E6E87E4B31FE2429FA96BF765C75694959CBCE470220449DB9C0DABDAF93E7B7F967A4384FD5CDA96961CCC46830D0DB83EC6C588B0C',
          hash: 'FF5B1309E7EA81E90EA600D7558B20DAB19E909D4F159E0902E011674ADF785A',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '1338ECECBDDA1E27DA690153E0C53302019BBED7EF1B08FF3447001ADD4F1218',
                  NewFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    BookDirectory: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A15CFB7E40EE9',
                    Sequence: 73587187,
                    TakerGets: {
                      currency: 'ETH',
                      issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
                      value: '1.55985156',
                    },
                    TakerPays: '4428000000',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A15CFB7E40EE9',
                  NewFields: {
                    ExchangeRate: '5e0a15cfb7e40ee9',
                    RootIndex: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A15CFB7E40EE9',
                    TakerGetsCurrency: '0000000000000000000000004554480000000000',
                    TakerGetsIssuer: '06CC4A6D023E68AA3499C6DE3E9F2DC52B8BA254',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5e0a18bf1176bc37',
                    Flags: 0,
                    RootIndex: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A18BF1176BC37',
                    TakerGetsCurrency: '0000000000000000000000004554480000000000',
                    TakerGetsIssuer: '06CC4A6D023E68AA3499C6DE3E9F2DC52B8BA254',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A18BF1176BC37',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    Balance: '1064432147',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 73587188,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'BF43D01CC29F38AEE00C9DDB419A43E682D949F88123CB995091744002DC4AAC',
                  PreviousFields: {
                    Balance: '1064432168',
                    Sequence: 73587187,
                  },
                  PreviousTxnID: 'D20D91034B51EDD9AF737A5632D3A1177DA7E459CC8E97F362DBC27F6F0E33D3',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    BookDirectory: '909AAFD80F1AC67B586CC0403BD2E7D8D55D7DB5CD7441175E0A18BF1176BC37',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '410D788023494245F076553A57411F30A2E29D3DC784B929AB455F78784E712E',
                    PreviousTxnLgrSeq: 75221071,
                    Sequence: 73587179,
                    TakerGets: {
                      currency: 'ETH',
                      issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
                      value: '1.55808036',
                    },
                    TakerPays: '4428000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C21019483D624F2B5EEF55336487AAEE04683E8066767CC7D3534E7D8A70D8E8',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'r2ZmzyuyDMF6PkywZ8BbMYYe7AvvVYZdA',
                    RootIndex: 'CC3BEEA5EAD78FB6CBB33CD6AAB20FA2FF3987339AC1E1EE68538815F9A64E82',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CC3BEEA5EAD78FB6CBB33CD6AAB20FA2FF3987339AC1E1EE68538815F9A64E82',
                },
              },
            ],
            TransactionIndex: 43,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
          Fee: '15',
          Flags: 2228224,
          LastLedgerSequence: 75221167,
          LimitAmount: {
            currency: '78466C617368436861696E000000000000000000',
            issuer: 'rJgcjY1MZJjw946qRqN57V3TGg9PZEA1bw',
            value: '0',
          },
          Sequence: 68486983,
          SigningPubKey: '0240D7090C1321BE1065EBCDB803909FCFA606706FE28D4A2B40F30B81B73E405F',
          TransactionType: 'TrustSet',
          TxnSignature:
            '304402204BB7779ED0BB4F38DDE379FD7F0EB7BE494DE8639B47C720FB63A628D9BB173002200A323582BCC073EBAAE71E1FC9883F587C4B6FEDF1F7F9733EB8FA160DF6EAF5',
          hash: 'B0AE5CD34A5076EEF5D017459E66C5D9C5029A1E22E5E7EE14A4AB9497F7076C',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '78466C617368436861696E000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 1048576,
                    HighLimit: {
                      currency: '78466C617368436861696E000000000000000000',
                      issuer: 'rJgcjY1MZJjw946qRqN57V3TGg9PZEA1bw',
                      value: '0',
                    },
                    HighNode: '776',
                    LowLimit: {
                      currency: '78466C617368436861696E000000000000000000',
                      issuer: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                      value: '0',
                    },
                    LowNode: '2',
                    PreviousTxnID: 'A7DB4927C9A13EA48BEE4C6AC5BB8975AEBDDE8554CC628277F0450927F599F8',
                    PreviousTxnLgrSeq: 75220844,
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '34AA467F36338DC00914820188786D22843B28826F43F7D2C05F26621080F9B3',
                  PreviousFields: {
                    Flags: 1114112,
                    LowLimit: {
                      currency: '78466C617368436861696E000000000000000000',
                      issuer: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                      value: '1000000000000000e-4',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    Owner: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                    RootIndex: 'E29CF6FC277E75489B831AC1C7A069080AAA76627795A77705691F955F2AE760',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4449B90F558800B867D1F54E46B6CB3CF1AA9C3A840A1E5DFFAD3842BD4F9F31',
                  PreviousFields: {
                    IndexNext: '2',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                    Balance: '45999505',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 68486984,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '491735C425BDD93EFD3F14DC38AFF4EF2974968742CDDEF69C5DB0BB933C7D11',
                  PreviousFields: {
                    Balance: '45999520',
                    OwnerCount: 3,
                    Sequence: 68486983,
                  },
                  PreviousTxnID: '8EBF8B317E5E16E729C965609BC9738B76B627434267B5174FAA98AE13D1479D',
                  PreviousTxnLgrSeq: 75221151,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '777',
                    IndexPrevious: '775',
                    Owner: 'rJgcjY1MZJjw946qRqN57V3TGg9PZEA1bw',
                    RootIndex: '48CD5977D8173CC645302D8394CE612740AFAD77452E84A41B76620D38A6B413',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '49B7E319D6F51BB43AA966858919915A73586606893E5B4FCEC36B4FDB03F77E',
                },
              },
              {
                ModifiedNode: {
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '8B77D91F0AB30846733C27B51716E8D4EA634D811EEB40C351C9889D85D2B38F',
                  PreviousTxnID: '727EB2AB005F94D077A185A9AD866D51C138D456C8DA4DD11D02390A1D9A3685',
                  PreviousTxnLgrSeq: 75221119,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '1',
                    Owner: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                    RootIndex: 'E29CF6FC277E75489B831AC1C7A069080AAA76627795A77705691F955F2AE760',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'A37D7E10A160D9B49D26BF55E4E547322850AFA35E458F87C2E7527E37271CEF',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '1',
                    IndexPrevious: '1',
                    Owner: 'rcq9NrDFkD2J7bvwZzCkeWr1GXJ4dSw5U',
                    RootIndex: 'E29CF6FC277E75489B831AC1C7A069080AAA76627795A77705691F955F2AE760',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E29CF6FC277E75489B831AC1C7A069080AAA76627795A77705691F955F2AE760',
                  PreviousFields: {
                    IndexPrevious: '2',
                  },
                },
              },
            ],
            TransactionIndex: 44,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
          Fee: '20',
          Flags: 2147483648,
          LastLedgerSequence: 75221161,
          OfferSequence: 86171108,
          Sequence: 86171111,
          SigningPubKey: '02AC7FB83A5AC706F0613B3D93F1C361D84F6415D4E539E1A8BC66F2198F8CACE4',
          TakerGets: {
            currency: 'USD',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '456.933915',
          },
          TakerPays: '1000000000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '30440220473C4C481D17072B68EF75DD311EF1C6AA953832C39D795E5A3060BF18E2977402200F62109C072A2291A1723B5A9EE9C41B31CB4F84AE308071EBA09B65A145D8CE',
          hash: '01B368FE8AA703AE1366585893B8185C7E7B9E20831979D8E3ECC97B7BBCA238',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    Balance: '60756280',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 86171112,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '07400FD4578F4DEFDEF1A5C3EB6F6F149ACADECE9963ACB8B71168F4DB7FE212',
                  PreviousFields: {
                    Balance: '60756300',
                    Sequence: 86171111,
                  },
                  PreviousTxnID: '9285F67BFA05204DE2C3418C0DCB83AE822A9061917866C11B9C913D8F6F1ED7',
                  PreviousTxnLgrSeq: 75221157,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C8294059F660',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '1942AE914BA4922B8B02CB4BCF949B38A48A55E863C7AEBDB6094214DF2AC7B6',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 86171108,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '456.536715',
                    },
                    TakerPays: '1000000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '508C5B9C3DAA239E4E5B4BA14D9F7AA479AC44310DC25C144EBDAB1ACF9780EF',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    RootIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '823D5CAC063887B4E24423DC1BBF7AB851A90CAFE346C4FA45D8F6AF956212A0',
                  NewFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C66DEDA90DA9',
                    Sequence: 86171111,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '456.933915',
                    },
                    TakerPays: '1000000000',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C66DEDA90DA9',
                  NewFields: {
                    ExchangeRate: '5b07c66deda90da9',
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C66DEDA90DA9',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07c8294059f660',
                    Flags: 0,
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C8294059F660',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C8294059F660',
                },
              },
            ],
            TransactionIndex: 45,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
          Fee: '20',
          Flags: 2147483648,
          LastLedgerSequence: 75221161,
          OfferSequence: 86171109,
          Sequence: 86171112,
          SigningPubKey: '02AC7FB83A5AC706F0613B3D93F1C361D84F6415D4E539E1A8BC66F2198F8CACE4',
          TakerGets: {
            currency: 'USD',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '14150.68656',
          },
          TakerPays: '31000000000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100E26CCDA1DFBD0951C5EA99E15D02A6C9D5A432B086FE6ACF66F994359AB7E2FE022054F72FD1A36B570A030F41633BE6354E1789FBE046C581BEA3D3DB12F9EB80F9',
          hash: '68350ECCB2AD423FCD8638C56853F839E4B4CE459F911D4B18FCCE5D0EC6A899',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA2B5B8357EA',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9B00A5E5A98970CDA2A7AD598180FF56C929EF2AA7390B35D870FCF93BAA728B',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 86171109,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '14138.38576',
                    },
                    TakerPays: '31000000000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '00B385C551E2B3A58CC9EABBE572A6224CA7D4307307DCB634ACD3BAF34397DA',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    Balance: '60756260',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 86171113,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '07400FD4578F4DEFDEF1A5C3EB6F6F149ACADECE9963ACB8B71168F4DB7FE212',
                  PreviousFields: {
                    Balance: '60756280',
                    Sequence: 86171112,
                  },
                  PreviousTxnID: '01B368FE8AA703AE1366585893B8185C7E7B9E20831979D8E3ECC97B7BBCA238',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '0DA27E6346523FCEC644C1D39DD8AC9B726CFFEF8A09B9168CC6FD630564CDE2',
                  NewFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C86F966A839B',
                    Sequence: 86171112,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '14150.68656',
                    },
                    TakerPays: '31000000000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    RootIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C86F966A839B',
                  NewFields: {
                    ExchangeRate: '5b07c86f966a839b',
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07C86F966A839B',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07ca2b5b8357ea',
                    Flags: 0,
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA2B5B8357EA',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA2B5B8357EA',
                },
              },
            ],
            TransactionIndex: 46,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
          Fee: '20',
          Flags: 2147483648,
          LastLedgerSequence: 75221161,
          OfferSequence: 86171110,
          Sequence: 86171113,
          SigningPubKey: '02AC7FB83A5AC706F0613B3D93F1C361D84F6415D4E539E1A8BC66F2198F8CACE4',
          TakerGets: {
            currency: 'USD',
            issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
            value: '22596.85188627082',
          },
          TakerPays: '49553021310',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100C6D2C3FE6C2386C27A8C2A3DC2AE31A007CCC5A7B2855E99975B71A7AEF215E4022051B5B8B66F463A0CB40F8FEFCEB3C48CF77CE56EDBC66AA6758350886CCB4807',
          hash: 'B6B0DA29F1B85BF8E1DA06FA9BC33D65E80D3A104E3C86C80EE948EB1F5AB270',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    Balance: '60756240',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 86171114,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '07400FD4578F4DEFDEF1A5C3EB6F6F149ACADECE9963ACB8B71168F4DB7FE212',
                  PreviousFields: {
                    Balance: '60756260',
                    Sequence: 86171113,
                  },
                  PreviousTxnID: '68350ECCB2AD423FCD8638C56853F839E4B4CE459F911D4B18FCCE5D0EC6A899',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    RootIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5F3DA35DF75B05413178A5945C63B06B9489F2EFACF65CF3053638B65B5B8777',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'C7776031D0EE92619FF73AE7D4D41C9A2A9C467BC0AEB4B3CF4230DD4552B154',
                  NewFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA72488DABC6',
                    Sequence: 86171113,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '22596.85188627082',
                    },
                    TakerPays: '49553021310',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rXTZ5g8X7mrAYEe7iFeM9fiS4ccueyurG',
                    BookDirectory: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CC2E80496FFD',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '9285F67BFA05204DE2C3418C0DCB83AE822A9061917866C11B9C913D8F6F1ED7',
                    PreviousTxnLgrSeq: 75221157,
                    Sequence: 86171110,
                    TakerGets: {
                      currency: 'USD',
                      issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
                      value: '22609.53668627081',
                    },
                    TakerPays: '49623974771',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'EACBE266D3F763AA2D07ED65F20AA23FC385950B02F37C3A8BB0A82C384DC7A9',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA72488DABC6',
                  NewFields: {
                    ExchangeRate: '5b07ca72488dabc6',
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CA72488DABC6',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5b07cc2e80496ffd',
                    Flags: 0,
                    RootIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CC2E80496FFD',
                    TakerGetsCurrency: '0000000000000000000000005553440000000000',
                    TakerGetsIssuer: '2ADB0B3959D60A6E6991F729E1918B7163925230',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'F0B9A528CE25FE77C51C38040A7FEC016C2C841E74C1418D5B07CC2E80496FFD',
                },
              },
            ],
            TransactionIndex: 47,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rSTXVWh1UtQSBagxB59Fes82mwW2Y2uJ9',
          Amount: {
            currency: '5852443300000000000000000000000000000000',
            issuer: 'rD3hZoj626diqEA5S8FpJymz8R6X8ffVqS',
            value: '2',
          },
          Destination: 'rsTAYkk7VQfBdD5btt2WzXYphER6F2BTuN',
          DestinationTag: 1000053,
          Fee: '12',
          Flags: 131072,
          LastLedgerSequence: 75221177,
          Memos: [
            {
              Memo: {
                MemoData:
                  '4F6666696369616C20537461796B58205472616E73616374696F6E3A200A5472616E7366657272696E672032202458524433206173204164646974696F6E616C205265776172647320666F72207852594F5C2F535458202D3E207852594F',
              },
            },
          ],
          Sequence: 74015898,
          SigningPubKey: 'EDB9BDB0718BD507DF4F0A6F720F5D3BEF3AB446C6E2B4489507D50B815EAC98A2',
          TransactionType: 'Payment',
          TxnSignature:
            '8EE24FB7A7260B641300292828F239F1E1EDBC2AC8426FB2AC2DD7EBFCBF5E0B6FD2A0ADFC69E3B707AB8B92E23E9C4433976124B91EFFA1A45D853298B3900C',
          hash: '0B07E7FBC10EFCC73DA2BBEE2A2C372E633C3066AFFFC8D6CC275C94B8F9C63B',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '2',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rD3hZoj626diqEA5S8FpJymz8R6X8ffVqS',
                      value: '0',
                    },
                    HighNode: '6',
                    LowLimit: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rsTAYkk7VQfBdD5btt2WzXYphER6F2BTuN',
                      value: '300',
                    },
                    LowNode: '1',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '51DE00084E77B4E071EE9EA7CC8EF3C85A13F7441F93D3D0ABF2012D0B74F6CA',
                  PreviousFields: {
                    Balance: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                  },
                  PreviousTxnID: '4C0C2791642A11BED51683406CEFA41C3105EE8FE24F77F8F88022D20FF96D03',
                  PreviousTxnLgrSeq: 75199385,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rSTXVWh1UtQSBagxB59Fes82mwW2Y2uJ9',
                    Balance: '15092380',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 74015899,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '920D15EB2626939517CC9E3E388B0F8CAE3B8FD5FD4C5020DE5DD098D4559103',
                  PreviousFields: {
                    Balance: '15092392',
                    Sequence: 74015898,
                  },
                  PreviousTxnID: 'B0F6CD8F3B5510B07A6D53A4FB055F4EB8EF4DA5E48D62D9AAFA44B52163488B',
                  PreviousTxnLgrSeq: 75221137,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '90',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rD3hZoj626diqEA5S8FpJymz8R6X8ffVqS',
                      value: '0',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rSTXVWh1UtQSBagxB59Fes82mwW2Y2uJ9',
                      value: '300',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '9E443A82AE4FFD9AEEE375027BB4EC1E9F163CB04801124643CACDB5CA75A4FD',
                  PreviousFields: {
                    Balance: {
                      currency: '5852443300000000000000000000000000000000',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '92',
                    },
                  },
                  PreviousTxnID: 'D3E6884D0DB98513122236345FDB122AB8D302515676174BA712A1015F4F7338',
                  PreviousTxnLgrSeq: 75198821,
                },
              },
            ],
            TransactionIndex: 48,
            TransactionResult: 'tesSUCCESS',
            delivered_amount: {
              currency: '5852443300000000000000000000000000000000',
              issuer: 'rD3hZoj626diqEA5S8FpJymz8R6X8ffVqS',
              value: '2',
            },
          },
        },
        {
          Account: 'rpMT82MUcQ58nGmijTusmqLVb1kEd9NmUM',
          Fee: '12',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          Sequence: 74621929,
          SigningPubKey: 'EDB3D5AD21F870C7FAFC33CAC462C077EA950D304D9C89F13C598EDCFE692FE2A7',
          TakerGets: '26510100',
          TakerPays: {
            currency: 'CHP',
            issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
            value: '246.6574',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '9C3FE6F8ABC580F7FCB75871E177EE5FDF2617666ACB7A195DDADDFBA021621015F57BA5B95A4168EE76DDAF5C7DE2842F3DF6DF458581F4555273643E55C109',
          hash: 'DB3B9FE8EB6AADE6ACEFC9F73F54F15FD1343CA4EE3E1CBB89351CEC72707E58',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-146.413331845345',
                    },
                    Flags: 2228224,
                    HighLimit: {
                      currency: 'CHP',
                      issuer: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                      value: '100000000',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                    LowNode: '41e',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '0812A479CB1CEB5E3F0CD62980EE7DC5BC0A385FB0543667E03F1013B64A3C72',
                  PreviousFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '-393.070731845345',
                    },
                  },
                  PreviousTxnID: 'B476006F9BE1825BB910DEB1D2193EEFEEBCA6A79C983A35FFA238E03550FEE1',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a03d17f69fcc36c',
                    Flags: 0,
                    RootIndex: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                    TakerGetsCurrency: '0000000000000000000000004348500000000000',
                    TakerGetsIssuer: '29D6F101A87C602769158C14CF5833DBB2BCBDDC',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    BookDirectory: '11D60D000305C3EFE428909DBB165010E4ABF8B65475B8AB5A03D17F69FCC36C',
                    BookNode: '0',
                    Flags: 131072,
                    OwnerNode: '0',
                    PreviousTxnID: 'B476006F9BE1825BB910DEB1D2193EEFEEBCA6A79C983A35FFA238E03550FEE1',
                    PreviousTxnLgrSeq: 75221159,
                    Sequence: 74621628,
                    TakerGets: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                    TakerPays: '0',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '38B7A8FEE77504564833AE574760A27C83077B2BDDA42BC17DE85AEECC1ED604',
                  PreviousFields: {
                    TakerGets: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '246.6574',
                    },
                    TakerPays: '26510000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    RootIndex: '4C5F7D63A3439D2212F93DA2C479C7CB2E72B5D3F746E9482FE7E13E08BFBCFB',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '4C5F7D63A3439D2212F93DA2C479C7CB2E72B5D3F746E9482FE7E13E08BFBCFB',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '252.003492317669',
                    },
                    Flags: 1114112,
                    HighLimit: {
                      currency: 'CHP',
                      issuer: 'rhFNUEAKyXZmJHsnfJvH8hM12Ydk2icEof',
                      value: '0',
                    },
                    HighNode: '425',
                    LowLimit: {
                      currency: 'CHP',
                      issuer: 'rpMT82MUcQ58nGmijTusmqLVb1kEd9NmUM',
                      value: '100000000',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '65BF261477300FF86F4A215C8153662C78697E7BDF76718F60191358583A16A3',
                  PreviousFields: {
                    Balance: {
                      currency: 'CHP',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '5.346092317669',
                    },
                  },
                  PreviousTxnID: '419BF8B9A1622F1568845D03A4F9734872C82DE88498D51DFE3908C3B14C1456',
                  PreviousTxnLgrSeq: 75221147,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpMT82MUcQ58nGmijTusmqLVb1kEd9NmUM',
                    Balance: '26257693',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 74621930,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '660E2E6B05DD66E5FDB10B25E7046092516D360C2C2F2A72D60896AE24279A3A',
                  PreviousFields: {
                    Balance: '52767705',
                    Sequence: 74621929,
                  },
                  PreviousTxnID: 'DB8CD68B62D3037B066B54CD5FA4F608A99C5E91F3593F9100450240421FF748',
                  PreviousTxnLgrSeq: 75221153,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rGEEU6Rpwt9FzmHF4AB66q2neTdHMEfZHj',
                    Balance: '76401484',
                    Flags: 0,
                    OwnerCount: 1,
                    Sequence: 74621629,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '78A01327A5367FABFE88DD3439396114ECFC9F62EA057D12A07A28E37137F219',
                  PreviousFields: {
                    Balance: '49891484',
                    OwnerCount: 2,
                  },
                  PreviousTxnID: 'B476006F9BE1825BB910DEB1D2193EEFEEBCA6A79C983A35FFA238E03550FEE1',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 49,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rpBPUVstj2iw5QEsiauYf7CxgdPrW1efMf',
          Fee: '12',
          Flags: 0,
          LastLedgerSequence: 75221177,
          OfferSequence: 68681022,
          Sequence: 68681044,
          SigningPubKey: '0282AC7E3B0B934B938B418589CEA1131153B41B5B4704DC12A9E5AE0315B702B8',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3045022100A1FE2F7E568CEE00C834144878B5E5F9C1FE04FAEEB99CEE815EC0C5438CBF6702200783FA6193CB9EC233D1E8AD2456257FF75E3F333217849FA056378A5E15663E',
          hash: '99F1973BC2EC9AC519C666D71946CB4B3ED0A56C6AD98723E2177F681FE75DC8',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rpBPUVstj2iw5QEsiauYf7CxgdPrW1efMf',
                    BookDirectory: 'D842546B9CF472A17BFF0C8686D30020C2AA2A658F0AEAA852069921BA5EA800',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '63',
                    PreviousTxnID: '487E9D5E4F29880BCCF4D5820D8C9202894B3F61701D09065A98AB6ADEEC4667',
                    PreviousTxnLgrSeq: 75221132,
                    Sequence: 68681022,
                    TakerGets: {
                      currency: 'XWM',
                      issuer: 'rJzBh2Sktnps8CoLVJeDjj3Y2aDzXhrAFL',
                      value: '538439.1725266797',
                    },
                    TakerPays: {
                      currency: 'CHF',
                      issuer: 'r9MDUnXQfdKkVrZgDxbPiXUSgvjTPh35dS',
                      value: '1000',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '6C092691FEB9EF90833D11145F5C2136055A72218DE8B36C3CFA659C25EDA8D6',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpBPUVstj2iw5QEsiauYf7CxgdPrW1efMf',
                    Balance: '316825078',
                    Flags: 0,
                    OwnerCount: 13,
                    Sequence: 68681045,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '8E83A5248579683A6BD5286AE2B6F1078E0CD74AF0D6BD740CC0883C5002FB20',
                  PreviousFields: {
                    Balance: '316825090',
                    OwnerCount: 14,
                    Sequence: 68681044,
                  },
                  PreviousTxnID: 'D4FE88CEA1BAA970C473C9ACC260ABDCAF07941C8994B6452E4099D9FD9928A1',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    ExchangeRate: '52069921ba5ea800',
                    Flags: 0,
                    RootIndex: 'D842546B9CF472A17BFF0C8686D30020C2AA2A658F0AEAA852069921BA5EA800',
                    TakerGetsCurrency: '00000000000000000000000058574D0000000000',
                    TakerGetsIssuer: 'C54A3F48A019790E40786237A11BE6062D2ECD87',
                    TakerPaysCurrency: '0000000000000000000000004348460000000000',
                    TakerPaysIssuer: '5B938085B75A11527A99460796DA9F6EABF18430',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'D842546B9CF472A17BFF0C8686D30020C2AA2A658F0AEAA852069921BA5EA800',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rpBPUVstj2iw5QEsiauYf7CxgdPrW1efMf',
                    RootIndex: 'F774BDD5B4AD2361095E98570D797FEC2200B49488EFB9797A16875F78FD1420',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'EF66E2769786377A78B9C7D8066EFE4350989A7A6FE6B51529A4E54A0AE11199',
                },
              },
            ],
            TransactionIndex: 50,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
          Fee: '10',
          Flags: 131072,
          LimitAmount: {
            currency: 'THB',
            issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
            value: '17.41',
          },
          Memos: [
            {
              Memo: {
                MemoData: '31372E3431',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A6269746B75623A746862',
              },
            },
          ],
          Sequence: 75025095,
          SigningPubKey: 'EDABD8E42B91C6EDA9449E04CB7B27A4B0B913C9D9A92C39F145CD644B9FF6B786',
          TransactionType: 'TrustSet',
          TxnSignature:
            'CE6DB228BBEF958B085BBA42AE83184E706626FA8F7707025030BA9C1A5C362E506B21E1CB7DD5F6FE7B58D4F79612DCC2AB7E04F2E4B125C03DD99EB932AC0C',
          hash: 'E2AE01EE89DC41F4C7F0F2FABD1C8F35B34AB8F0AFF67B20636BBF9BCC064103',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'THB',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 3211264,
                    HighLimit: {
                      currency: 'THB',
                      issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
                      value: '0',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'THB',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '17.41',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: '5FB442C604FAAA49CB41462C93CED2911E1AFAA3B032AA493908446BD0C0F96E',
                  PreviousFields: {
                    LowLimit: {
                      currency: 'THB',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '17.43',
                    },
                  },
                  PreviousTxnID: 'EFBDB783C51977B6475993FD2EF1AA12D37997266FFF58266E432D45E72C5A7E',
                  PreviousTxnLgrSeq: 75221081,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                    Balance: '71045256',
                    Flags: 0,
                    OwnerCount: 16,
                    Sequence: 75025096,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85F9F4941A4D88AF2CAC87E330FD9B7D322375CA58E110CE77F446110B4BAA98',
                  PreviousFields: {
                    Balance: '71045266',
                    Sequence: 75025095,
                  },
                  PreviousTxnID: '4B09F6F6317E9EC0D3D4988F871A094513AE4E0C7F9DB58FD4515669EDDE94E2',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
            ],
            TransactionIndex: 51,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
          Fee: '10',
          Flags: 131072,
          LimitAmount: {
            currency: 'SGD',
            issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
            value: '0.654095',
          },
          Memos: [
            {
              Memo: {
                MemoData: '302E3635303439',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A67617465696F3A736764',
              },
            },
            {
              Memo: {
                MemoData: '302E36353737',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A696E646570656E64656E742D726573657276653A736764',
              },
            },
          ],
          Sequence: 75025096,
          SigningPubKey: 'EDABD8E42B91C6EDA9449E04CB7B27A4B0B913C9D9A92C39F145CD644B9FF6B786',
          TransactionType: 'TrustSet',
          TxnSignature:
            '15F24602541279558900A0EA2B3F509B1F69952DB9354A056C5C3497FFE770ED0F02C79AF194BE1E4511BE4BAF6BBF417937D27311A10B2D610D79C697E88F05',
          hash: 'AF1F58C380B6B95073D7671FF02CEE649FC47454C12FFC6300012B2D11E367C2',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                    Balance: '71045246',
                    Flags: 0,
                    OwnerCount: 16,
                    Sequence: 75025097,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85F9F4941A4D88AF2CAC87E330FD9B7D322375CA58E110CE77F446110B4BAA98',
                  PreviousFields: {
                    Balance: '71045256',
                    Sequence: 75025096,
                  },
                  PreviousTxnID: 'E2AE01EE89DC41F4C7F0F2FABD1C8F35B34AB8F0AFF67B20636BBF9BCC064103',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Balance: {
                      currency: 'SGD',
                      issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                      value: '0',
                    },
                    Flags: 3211264,
                    HighLimit: {
                      currency: 'SGD',
                      issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
                      value: '0',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'SGD',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '0.654095',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'EDA2B339D0BA44E6023FD68B55632DA8C26603083CD361EC67494406E242EE6A',
                  PreviousFields: {
                    LowLimit: {
                      currency: 'SGD',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '0.65165',
                    },
                  },
                  PreviousTxnID: '2C4C31C01DC9AB89B2CDB8D3F301807227D4EC402756A4964B00A786E14BD7BB',
                  PreviousTxnLgrSeq: 75221128,
                },
              },
            ],
            TransactionIndex: 52,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
          Fee: '10',
          Flags: 131072,
          LimitAmount: {
            currency: 'USD',
            issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
            value: '0.4599525',
          },
          Memos: [
            {
              Memo: {
                MemoData: '302E343630303235',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A6674783A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3435323639',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A626974686173683A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3435393636',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A696E646570656E64656E742D726573657276653A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3436303037',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A62697466696E65783A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3435393838',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A627473653A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3435393231',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A6B72616B656E3A757364',
              },
            },
            {
              Memo: {
                MemoData: '302E3436303134',
                MemoFormat: '746578742F637376',
                MemoType: '72617465733A6269747374616D703A757364',
              },
            },
          ],
          Sequence: 75025097,
          SigningPubKey: 'EDABD8E42B91C6EDA9449E04CB7B27A4B0B913C9D9A92C39F145CD644B9FF6B786',
          TransactionType: 'TrustSet',
          TxnSignature:
            '4830BFD8FDD75AC53437416D202A231583A03879101FF9C720A667ADAB6BAE617D6A677A95656CB72EF378F20D04C3559B9262D97FB485C9C0FA9B11B13AF208',
          hash: '10FA88020DDD292B7AAF66E5E5DD6C65133CD144C79BE8848AD4F03F08A07A90',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                    Balance: '71045236',
                    Flags: 0,
                    OwnerCount: 16,
                    Sequence: 75025098,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '85F9F4941A4D88AF2CAC87E330FD9B7D322375CA58E110CE77F446110B4BAA98',
                  PreviousFields: {
                    Balance: '71045246',
                    Sequence: 75025097,
                  },
                  PreviousTxnID: 'AF1F58C380B6B95073D7671FF02CEE649FC47454C12FFC6300012B2D11E367C2',
                  PreviousTxnLgrSeq: 75221159,
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
                    Flags: 3211264,
                    HighLimit: {
                      currency: 'USD',
                      issuer: 'rDLx56UDgChRy3HqwkFSDBpX4hL6sEgmtx',
                      value: '0',
                    },
                    HighNode: '0',
                    LowLimit: {
                      currency: 'USD',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '0.4599525',
                    },
                    LowNode: '0',
                  },
                  LedgerEntryType: 'RippleState',
                  LedgerIndex: 'DEFA7DCDBED9763A62EDCBFF41FDEEB20881435D1F25C6582008F64646EACE09',
                  PreviousFields: {
                    LowLimit: {
                      currency: 'USD',
                      issuer: 'rpXCfDds782Bd6eK9Hsn15RDnGMtxf752m',
                      value: '0.45982',
                    },
                  },
                  PreviousTxnID: '0F063FB4EFDACCEBBB413F101AEFD7E36FE1EB268B38FCF0B02986677CD7948D',
                  PreviousTxnLgrSeq: 75221143,
                },
              },
            ],
            TransactionIndex: 53,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
          Expiration: 751248593,
          Fee: '25',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          Sequence: 69051297,
          SigningPubKey: '030C37A44CC2925E49F64C4E4BE1597FAD29F21AA4F8C0AC7955E054205E253B80',
          TakerGets: {
            currency: '534F4C4F00000000000000000000000000000000',
            issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
            value: '614.85998',
          },
          TakerPays: '425570000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100DA73F1022419692443A6B089C1FA1CDE68A431187C1B81AC9EAEAEA60FE791FB02207C734E51CAF5474762611952FFF91965A65B7569A4A72842F934790D0FE3B328',
          hash: '4A6E27AA379E1AE26ACFD327E8A5482F8322B8224679CEF285E4C3E88855AE93',
          metaData: {
            AffectedNodes: [
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD18E6C26E',
                  NewFields: {
                    ExchangeRate: '5a1896fd18e6c26e',
                    RootIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD18E6C26E',
                    TakerGetsCurrency: '534F4C4F00000000000000000000000000000000',
                    TakerGetsIssuer: '1EB3EAA3AD86242E1D51DC502DD6566BD39E06A6',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '74FB2A5EC40AB4379A2181F4A82DB0E76241A820BB46B8AE56E013FFA39AC558',
                  NewFields: {
                    Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD18E6C26E',
                    Expiration: 751248593,
                    Sequence: 69051297,
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '614.85998',
                    },
                    TakerPays: '425570000',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    RootIndex: 'CE3E68235B48F9A5102248F9841C1DFC3CA816C0750C3854784E7F492285E428',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CE3E68235B48F9A5102248F9841C1DFC3CA816C0750C3854784E7F492285E428',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    Balance: '125996275',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 69051298,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'E778E0BFD5EB897A7CFA923AAB3171BC68BE807780C34488E0C14565C1A590EB',
                  PreviousFields: {
                    Balance: '125996300',
                    OwnerCount: 2,
                    Sequence: 69051297,
                  },
                  PreviousTxnID: '774053DC16DA97D71F23EE8136B880932B49C73BA61091F8EA317E0A700BCEF0',
                  PreviousTxnLgrSeq: 75221149,
                },
              },
            ],
            TransactionIndex: 54,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
          Fee: '25',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          OfferSequence: 69051295,
          Sequence: 69051298,
          SigningPubKey: '030C37A44CC2925E49F64C4E4BE1597FAD29F21AA4F8C0AC7955E054205E253B80',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '30440220203AF97F7560B389537D915D41C239D0625BA9A2507F75B6944224FACDB124F10220215F218EDB49B2BB8443344A182D40F219E7E6F5BD9F0FF98C78612A6CF00BA9',
          hash: 'EFBE29C0C5EEC75C24C3BAC11273BA1F2F49DF0EA3F049F9863BF21022E81DC0',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B0B0B3E7',
                    BookNode: '0',
                    Expiration: 751248553,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'C0C4DE8EB3523D4AE68E9E3D469C34814CB6D1E53F362BB5A41528F5E329335B',
                    PreviousTxnLgrSeq: 75221148,
                    Sequence: 69051295,
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '614.851338',
                    },
                    TakerPays: '425650000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '28E73C959B74EE6F3790CCE963C315CE207E21945D26C3FDF280997642882BF3',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a189842b0b0b3e7',
                    Flags: 0,
                    RootIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B0B0B3E7',
                    TakerGetsCurrency: '534F4C4F00000000000000000000000000000000',
                    TakerGetsIssuer: '1EB3EAA3AD86242E1D51DC502DD6566BD39E06A6',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B0B0B3E7',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    RootIndex: 'CE3E68235B48F9A5102248F9841C1DFC3CA816C0750C3854784E7F492285E428',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'CE3E68235B48F9A5102248F9841C1DFC3CA816C0750C3854784E7F492285E428',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rsEuxrQ9PaEWhKz9AMjJ9q55vpTAhRWcvG',
                    Balance: '125996250',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 69051299,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'E778E0BFD5EB897A7CFA923AAB3171BC68BE807780C34488E0C14565C1A590EB',
                  PreviousFields: {
                    Balance: '125996275',
                    OwnerCount: 3,
                    Sequence: 69051298,
                  },
                  PreviousTxnID: '4A6E27AA379E1AE26ACFD327E8A5482F8322B8224679CEF285E4C3E88855AE93',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
            ],
            TransactionIndex: 55,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 23561576,
          Sequence: 23561577,
          SigningPubKey: '03B51A3EDF70E4098DA7FB053A01C5A6A0A163A30ED1445F14F87C7C3295FCB3BE',
          TakerGets: '1000000000000',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
            value: '3471160',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100CD03DB4157C106B37039DD2B28984BC3D698CE267DB9EE94EA70C44A703D04B202207890E1290DA59D7F6EA18CF357317A8C5C2166D335D62B50F914FC04B517E356',
          hash: 'CCCC9D14A707656B2842435F27C8339D18958969DD5847E91B1CD1A3070AF19F',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0c524144bb3800',
                    Flags: 0,
                    RootIndex: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C524144BB3800',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: 'CED6E99370D5C00EF4EBF72567DA99F5661BFB3A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C524144BB3800',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C55006AC23000',
                  NewFields: {
                    ExchangeRate: '4f0c55006ac23000',
                    RootIndex: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C55006AC23000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: 'CED6E99370D5C00EF4EBF72567DA99F5661BFB3A',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM',
                    Balance: '4638110200',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 23561578,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '1DECD9844E95FFBA273F1B94BA0BF2564DDF69F2804497A6D7837B52050174A2',
                  PreviousFields: {
                    Balance: '4638110215',
                    Sequence: 23561577,
                  },
                  PreviousTxnID: '2E93AE69B370FA1B4E7A438940D8253BEB5219AD1D0CAE3590D273C7D6A62762',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM',
                    BookDirectory: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C524144BB3800',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2E93AE69B370FA1B4E7A438940D8253BEB5219AD1D0CAE3590D273C7D6A62762',
                    PreviousTxnLgrSeq: 75221158,
                    Sequence: 23561576,
                    TakerGets: '1000000000000',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
                      value: '3468140',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2D2B7901E53F9D1543D805C514D0342432B6C131E0D8D3CB60E95A103607D7FB',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexNext: '0',
                    IndexPrevious: '0',
                    Owner: 'rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM',
                    RootIndex: '47FAF5D102D8CE655574F440CDB97AC67C5A11068BB3759E87C2B9745EE94548',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '47FAF5D102D8CE655574F440CDB97AC67C5A11068BB3759E87C2B9745EE94548',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '6DC21B96058BDBE9F3DE5E7C4AE783AD804E5AFF6814EED90482672CE5328935',
                  NewFields: {
                    Account: 'rhhh49pFH96roGyuC4E5P4CHaNjS1k8gzM',
                    BookDirectory: '02BAAC1E67C1CE0E96F0FA2E8061020536CEDD043FEB0FF54F0C55006AC23000',
                    Sequence: 23561577,
                    TakerGets: '1000000000000',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y',
                      value: '3471160',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 56,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
          Fee: '12',
          Flags: 0,
          LastLedgerSequence: 75221177,
          OfferSequence: 75019564,
          Sequence: 75019577,
          SigningPubKey: 'ED75976513E118246043FC7E3A61344810506FF6D342D5B6AE110C86C028D8C510',
          TransactionType: 'OfferCancel',
          TxnSignature:
            'EF26F8723D239821241F0ED834A915032079928A2F69E8AB14AC83C737CC6A71939B861792E45B11264B0F6E10CB7BB72FE085E9C2034FAAA3B5E88721C61A0B',
          hash: '173AE4E9663EA6182656F5423681748773A423E741159859517513076BAA8C24',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '500e34d5c8c548c0',
                    Flags: 0,
                    RootIndex: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E34D5C8C548C0',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '00000000000000000000000058554D0000000000',
                    TakerPaysIssuer: 'EE0DD37B36EFD67B1BB1F6B01E9C6476DF972900',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E34D5C8C548C0',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    BookDirectory: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E34D5C8C548C0',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '1ece',
                    PreviousTxnID: '892B3E9AD3F81B13624C88C3F8411E7C09FB332C7DC5A6AB645E6BA8515C5CAA',
                    PreviousTxnLgrSeq: 75221149,
                    Sequence: 75019564,
                    TakerGets: '20000000',
                    TakerPays: {
                      currency: 'XUM',
                      issuer: 'r465PJyGWUE8su1oVoatht6cXZJTg1jc2m',
                      value: '799.748495',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '47E98DDE419EEB61FD908FCDE91B0E0400C0C06BADB3DF0CF6F78E5D605779E1',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    Balance: '1041413956',
                    Flags: 0,
                    OwnerCount: 46,
                    Sequence: 75019578,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '63B5C2B6C56B54D4F0B19865CC4A6C3D3B0151568F499EEC5994C61DFF5B5683',
                  PreviousFields: {
                    Balance: '1041413968',
                    OwnerCount: 47,
                    Sequence: 75019577,
                  },
                  PreviousTxnID: 'A32AE0B33681C0C4F376A22F1F8ADA0C64A47933BB04F19620D2E2602FA58012',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '1ecd',
                    Owner: 'rhPa8KijJK4riVWkDVv69NnUwZr2SEXJbR',
                    RootIndex: '0B050EE242D7E75AA58B141A537D82AF44C96EADDF9F6A1BF95246917B0EC92A',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'E6DA711E9E203453AE0376035A45BF564E3BFAE2C5C8CFE6FA6D4CE8059B30FF',
                },
              },
            ],
            TransactionIndex: 57,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221177,
          Sequence: 70933505,
          SigningPubKey: 'EDE8F6C3E0C548D1B389F357D83CA1AB6583600B21EF758320CF9DBFF8FDB3341D',
          TakerGets: '20000000',
          TakerPays: {
            currency: 'XUM',
            issuer: 'r465PJyGWUE8su1oVoatht6cXZJTg1jc2m',
            value: '799.188894',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '278B1726D6758C0D8531E280ABA5956C7EF945EDE0B52D57BB25C3FE233FE6E1F29D3139A0974AAB7851B7BF1CF38555286483CFCB5C57B70234018DCEC2700D',
          hash: '8CAE0668957D5CAFB3736A025ADF18295B650C9C6F533B2E23FFC85B88CC5583',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    IndexPrevious: '915',
                    Owner: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    RootIndex: '2527CE3E43FD231C568C475728683870BEC2CE18D8BF7CD9D30A1370095CF647',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '17FEAA70200D3D2F171FC4AEAF12AF9F39EE15712398E8A10E230AC2C4C584A9',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E324A52AD3180',
                  NewFields: {
                    ExchangeRate: '500e324a52ad3180',
                    RootIndex: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E324A52AD3180',
                    TakerPaysCurrency: '00000000000000000000000058554D0000000000',
                    TakerPaysIssuer: 'EE0DD37B36EFD67B1BB1F6B01E9C6476DF972900',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    Balance: '1316771903',
                    Flags: 0,
                    OwnerCount: 63,
                    Sequence: 70933506,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '4F7BC1BE763E253402D0CA5E58E7003D326BEA2FEB5C0FEE228660F795466F6E',
                  PreviousFields: {
                    Balance: '1316771918',
                    OwnerCount: 62,
                    Sequence: 70933505,
                  },
                  PreviousTxnID: '231A21EBD4CC3B2DBB331FC93EACF7B73C799CBDFBA69C34F344F38FCD71BA3E',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'FB67CCD725305FC962E22D3DE5EFE1311908BE737798578E4AF0D3F559641C83',
                  NewFields: {
                    Account: 'rhqTdSsJAaEReRsR27YzddqyGoWTNMhEvC',
                    BookDirectory: '381612B0D7E70C388EEB124965B43D41B30D548EBE364903500E324A52AD3180',
                    OwnerNode: '916',
                    Sequence: 70933505,
                    TakerGets: '20000000',
                    TakerPays: {
                      currency: 'XUM',
                      issuer: 'r465PJyGWUE8su1oVoatht6cXZJTg1jc2m',
                      value: '799.188894',
                    },
                  },
                },
              },
            ],
            TransactionIndex: 58,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 24260762,
          Sequence: 24260766,
          SigningPubKey: '026B8A4318970123B0BB3DC528C4DA62C874AD4A01F399DBEF21D621DDC32F6C81',
          TakerGets: '16536205434',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '62131.31931705426',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '304402205C71741C78E7459FC2BBAEE3FC7266220677C93D2B976CF8953646EB94A2E2450220592B150234E2995FB6D18F3AB56D51A63E04B3D03D4C1B3558516877FF9909C1',
          hash: 'EF1C49507B9C709E2E868F407AF683320C493D64F62A0BE7302B35238472C415',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D55864CD3B8C7',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '0F592E5ED6148CB70E1765060FCB1E2A1FAF83090EC77A32C719D33D13F710A1',
                    PreviousTxnLgrSeq: 75221151,
                    Sequence: 24260762,
                    TakerGets: '8684314805',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '32594.05717067194',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '19C3E32F265D63A33C49D943CC63D4A8166BBC12447BDCEECDDD765383F16A7C',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0d55864cd3b8c7',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D55864CD3B8C7',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D55864CD3B8C7',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D593C3FC66E5E',
                  NewFields: {
                    ExchangeRate: '4f0d593c3fc66e5e',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D593C3FC66E5E',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    Balance: '5160165775',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 24260767,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AC13F682F58D555C134D098EEEE1A14BECB904C65ACBBB0046B35B405E66A75',
                  PreviousFields: {
                    Balance: '5160165790',
                    Sequence: 24260766,
                  },
                  PreviousTxnID: '2E40454F5B76F4B582B33F17D7CD293FEC55AEC69D16305DB4C38D92A88ACABB',
                  PreviousTxnLgrSeq: 75221151,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '9FF974175354374C22264D25045C2F6B2E7A38FB58C92CD05E3A1BDB1C52D66C',
                  NewFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0D593C3FC66E5E',
                    Sequence: 24260766,
                    TakerGets: '16536205434',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '62131.31931705426',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    RootIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                },
              },
            ],
            TransactionIndex: 59,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 24260765,
          Sequence: 24260767,
          SigningPubKey: '026B8A4318970123B0BB3DC528C4DA62C874AD4A01F399DBEF21D621DDC32F6C81',
          TakerGets: '6371229528',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '26430.15372848856',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022053D892449C52CE05A878C07FAD1A5DF3F182B5A597E6FD6F519C846790F2BC7902202FD9C2D7AFAFC6FB3DE43EE8F55AF29E60F903CEAC158DE95F21A07B013988F0',
          hash: '02FEA1DE467A4B605192FF3450CEF6F5A5602377C13F1153F227044394D9EEF6',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F2286A6ED701',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '2E40454F5B76F4B582B33F17D7CD293FEC55AEC69D16305DB4C38D92A88ACABB',
                    PreviousTxnLgrSeq: 75221151,
                    Sequence: 24260765,
                    TakerGets: '435045932',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '2197.560568709169',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '2BFB6BFE488A617EB1CC8698C618F12A7188BF10BB3CBFA80B826606E89D86A0',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '47127A82EA2CE6CA33FC595AAABA5541664644F58D1F259F18A586875D52B73A',
                  NewFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EBCE9543C3560',
                    Sequence: 24260767,
                    TakerGets: '6371229528',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '26430.15372848856',
                    },
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EBCE9543C3560',
                  NewFields: {
                    ExchangeRate: '4f0ebce9543c3560',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EBCE9543C3560',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f11f2286a6ed701',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F2286A6ED701',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F2286A6ED701',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    Balance: '5160165760',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 24260768,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AC13F682F58D555C134D098EEEE1A14BECB904C65ACBBB0046B35B405E66A75',
                  PreviousFields: {
                    Balance: '5160165775',
                    Sequence: 24260767,
                  },
                  PreviousTxnID: 'EF1C49507B9C709E2E868F407AF683320C493D64F62A0BE7302B35238472C415',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    RootIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                },
              },
            ],
            TransactionIndex: 60,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 24260764,
          Sequence: 24260768,
          SigningPubKey: '026B8A4318970123B0BB3DC528C4DA62C874AD4A01F399DBEF21D621DDC32F6C81',
          TakerGets: '4548970587',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '20834.92214472213',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100DF4D444CA2304B8CB1D5E2CCF6438C231C080F131366425C4E8A144F4F83207B02203C99D1A7A3EA2CFAE5111482881609B324AEE179E407EBFCE3259B625B2D7E99',
          hash: '73073FCB7B70C3B3880648C8ECD9702B47D4F2E9DCBC8F719AC03C70948A15F1',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f1041131e8d5986',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F1041131E8D5986',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F1041131E8D5986',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10459CF1B9FE44',
                  NewFields: {
                    ExchangeRate: '4f10459cf1b9fe44',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10459CF1B9FE44',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    Balance: '5160165745',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 24260769,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AC13F682F58D555C134D098EEEE1A14BECB904C65ACBBB0046B35B405E66A75',
                  PreviousFields: {
                    Balance: '5160165760',
                    Sequence: 24260768,
                  },
                  PreviousTxnID: '02FEA1DE467A4B605192FF3450CEF6F5A5602377C13F1153F227044394D9EEF6',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'A804B750CA5425A2767549734AD8B1C8DB1DFCF38E59C9B32BF96B1FDACCFD94',
                  NewFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F10459CF1B9FE44',
                    Sequence: 24260768,
                    TakerGets: '4548970587',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '20834.92214472213',
                    },
                  },
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F1041131E8D5986',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'E29C681A6AB704D081C37D34F3B3B8B53CF5C9B022A250C34B6DF4A53B595E15',
                    PreviousTxnLgrSeq: 75221151,
                    Sequence: 24260764,
                    TakerGets: '9200660979',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '42094.40407930965',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'BE8B894549F3E535499CFE19D961847EF9F48F33591B723CA89D183EE38C64D5',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    RootIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                },
              },
            ],
            TransactionIndex: 61,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
          Fee: '15',
          Flags: 0,
          LastLedgerSequence: 75221161,
          OfferSequence: 24260763,
          Sequence: 24260769,
          SigningPubKey: '026B8A4318970123B0BB3DC528C4DA62C874AD4A01F399DBEF21D621DDC32F6C81',
          TakerGets: '5491903133',
          TakerPays: {
            currency: 'CNY',
            issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
            value: '27771.6205243895',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3044022031660B129B921B0368175F0843115D6795115892E4DA6B3723EC84B397D2001C02204C71A919BD7D762442691D9F2339CAB869CF0E3E396FD1ED4EB98C2590A183F0',
          hash: '003173E966FE830EDDB04AAC00CD1FF489B7DDE8BC4A0C21BC8BC061EDCAFA91',
          metaData: {
            AffectedNodes: [
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '4f0eb8cf436b0aa2',
                    Flags: 0,
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EB8CF436B0AA2',
                    TakerGetsCurrency: '0000000000000000000000000000000000000000',
                    TakerGetsIssuer: '0000000000000000000000000000000000000000',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EB8CF436B0AA2',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F728FBE2FBB8',
                  NewFields: {
                    ExchangeRate: '4f11f728fbe2fbb8',
                    RootIndex: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F728FBE2FBB8',
                    TakerPaysCurrency: '000000000000000000000000434E590000000000',
                    TakerPaysIssuer: '0360E3E0751BD9A566CD03FA6CAFC78118B82BA0',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '943122E14EB92AF504AFC6F4BA6B48954A8A23978FCA92CF80229959C2602D3D',
                  NewFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F11F728FBE2FBB8',
                    Sequence: 24260769,
                    TakerGets: '5491903133',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '27771.6205243895',
                    },
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    Balance: '5160165730',
                    Flags: 0,
                    OwnerCount: 5,
                    Sequence: 24260770,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '9AC13F682F58D555C134D098EEEE1A14BECB904C65ACBBB0046B35B405E66A75',
                  PreviousFields: {
                    Balance: '5160165745',
                    Sequence: 24260769,
                  },
                  PreviousTxnID: '73073FCB7B70C3B3880648C8ECD9702B47D4F2E9DCBC8F719AC03C70948A15F1',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    BookDirectory: '623C4C4AD65873DA787AC85A0A1385FE6233B6DE100799474F0EB8CF436B0AA2',
                    BookNode: '0',
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: '291B169C7392A574430D97599EAE4F94D0C007830ED7C1886E5F918B1C9B4C6A',
                    PreviousTxnLgrSeq: 75221151,
                    Sequence: 24260763,
                    TakerGets: '1158699754',
                    TakerPays: {
                      currency: 'CNY',
                      issuer: 'rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK',
                      value: '4801.477978832679',
                    },
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'DDAC7FC46FFA6E2ABF5708E5145EA173BD316CC87694814A7AC3B26328704AD7',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'rnruxxLTbJUMNtFNBJ7X2xSiy1KE7ajUuH',
                    RootIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: 'FBD0BC6A9DCBC5AEFB9C773EE6351AF11E244DBD1370EDF6801FD607F01D3DF8',
                },
              },
            ],
            TransactionIndex: 62,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
          Expiration: 751248594,
          Fee: '25',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          Sequence: 73829671,
          SigningPubKey: '02EF354B9C3DE2D05B60D64E6348248C5F45107D12CDE46CD693AF3651B4757EBF',
          TakerGets: {
            currency: '534F4C4F00000000000000000000000000000000',
            issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
            value: '140.592675',
          },
          TakerPays: '97310000',
          TransactionType: 'OfferCreate',
          TxnSignature:
            '3045022100B2C3E2F5F5153F5701BCA4D49DFCD9253DDA02E8D588FA1EE222A9E68012C42A0220614E4464F3478CDB0C004450FD43F0054B4831C41BA3245F8AD3DD52C9630105',
          hash: 'C9CE2B9730EEAF806415057932580168F8B8324AC91B5AD228F3926C3F4533CB',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    RootIndex: '40A09349B9F3F9AAB52EF853571C329C025CEAD9F377FDE68A7F3F8F372F40D7',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '40A09349B9F3F9AAB52EF853571C329C025CEAD9F377FDE68A7F3F8F372F40D7',
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'Offer',
                  LedgerIndex: '40D7C9E4737BBB7548B26A4126102FC8EB787998D7F12F1A5BBA3EAE2A2E29EB',
                  NewFields: {
                    Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD1895A6A3',
                    Expiration: 751248594,
                    Sequence: 73829671,
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '140.592675',
                    },
                    TakerPays: '97310000',
                  },
                },
              },
              {
                CreatedNode: {
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD1895A6A3',
                  NewFields: {
                    ExchangeRate: '5a1896fd1895a6a3',
                    RootIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A1896FD1895A6A3',
                    TakerGetsCurrency: '534F4C4F00000000000000000000000000000000',
                    TakerGetsIssuer: '1EB3EAA3AD86242E1D51DC502DD6566BD39E06A6',
                  },
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    Balance: '24996783',
                    Flags: 0,
                    OwnerCount: 3,
                    Sequence: 73829672,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'BDFBA74A0FD05B108F0FB0CC251E069529434D2A0EC4EB6330B6D752D590998C',
                  PreviousFields: {
                    Balance: '24996808',
                    OwnerCount: 2,
                    Sequence: 73829671,
                  },
                  PreviousTxnID: '67F26ECB9454CCFEE72D5441248E6BD04BEEEC62EF927EABB920AF8076CF497C',
                  PreviousTxnLgrSeq: 75221149,
                },
              },
            ],
            TransactionIndex: 63,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
          Fee: '25',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          OfferSequence: 73829669,
          Sequence: 73829672,
          SigningPubKey: '02EF354B9C3DE2D05B60D64E6348248C5F45107D12CDE46CD693AF3651B4757EBF',
          TransactionType: 'OfferCancel',
          TxnSignature:
            '3044022015993BD5C01C701C1DF85AA519A3DA0BD54501A8119E62C4179776286BF52D9C02204EE10D362D51875A6EE661A85CF3AD7047E28D0D0D2C0756776DE383692F1530',
          hash: 'FCB4AA540331346AA8CBDC1F29F8E6E0AD1AED1632955892F48B417553F20063',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Flags: 0,
                    Owner: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    RootIndex: '40A09349B9F3F9AAB52EF853571C329C025CEAD9F377FDE68A7F3F8F372F40D7',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '40A09349B9F3F9AAB52EF853571C329C025CEAD9F377FDE68A7F3F8F372F40D7',
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    ExchangeRate: '5a189842b100a5ab',
                    Flags: 0,
                    RootIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B100A5AB',
                    TakerGetsCurrency: '534F4C4F00000000000000000000000000000000',
                    TakerGetsIssuer: '1EB3EAA3AD86242E1D51DC502DD6566BD39E06A6',
                    TakerPaysCurrency: '0000000000000000000000000000000000000000',
                    TakerPaysIssuer: '0000000000000000000000000000000000000000',
                  },
                  LedgerEntryType: 'DirectoryNode',
                  LedgerIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B100A5AB',
                },
              },
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    Balance: '24996758',
                    Flags: 0,
                    OwnerCount: 2,
                    Sequence: 73829673,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: 'BDFBA74A0FD05B108F0FB0CC251E069529434D2A0EC4EB6330B6D752D590998C',
                  PreviousFields: {
                    Balance: '24996783',
                    OwnerCount: 3,
                    Sequence: 73829672,
                  },
                  PreviousTxnID: 'C9CE2B9730EEAF806415057932580168F8B8324AC91B5AD228F3926C3F4533CB',
                  PreviousTxnLgrSeq: 75221159,
                },
              },
              {
                DeletedNode: {
                  FinalFields: {
                    Account: 'raHGBERMka3KZsfpTQUAtumxmvpqhFLyrk',
                    BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A189842B100A5AB',
                    BookNode: '0',
                    Expiration: 751248556,
                    Flags: 0,
                    OwnerNode: '0',
                    PreviousTxnID: 'E9DC0707787273E85470A9501BD9BBABB388A221BDB5CF958C6D35EC3FB1CA3E',
                    PreviousTxnLgrSeq: 75221149,
                    Sequence: 73829669,
                    TakerGets: {
                      currency: '534F4C4F00000000000000000000000000000000',
                      issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                      value: '140.593165',
                    },
                    TakerPays: '97330000',
                  },
                  LedgerEntryType: 'Offer',
                  LedgerIndex: 'E399045B5010F23407EC04D5D929C518A1276E4D6027F7B7D953B70219FBB74F',
                },
              },
            ],
            TransactionIndex: 64,
            TransactionResult: 'tesSUCCESS',
          },
        },
        {
          Account: 'rwtbEQzCksGvubg51BEHjmmMmD5vCJm4Mw',
          Fee: '15',
          Flags: 2147483648,
          LastLedgerSequence: 75221160,
          Sequence: 73094213,
          SigningPubKey: 'ED6060CC76896CB1719EC05B2A446AD39AB024FD77AF039B591D25DB76531B83CE',
          TakerGets: '14071816',
          TakerPays: {
            currency: 'XDX',
            issuer: 'rMJAXYsbNzhwp7FfYnAsYP5ty3R9XnurPo',
            value: '39986.7033',
          },
          TransactionType: 'OfferCreate',
          TxnSignature:
            '924F65DBFDF8225392130E2B4F3B92DE4CB7C4F9C29C4F52F69C93CB5FDE922D6ACCB76943FF9515B87731F5E9425C5691CB198C605E53E1714DD299AF232E0B',
          hash: 'F084C68B052B372B2FA8F4509E373B065FC148B76C053CE4A8F2FE16249F7E26',
          metaData: {
            AffectedNodes: [
              {
                ModifiedNode: {
                  FinalFields: {
                    Account: 'rwtbEQzCksGvubg51BEHjmmMmD5vCJm4Mw',
                    Balance: '17223945',
                    Flags: 0,
                    OwnerCount: 4,
                    Sequence: 73094214,
                  },
                  LedgerEntryType: 'AccountRoot',
                  LedgerIndex: '8F5ED4563D755E10E31517402670C900F4CC031C2A0A5472FF33B6518B843F85',
                  PreviousFields: {
                    Balance: '17223960',
                    Sequence: 73094213,
                  },
                  PreviousTxnID: '0A69E1A0143299C8FC0D9633B6523A1F7A5E96095FA27C43179A7990BAEE8BFB',
                  PreviousTxnLgrSeq: 75221158,
                },
              },
            ],
            TransactionIndex: 65,
            TransactionResult: 'tecUNFUNDED_OFFER',
          },
        },
      ],
    },
    ledger_hash: 'F092F106CDBCE276C787279D530D59868A573C1F169DED455F501DC2655A791D',
    ledger_index: 75221159,
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
};
export default ledgerMocks;
