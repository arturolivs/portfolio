import styled, { css } from 'styled-components'

import Text from '../../components/Text'
import { opacify } from '../../theme/utils'

export const HomeSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    background: ${theme.colors.primary_500};

    background-image: linear-gradient(
        ${opacify(theme.colors.secondary_500, 0.04)} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${opacify(theme.colors.secondary_500, 0.04)} 1px,
        transparent 1px
      );

    background-size: 2em 2em;
  `}
`

export const SocialLinksSection = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  grid-column: 2 / 3;
  grid-row: 5 / 13;
`

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    width: fit-content;

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

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-column: 6 / 13;
    grid-row: 5 / 12;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -35%;
      left: -5%;
      width: 700px;
      height: 700px;
      border-radius: 50%;

      background: ${opacify(theme.colors.secondary_500, 0.05)};

      filter: blur(100px);
      pointer-events: none;
    }
  `}
`

export const Name = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', monospace;
    color: ${theme.colors.neutral_white};
    font-size: 53px;
    font-weight: 500;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};
  `}
`

export const WelcomeText = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-size: 28px;
    font-weight: 500;

    margin-bottom: 13px;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};
  `}
`

export const Profession = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-size: 40px;
    font-weight: 500;

    padding-top: 45px;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};
  `}
`

export const ScrollToContinue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  grid-column: 1 / 13;
  grid-row: 12 / 13;
`

export const ScrollText = styled(Text)`
  ${({ theme }) => css`
    cursor: default;
    font-family: 'Roboto Mono';
    color: ${theme.colors.neutral_100};
  `}
`
export const Line = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 80px;
    background-color: ${theme.colors.neutral_100};
  `}
`
