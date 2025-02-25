import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import {
  Stepper,
  Step,
  StepStatus,
  Card,
  CardBody,
  Heading,
  Text,
  Button,
  Link,
  OpenNewIcon,
} from '@bunnymoon-libs/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'hooks/ifo/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/layout/Container'
import { getAddress } from 'utils/addressHelpers'

interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const IfoSteps: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { t } = useTranslation()
  const balance = useTokenBalance(getAddress(ifo.currency.address))
  const stepsValidationStatus = [
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    switch (step) {
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              Get BUNNYMOON-BNB LP Tokens
            </Heading>
            <Text color="textSubtle" small>
              Stake BUNNYMOON and BNB in the liquidity pool to get LP tokens. <br />
              You’ll spend them to buy IFO sale tokens.
            </Text>
            <Button
              as={Link}
              external
              href={`${BASE_ADD_LIQUIDITY_URL}/BNB/0x72e3F1a5f31989DbeB5eE4CFf03303FfAEc7821B`}
              endIcon={<OpenNewIcon color="white" />}
              mt="16px"
            >
              {t('Get LP tokens')}
            </Button>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              Commit LP Tokens
            </Heading>
            <Text color="textSubtle" small>
              When the IFO sales are live, you can “commit” your LP tokens to buy the tokens being sold. <br />
              We recommend committing to the Basic Sale first, but you can do both if you want.
            </Text>
          </CardBody>
        )
      case 3:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              Claim your tokens and achievement
            </Heading>
            <Text color="textSubtle" small>
              After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent BUNNYMOON-BNB LP
              tokens will be returned to your wallet.
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading as="h2" size="xl" color="secondary" mb="24px" textAlign="center">
        {t('How to Take Part')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} index={index} status={getStatusProp(index)}>
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
