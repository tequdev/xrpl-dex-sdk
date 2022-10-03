import { OrderId } from '../../../../src/models';

const subscribe: {
  offerCreate: {
    [orderId: OrderId]: any;
  };
  transactions: any[];
  ledger: any[];
  bookOffers: any;
} = {
  bookOffers: {
    id: 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
    result: {},
    status: 'success',
    type: 'response',
  },
  offerCreate: {
    'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151': {
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
    'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442': {
      engine_result: 'tesSUCCESS',
      engine_result_code: 0,
      engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
      ledger_hash: 'CD8FD2F65D09EF64362E090BF9AF595EEC322FDB0C16398B3711EAD8E580ADD0',
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
      status: 'closed',
      transaction: {
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
      },
      type: 'transaction',
      validated: true,
    },
  },
  transactions: [
    {
      engine_result: 'tesSUCCESS',
      engine_result_code: 0,
      engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
      ledger_hash: 'D6CB5FB66151CFF1B98425497DCA1AF05B27F995E68BFE62A42A3D1647977755',
      ledger_index: 31539366,
      meta: {
        AffectedNodes: [
          {
            ModifiedNode: {
              FinalFields: {
                Account: 'rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t',
                Balance: '200778330217',
                Flags: 0,
                OwnerCount: 5,
                Sequence: 31428505,
              },
              LedgerEntryType: 'AccountRoot',
              LedgerIndex: '266E1025BAA2519A17DF130F0015B9B27C126629FA4FDAEF57F14C6F434047A9',
              PreviousFields: {
                Balance: '200778330227',
                OwnerCount: 6,
                Sequence: 31428504,
              },
              PreviousTxnID: 'C2BBD0B79543C1098970BDAE5D39BFA3521BE7E6A57E9A7CAFAABB7305D8DA3A',
              PreviousTxnLgrSeq: 31539360,
            },
          },
          {
            DeletedNode: {
              FinalFields: {
                ExchangeRate: '5422bae4aa1f57d6',
                Flags: 0,
                RootIndex: 'BBC43D8DC3A4CDE72016A26FFA64A1A90F060BFC82F35FE35422BAE4AA1F57D6',
                TakerGetsCurrency: '0000000000000000000000005347420000000000',
                TakerGetsIssuer: '73CD956385DDF242A2A9A685E803DC1A0FA5AEB4',
                TakerPaysCurrency: '0000000000000000000000005553440000000000',
                TakerPaysIssuer: '73CD956385DDF242A2A9A685E803DC1A0FA5AEB4',
              },
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: 'BBC43D8DC3A4CDE72016A26FFA64A1A90F060BFC82F35FE35422BAE4AA1F57D6',
            },
          },
          {
            DeletedNode: {
              FinalFields: {
                Account: 'rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t',
                BookDirectory: 'BBC43D8DC3A4CDE72016A26FFA64A1A90F060BFC82F35FE35422BAE4AA1F57D6',
                BookNode: '0',
                Flags: 0,
                OwnerNode: '0',
                PreviousTxnID: '7F3FF76804EEE5CAE16F648D92A8CC558F10115226F0FA8A22749CF9A021CAC7',
                PreviousTxnLgrSeq: 31539357,
                Sequence: 31428502,
                TakerGets: {
                  currency: 'SGB',
                  issuer: 'rBZJzEisyXt2gvRWXLxHftFRkd1vJEpBQP',
                  value: '0.08218993161999999',
                },
                TakerPays: {
                  currency: 'USD',
                  issuer: 'rBZJzEisyXt2gvRWXLxHftFRkd1vJEpBQP',
                  value: '0.08034592224',
                },
              },
              LedgerEntryType: 'Offer',
              LedgerIndex: 'EA9ADBB795E1E6FFE7985F18F1BA380D2CFA5497E168D5393EA4964BE356AF84',
            },
          },
          {
            ModifiedNode: {
              FinalFields: {
                Flags: 0,
                Owner: 'rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t',
                RootIndex: 'F5546DD714B57805DDC981BFFF01CFA07C7E8AD3AFCD1E287964A73D38E35538',
              },
              LedgerEntryType: 'DirectoryNode',
              LedgerIndex: 'F5546DD714B57805DDC981BFFF01CFA07C7E8AD3AFCD1E287964A73D38E35538',
            },
          },
        ],
        TransactionIndex: 0,
        TransactionResult: 'tesSUCCESS',
      },
      status: 'closed',
      transaction: {
        Account: 'rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t',
        Fee: '10',
        Flags: 0,
        LastLedgerSequence: 31539384,
        OfferSequence: 31428502,
        Sequence: 31428504,
        SigningPubKey: 'ED58765E6EDBEB6B228DD160B5234DCF9724E25610627CDC314D9160A4F2E39446',
        TransactionType: 'OfferCancel',
        TxnSignature:
          'AE9ACC227C0EE2A91562D577EBFE8495419872AE612DD9BDC594790224304B9DAAC6055192D69830A2EBE513A8609B5E31708FCE7D18E3185A7EB579E5175D06',
        date: 717637420,
        hash: 'A8FC5207229B208D2B15B39D59AC4BBC410EAACF7EF4DA0FC855BC86785C590B',
      },
      type: 'transaction',
      validated: true,
    },
  ],
  ledger: [
    {
      id: 'Example watch one account and all new ledgers',
      result: {
        fee_base: 10,
        fee_ref: 10,
        ledger_hash: '24B6070488651F5066E295CD15DB959CC2434C97F6F8B1B3175D284EC615CBA1',
        ledger_index: 31539395,
        ledger_time: 717637510,
        reserve_base: 10000000,
        reserve_inc: 2000000,
        validated_ledgers: '31016075-31539395',
      },
      status: 'success',
      type: 'response',
    },
    {
      fee_base: 10,
      fee_ref: 10,
      ledger_hash: '58908A9BB31ED251F2B1294AB0A1C914606F2486001E129305521156EFF88BE5',
      ledger_index: 31539397,
      ledger_time: 717637512,
      reserve_base: 10000000,
      reserve_inc: 2000000,
      txn_count: 0,
      type: 'ledgerClosed',
      validated_ledgers: '31016075-31539397',
    },
  ],
};

export default subscribe;
