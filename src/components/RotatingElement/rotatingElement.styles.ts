import styled, { css } from 'styled-components'

export const RotatingElement = styled.div`
  ${({
    offsetX,
    offsetY,
  }: {
    angle?: number
    offsetX?: number
    offsetY?: number
  }) => css`
    transform: perspective(700px) rotateY(${offsetX}deg)
      rotateX(${-1 * offsetY}deg);
    transition: transform 0.1s linear;
  `}
`

// transform: rotate3d(${y}, ${x}, ${z}, 25deg);
