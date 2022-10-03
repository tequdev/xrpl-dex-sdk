import { OrderId } from '../../../../src/models';

export interface LedgerEntryMocks {
  offers: {
    open: {
      [orderId: OrderId]: any;
    };
    closed: {
      [orderId: OrderId]: any;
    };
  };
  errors: {
    [errorName: string]: {
      [orderId: OrderId]: any;
    };
  };
}

const ledgerEntries: LedgerEntryMocks = {
  offers: {
    open: {
      'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151': {
        id: 0,
        result: {
          index: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
          ledger_hash: '15A72D33EE46194F52A9FC9D030042BA694D09A0ABD888783920C1A9C9EA433E',
          ledger_index: 31513386,
          node: {
            Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            BookDirectory: '72128015EB40BE5804FEF5B56FC2388AC0254245667757FB4E038D7EA4C68000',
            BookNode: '0',
            Flags: 0,
            LedgerEntryType: 'Offer',
            OwnerNode: '0',
            PreviousTxnID: '77D8B4889A59DDAE101900317AC415A83983459BCE0FAE3FD8CD41B8122095BF',
            PreviousTxnLgrSeq: 31319490,
            Sequence: 30419151,
            TakerGets: '100000000',
            TakerPays: { currency: 'TST', issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd', value: '10' },
            index: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
          },
          validated: true,
        },
        type: 'response',
      },
      'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P:416442': {
        result: {
          index: '718202414B46578D525C14A6F769E3E92A04DC374659A8515CC2E926377D9785',
          ledger_hash: 'E127340D11A9269E4153B3E27A02F0F317FA5DD40A250E71E4B7913617FE7F20',
          ledger_index: 31535051,
          node: {
            Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
            BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B08024CCB9BCBA3',
            BookNode: '0',
            Flags: 0,
            LedgerEntryType: 'Offer',
            OwnerNode: '0',
            PreviousTxnID: 'DA6D424EA1E45CD5103D8DFA391481115289B7E5ABBDCDCC7338E37221942970',
            PreviousTxnLgrSeq: 31535037,
            Sequence: 416442,
            TakerGets: {
              currency: 'USD',
              issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
              value: '725.26577',
            },
            TakerPays: '1634987419',
            index: '718202414B46578D525C14A6F769E3E92A04DC374659A8515CC2E926377D9785',
          },
          validated: true,
        },
        status: 'success',
        type: 'response',
      },
    },
    closed: {
      'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419159': {
        error: 'entryNotFound',
        id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419159',
        ledger_hash: 'FA276D6768733F8BD3CCB6883657DD2C0473A2B9527E64F492BF72907C7432F4',
        ledger_index: 31537969,
        request: {
          command: 'ledger_entry',
          id: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419159',
          ledger_index: 'validated',
          offer: {
            account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
            seq: 30419159,
          },
        },
        status: 'error',
        type: 'response',
        validated: true,
      },
      'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151': {
        error: 'entryNotFound',
        ledger_hash: 'D93EAB6CED6B8AFCE12E8463B620A0EC00209FACD0D741A8426DDA7062DFB4F5',
        ledger_index: 31534997,
        request: {
          command: 'ledger_entry',
          index: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
          ledger_index: 'validated',
        },
        status: 'error',
        type: 'response',
        validated: true,
      },
    },
  },
  errors: {
    entryNotFound: {
      'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ:30419151': {
        error: 'entryNotFound',
        ledger_hash: 'D93EAB6CED6B8AFCE12E8463B620A0EC00209FACD0D741A8426DDA7062DFB4F5',
        ledger_index: 31534997,
        request: {
          command: 'ledger_entry',
          index: '0D5A1CD41A637B533D123EE3408F898875E0F8FCA743CF98599E347F55D606DC',
          ledger_index: 'validated',
        },
        status: 'error',
        type: 'response',
        validated: true,
      },
    },
  },
};

export default ledgerEntries;
