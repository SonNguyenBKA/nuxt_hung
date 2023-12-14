export const CHAIN_ID = '0x61'
export const CHAIN_ID_NUMBER = 97
export const PROJECT_ID = '1b4c675b8e4f75c30df55e02de5d61c5'

export const PROVIDER = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

export const RPC = {
  56: 'https://bsc-dataseed.binance.org/',
  97: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545/'
}

export const CHAIN = {
  method: 'wallet_addEthereumChain',
  params: [
    {
      chainId: '0x61', // 97
      chainName: 'BNB Smart Chain Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545/'],
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
      },
      blockExplorerUrls: ['https://testnet.bscscan.com/']
    }
  ]
}

