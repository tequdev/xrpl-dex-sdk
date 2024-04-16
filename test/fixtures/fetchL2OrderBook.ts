const request = {
  symbol: 'USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
  limit: 3,
  params: {},
};

const mocks = {
  account_info: {
    id: 2,
    result: {
      account_data: {
        Account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        Balance: '100100076',
        Flags: 0,
        LedgerEntryType: 'AccountRoot',
        OwnerCount: 0,
        PreviousTxnID: 'B733348A47BC763D1820F3799CC4A36CE27B8A0FFAC8B2F9DD5D0FCBD4362F90',
        PreviousTxnLgrSeq: 31911276,
        Sequence: 1,
        index: 'B7D526FDDF9E3B3F95C3DC97C353065B0482302500BBB8051A5C090B596C6133',
      },
      ledger_current_index: 32209682,
      queue_data: {
        txn_count: 0,
      },
      validated: false,
    },
    status: 'success',
    type: 'response',
  },
  book_offers1: {
    id: 1,
    status: 'success',
    type: 'response',
    result: {
      ledger_current_index: 87300098,
      offers: [
        {
          Account: 'r39rBggWHTUN95x31mAdxPCC7XnhuHRHor',
          BookDirectory: '20294C923E80A51B487EB9547B3835FD483748B170D2D0A4500FA5E60260862F',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '10939',
          PreviousTxnID: 'E6C0CE83082C99D579DA19C745EBF07FD16474590ECAC3C9FACD389841054EAA',
          PreviousTxnLgrSeq: 81409131,
          Sequence: 3350199,
          TakerGets: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '229.175921550537',
          },
          TakerPays: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0.0100941266900699',
          },
          index: '9576A5875F9C9D37AB883A7D85A51C12FA44B045EFF87EB23F72E44FC412CF05',
          owner_funds: '709.2115651833054',
          quality: '0.00004404531951601199',
        },
        {
          Account: 'raHmRZScJY6cGBxQajh1fzcR5m5kPimhjs',
          BookDirectory: '20294C923E80A51B487EB9547B3835FD483748B170D2D0A4501786BEAF58B257',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '11',
          PreviousTxnID: 'E6AEE27FCA031DCB1E52392F7FEF8297823AF6623AFC9602842DF002082B0020',
          PreviousTxnLgrSeq: 76260297,
          Sequence: 4086,
          TakerGets: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '30151.07328033296',
          },
          TakerPays: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '1.996627592896694',
          },
          index: '250F00461751EB356915107C8BF3C15234C94C9012371692869EB30F7F26CA79',
          owner_funds: '1056918.746031392',
          quality: '0.00006622078008078935',
        },
      ],
    },
  },
  book_offers2: {
    id: 1,
    status: 'success',
    type: 'response',
    result: {
      ledger_current_index: 87300098,
      offers: [
        {
          Account: 'raHmRZScJY6cGBxQajh1fzcR5m5kPimhjs',
          BookDirectory: '6EAB7C172DEFA430DBFAD120FDC373B5F5AF8B191649EC98592321CFAB414000',
          BookNode: '0',
          Flags: 131072,
          LedgerEntryType: 'Offer',
          OwnerNode: 'c',
          PreviousTxnID: '5F51FB454DE8ABCD9465540EE95A9DA04103D943F9083BD6F384979205558C2D',
          PreviousTxnLgrSeq: 59237688,
          Sequence: 3641,
          TakerGets: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '5',
          },
          TakerPays: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '494440',
          },
          index: '15E8C7DB281AFB20465660AAB6173F5BD4A3976778C40697F77FA758DB9177F0',
          owner_funds: '6.59541829282802',
          quality: '98888',
        },
        {
          Account: 'randomHTp7b1qeveNexfb7Gj63TAnQrR9r',
          BookDirectory: '6EAB7C172DEFA430DBFAD120FDC373B5F5AF8B191649EC985A11C37937E08000',
          BookNode: '0',
          Flags: 131072,
          LedgerEntryType: 'Offer',
          OwnerNode: '2a',
          PreviousTxnID: '1B4B50DF8D3CCAC1CAF3780781E22DA4060BCA922512ECE20D7228FE0FCF92F4',
          PreviousTxnLgrSeq: 29812084,
          Sequence: 12053,
          TakerGets: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '1',
          },
          TakerPays: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '500000',
          },
          index: '5908DDAA812EC400A85B4EDD932C6FACFE33BAE3FF77CE3A03CE878883E9151E',
          owner_funds: '0',
          quality: '500000',
          taker_gets_funded: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0',
          },
          taker_pays_funded: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0',
          },
        },
      ],
    },
  },
};

const expectedResponse = {
  symbol: 'USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
  bids: [
    ['0.0000101124504489928', '494440'],
    ['0.000002', '500000'],
  ],
  asks: [
    ['0.000044045319516012', '229.175921550537'],
    ['0.0000662207800807894', '30151.073280333'],
  ],
};

const fetchL2OrderBook = { request, mocks, expectedResponse };

export default fetchL2OrderBook;
