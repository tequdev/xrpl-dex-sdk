import { OrderId } from '../../../../src/models';

const orders: {
  TST: {
    buy: {
      open: any;
      closed: any;
    };
  };
  USD: {
    buy: {
      open: any;
      closed: any;
    };
  };
  byId: {
    [orderId: OrderId]: any;
  };
} = {
  TST: {
    buy: {
      open: {
        id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151',
        clientOrderId: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
        datetime: '2022-09-20T00:06:51.000Z',
        timestamp: 1663632411000,
        lastTradeTimestamp: 1663632411000,
        status: 'open',
        symbol: 'TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd/XRP',
        type: 'limit',
        timeInForce: 'GTC',
        side: 'buy',
        amount: '10',
        price: '10',
        average: '0',
        filled: '0',
        remaining: '10',
        cost: '0',
        trades: [],
        info: {
          transaction: {
            engine_result: 'tesSUCCESS',
            engine_result_code: 0,
            engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
            ledger_hash: '482CA92CE9DF285741739351A545A57F81B367910D9613F930B22F24FC915926',
            ledger_index: 31567828,
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
            status: 'closed',
            transaction: {
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
            },
            type: 'transaction',
            validated: true,
          },
        },
      },
      closed: {},
    },
  },
  USD: {
    buy: {
      open: {
        id: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442',
        clientOrderId: '718202414B46578D525C14A6F769E3E92A04DC374659A8515CC2E926377D9785',
        datetime: '2022-09-27T20:00:20.000Z',
        timestamp: 1664308820000,
        lastTradeTimestamp: 1664308820000,
        status: 'open',
        symbol: 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
        type: 'limit',
        timeInForce: 'GTC',
        side: 'buy',
        amount: '1634.987419',
        price: '0.443591040256194',
        average: '0',
        filled: '0',
        remaining: '1634.987419',
        cost: '0',
        trades: [],
        info: {
          transactionData: {
            transaction: {
              Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
              Fee: '150',
              Flags: 2147483648,
              LastLedgerSequence: 31535038,
              OfferSequence: 416438,
              Sequence: 416442,
              SigningPubKey: '02CF8FF8A4CD909AF53654815438977F86B50F7EF4539EE2378EC792ECA5036B43',
              TakerGets: { currency: 'USD', issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc', value: '725.26577' },
              TakerPays: '1634987419',
              TransactionType: 'OfferCreate',
              TxnSignature:
                '304402200EC7E424E5474AD6BDA192FD86F7AFE3E48EEC6006F04537DA19D633D721AE5F022056357E9E78D48531877BD819327D85C2F5D8E3F2D91EE7D1F16C6AFB80AD964F',
              date: 717624020,
              hash: 'DA6D424EA1E45CD5103D8DFA391481115289B7E5ABBDCDCC7338E37221942970',
              inLedger: 31535037,
              ledger_index: 31535037,
              validated: true,
            },
            metadata: { AffectedNodes: [], TransactionIndex: 8, TransactionResult: 'tesSUCCESS' },
            offers: [],
            previousTxnId: undefined,
            date: 717624020,
          },
        },
      },
      closed: {},
    },
  },
  byId: {
    'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW:68092799': {
      id: 'rM9qvgim4CGbBhbCS4vtntTQzy11ShCNnW:68092799',
      clientOrderId: '',
      datetime: '2022-09-29T23:50:12Z',
      timestamp: 1664495412000,
      lastTradeTimestamp: 1664495412000,
      status: 'open',
      symbol: '534F4C4F00000000000000000000000000000000+rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz/XRP',
      type: 'limit',
      timeInForce: 'IOC',
      side: 'sell',
      amount: '5.5925405637836',
      price: '0.279453672651175',
      average: '0',
      filled: '0',
      remaining: '1634.987419',
      cost: '0',
      trades: [],
      info: {
        transactionData: {
          transaction: {
            Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
            Fee: '150',
            Flags: 2147483648,
            LastLedgerSequence: 31535038,
            OfferSequence: 416438,
            Sequence: 416442,
            SigningPubKey: '02CF8FF8A4CD909AF53654815438977F86B50F7EF4539EE2378EC792ECA5036B43',
            TakerGets: { currency: 'USD', issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc', value: '725.26577' },
            TakerPays: '1634987419',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402200EC7E424E5474AD6BDA192FD86F7AFE3E48EEC6006F04537DA19D633D721AE5F022056357E9E78D48531877BD819327D85C2F5D8E3F2D91EE7D1F16C6AFB80AD964F',
            date: 717624020,
            hash: 'DA6D424EA1E45CD5103D8DFA391481115289B7E5ABBDCDCC7338E37221942970',
            inLedger: 31535037,
            ledger_index: 31535037,
            validated: true,
          },
          metadata: { AffectedNodes: [], TransactionIndex: 8, TransactionResult: 'tesSUCCESS' },
          offers: [],
          previousTxnId: undefined,
          date: 717624020,
        },
      },
    },
    'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442': {
      id: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442',
      clientOrderId: '718202414B46578D525C14A6F769E3E92A04DC374659A8515CC2E926377D9785',
      datetime: '2022-09-27T20:00:20.000Z',
      timestamp: 1664308820000,
      lastTradeTimestamp: 1664308820000,
      status: 'open',
      symbol: 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
      type: 'limit',
      timeInForce: 'GTC',
      side: 'buy',
      amount: '1634.987419',
      price: '0.443591040256194',
      average: '0',
      filled: '0',
      remaining: '1634.987419',
      cost: '0',
      trades: [],
      info: {
        transactionData: {
          transaction: {
            Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
            Fee: '150',
            Flags: 2147483648,
            LastLedgerSequence: 31535038,
            OfferSequence: 416438,
            Sequence: 416442,
            SigningPubKey: '02CF8FF8A4CD909AF53654815438977F86B50F7EF4539EE2378EC792ECA5036B43',
            TakerGets: { currency: 'USD', issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc', value: '725.26577' },
            TakerPays: '1634987419',
            TransactionType: 'OfferCreate',
            TxnSignature:
              '304402200EC7E424E5474AD6BDA192FD86F7AFE3E48EEC6006F04537DA19D633D721AE5F022056357E9E78D48531877BD819327D85C2F5D8E3F2D91EE7D1F16C6AFB80AD964F',
            date: 717624020,
            hash: 'DA6D424EA1E45CD5103D8DFA391481115289B7E5ABBDCDCC7338E37221942970',
            inLedger: 31535037,
            ledger_index: 31535037,
            validated: true,
          },
          metadata: { AffectedNodes: [], TransactionIndex: 8, TransactionResult: 'tesSUCCESS' },
          offers: [],
          previousTxnId: undefined,
          date: 717624020,
        },
      },
    },
    'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151': {
      id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151',
      clientOrderId: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
      datetime: '2022-09-20T00:06:51.000Z',
      timestamp: 1663632411000,
      lastTradeTimestamp: 1663632411000,
      status: 'open',
      symbol: 'TST+rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd/XRP',
      type: 'limit',
      timeInForce: 'GTC',
      side: 'buy',
      amount: '10',
      price: '10',
      average: '0',
      filled: '0',
      remaining: '10',
      cost: '0',
      trades: [],
      info: {
        transaction: {
          engine_result: 'tesSUCCESS',
          engine_result_code: 0,
          engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
          ledger_hash: '482CA92CE9DF285741739351A545A57F81B367910D9613F930B22F24FC915926',
          ledger_index: 31567828,
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
          status: 'closed',
          transaction: {
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
          },
          type: 'transaction',
          validated: true,
        },
      },
    },
  },
};

export default orders;
