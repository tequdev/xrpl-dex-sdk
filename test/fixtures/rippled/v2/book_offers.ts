import { BookOffersResponse } from 'xrpl';
import { MarketSymbol } from '../../../../src/models';

export interface BookOffersMocks {
  [symbol: MarketSymbol]: BookOffersResponse;
}

const bookOffers: BookOffersMocks = {
  'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc': {
    id: 'XRP/USD+rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
    result: {
      ledger_hash: '25A8E7BE8885E765C55A61F6FD20B68D9DA3F1ABDD72F9F02F0C3BB0EA5F595F',
      ledger_index: 31678372,
      offers: [
        {
          Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
          BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B07DCA06A8EDE49',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: 'BFD5E454429243B21A5BD820443F8162BFD7E3D162A985F1CE9947C5EDDCF61F',
          PreviousTxnLgrSeq: 31678330,
          Sequence: 421694,
          TakerGets: {
            currency: 'USD',
            issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
            value: '677.348972',
          },
          TakerPays: '1498909860',
          index: '519AC38732F4A4EE65F44716B379180C95847C79C7A9F79913C00F3E330B0C0A',
          owner_funds: '6773.489717440213',
          quality: '2212906.377600585',
        },
        {
          Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
          BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B07F37439E87579',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: 'E97648BC7E07EF1A0145756CE2AFEA116A685E2E8E0A1CC1121E81B0348E0C8C',
          PreviousTxnLgrSeq: 31678096,
          Sequence: 421682,
          TakerGets: {
            currency: 'USD',
            issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
            value: '1016.023458',
          },
          TakerPays: '2273865935',
          index: '2B8EA5BE6D0BECC21C5C2794F458D35B9EA4085BB43B55581A671012327E905D',
          quality: '2238005.350266233',
        },
        {
          Account: 'rfyJRyFZzX71LL5LreHpUZBZqrB18xUL4P',
          BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B0812EE1B326093',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: '17E8DA3BF0E4B2038FEA0C80D27CE13A0B472451608A76DB4E0756FAA6FB2C45',
          PreviousTxnLgrSeq: 31678096,
          Sequence: 421683,
          TakerGets: {
            currency: 'USD',
            issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
            value: '1693.372429',
          },
          TakerPays: '3848381350',
          index: 'BD75885E665D416E40B8DF531747C13EB93D0C09EF85CC9C724D34F61166BBA0',
          quality: '2272613.681488019',
        },
        {
          Account: 'rMCZ2b38xNt1mfQFjJdVRmQJQvT4Ndnk9c',
          BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5B0B7F593A8905CD',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: '862D2F3D4B8801A48DE27D0D7BE4AEE0EA0D03749906DF5EA1162B59D34FB170',
          PreviousTxnLgrSeq: 30729216,
          Sequence: 30572139,
          TakerGets: {
            currency: 'USD',
            issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
            value: '3.09',
          },
          TakerPays: '10000000',
          index: '8AC16B67528DE7CA34BF8C95AC3497E6E25FF1017AA831284A4522C1D600C60C',
          owner_funds: '5.327121405359371',
          quality: '3236245.954692557',
        },
        {
          Account: 'rDUGKSR74Gq34VcJhSrRpM1feHssTiLKxU',
          BookDirectory: '34934213EE8188F0EFF777733A1FE76AE29E9B2E32916B7F5C038D7EA4C68000',
          BookNode: '0',
          Flags: 0,
          LedgerEntryType: 'Offer',
          OwnerNode: '0',
          PreviousTxnID: '0BC21637AD340DDBBC20EF90E450C911BE8C9B2424345766BA88318D22898714',
          PreviousTxnLgrSeq: 29373403,
          Sequence: 12,
          TakerGets: {
            currency: 'USD',
            issuer: 'rVnYNK9yuxBz4uP8zC8LEFokM2nqH3poc',
            value: '0.05',
          },
          TakerPays: '500000',
          index: 'C6483299351AE2873610500C55EAB96BE53214E4AB002698CF32F324B027A17B',
          owner_funds: '0.203411',
          quality: '10000000',
        },
      ],
      validated: true,
    },
    status: 'success',
    type: 'response',
  },
};

export default bookOffers;
