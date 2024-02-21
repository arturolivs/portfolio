import styled, { css } from 'styled-components'

export const MyProjects = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 100dvh;
    background-color: ${colors.primary_500};
  `}
`
