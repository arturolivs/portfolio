import styled, { css } from 'styled-components'

export const AboutMeSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    background: ${theme.colors.primary_500};
  `}
`
