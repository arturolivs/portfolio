import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 100dvh;
    overflow-x: hidden;
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
  `}
`
