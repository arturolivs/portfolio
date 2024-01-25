import styled, { css } from 'styled-components'
import { opacify } from '../../theme/utils'

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 90px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  background-color: transparent;

  /**TODO: Aplicar no scroll para cima
    border: 1px solid #1d374a;
    background: linear-gradient(180deg, #042d4d 0%, #08243a 100%);
    box-shadow: 0px 7px 5.3px 0px rgba(0, 0, 0, 0.27);
  */
`

export const GoToHome = styled.a`
  ${({ theme }) => css`
    width: fit-content;
    grid-column: 2 / 2;

    svg {
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${theme.colors.secondary_500};
      }
    }
  `}
`

export const MenuNavigation = styled.nav`
  grid-column: 10 / 13;
`

export const Links = styled.ul`
  display: flex;
  column-gap: 3rem;
`

export const Item = styled.li``

export const Link = styled.a`
  ${({ theme }) => css`
    font-family: 'Roboto Mono';
    color: ${theme.colors.neutral_100};
    font-size: 24px;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.secondary_500};
    }
  `}
`
