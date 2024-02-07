import styled, { DefaultTheme, css } from 'styled-components'
import { opacify } from '../../theme/utils'
import RotatingElement from '../RotatingElement'

type GeometricShapesProps = {
  width?: number | string
  height?: number | string
  column?: number
  row?: number
  rotate?: number
}

export const HomeBackgroundDetails = styled.div`
  ${() => css`
    position: absolute;
    width: 100%;
    height: 100dvh;
    pointer-events: none;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    align-items: center;
  `}
`

export const HelloWord = styled(RotatingElement)`
  ${({
    theme: { colors, breakpoints },
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
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }

    &:nth-child(2) {
      grid-column: 8 / 9;
      grid-row: 4 / 5;
    }

    &:nth-child(3) {
      grid-column: 3 / 4;
      grid-row: 9 / 10;
    }

    &:nth-child(4) {
      grid-column: 8 / 9;
      grid-row: 11 / 11;
    }

    @media (${breakpoints.minSM}) {
      font-size: 0.7rem;
      letter-spacing: 0.3rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 0.9rem;
      letter-spacing: 0.4rem;
    }
  `}
`

export const GeometricShapes = styled(RotatingElement)`
  ${({
    width = '1rem',
    height = '1rem',
    column = 0,
    row = 0,
  }: GeometricShapesProps & { theme: DefaultTheme }) => css`
    position: absolute;
    width: ${width};
    height: ${height};
    grid-column: ${column} / ${column + 1};
    grid-row: ${row} / ${row + 1};
  `}
`
