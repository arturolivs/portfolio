import styled, { css } from 'styled-components'
import Grid, { GridItem } from '../../components/Grid'
import { Heading1, Heading2, Paragraph, Span } from '../../components/Text'
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
  `}
`

export const ImageSection = styled(GridItem)``

export const TextSection = styled(GridItem)`
  display: flex;
  flex-direction: column;
`

export const AboutMeTitle = styled(Heading1)`
  font-size: 2.5rem;
  align-self: flex-end;
  margin-bottom: 4.5rem;
`

export const Quote = styled(Heading2)`
  max-width: 24rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

export const AboutMeText = styled(Paragraph)`
  line-height: 1.6rem;
  font-size: 1.125rem;
`

export const TechSection = styled(GridItem)``
