import styled, { DefaultTheme, css, keyframes } from 'styled-components'
import Grid, { GridItem } from '../../components/Grid'
import { Heading2, Heading3, Paragraph, Span } from '../../components/Text'
import { colorOpacify } from '../../theme/utils'

type ImageCoverProps = {
  shadowOffsetX: number
  shadowOffsetY: number
  theme: DefaultTheme
}

export const slideText = keyframes`
  from {
    transform: translate(100%, -60%) rotate(-12deg);
  }

  to {
    transform: translate(-120%, 160%) rotate(-20deg);
  }
`

export const AboutMe = styled(Grid)`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 10dvw;

    position: relative;
    z-index: 1;
    overflow-x: hidden;

    @media (${breakpoints.minMD}) {
      display: grid;
      height: 100dvh;
    }

    background: linear-gradient(
      50deg,
      rgba(25, 60, 89, 1) 40%,
      rgba(8, 41, 68, 1) 40%
    );

    box-shadow: 0px 7px 5.3px 0px rgba(0, 0, 0, 0.27);
  `}
`

export const BackgroundText = styled(Span)`
  ${({ theme: { colors } }) => css`
    position: absolute;
    color: ${colorOpacify(colors.primary_100, 0)};
    font-family: Tourney;
    font-size: 25rem;
    right: 0;
    z-index: -1;
    transform: translate(100%, -60%) rotate(-12deg);

    /* animation: ${slideText} 9s ease infinite; */
  `}
`

export const ImageSection = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageCover = styled.div`
  ${({
    theme: { colors, breakpoints },
    shadowOffsetX,
    shadowOffsetY,
  }: ImageCoverProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(0deg, #0b395d 15%, ${colors.primary_500} 90%);

    background-size: cover;
    background-position: center;
    aspect-ratio: 0.71 / 1;

    border-radius: 60% 60% 60% 60%/40% 40% 40% 40%;

    box-shadow: ${shadowOffsetX}px ${shadowOffsetY}px 0 0.5rem
      ${colors.secondary_500};

    transition: box-shadow 0.3s ease;
    width: 75%;
    height: fit-content;

    @media (${breakpoints.minSM}) {
      width: 50%;
    }

    @media (${breakpoints.minMD}) {
      width: 60%;
    }

    @media (${breakpoints.minLG}) {
      width: 50%;
    }

    @media (${breakpoints.minXL}) {
      width: 40%;
    }
  `}
`

export const TextSection = styled(GridItem)`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    @media (${breakpoints.minMD}) {
      margin-top: 0;
      align-items: flex-start;
    }
  `}
`

export const AboutMeTitle = styled(GridItem)`
  ${({ theme: { breakpoints, colors } }) => css`
    width: 100%;
    font-family: 'Roboto Mono';
    color: ${colors.neutral_100};
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
    text-align: end;

    font-size: 2.5rem;
    align-self: flex-end;
    margin: 4.5rem 0;

    @media (${breakpoints.minSM}) {
      font-size: 2.75rem;
    }

    @media (${breakpoints.minLG}) {
      margin: 0;
      margin-bottom: 4.5rem;
      font-size: 3rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 3.5rem;
    }
  `}
`

export const Quote = styled(Heading2)`
  ${({ theme: { breakpoints } }) => css`
    max-width: 32rem;
    margin-bottom: 2rem;
    position: relative;
    font-size: 1.5rem;

    &::before {
      content: '"';
      position: absolute;
      left: -15%;
      top: -50%;
      font-size: 10rem;
      top: -20%;
      font-size: 5rem;
    }

    @media (${breakpoints.minSM}) {
      &::before {
        top: -60%;
        font-size: 10rem;
      }
    }

    @media (${breakpoints.minLG}) {
      font-size: 1.8rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 2rem;

      &::before {
        top: -50%;
      }
    }
  `}
`

export const AboutMeText = styled(Paragraph)`
  ${({ theme: { breakpoints } }) => css`
    line-height: 1.6rem;
    font-size: 1.125rem;

    @media (${breakpoints.minMD}) {
      font-size: 13px;
    }

    @media (${breakpoints.minLG}) {
      font-size: 1rem;
    }

    @media (${breakpoints.minXL}) {
      font-size: 1.125rem;
    }
  `}
`

export const TechSection = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4rem;
`

export const TechTitle = styled(Heading3)``

export const Techs = styled.ul`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (${breakpoints.minMD}) {
      width: auto;
      column-gap: 2rem;
    }
  `}
`

type TechProps = { maxWidth?: number; theme: DefaultTheme }

export const Tech = styled.li`
  ${({ theme: { colors }, maxWidth = 3 }: TechProps) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    max-width: ${maxWidth}rem;
    svg,
    span {
      transition: all 0.2s;
    }

    &:hover {
      svg,
      span {
        color: ${colors.secondary_500};
        opacity: 1;
      }
    }
  `}
`

export const TechLabel = styled(Span)`
  opacity: 0;
`
