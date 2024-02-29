import styled, { css } from 'styled-components'
import { colorOpacify } from '../theme/utils'

export const Main = styled.main`
  ${({ theme: { colors, breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;

    background-image: linear-gradient(
        ${colorOpacify(colors.secondary_500, 0.05)} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${colorOpacify(colors.secondary_500, 0.05)} 1px,
        transparent 1px
      );

    background-size: 2em 2em;
  `}
`
