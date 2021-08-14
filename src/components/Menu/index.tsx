import React from 'react'
import { Menu as UikitMenu } from '@bunnymoon-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { useFetchPriceList, useGetApiPrices, usePriceCakeBusd, useProfile } from 'state/hooks'
import tokens from 'config/constants/tokens'
import BigNumber from 'bignumber.js'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage } = useTranslation()

  const cakePriceUsd = usePriceCakeBusd()
  useFetchPriceList()
  const prices = useGetApiPrices()
  let bunnymoonPriceUsd = new BigNumber(0)
  let rocketPriceUsd = new BigNumber(0)
  if(prices!=null){
    bunnymoonPriceUsd = new BigNumber(prices[tokens.bunnymoon.address[56].toLowerCase()])
    rocketPriceUsd = new BigNumber(prices[tokens.rocket.address[56].toLowerCase()])
  }

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={bunnymoonPriceUsd.toNumber()}
      rocketPriceUsd={rocketPriceUsd.toNumber()}
      links={config}
      {...props}
    />
  )
}

export default Menu
