import styled, { css } from 'styled-components'
import { colorOpacify } from '../../theme/utils'

export const Span = styled.span`
  ${({ theme: { colors } }) => css`
    font-family: 'Fira Code', monospace;
    color: ${colors.neutral_100};
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
  `}
`

export const Heading1 = styled.h1`
  ${({ theme: { colors } }) => css`
    font-family: 'Roboto Mono';
    color: ${colors.neutral_100};
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
  `}
`

export const Heading2 = styled.h2`
  ${({ theme: { colors } }) => css`
    font-family: 'Roboto Mono';
    color: ${colors.secondary_500};
    font-size: 22px;
    font-weight: 500;
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
  `}
`

export const Heading3 = styled.h3`
  ${({ theme: { colors } }) => css`
    font-family: 'Roboto Mono';
    color: ${colors.secondary_500};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 2rem;
    text-shadow: 4px 4px 4px ${colorOpacify(colors.neutral_500, 0.4)};
  `}
`

export const Paragraph = styled.p`
  ${({ theme: { colors } }) => css`
    font-family: 'Fira Code', monospace;
    color: ${colors.neutral_100};
  `}
`
