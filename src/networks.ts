import {
  MAINNET_URL,
  MAINNET_FULL_HISTORY_1_URL,
  MAINNET_FULL_HISTORY_2_URL,
  TESTNET_URL,
  DEVNET_URL,
  NFT_DEVNET_URL,
  LOCAL_URL,
} from './constants';
import { RippleNetwork } from './models';

export default {
  [RippleNetwork.Mainnet]: MAINNET_URL,
  [RippleNetwork.MainnetFullHistory1]: MAINNET_FULL_HISTORY_1_URL,
  [RippleNetwork.MainnetFullHistory2]: MAINNET_FULL_HISTORY_2_URL,
  [RippleNetwork.Testnet]: TESTNET_URL,
  [RippleNetwork.Devnet]: DEVNET_URL,
  [RippleNetwork.NFTDevnet]: NFT_DEVNET_URL,
  [RippleNetwork.Local]: LOCAL_URL,
};
