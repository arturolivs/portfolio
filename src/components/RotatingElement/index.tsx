import React, { ReactNode, useRef } from 'react'

import * as S from './rotatingElement.styles'
import useMouse from '../../hooks/useMouse'

const DEG_LIMIT = 35

function applyDegLimit(deg: number) {
  if (deg > DEG_LIMIT) {
    deg = DEG_LIMIT
  }

  if (deg < -DEG_LIMIT) {
    deg = -DEG_LIMIT
  }

  return deg
}

const RotatingElement = ({ children, ...rest }: { children: ReactNode }) => {
  const elementRef = useRef(null)

  const { elementOffsetX, elementOffsetY } = useMouse(elementRef)
  return (
    <S.RotatingElement
      ref={elementRef}
      xDeg={applyDegLimit(elementOffsetX)}
      yDeg={applyDegLimit(elementOffsetY)}
      {...rest}
    >
      {children}
    </S.RotatingElement>
  )
}

export default RotatingElement
