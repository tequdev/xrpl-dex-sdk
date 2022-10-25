const request = 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc';

const mocks = {
  account_info: {
    id: 2,
    result: {
      account_data: {
        Account: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
        Balance: '332050157523',
        Domain: '4555522D5553442D47482D434F4C44',
        Flags: 9043968,
        LedgerEntryType: 'AccountRoot',
        OwnerCount: 2,
        PreviousTxnID: 'E2953424753756EB2DF147FED1CDA278EAE792873DD87DC93B8863034B909026',
        PreviousTxnLgrSeq: 31803055,
        Sequence: 14,
        TransferRate: 1002000000,
        index: 'E92252628BAD34D8F605086085A0C09305954ACF08D9B8740D2038753E9EC0F1',
      },
      ledger_hash: 'CD9640C77292CFC7969719C67415D22D0563ACF9EA457AA2712C2C0981DEECE6',
      ledger_index: 32208927,
      validated: true,
    },
    status: 'success',
    type: 'response',
  },
};

const expectedResponse = {};

const watchOrderBook = {
  mocks,
  request,
  expectedResponse,
};

export default watchOrderBook;
