import styled, { css } from 'styled-components'
import { colorOpacify } from '../../theme/utils'

export type HeaderProps = {
  hidden: boolean
  showBackground: boolean
}

export const Header = styled.header<HeaderProps>`
  ${({ hidden, showBackground }: HeaderProps) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    opacity: ${hidden ? 0 : 1};
    width: 100%;
    height: 5rem;
    transition: all 0.3s;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    ${showBackground &&
    css`
      border-bottom: 1px solid #042d4d;
      background: linear-gradient(180deg, #042d4d 0%, #08243a 100%);
      box-shadow: 0px 7px 5.3px 0px rgba(0, 0, 0, 0.27);
    `}
  `}
`

export const GoToHome = styled.a`
  ${({ theme: { colors } }) => css`
    width: fit-content;
    grid-column: 2 / 2;

    svg {
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${colors.secondary_500};
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
  ${({ theme: { colors } }) => css`
    font-family: 'Roboto Mono';
    color: ${colors.neutral_100};
    font-size: 24px;
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
    transition: color 0.2s;

    &:hover {
      color: ${colors.secondary_500};
    }
  `}
`
