import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Modal, Text, Button, OpenNewIcon, Link } from '@bunnymoon-libs/uikit'
import { BASE_EXCHANGE_URL } from 'config'
import useTheme from 'hooks/useTheme'
import { Token } from 'config/constants/types'

interface NotEnoughTokensModalProps {
  token: Token
  onDismiss?: () => void
}

const StyledLink = styled(Link)`
  width: 100%;
`

const NotEnoughTokensModal: React.FC<NotEnoughTokensModalProps> = ({ token, onDismiss }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Modal
      title={`${token.symbol} ${t('required')}`}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      <Text color="failure" bold>
        {t('Insufficient %tokensymbol% balance', { tokensymbol: token.symbol })}
      </Text>
      <Text mt="24px">{t(`You’ll need %tokensymbol% to stake in this pool!`, { tokensymbol: token.symbol })}</Text>
      <Text>
        {t(`Buy some %tokensymbol%, or make sure your %tokensymbol% isn’t in another pool or LP.`, {
          tokensymbol: token.symbol,
        })}
      </Text>
      <Button mt="24px" as="a" external href={`${BASE_EXCHANGE_URL}/#/swap?outputCurrency=${t(token.address[56])}`}>
        {t('Buy')} {token.symbol}
      </Button>
      <Button variant="text" onClick={onDismiss}>
        {t('Close window')}
      </Button>
    </Modal>
  )
}

export default NotEnoughTokensModal
