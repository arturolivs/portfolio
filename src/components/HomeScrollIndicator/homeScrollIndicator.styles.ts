import styled, { css, keyframes } from 'styled-components'

import ScrollDown from '../../assets/icons/scroll-down-icon.svg'
import Text from '../Text'

const moveDown = keyframes`
from {
  transform: translateY(-.3rem);
}

to {
  transform: translateY(0);
}
`

export const ScrollToContinue = styled.div`
  ${({ theme: { breakpoints } }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  z-index: 1;

  grid-column: 6 / 8;
  grid-row: 12 / 13;

  &:hover {
    span {
      transform: translateX(4rem);

      &::first-letter {
        text-transform: lowercase;
      }

      &::before {
        opacity: 1;
        transform: translateX(-7.8rem);
      }
    }

    > div::before {
      height: 35%;
    }
  }

  @media (${breakpoints.minLG}) {
    &:hover {
      span {
        transform: translateX(5rem);

        &::before {
          transform: translateX(-11.8rem);
        }
      }
    }
  `}
`

export const ScrollText = styled(Text)`
  ${({ theme: { colors, breakpoints } }) => css`
    position: relative;
    width: 100%;

    text-align: center;
    font-family: 'Roboto Mono';
    font-size: 0.8rem;
    color: ${colors.neutral_100};

    pointer-events: none;
    transition: all 0.5s;

    &::before {
      content: 'Use scroll para ';
      position: absolute;
      width: max-content;
      opacity: 0;
      transition: all 0.5s;
    }

    @media (${breakpoints.minLG}) {
      font-size: 1.2rem;
    }
  `}
`

export const ScrollDownIcon = styled(ScrollDown)`
  animation: ${moveDown} 1s ease-out infinite;
`

export const Line = styled.div`
  ${({ theme: { colors } }) => css`
    width: 1px;
    height: 80px;
    background-color: ${colors.neutral_100};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 0%;
      background-color: ${colors.primary_500};
      transition: all 0.5s;
    }
  `}
`
