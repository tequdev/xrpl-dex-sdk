const submitSmallSellOrder = {
  id: 0,
  status: 'success',
  type: 'response',
  result: {
    success: true,
    engine_result: 'tesSUCCESS',
    engine_result_code: 0,
    engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
    tx_blob:
      '1200002280000000240000016861D4838D7EA4C6800000000000000000000000000055534400000000004B4E9C06F24296074F7BC48F92A97916C6DC5EA9684000000000002710732103AB40A0490F9B7ED8DF29D246BF2D6269820A0EE7742ACDD457BEA7C7D0931EDB7446304402200E5C2DD81FDF0BE9AB2A8D797885ED49E804DBF28E806604D878756410CA98B102203349581946B0DDA06B36B35DBC20EDA27552C1F167BCF5C6ECFF49C6A46F858081144B4E9C06F24296074F7BC48F92A97916C6DC5EA983143E9D4A2B8AA0780F682D136F7A56D6724EF53754',
    tx_json: {
      Account: 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn',
      Amount: {
        currency: 'USD',
        issuer: 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn',
        value: '1',
      },
      Destination: 'ra5nK24KXen9AHvsdFTKHSANinZseWnPcX',
      Fee: '10000',
      Flags: 2147483648,
      Sequence: 360,
      SigningPubKey: '03AB40A0490F9B7ED8DF29D246BF2D6269820A0EE7742ACDD457BEA7C7D0931EDB',
      TransactionType: 'Payment',
      TxnSignature:
        '304402200E5C2DD81FDF0BE9AB2A8D797885ED49E804DBF28E806604D878756410CA98B102203349581946B0DDA06B36B35DBC20EDA27552C1F167BCF5C6ECFF49C6A46F8580',
      hash: '4D5D90890F8D49519E4151938601EF3D0B30B16CD6A519D9C99102C9FA77F7E0',
    },
  },
};

const submitSmallBuyOrder2 = {
  id: 7,
  result: {
    Account: 'rGR8cy4gqXEyNFKjeUsK3MuHRXCLHZUH6K',
    Fee: '12',
    Flags: 0,
    LastLedgerSequence: 31318555,
    Sequence: 31317481,
    SigningPubKey: '023312ADDFAE48B2F088FC80C3AA572363F0DAB9A8657181B243FC87EB96D15176',
    TakerGets: '95000000',
    TakerPays: {
      currency: 'TST',
      issuer: 'rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd',
      value: '10',
    },
    TransactionType: 'OfferCreate',
    TxnSignature:
      '304402201923376195C08969B36F7B9B4A9BDF19DB773DA8F02BE30A7A8C83C92C22A42A02203824C0DF64DEAD6953A3F1FD713BA7969213C6D4A353FE46E635872299282A3D',
    date: 716944602,
    hash: 'A3A39B7CBEECBC0F594DC1CD03D47062ACC0162DDD096EB5BE4C36D2FAF14A08',
    inLedger: 31318537,
    ledger_index: 31318537,
    meta: {
      AffectedNodes: [],
      TransactionIndex: 0,
      TransactionResult: 'tesSUCCESS',
    },
    validated: true,
  },
  type: 'response',
};

export default {
  buy: {
    small2: submitSmallBuyOrder2,
  },
  sell: {
    small: submitSmallSellOrder,
  },
};
