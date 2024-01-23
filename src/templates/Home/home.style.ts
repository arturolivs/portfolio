import styled, { css } from 'styled-components'

import Text from '../../components/Text'

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;

  background: #042946;
  background-image: linear-gradient(rgba(5, 255, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(5, 255, 0, 0.03) 1px, transparent 1px);
  background-size: 2em 2em;
`

export const SocialLinks = styled.aside`
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

      background: ${theme.colors.secondary_500};
      filter: blur(100px);
      pointer-events: none;
    }
  `}
`

export const Name = styled(Text)`
  font-family: 'Roboto Mono', monospace;
  color: #e6e6e6;
  font-size: 53px;
  font-weight: 500;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const WelcomeText = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-size: 28px;
    font-weight: 500;

    margin-bottom: 13px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`

export const Profession = styled(Text)`
  ${({ theme }) => css`
    font-family: 'Fira Code', monospace;
    color: ${theme.colors.secondary_500};
    font-size: 40px;
    font-weight: 500;

    padding-top: 45px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
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
  cursor: default;
  font-family: 'Roboto Mono';
  color: #e6e6e6;
`

export const Line = styled.div`
  background-color: #e6e6e6;
  width: 1px;
  height: 80px;
`
