import styled, { css } from 'styled-components'

export const RotatingElement = styled.div`
  ${({ offsetX, offsetY }: { offsetX?: number; offsetY?: number }) => css`
    transform: perspective(700px) rotateY(${offsetX}deg) rotateX(${offsetY}deg);
    transition: transform 0.1s linear;
  `}
`
