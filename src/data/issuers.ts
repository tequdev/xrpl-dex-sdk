import { Issuers, XrplNetwork } from '../models';

export interface IssuersData {
  [network: string]: Issuers;
}

const issuers: IssuersData = {
  [XrplNetwork.Testnet]: {
    AktaryTech: {
      name: 'AktaryTech',
      trusted: true,
      website: 'https://aktarytech.com',
      addresses: ['rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B'],
      currencies: [{ code: 'AKT', issuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B' }],
    },
  },
  [XrplNetwork.Mainnet || XrplNetwork.MainnetFullHistory1 || XrplNetwork.MainnetFullHistory2]: {
    Sologenic: {
      name: 'Sologenic',
      trusted: true,
      website: 'https://sologenic.com',
      addresses: ['rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz'],
      currencies: [{ code: '534F4C4F00000000000000000000000000000000', issuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz' }],
    },
    Coreum: {
      name: 'Coreum',
      trusted: true,
      website: 'https://coreum.com',
      addresses: ['rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D'],
      currencies: [{ code: '434F524500000000000000000000000000000000', issuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D' }],
    },
    Multichain: {
      name: 'Multichain',
      trusted: true,
      website: 'https://multichain.org',
      addresses: ['rDsvn6aJG4YMQdHnuJtP9NLrFp18JYTJUf', 'rDsvn6aJG4YMQdHnuJtP9NLrFp18JYTJUf'],
      currencies: [
        { code: '5553445400000000000000000000000000000000', issuer: 'rDsvn6aJG4YMQdHnuJtP9NLrFp18JYTJUf' },
        { code: '5553444300000000000000000000000000000000', issuer: 'rDsvn6aJG4YMQdHnuJtP9NLrFp18JYTJUf' },
      ],
    },
    GateHub: {
      name: 'GateHub',
      trusted: true,
      website: 'https://gatehub.net',
      addresses: [
        'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
        'r3ttJ41YnMrKiLqGUXJpQE8urqyMGjC8vE',
        'rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL',
        'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
        'rDAN8tzydyNfnNf2bfUQY6iR96UbpvNsze',
        'rcyS4CeCZVYvTiKcxj6Sx32ibKwcDHLds',
        'rcXY84C4g14iFp6taFXjjQGVeHqSCh9RX',
        'rckzVpTnKpP4TJ1puQe827bV3X4oYtdTP',
        'rctArjqVvTHihekzDeecKo6mkTYTUSBNc',
      ],
      currencies: [
        { code: 'USD', issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq' },
        { code: 'EUR', issuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq' },
        { code: 'QAU', issuer: 'r3ttJ41YnMrKiLqGUXJpQE8urqyMGjC8vE' },
        { code: 'BTC', issuer: 'rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL' },
        { code: 'ETH', issuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h' },
        { code: 'ETC', issuer: 'rDAN8tzydyNfnNf2bfUQY6iR96UbpvNsze' },
        { code: 'BCH', issuer: 'rcyS4CeCZVYvTiKcxj6Sx32ibKwcDHLds' },
        { code: 'DSH', issuer: 'rcXY84C4g14iFp6taFXjjQGVeHqSCh9RX' },
        { code: 'REP', issuer: 'rckzVpTnKpP4TJ1puQe827bV3X4oYtdTP' },
        { code: 'SGB', issuer: 'rctArjqVvTHihekzDeecKo6mkTYTUSBNc' },
      ],
    },
    Bitstamp: {
      name: 'Bitstamp',
      trusted: true,
      website: 'https://bitstamp.net',
      addresses: [
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      ],
      currencies: [
        { code: 'USD', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'EUR', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'JPY', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'GBP', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'CHF', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'AUD', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
        { code: 'BTC', issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B' },
      ],
    },
    CasinoCoin: {
      name: 'CasinoCoin',
      trusted: true,
      website: 'https://casinocoin.org',
      addresses: ['rCSCManTZ8ME9EoLrSHHYKW8PPwWMgkwr'],
      currencies: [{ code: 'CSC', issuer: 'rCSCManTZ8ME9EoLrSHHYKW8PPwWMgkwr' }],
    },
    Kudos: {
      name: 'Kudos',
      trusted: true,
      website: 'https://bitstamp.net',
      addresses: ['rXTKdHWuppSjkbiKoEv53bfxHAn1MxmTb'],
      currencies: [{ code: 'XTK', issuer: 'rXTKdHWuppSjkbiKoEv53bfxHAn1MxmTb' }],
    },
    Allvor: {
      name: 'Allvor',
      trusted: true,
      website: 'https://bitstamp.net',
      addresses: ['raEQc5krJ2rUXyi6fgmUAf63oAXmF7p6jp'],
      currencies: [{ code: 'ALV', issuer: 'raEQc5krJ2rUXyi6fgmUAf63oAXmF7p6jp' }],
    },
  },
};

export default issuers;
