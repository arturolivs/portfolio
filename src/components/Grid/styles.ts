import styled, { css } from 'styled-components'

export type GridProps = {
  rows?: number
  columns?: number
}

export const GridContainer = styled.div<GridProps>`
  ${({ rows = 12, columns = 12 }) => css`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(${rows}, 1fr);
    grid-template-columns: repeat(${columns}, 1fr);
  `}
`
