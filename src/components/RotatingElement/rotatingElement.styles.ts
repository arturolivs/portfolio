import styled, { css } from 'styled-components'

export const RotatingElement = styled.div`
  ${({ xDeg, yDeg }: { xDeg?: number; yDeg?: number }) => css`
    transform: perspective(700px) rotateY(${xDeg}deg) rotateX(${yDeg}deg);
    transition: transform 0.1s linear;
  `}
`
