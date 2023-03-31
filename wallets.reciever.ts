import { EnumWalletsItemBlockchain, WalletNetworksPrettyNames, EnumWalletsCreateInputNetwork } from '@proj/types'

interface IOptions<N = string, V = string> {
  name: N
  value: V
}

export const getWalletsBlockchainNetworksSelectPairs = (): Record<
  EnumWalletsItemBlockchain,
  IOptions<WalletNetworksPrettyNames, EnumWalletsCreateInputNetwork>[]
  > => {
  return {
    [EnumWalletsItemBlockchain.tron]: [
      { name: WalletNetworksPrettyNames.MAINNET, value: EnumWalletsCreateInputNetwork.mainnet },
      { name: WalletNetworksPrettyNames.NILE, value: EnumWalletsCreateInputNetwork.nile },
    ],
    [EnumWalletsItemBlockchain.ethereum]: [
      { name: WalletNetworksPrettyNames.MAINNET, value: EnumWalletsCreateInputNetwork.mainnet },
      { name: WalletNetworksPrettyNames.GOERLI, value: EnumWalletsCreateInputNetwork.goerli },
    ],
    [EnumWalletsItemBlockchain.bitcoin]: [
      { name: WalletNetworksPrettyNames.MAINNET, value: EnumWalletsCreateInputNetwork.mainnet },
      { name: WalletNetworksPrettyNames.TESTNET, value: EnumWalletsCreateInputNetwork.testnet },
    ],
  }
}

export const getWalletBlockchainNetworksSelectPairs = (blockchain: EnumWalletsItemBlockchain) => {
  return getWalletsBlockchainNetworksSelectPairs()[blockchain]
}