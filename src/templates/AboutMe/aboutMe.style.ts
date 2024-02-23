import styled, { DefaultTheme, css, keyframes } from 'styled-components'
import Grid, { GridItem } from '../../components/Grid'
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Span,
} from '../../components/Text'
import { opacify } from '../../theme/utils'

export const AboutMe = styled(Grid)`
  width: 100%;
  height: 100dvh;
  position: relative;
  overflow: hidden;
`

export const BackgroundText = styled(Span)`
  ${({ theme: { colors } }) => css`
    position: absolute;
    color: ${opacify(colors.primary_100, 0.01)};
    font-family: Tourney;
    font-size: 25rem;
    right: 0;
    animation: ${slideText} 5s infinite;
    transform: translate(100%, -100%) rotate(-20deg);
    z-index: -1;
  `}
`

export const slideText = keyframes`
  from {
    transform: translate(100%, -100%) rotate(-20deg);
  }

  to {
  transform:  translate(-145%, 240%)  rotate(-20deg);
  }
`

export const ImageSection = styled(GridItem)``

type ImageCoverProps = {
  shadowOffsetX: number
  shadowOffsetY: number
  theme: DefaultTheme
}

export const ImageCover = styled.div`
  ${({
    theme: { colors },
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
    height: 100%;
    min-width: 60%;

    width: 1rem;
    border-radius: 60% 60% 60% 60%/40% 40% 40% 40%;

    box-shadow: ${shadowOffsetX}px ${shadowOffsetY}px 0 15px
      ${colors.secondary_500};

    transition: all 0.2s;
  `}
`

export const TextSection = styled(GridItem)`
  display: flex;
  flex-direction: column;
`

export const AboutMeTitle = styled(Heading1)`
  font-size: 3rem;
  align-self: flex-end;
  margin-bottom: 4.5rem;
`

export const Quote = styled(Heading2)`
  max-width: 32rem;
  margin-bottom: 2rem;
  position: relative;

  font-size: 2rem;
  &::before {
    content: '"';
    position: absolute;
    left: -15%;
    top: -50%;
    font-size: 10rem;
  }
`

export const AboutMeText = styled(Paragraph)`
  line-height: 1.6rem;
  font-size: 1.125rem;
`

export const TechSection = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TechTitle = styled(Heading3)``

export const Techs = styled.ul`
  display: flex;
  column-gap: 2rem;
`

export const Tech = styled.li`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

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
