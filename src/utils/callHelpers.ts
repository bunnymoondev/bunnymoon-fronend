import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { ethers } from 'ethers'
import { BIG_TEN, BIG_ZERO } from './bigNumber'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account, ref, decimals = 18) => {
  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), ref)
    .send({ from: account, gas: 700000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeBnb = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account, decimals = 18) => {
  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 700000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousUnstake = async (sousChefContract, amount, decimals, account) => {
  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: 300000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousEmergencyUnstake = async (sousChefContract, account) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account, ref) => {
  // if (pid === 0) {
  //   return masterChefContract.methods
  //     .leaveStaking('0')
  //     .send({ from: account, gas: 200000 })
  //     .on('transactionHash', (tx) => {
  //       return tx.transactionHash
  //     })
  // }
console.log(ref)
  return masterChefContract.methods
    .deposit(pid, '0', ref)
    .send({ from: account, gas: 700000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: BIG_ZERO })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
