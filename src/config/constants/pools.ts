import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.bunnymoon,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x146f1d903C915e147779617c49d8d72a5F53d15f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 8,
    stakingToken: tokens.bunnymoon,
    earningToken: tokens.rocket,
    contractAddress: {
       97: '',
       56: '0xB969412c51854b83595323237C3CF8A2eB4e6846',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.3',
    sortOrder: 2,
    isFinished: false,
  },
  
  {
    sousId: 9,
    stakingToken: tokens.cake,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x10B2dd1E2a30bFFc37842ed005C194813AC0cD3B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: false,
  },

  {
    sousId: 10,
    stakingToken: tokens.busd,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0xCCF36B55D3e9b156749F2951c4Ad14702d2c983a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: false,
  },

  {
    sousId: 11,
    stakingToken: tokens.usdt,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x88Ddf42D5b278E0caA6793cBda1Fe0aD35F53fFD',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: false,
  },

  {
    sousId: 12,
    stakingToken: tokens.usdc,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x6A77B5d8Ba1ed4e7E0e6E7eF9d0643FBf29Ed76b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: false,
  },

  {
    sousId: 13,
    stakingToken: tokens.tusd,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x4894D8f9509d180ED57d4ac09158d871B526BcBe',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: false,
  },
  
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x12d7bC166F22EF8A24d4895632271A0307aF286A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: true,
  },
  {
    sousId: 3,
    stakingToken: tokens.banana,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x385b94AcdE92F50C914Eb5F0c2eE242229721Ef3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: true,
  },
  {
    sousId: 4,
    stakingToken: tokens.busd,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0xE1549C0C52ab4FA1EF1AB8Ac945f787D67bc5f52',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: true,
  },
  {
    sousId: 5,
    stakingToken: tokens.btcb,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x38B4da9B43417143dF862FAd1d3C4857f6Afe824',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: true,
  },
  {
    sousId: 6,
    stakingToken: tokens.eth,
    earningToken: tokens.bunnymoon,
    contractAddress: {
       97: '',
       56: '0x32501a43E73D4A38DF37668359ef96c0CfFC4CA7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 9999,
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: tokens.bunnymoon,
    earningToken: tokens.wbnb,
    contractAddress: {
       97: '',
       56: '0x87B0EbA3354F802da65feea4364AF81BD82E7f0c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00003',
    sortOrder: 9999,
    isFinished: true,
  },
]

export default pools
