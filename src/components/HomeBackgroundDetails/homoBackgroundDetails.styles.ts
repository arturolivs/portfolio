import styled, { DefaultTheme, css } from 'styled-components'
import { opacify } from '../../theme/utils'

type GeometricShapesProps = {
  width?: number | string
  height?: number | string
  top?: number | string
  left?: number | string
  rotate?: number
}

export const HomeBackgroundDetails = styled.div`
  position: absolute;
  width: 100%;
  height: 100dvh;
  perspective: 700px;
  pointer-events: none;
  overflow: hidden;
`

export const HelloWord = styled.span`
  ${({ theme, rotate = 0 }: { theme: DefaultTheme; rotate?: number }) => css`
    position: absolute;
    font-family: 'Fira Code';

    color: ${opacify(theme.colors.neutral_white, 1)};
    font-size: 0.8rem;
    letter-spacing: 0.3rem;

    transition: all 0.4s;

    &:nth-child(1) {
      top: 25%;
      left: 70%;
      transform: rotateY(${rotate}deg);
    }

    &:nth-child(2) {
      top: 75%;
      left: 12%;
      transform: rotateY(${rotate}deg);
    }
    &:nth-child(3) {
      top: 80%;
      left: 60%;
      transform: rotateY(${rotate}deg);
    }
    &:nth-child(4) {
      top: 45%;
      left: 27%;
      transform: rotateY(${rotate}deg);
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
    border: 1px solid ${opacify(theme.colors.neutral_white, 1)};
    width: ${width};
    height: ${height};
    top: ${top}%;
    left: ${left}%;
    transform: rotateY(${rotate}deg);
    transition: all 0.4s;
    color: white;
  `}
`
