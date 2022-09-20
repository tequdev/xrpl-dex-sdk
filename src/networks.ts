import { XrplNetwork, RippleUrl } from './models';

export const MAINNET_URL: RippleUrl = process.env.XRPL_MAINNET_URL || 's1.ripple.com';
export const MAINNET_FULL_HISTORY_1_URL: RippleUrl = process.env.XRPL_MAINNET_FULL_HISTORY_1_URL || 'xrplcluster.com';
export const MAINNET_FULL_HISTORY_2_URL: RippleUrl = process.env.XRPL_MAINNET_FULL_HISTORY_2_URL || 's2.ripple.com';
export const TESTNET_URL: RippleUrl = process.env.XRPL_TESTNET_URL || 's.altnet.rippletest.net';
export const DEVNET_URL: RippleUrl = process.env.XRPL_DEVNET_URL || 's.devnet.rippletest.net';
export const NFT_DEVNET_URL: RippleUrl = process.env.XRPL_NFT_DEVNET_URL || 'xls20-sandbox.rippletest.net';
export const LOCAL_URL: RippleUrl = process.env.XRPL_LOCAL_URL || 'localhost:6006';

export const XRPL_WEBSOCKETS_PROTOCOL = 'wss';
export const XRPL_JSON_RPC_PROTOCOL = 'https';

export const XRPL_WEBSOCKETS_PORT = 51233;
export const XRPL_JSON_RPC_PORT = 51234;

const networks = {
  [XrplNetwork.Mainnet]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${MAINNET_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${MAINNET_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.MainnetFullHistory1]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${MAINNET_FULL_HISTORY_1_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${MAINNET_FULL_HISTORY_1_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.MainnetFullHistory2]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${MAINNET_FULL_HISTORY_2_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${MAINNET_FULL_HISTORY_2_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.Testnet]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${TESTNET_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${TESTNET_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.Devnet]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${DEVNET_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${DEVNET_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.NFTDevnet]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${NFT_DEVNET_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${NFT_DEVNET_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
  [XrplNetwork.Local]: {
    jsonRpc: `${XRPL_JSON_RPC_PROTOCOL}://${LOCAL_URL}:${XRPL_JSON_RPC_PORT}`,
    websockets: `wss://${LOCAL_URL}:${XRPL_WEBSOCKETS_PORT}`,
  },
};

export default networks;
