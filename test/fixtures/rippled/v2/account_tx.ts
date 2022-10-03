import { AccountAddress } from '../../../../src/models';

export interface AccountTxMocks {
  [account: AccountAddress]: any;
}

const accountTx: AccountTxMocks = {
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
