import styled, { css } from 'styled-components'

type GridProps = {
  rows?: number
  columns?: number
}

type GridItemProps = {
  column: number
  row: number
  columnSize?: number
  rowSize?: number
}

export default styled.div<GridProps>`
  ${({ rows = 12, columns = 12 }) => css`
    display: grid;

    grid-template-rows: repeat(${rows}, 1fr);
    grid-template-columns: repeat(${columns}, 1fr);
    /* grid-auto-rows: min-content; */
  `}
`

export const GridItem = styled.div`
  ${({ column, row, columnSize = 1, rowSize = 1 }: GridItemProps) => css`
    grid-column: ${column} / ${column + columnSize};
    grid-row: ${row} / ${row + rowSize};
  `}
`
