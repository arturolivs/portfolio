import React from 'react'
import { useTheme } from 'styled-components'

import * as S from './homeScrollIndicator.styles'

const HomeScrollIndicator = () => {
  const theme = useTheme()

  return (
    <S.ScrollToContinue row={2} column={1} columnSize={2}>
      <S.ScrollText>Continuar..</S.ScrollText>
      <S.ScrollDownIcon
        width={24}
        height={24}
        color={theme.colors.neutral_white}
      />
      <S.Line />
    </S.ScrollToContinue>
  )
}

export default HomeScrollIndicator
