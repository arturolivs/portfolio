import styled, { css } from 'styled-components'

import GitHub from '../../assets/icons/github-logo.svg'
import { Span, Heading2 } from '../../components/Text'
import Grid from '../../components/Grid'

export const Home = styled(Grid)`
  ${() => css`
    width: 100%;
    min-height: 100dvh;
  `}
`

export const SocialLinksSection = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  grid-column: 2 / 3;
  grid-row: 6 / 13;
`

export const GitHubLogo = styled(GitHub)``

export const Link = styled.a`
  ${({ theme: { colors } }) => css`
    cursor: pointer;
    width: fit-content;

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

export const Content = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    grid-column: 4 / 13;
    grid-row: 6 / 12;

    @media (${breakpoints.minSM}) {
      grid-column: 5 / 13;
    }

    @media (${breakpoints.minLG}) {
      grid-column: 6 / 13;
    }
  `}
`

export const Name = styled(Span)`
  ${({ theme: { colors, breakpoints } }) => css`
    font-family: 'Roboto Mono', monospace;
    color: ${colors.neutral_white};
    font-size: 1.75rem;
    font-weight: 500;

    @media (${breakpoints.minSM}) {
      font-size: 2.25rem;
    }

    @media (${breakpoints.minMD}) {
      font-size: 2.5rem;
    }

    @media (${breakpoints.minLG}) {
      font-size: 3rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 3.5rem;
    }
  `}
`

export const WelcomeText = styled(Heading2)`
  ${({ theme: { breakpoints } }) => css`
    font-family: 'Fira Code', monospace;
    margin-bottom: 0.25rem;

    @media (${breakpoints.minSM}) {
      font-size: 1.25rem;
    }

    @media (${breakpoints.minMD}) {
      font-size: 1.5rem;
    }

    @media (${breakpoints.minLG}) {
      font-size: 1.75rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 2rem;
    }
  `}
`

export const Profession = styled(Span)`
  ${({ theme: { colors, breakpoints } }) => css`
    color: ${colors.secondary_500};
    font-weight: 500;

    padding-top: 1rem;

    @media (${breakpoints.minSM}) {
      font-size: 1.25rem;
    }

    @media (${breakpoints.minMD}) {
      font-size: 1.5rem;
    }

    @media (${breakpoints.minLG}) {
      font-size: 1.75rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 2rem;
    }
  `}
`
