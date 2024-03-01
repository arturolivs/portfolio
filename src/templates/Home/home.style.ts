import styled, { css } from 'styled-components'

import GitHub from '../../assets/icons/github-logo.svg'
import { Span, Heading2 } from '../../components/Text'
import Grid from '../../components/Grid'
import { colorOpacify } from '../../theme/utils'

export const Home = styled(Grid)`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 100dvh;
    z-index: 2;
    position: relative;
    background: radial-gradient(circle, #193c59 0%, #042946 100%);
    border-bottom: 3px solid ${colorOpacify('#042946', 0.5)};
    box-shadow: 0px 7px 5.3px 0px rgba(0, 0, 0, 0.27);

    ::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background-image: linear-gradient(
          ${colorOpacify(colors.secondary_500, 0.04)} 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          ${colorOpacify(colors.secondary_500, 0.04)} 1px,
          transparent 1px
        );
      background-size: 2em 2em;
    }
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
