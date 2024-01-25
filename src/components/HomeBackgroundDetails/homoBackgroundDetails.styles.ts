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
  ${({ theme, rotate = 0 }: { theme: DefaultTheme; rotate?: number }) => css`
    position: absolute;
    font-family: 'Fira Code';

    color: ${opacify(theme.colors.neutral_white, 0.19)};
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
    pointer-events: none;

    transition: all 0.4s;

    &:nth-child(1) {
      top: 25%;
      left: 70%;
      transform: rotate(${22 + rotate}deg);
    }

    &:nth-child(2) {
      top: 75%;
      left: 12%;
      transform: rotate(${18 + rotate}deg);
    }
    &:nth-child(3) {
      top: 80%;
      left: 60%;
      transform: rotate(${-10 + rotate}deg);
    }
    &:nth-child(4) {
      top: 45%;
      left: 27%;
      transform: rotate(${-30 + rotate}deg);
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
    border: 1px solid ${opacify(theme.colors.neutral_white, 0.12)};
    width: ${width};
    height: ${height};
    top: ${top}%;
    left: ${left}%;
    transform: rotate(${rotate}deg);
    transition: all 0.4s;
  `}
`
