import { AccountAddress } from '../../../../src/models';
import { getOrderId } from '../../../../src/utils';

export interface TxMocks {
  orderId: {
    [transactionType: string]: {
      [account: AccountAddress]: any;
    };
  };
  hash: {
    [txHash: string]: any;
  };
}

const offerCreate = [
  // SELL ORDER vvv
  {
    id: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy:73714139',
    result: {
      Account: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
      Expiration: 749346608,
      Fee: '25',
      Flags: 2147483648,
      LastLedgerSequence: 74731851,
      Sequence: 73714139,
      SigningPubKey: '0286F8EE689B8EC826F1150A88F26B01904679BEA3624B290636669A0A9980F19C',
      TakerGets: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
        value: '257.573999',
      },
      TakerPays: '71980000',
      TransactionType: 'OfferCreate',
      TxnSignature:
        '3044022069BDD72F73CEF8EE376BA36E13FECE9A482D971DB7E82AE5A7A65AC2F588FBCC0220410550A3ED291D4F1E06F60243E1E26AE6D82099BE4E0764626D619C747E2324',
      hash: '9ADD5E35A01FACB83A78B06FEDFC37FD7A42C780810ED89B1F484E4F0DF2D7B8',
      meta: {
        AffectedNodes: [
          {
            ModifiedNode: {
              FinalFields: {
                Flags: 0,
                Owner: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                RootIndex: '59B0D4098183D7570E55D8CB9163B84540152E0161DC0CF77C2DD3C8D6C68762',
              },
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: '59B0D4098183D7570E55D8CB9163B84540152E0161DC0CF77C2DD3C8D6C68762',
            },
          },
          {
            CreatedNode: {
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A09ED9DC8E54083',
              NewFields: {
                ExchangeRate: '5a09ed9dc8e54083',
                RootIndex: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A09ED9DC8E54083',
                TakerGetsCurrency: '534F4C4F00000000000000000000000000000000',
                TakerGetsIssuer: '1EB3EAA3AD86242E1D51DC502DD6566BD39E06A6',
              },
            },
          },
          {
            CreatedNode: {
              LedgerEntryType: 'Offer',
              LedgerIndex: '8041BE8E58F9B5B94843F2C7B4D3D06169FA18771B56A969FC271795679ECDA3',
              NewFields: {
                Account: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A09ED9DC8E54083',
                Expiration: 749346608,
                Sequence: 73714139,
                TakerGets: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                  value: '257.573999',
                },
                TakerPays: '71980000',
              },
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                Balance: '24994357',
                Flags: 0,
                OwnerCount: 3,
                Sequence: 73714140,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: 'E04E4023E48B45A185B1302B2777FC078200776DFB0A0F7B22AB730C76DEF96F',
              PreviousFields: {
                Balance: '24994382',
                OwnerCount: 2,
                Sequence: 73714139,
              },
              PreviousTxnID: 'DE8F1FD3E055470DDEEE55084E9BD4F44F9327592A27C92C7D1BBD5A17012088',
              PreviousTxnLgrSeq: 74731841,
            },
          },
        ],
        TransactionIndex: 40,
        TransactionResult: 'tesSUCCESS',
      },
      date: 717810611,
      ledger_index: 74731850,
      validated: true,
    },
    status: 'success',
    type: 'response',
    warnings: [
      {
        id: 2001,
        message:
          "This is a clio server. clio only serves validated data. If you want to talk to rippled, include 'ledger_index':'current' in your request",
      },
    ],
  },
  // BUY ORDER vvv
  {
    id: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW:68092799',
    result: {
      Account: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW',
      Fee: '12',
      Flags: 655360,
      LastLedgerSequence: 74832836,
      Memos: [
        {
          Memo: {
            MemoData: '34623265643465312D636134632D343033342D626638322D376266633361303933643433',
          },
        },
      ],
      Sequence: 68092799,
      SigningPubKey: '03D76E3ED6362CB274DC52573BF92DAEBE75AB0EF25B66E4C7C93A8A8AFCF91106',
      TakerGets: {
        currency: '457175696C69627269756D000000000000000000',
        issuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
        value: '10',
      },
      TakerPays: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
        value: '0.02423824445136',
      },
      TransactionType: 'OfferCreate',
      TxnSignature:
        '304402203F694888F8119D49A9AB06521FC87A7917114B005B1F1D1B8E1E108A3B87284B022039D17E222997BADFA76E832DA0FABF953766F4104B89038FC3C883A8DFD69874',
      hash: '7D34175E9CC0A8C49D9DA80BF1BA81D06D22F172CF6E2270BC69329335FD4C9B',
      meta: {
        AffectedNodes: [
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rUMVEBbZB5cuffPqnvgmbFPA7EEmJ2K1uJ',
                Balance: '118488004',
                Flags: 0,
                OwnerCount: 2,
                Sequence: 73747163,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: '1E33391309F54466B2510871B6D5B8CC5D0F0FCCCEA8EE33E276496D5330F841',
              PreviousFields: {
                Balance: '120050860',
              },
              PreviousTxnID: '41AA6C093D031783EED11D3A3031A6ABAC22384E009E6D421D5A7B7F6181CE7A',
              PreviousTxnLgrSeq: 74731850,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-10',
                },
                Flags: 2228224,
                HighLimit: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rUMVEBbZB5cuffPqnvgmbFPA7EEmJ2K1uJ',
                  value: '98262937',
                },
                HighNode: '0',
                LowLimit: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
                  value: '0',
                },
                LowNode: 'cbb',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: '486DC88BE08D2AD06B7B3B6EF8D11FB4596814AD74DC60D7EEA5013EDF465683',
              PreviousFields: {
                Balance: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '0',
                },
              },
              PreviousTxnID: '77363C4E3268D559B2EE75CD71A78A483A0DD9BC55C8E47705655397E80C0524',
              PreviousTxnLgrSeq: 74729838,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-251.6196001821601',
                },
                Flags: 2228224,
                HighLimit: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                  value: '399620531',
                },
                HighNode: '0',
                LowLimit: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                  value: '0',
                },
                LowNode: '34de',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: '65BF5D6DD8AF75B6488964C1883B4FA54447BE399122A47F8EEA3D7A66547783',
              PreviousFields: {
                Balance: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-257.2127',
                },
              },
              PreviousTxnID: '7078ADC80EC6FC83851DDF87ED10BB7E96A3ADCA4D16353BAA541712BBD8D29B',
              PreviousTxnLgrSeq: 74731563,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                BookDirectory: '5C8970D155D65DB8FF49B291D7EFFA4A09F9E8A68D9974B25A09ED9DC8E54083',
                BookNode: '0',
                Expiration: 749346608,
                Flags: 0,
                OwnerNode: '0',
                Sequence: 73714139,
                TakerGets: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                  value: '251.9814584362164',
                },
                TakerPays: '70417144',
              },
              LedgerEntryType: 'Offer',
              LedgerIndex: '8041BE8E58F9B5B94843F2C7B4D3D06169FA18771B56A969FC271795679ECDA3',
              PreviousFields: {
                TakerGets: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                  value: '257.573999',
                },
                TakerPays: '71980000',
              },
              PreviousTxnID: '9ADD5E35A01FACB83A78B06FEDFC37FD7A42C780810ED89B1F484E4F0DF2D7B8',
              PreviousTxnLgrSeq: 74731850,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-5.592540563783607',
                },
                Flags: 2228224,
                HighLimit: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW',
                  value: '400000000',
                },
                HighNode: '0',
                LowLimit: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
                  value: '0',
                },
                LowNode: '1ba3',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: '9BB25180875F0E761F215729FAF2264F1E78ECCF2F72708907FD41FB5A569CB4',
              PreviousFields: {
                Balance: {
                  currency: '534F4C4F00000000000000000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '0',
                },
              },
              PreviousTxnID: 'C3EEC500974D55469D1A96505BEEB95D59E21975DB880ECEC9A8F7ACFAA8382C',
              PreviousTxnLgrSeq: 69192029,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rUMVEBbZB5cuffPqnvgmbFPA7EEmJ2K1uJ',
                BookDirectory: '8DFA6E78CAB715332FBF45CB8FCE3BF4FD55FF70592FD0A04F16BB7159761E74',
                BookNode: '0',
                Expiration: 749346606,
                Flags: 131072,
                OwnerNode: '0',
                Sequence: 73747161,
                TakerGets: '76647144',
                TakerPays: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
                  value: '490.430204',
                },
              },
              LedgerEntryType: 'Offer',
              LedgerIndex: 'B7EA77D2A2AA21EF8145C6DC3523EACC9AB17CEBCB48E8A87FA5440D804B7C07',
              PreviousFields: {
                TakerGets: '78210000',
                TakerPays: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
                  value: '500.430204',
                },
              },
              PreviousTxnID: '495100739480969C6F2CAC1B454C382422F21380BBC4D897156915DB9A8C57E7',
              PreviousTxnLgrSeq: 74731850,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW',
                Balance: '11999988',
                Flags: 0,
                OwnerCount: 2,
                Sequence: 68092800,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: 'BDCB0088486B18C62CB5EF8878BE4D504AA3656EF7DFDA90B6544B9611B5AD95',
              PreviousFields: {
                Balance: '12000000',
                Sequence: 68092799,
              },
              PreviousTxnID: 'FB4980D5B71C8700F10482D3CF16FB20DA280B09A6E3FE51FF1E1818EF8F7DD2',
              PreviousTxnLgrSeq: 74718059,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Balance: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-544.5815957986514',
                },
                Flags: 2228224,
                HighLimit: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW',
                  value: '0',
                },
                HighNode: '0',
                LowLimit: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
                  value: '0',
                },
                LowNode: 'ccb',
              },
              LedgerEntryType: 'RippleState',
              LedgerIndex: 'DC81F8F4BC2CD9BE622A7983AFD391835C57655D7A55C51001B62A9BCFE2BB08',
              PreviousFields: {
                Balance: {
                  currency: '457175696C69627269756D000000000000000000',
                  issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                  value: '-554.5815957986514',
                },
              },
              PreviousTxnID: 'FB4980D5B71C8700F10482D3CF16FB20DA280B09A6E3FE51FF1E1818EF8F7DD2',
              PreviousTxnLgrSeq: 74718059,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'raFG8EbxT3Y682JRP8Ccceu5CDWaWSbDSy',
                Balance: '26557213',
                Flags: 0,
                OwnerCount: 3,
                Sequence: 73714140,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: 'E04E4023E48B45A185B1302B2777FC078200776DFB0A0F7B22AB730C76DEF96F',
              PreviousFields: {
                Balance: '24994357',
              },
              PreviousTxnID: '9ADD5E35A01FACB83A78B06FEDFC37FD7A42C780810ED89B1F484E4F0DF2D7B8',
              PreviousTxnLgrSeq: 74731850,
            },
          },
        ],
        TransactionIndex: 20,
        TransactionResult: 'tesSUCCESS',
      },
      date: 717810612,
      ledger_index: 74731851,
      validated: true,
    },
    status: 'success',
    type: 'response',
    warnings: [
      {
        id: 2001,
        message:
          "This is a clio server. clio only serves validated data. If you want to talk to rippled, include 'ledger_index':'current' in your request",
      },
    ],
  },
  {
    id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151',
    result: {
      Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
      Fee: '12',
      Flags: 0,
      LastLedgerSequence: 31319508,
      Sequence: 30419151,
      SigningPubKey: '03C8D190247CF46B9A694B73F365387B2FD60DAF464394FD7727EBBE0C0D059D3F',
      TakerGets: '100000000',
      TakerPays: { currency: 'TST', issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd', value: '10' },
      TransactionType: 'OfferCreate',
      TxnSignature:
        '3045022100BC8D892350C36AAECF0EB79296AECA50CFDBC745431D02348A35EA4F8EF28E370220561843E36BFE9B4BAA46ACFD532B8D4C1E104464A5321592592C10F18E0DB0FD',
      date: 716947611,
      hash: '77D8B4889A59DDAE101900317AC415A83983459BCE0FAE3FD8CD41B8122095BF',
      inLedger: 31319490,
      ledger_index: 31319490,
      meta: {
        AffectedNodes: [
          {
            CreatedNode: {
              LedgerEntryType: 'Offer',
              LedgerIndex: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
              NewFields: {
                Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
                Sequence: 30419151,
                TakerGets: '100000000',
                TakerPays: { currency: 'TST', issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd', value: '10' },
              },
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
                Balance: '999999515',
                Flags: 0,
                OwnerCount: 16,
                Sequence: 30419152,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
              PreviousFields: { Balance: '999999527', OwnerCount: 15, Sequence: 30419151 },
              PreviousTxnID: '5014C5C8A4985E951DEFFB2A692B56B05B10C6468D8F496A201F94EBBB1E40CF',
              PreviousTxnLgrSeq: 31319487,
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
        ],
        TransactionIndex: 0,
        TransactionResult: 'tesSUCCESS',
      },
      validated: true,
    },
    type: 'response',
  },
  {
    id: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442',
    result: {
      Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
      Fee: '150',
      Flags: 2147483648,
      LastLedgerSequence: 31535038,
      OfferSequence: 416438,
      Sequence: 416442,
      SigningPubKey: '02CF8FF8A4CD909AF53654815438977F86B50F7EF4539EE2378EC792ECA5036B43',
      TakerGets: {
        currency: 'USD',
        issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
        value: '725.26577',
      },
      TakerPays: '1634987419',
      TransactionType: 'OfferCreate',
      TxnSignature:
        '304402200EC7E424E5474AD6BDA192FD86F7AFE3E48EEC6006F04537DA19D633D721AE5F022056357E9E78D48531877BD819327D85C2F5D8E3F2D91EE7D1F16C6AFB80AD964F',
      date: 717624020,
      hash: 'DA6D424EA1E45CD5103D8DFA391481115289B7E5ABBDCDCC7338E37221942970',
      inLedger: 31535037,
      ledger_index: 31535037,
      meta: {
        AffectedNodes: [
          {
            DeletedNode: {
              FinalFields: {
                Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
                BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B07FCA452C28AFD',
                BookNode: '0',
                Flags: 0,
                OwnerNode: '0',
                PreviousTxnID: '67A189CF703C1EA6102AB03F00F934B10A2D92AA4CA86674F300895E042B79D9',
                PreviousTxnLgrSeq: 31534878,
                Sequence: 416438,
                TakerGets: {
                  currency: 'USD',
                  issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
                  value: '725.26577',
                },
                TakerPays: '1630475439',
              },
              LedgerEntryType: 'Offer',
              LedgerIndex: '2EB3164385718A7FF537BE0EC04F55B1E6D85156B30CE510307A0376B9856040',
            },
          },
          {
            DeletedNode: {
              FinalFields: {
                ExchangeRate: '5b07fca452c28afd',
                Flags: 0,
                RootIndex: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B07FCA452C28AFD',
                TakerGetsCurrency: '0000000000000000000000005553440000000000',
                TakerGetsIssuer: '054F6F784A58F9EFB0A9EB90B83464F9D1664619',
                TakerPaysCurrency: '0000000000000000000000000000000000000000',
                TakerPaysIssuer: '0000000000000000000000000000000000000000',
              },
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B07FCA452C28AFD',
            },
          },
          {
            CreatedNode: {
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B08024CCB9BCBA3',
              NewFields: {
                ExchangeRate: '5b08024ccb9bcba3',
                RootIndex: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B08024CCB9BCBA3',
                TakerGetsCurrency: '0000000000000000000000005553440000000000',
                TakerGetsIssuer: '054F6F784A58F9EFB0A9EB90B83464F9D1664619',
              },
            },
          },
          {
            CreatedNode: {
              LedgerEntryType: 'Offer',
              LedgerIndex: '718202414B46578D525C14A6F769E3E92A04DC374659A8515CC2E926377D9785',
              NewFields: {
                Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
                BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B08024CCB9BCBA3',
                Sequence: 416442,
                TakerGets: {
                  currency: 'USD',
                  issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
                  value: '725.26577',
                },
                TakerPays: '1634987419',
              },
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
                Balance: '14848709054',
                Flags: 0,
                OwnerCount: 8,
                Sequence: 416443,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: 'A9AB6FE8524D9F7F01763FF4A3710912AEEE329B26F9467D12ED97C26F8D2B3E',
              PreviousFields: {
                Balance: '14848709204',
                Sequence: 416442,
              },
              PreviousTxnID: 'C2E0F31C3290B4BF6444A00622A7A6C872EE1C4E5FD0FEB17F3AFFFC0C8ED0DB',
              PreviousTxnLgrSeq: 31535035,
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Flags: 0,
                Owner: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
                RootIndex: 'D9BB5CF1324791F57C7A6C7366766753513195F020AA7902D929D74B87A6431E',
              },
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: 'D9BB5CF1324791F57C7A6C7366766753513195F020AA7902D929D74B87A6431E',
            },
          },
        ],
        TransactionIndex: 8,
        TransactionResult: 'tesSUCCESS',
      },
      validated: true,
    },
    status: 'success',
    type: 'response',
  },
];

const txMocks: TxMocks = {
  orderId: {},
  hash: {},
};

for (const tx of offerCreate) {
  if (!txMocks.orderId.OfferCreate) txMocks.orderId.OfferCreate = {};
  txMocks.orderId.OfferCreate[getOrderId(tx.result.Account, tx.result.Sequence)] = tx;
  txMocks.hash[tx.result.hash] = tx;
}

export default txMocks;
