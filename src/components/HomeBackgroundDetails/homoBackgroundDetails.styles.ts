import styled, { DefaultTheme, css } from 'styled-components'
import { opacify } from '../../theme/utils'

type GeometricShapesProps = {
  width?: number | string
  height?: number | string
  top?: number
  left?: number
  rotate?: number
}

export const HelloWord = styled.span`
  ${({ theme }) => css`
    position: absolute;
    font-family: 'Fira Code';

    color: ${opacify(theme.colors.neutral_white, 0.1)};
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
    pointer-events: none;

    &:nth-child(1) {
      top: 25%;
      left: 70%;
      transform: rotate(22deg);
    }

    &:nth-child(2) {
      top: 75%;
      left: 12%;
      transform: rotate(18deg);
    }
    &:nth-child(3) {
      top: 80%;
      left: 60%;
      transform: rotate(-10deg);
    }
    &:nth-child(4) {
      top: 45%;
      left: 27%;
      transform: rotate(-30deg);
    }
  `}
`

export const GeometricShapes = styled.div`
  ${({
    theme,
    width = '1rem',
    height = '1rem',
    top = 0,
    left = 0,
    rotate = 0,
  }: GeometricShapesProps & { theme: DefaultTheme }) => css`
    position: absolute;
    border: 1px solid ${opacify(theme.colors.neutral_white, 0.1)};
    width: ${width};
    height: ${height};
    top: ${top}%;
    left: ${left}%;
    transform: rotate(${rotate}deg);
  `}
`
