import styled, { DefaultTheme, css } from 'styled-components'
import { opacify } from '../../theme/utils'

type GeometricShapesProps = {
  width?: number | string
  height?: number | string
  column?: number
  row?: number
  rotate?: number
}

export const HomeBackgroundDetails = styled.div`
  ${({ theme: { breakpoints } }) => css`
    position: absolute;
    width: 100%;
    height: 100dvh;
    perspective: 15rem;
    pointer-events: none;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    align-items: center;

    @media (${breakpoints.minMD}) {
      perspective: 70rem;
    }
  `}
`

export const HelloWord = styled.span`
  ${({
    theme: { colors, breakpoints },
    rotate = 0,
  }: {
    theme: DefaultTheme
    rotate?: number
  }) => css`
    font-family: 'Fira Code';
    min-width: max-content;
    position: absolute;
    color: ${opacify(colors.neutral_white, 0.2)};
    font-size: 0.5rem;
    letter-spacing: 0.2rem;

    transition: all 0.4s;

    &:nth-child(1) {
      transform: rotateY(${rotate}deg);
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    &:nth-child(2) {
      transform: rotateY(${rotate}deg);
      grid-column: 8 / 9;
      grid-row: 4 / 5;
    }

    &:nth-child(3) {
      transform: rotateY(${rotate}deg);
      grid-column: 3 / 4;
      grid-row: 9 / 10;
    }

    &:nth-child(4) {
      transform: rotateY(${rotate}deg);
      grid-column: 8 / 9;
      grid-row: 11 / 11;
    }

    @media (${breakpoints.minSM}) {
      perspective: 700rem;
      font-size: 0.7rem;
      letter-spacing: 0.3rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 0.9rem;
      letter-spacing: 0.4rem;
    }
  `}
`

export const GeometricShapes = styled.div`
  ${({
    width = '1rem',
    height = '1rem',
    rotate = 0,
    column = 0,
    row = 0,
  }: GeometricShapesProps & { theme: DefaultTheme }) => css`
    position: absolute;
    width: ${width};
    height: ${height};
    transform: rotateY(${rotate}deg);
    transition: all 0.4s;

    grid-column: ${column} / ${column + 1};
    grid-row: ${row} / ${row + 1};
  `}
`
