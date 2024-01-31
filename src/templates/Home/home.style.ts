import styled, { css } from 'styled-components'

import GitHub from '../../assets/icons/github-logo.svg'
import Text from '../../components/Text'
import { opacify } from '../../theme/utils'

export const HomeSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100dvh;
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
  row-gap: 1.5rem;

  grid-column: 2 / 3;
  grid-row: 5 / 13;
`

export const GitHubLogo = styled(GitHub)``

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
    grid-column: 4 / 13;
    grid-row: 5 / 12;

    position: relative;

    &::before {
      content: '';
      position: absolute;

      width: 80dvw;
      height: 80dvw;
      border-radius: 50%;

      top: -20%;
      left: -17%;

      background: ${opacify(theme.colors.secondary_500, 0.05)};
      filter: blur(2rem);
      pointer-events: none;
    }

    @media (min-width: 768px) {
      grid-column: 5 / 13;

      &::before {
        width: 60dvw;
        height: 60dvw;
        top: -27%;
        left: -17%;
        filter: blur(3rem);
      }
    }

    @media (min-width: 1024px) {
      &::before {
        width: 50dvw;
        height: 50dvw;
        top: -32%;
        left: -14%;
      }
    }

    @media (min-width: 1200px) {
      &::before {
        width: 40dvw;
        height: 40dvw;
        top: -32%;
        left: -9%;
        filter: blur(4rem);
      }
    }

    @media (min-width: 2200px) {
      grid-column: 6 / 13;

      &::before {
        width: 28dvw;
        height: 28dvw;
        top: -38%;
        left: -10%;
        filter: blur(6rem);
      }
    }
  `}
`

export const Name = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', monospace;
    color: ${theme.colors.neutral_white};
    font-size: 1.75rem;
    font-weight: 500;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1200px) {
      font-size: 3rem;
    }

    @media (min-width: 2200px) {
      font-size: 3.5rem;
    }
  `}
`

export const WelcomeText = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-weight: 500;

    margin-bottom: 0.25rem;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.75rem;
    }

    @media (min-width: 2200px) {
      font-size: 2rem;
    }
  `}
`

export const Profession = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-weight: 500;

    padding-top: 1rem;
    text-shadow: 4px 4px 4px ${opacify(theme.colors.neutral_500, 0.4)};

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.75rem;
    }

    @media (min-width: 2200px) {
      font-size: 2rem;
    }
  `}
`
