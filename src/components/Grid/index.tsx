import React from 'react'

import * as S from './styles'

export type GridProps = {
  children: React.ReactNode
}

export const Grid = ({ children }: GridProps) => (
  <S.GridContainer>{children}</S.GridContainer>
)
