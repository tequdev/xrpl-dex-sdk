import { AccountAddress, CurrencyCode } from '../../../../src/models';

export interface AccountInfoMocks {
  users: {
    rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t: any;
    rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ: any;
    [account: AccountAddress]: any;
  };
  issuers: {
    TST: any;
    USD: any;
    'USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq': any;
    [currency: CurrencyCode]: any;
  };
}

const accountInfo: AccountInfoMocks = {
  users: {
    rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t: {
      id: 2,
      result: {
        account_data: {
          Account: 'rLZGBrdXNvS1RPjjJB7Z4FeA4w5Hggtt7t',
          Balance: '200778541418',
          Flags: 0,
          LedgerEntryType: 'AccountRoot',
          OwnerCount: 4,
          PreviousTxnID: 'CB5DEE4C57158D408C8D17E8F29AAD0551E7472A0A2CD499B77D626BC78D15B0',
          PreviousTxnLgrSeq: 31539698,
          Sequence: 31428590,
          index: '266E1025BAA2519A17DF130F0015B9B27C126629FA4FDAEF57F14C6F434047A9',
        },
        ledger_current_index: 31539699,
        queue_data: {
          txn_count: 0,
        },
        validated: false,
      },
      status: 'success',
      type: 'response',
    },
    rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ: {
      id: 2,
      result: {
        account_data: {
          Account: 'rn5umFvUWKXqwrGJSRcV24wz9zZFiG7rsQ',
          Balance: '48000000',
          Flags: 0,
          LedgerEntryType: 'AccountRoot',
          OwnerCount: 9,
          PreviousTxnID: '03175FA35CBFB0B646FC8E69DF393138B7DD81063309EE15C63BB8AAF1B85404',
          PreviousTxnLgrSeq: 31524078,
          Sequence: 30419173,
          index: '208DD325D60BDB14D3D0EA3485FC1671B6FE115BBE1C8710876945FA988DF9BA',
        },
        ledger_current_index: 31536745,
        queue_data: {
          txn_count: 0,
        },
        validated: false,
      },
      status: 'success',
      type: 'response',
    },
  },
  issuers: {
    TST: {
      id: 2,
      result: {
        account_data: {
          Account: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
          Balance: '44299155570',
          Domain: '7872706C2E6F7267',
          Flags: 8388608,
          LedgerEntryType: 'AccountRoot',
          OwnerCount: 2,
          PreviousTxnID: '723797149826307A9D47400BEC999A7932555AA1EF01274214ADEB2DF9C17DD4',
          PreviousTxnLgrSeq: 31391374,
          Sequence: 26105475,
          index: 'E9D51582719D9591393D88318C07B19B413150CA07C76E9B7A03097EDECE2364',
        },
        ledger_current_index: 31513387,
        validated: false,
      },
      type: 'response',
    },
    USD: {
      id: 2,
      result: {
        account_data: {
          Account: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
          Balance: '332050157523',
          Domain: '4555522D5553442D47482D434F4C44',
          Flags: 9043968,
          LedgerEntryType: 'AccountRoot',
          OwnerCount: 2,
          PreviousTxnID: 'F8B2102EC5393AF097D81A0A66EF1E79E86702D5BE7882C8D9476A354D473A6C',
          PreviousTxnLgrSeq: 31521076,
          Sequence: 14,
          TransferRate: 1002000000,
          index: 'E92252628BAD34D8F605086085A0C09305954ACF08D9B8740D2038753E9EC0F1',
        },
        ledger_hash: 'A80B83D002FF66EEA7FA00631251DC499529373C50898FC2F01756BEFBF1E760',
        ledger_index: 31535105,
        validated: true,
      },
      status: 'success',
      type: 'response',
    },
    'USD+rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq': {
      id: 2,
      result: {
        account_data: {
          Account: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
          Balance: '7445437083159',
          Flags: 8519680,
          LedgerEntryType: 'AccountRoot',
          MessageKey: '02000000000000000000000000F32FC9DDE9280E99125B555FE79571ADF3A8E162',
          OwnerCount: 14,
          PreviousTxnID: 'BB2CEB4239B0A6402AA28446161C9EE0AA5DFCF0333F8CC146B05D04715BA472',
          PreviousTxnLgrSeq: 75199915,
          RegularKey: 'rregCwVvZRdQPdNKXD5bpFq3esu9hreK3',
          Sequence: 2870,
          TransferRate: 1002000000,
          index: 'BF1F2A23D614916E3C6ED2DCC389468CFA09045BEDB54C71A05C5E94EA6C6CFE',
        },
        ledger_hash: '3AE6053EDB094C8BC57932AD143D4AA61114B63139901F5276585009259F5F4A',
        ledger_index: 75201007,
        validated: true,
      },
      status: 'success',
      type: 'response',
    },
  },
};

export default accountInfo;
