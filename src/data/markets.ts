import { Markets, XrplNetwork } from '../models';

export interface MarketsData {
  [network: string]: Markets;
}

const markets: MarketsData = {
  [XrplNetwork.Testnet]: {
    'AKT/XRP': {
      id: 'AKT/XRP',
      symbol: 'AKT/XRP',
      base: 'AKT',
      baseIssuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
      quote: 'XRP',
    },
    'XRP/AKT': {
      id: 'XRP/AKT',
      symbol: 'XRP/AKT',
      base: 'XRP',
      quote: 'AKT',
      quoteIssuer: 'rMZoAqwRn3BLbmFYL3exNVNVKrceYcNy6B',
    },
  },
  [XrplNetwork.Mainnet || XrplNetwork.MainnetFullHistory1 || XrplNetwork.MainnetFullHistory2]: {
    '534F4C4F00000000000000000000000000000000/XRP': {
      id: '534F4C4F00000000000000000000000000000000/XRP',
      symbol: '534F4C4F00000000000000000000000000000000/XRP',
      base: '534F4C4F00000000000000000000000000000000',
      baseIssuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
      quote: 'XRP',
    },
    '434F524500000000000000000000000000000000/XRP': {
      id: '434F524500000000000000000000000000000000/XRP',
      symbol: '434F524500000000000000000000000000000000/XRP',
      base: '434F524500000000000000000000000000000000',
      baseIssuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D',
      quote: 'XRP',
    },
    '434F524500000000000000000000000000000000/534F4C4F00000000000000000000000000000000': {
      id: '434F524500000000000000000000000000000000/534F4C4F00000000000000000000000000000000',
      symbol: '434F524500000000000000000000000000000000/534F4C4F00000000000000000000000000000000',
      base: '434F524500000000000000000000000000000000',
      baseIssuer: 'rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D',
      quote: '534F4C4F00000000000000000000000000000000',
      quoteIssuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
    },
    '534F4C4F00000000000000000000000000000000/USD': {
      id: '534F4C4F00000000000000000000000000000000/USD',
      symbol: '534F4C4F00000000000000000000000000000000/USD',
      base: '534F4C4F00000000000000000000000000000000',
      baseIssuer: 'rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz',
      quote: 'USD',
      quoteIssuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
    },
    'XRP/USD': {
      id: 'XRP/USD',
      symbol: 'XRP/USD',
      base: 'XRP',
      quote: 'USD',
      quoteIssuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
    },
    'XRP/EUR': {
      id: 'XRP/EUR',
      symbol: 'XRP/EUR',
      base: 'XRP',
      quote: 'EUR',
      quoteIssuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
    },
    'XRP/SGB': {
      id: 'XRP/SGB',
      symbol: 'XRP/SGB',
      base: 'XRP',
      quote: 'SGB',
      quoteIssuer: 'rctArjqVvTHihekzDeecKo6mkTYTUSBNc',
    },
    'XRP/ETH': {
      id: 'XRP/ETH',
      symbol: 'XRP/ETH',
      base: 'XRP',
      quote: 'ETH',
      quoteIssuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
    },
    'XRP/XTK': {
      id: 'XRP/XTK',
      symbol: 'XRP/XTK',
      base: 'XRP',
      quote: 'XTK',
      quoteIssuer: 'rXTKdHWuppSjkbiKoEv53bfxHAn1MxmTb',
    },
    'XRP/5852646F67650000000000000000000000000000': {
      id: 'XRP/5852646F67650000000000000000000000000000',
      symbol: 'XRP/5852646F67650000000000000000000000000000',
      base: 'XRP',
      quote: '5852646F67650000000000000000000000000000',
      quoteIssuer: 'rLqUC2eCPohYvJCEBJ77eCCqVL2uEiczjA',
    },
    'XRP/58464C4F4B490000000000000000000000000000': {
      id: 'XRP/58464C4F4B490000000000000000000000000000',
      symbol: 'XRP/58464C4F4B490000000000000000000000000000',
      base: 'XRP',
      quote: '58464C4F4B490000000000000000000000000000',
      quoteIssuer: 'rUtXeAXonpFpgKubAa7LxcLd7NFep92T1t',
    },
    'XRP/4A554E4B00000000000000000000000000000000': {
      id: 'XRP/4A554E4B00000000000000000000000000000000',
      symbol: 'XRP/4A554E4B00000000000000000000000000000000',
      base: 'XRP',
      quote: '4A554E4B00000000000000000000000000000000',
      quoteIssuer: 'r4pDJ7bT1rANe9nAdFR9pyVRwtJZQUEFpj',
    },
    'XRP/5844554445000000000000000000000000000000': {
      id: 'XRP/5844554445000000000000000000000000000000',
      symbol: 'XRP/5844554445000000000000000000000000000000',
      base: 'XRP',
      quote: '5844554445000000000000000000000000000000',
      quoteIssuer: 'rU5LE7X6yyu9DuHsLdHhWSiUVTgpyRK1vz',
    },
    'XRP/457175696C69627269756D000000000000000000': {
      id: 'XRP/457175696C69627269756D000000000000000000',
      symbol: 'XRP/457175696C69627269756D000000000000000000',
      base: 'XRP',
      quote: '457175696C69627269756D000000000000000000',
      quoteIssuer: 'rpakCr61Q92abPXJnVboKENmpKssWyHpwu',
    },
    'XRP/ELS': {
      id: 'XRP/ELS',
      symbol: 'XRP/ELS',
      base: 'XRP',
      quote: 'ELS',
      quoteIssuer: 'rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg',
    },
    'BTC/USD': {
      id: 'BTC/USD',
      symbol: 'BTC/USD',
      base: 'BTC',
      baseIssuer: 'rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL',
      quote: 'USD',
      quoteIssuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
    },
    'ETH/USD': {
      id: 'ETH/USD',
      symbol: 'ETH/USD',
      base: 'ETH',
      baseIssuer: 'rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h',
      quote: 'USD',
      quoteIssuer: 'rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq',
    },
  },
};

export default markets;