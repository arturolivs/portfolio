import styled, { css, keyframes } from 'styled-components'

import ScrollDown from '../../assets/icons/scroll-down-icon.svg'
import Text from '../Text'

export const ScrollToContinue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  grid-column: 6 / 8;
  grid-row: 12 / 13;

  &:hover {
    span {
      transform: translateX(5rem);

      &::first-letter {
        text-transform: lowercase;
      }

      &::before {
        opacity: 1;
        transform: translateX(-9.8rem);
      }
    }
  }
`

export const ScrollText = styled(Text)`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    text-align: center;
    font-family: 'Roboto Mono';
    color: ${theme.colors.neutral_100};

    pointer-events: none;
    transition: all 0.5s;

    &::before {
      content: 'Use scroll para ';
      position: absolute;

      opacity: 0;
      transition: all 0.5s;
    }
  `}
`
const moveDown = keyframes`
  to {
    transform: translateY(0);
  }

  from {
    transform: translateY(-.3rem);
  }
`

export const ScrollDownIcon = styled(ScrollDown)`
  animation: ${moveDown} 1s ease-out infinite;
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 80px;
    background-color: ${theme.colors.neutral_100};
  `}
`
