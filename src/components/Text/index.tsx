import React from 'react'

import * as Styled from './styles'

export type TextProps = {
  as?: 'span' | 'h1'
  children: string
}

const Text = ({ children, as = 'span', ...props }: TextProps) => {
  return (
    <Styled.Container as={as} {...props}>
      {children}
    </Styled.Container>
  )
}

export default Text
