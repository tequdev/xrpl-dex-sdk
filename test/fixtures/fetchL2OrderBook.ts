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
  book_offers: {
    id: 1,
    status: 'success',
    type: 'response',
    result: {
      ledger_current_index: 10714274,
      offers: [
        {
          Account: 'rwBYyfufTzk77zUSKEu4MvixfarC35av1J',
          BookDirectory: '6EAB7C172DEFA430DBFAD120FDC373B5F5AF8B191649EC98570B9980E49C7DE8',
          BookNode: '0000000000000000',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0000000000000008',
          PreviousTxnID: '92DBA0BE18B331AC61FB277211477A255D3B5EA9C5FE689171DE689FB45FE18A',
          PreviousTxnLgrSeq: 10714030,
          Sequence: 386940,
          TakerGets: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0.2849323720855092',
          },
          TakerPays: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '93.030522464522',
          },
          index: '8092033091034D94219BC1131AF7A6B469D790D81831CB479AB6F67A32BE4E13',
          owner_funds: '31.77682120227525',
          quality: '326.5003614141928',
        },
        {
          Account: 'rwjsRktX1eguUr1pHTffyHnC4uyrvX58V1',
          BookDirectory: '6EAB7C172DEFA430DBFAD120FDC373B5F5AF8B191649EC98570BBF1EEFA2FB0A',
          BookNode: '0000000000000000',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0000000000000000',
          PreviousTxnID: 'C6BDA152363E3CFE18688A6830B49F3DB2B05976110B5908EA4EB66D93DEEB1F',
          PreviousTxnLgrSeq: 10714031,
          Sequence: 207855,
          TakerGets: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0.00302447007930511',
          },
          TakerPays: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '1',
          },
          index: '8DB3520FF9CB16A0EA955056C49115F8CFB03A587D0A4AFC844F1D220EFCE0B9',
          owner_funds: '0.0670537912615556',
          quality: '330.6364334177034',
        },
        {
          Account: 'raudnGKfTK23YKfnS7ixejHrqGERTYNFXk',
          BookDirectory: '6EAB7C172DEFA430DBFAD120FDC373B5F5AF8B191649EC98570BC3A506FC016F',
          BookNode: '0000000000000000',
          Expiration: 472785283,
          Flags: 131072,
          LedgerEntryType: 'Offer',
          OwnerNode: '00000000000008F0',
          PreviousTxnID: '77E763F1D02F58965CD1AD94F557B37A582FAC7760B71F391B856959836C2F7B',
          PreviousTxnLgrSeq: 10713576,
          Sequence: 110103,
          TakerGets: {
            currency: 'USD',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '0.3',
          },
          TakerPays: {
            currency: 'BTC',
            issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
            value: '99.34014894048333',
          },
          index: '9ECDFD31B28643FD3A54658398C5715D6DAD574F83F04529CB24765770F9084D',
          owner_funds: '4.021116654525635',
          quality: '331.1338298016111',
        },
      ],
    },
  },
};

const expectedResponse = {
  symbol: 'USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
  bids: [
    ['0.0030627837459923', '93.030522464522'],
    ['0.00302447007930511', '1'],
  ],
  asks: [['331.133829801611', '0.3']],
};

const fetchL2OrderBook = { request, mocks, expectedResponse };

export default fetchL2OrderBook;
