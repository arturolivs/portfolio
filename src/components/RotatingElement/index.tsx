import React, { ReactNode, useRef } from 'react'

import * as S from './rotatingElement.styles'
import useMouseRotation from '../../hooks/UseMouseRotation'

const RotatingElement = ({ children, ...rest }: { children: ReactNode }) => {
  const elementRef = useRef(null)
  const { xDeg, yDeg } = useMouseRotation(elementRef)
  return (
    <S.RotatingElement ref={elementRef} xDeg={xDeg} yDeg={yDeg} {...rest}>
      {children}
    </S.RotatingElement>
  )
}

export default RotatingElement
