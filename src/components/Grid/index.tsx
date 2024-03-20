import styled, { css } from 'styled-components'

type GridProps = {
  rows?: number | string[]
  columns?: number | string[]
}

type GridItemProps = {
  column: number
  row: number
  columnSize?: number
  rowSize?: number
}

function generateRows(rows: number | string[]) {
  if (typeof rows === 'number') {
    return css`
      grid-template-rows: repeat(${rows}, 1fr);
    `
  }

  return css`
    grid-template-rows: ${rows.join(' ')};
  `
}

function generateColumns(columns: number | string[]) {
  if (typeof columns === 'number') {
    return css`
      grid-template-columns: repeat(${columns}, 1fr);
    `
  }

  return css`
    grid-template-columns: ${columns.join(' ')};
  `
}

export default styled.div<GridProps>`
  ${({ rows = 12, columns = 12 }) => css`
    display: grid;

    ${generateRows(rows)}
    ${generateColumns(columns)}
  `}
`

export const GridItem = styled.div`
  ${({ column, row, columnSize = 1, rowSize = 1 }: GridItemProps) => css`
    grid-column: ${column} / ${column + columnSize};
    grid-row: ${row} / ${row + rowSize};
  `}
`
