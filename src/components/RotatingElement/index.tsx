import React, { ReactNode, useRef } from 'react'

import * as S from './rotatingElement.styles'
import useMouseRotation3 from '../../hooks/useMouse3'

const RotatingElement = ({ children, ...rest }: { children: ReactNode }) => {
  const elementRef = useRef(null)
  const { offsetX, offsetY } = useMouseRotation3(elementRef)
  return (
    <S.RotatingElement
      ref={elementRef}
      offsetX={offsetX}
      offsetY={offsetY}
      {...rest}
    >
      {children}
    </S.RotatingElement>
  )
}

export default RotatingElement
