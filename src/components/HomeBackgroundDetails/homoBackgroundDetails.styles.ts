import styled, { css } from 'styled-components'
import { opacify } from '../../theme/utils'

export const HelloWord = styled.span`
  ${({ theme }) => css`
    position: absolute;
    font-family: 'Fira Code';

    color: ${opacify(theme.colors.neutral_white, 0.2)};
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    pointer-events: none;

    &:nth-child(1) {
      top: 25%;
      left: 70%;
      transform: rotate(22deg);
    }

    &:nth-child(2) {
      top: 75%;
      left: 12%;
      transform: rotate(18deg);
    }
    &:nth-child(3) {
      top: 80%;
      left: 60%;
      transform: rotate(-10deg);
    }
    &:nth-child(4) {
      top: 45%;
      left: 27%;
      transform: rotate(-30deg);
    }
  `}
`

export const Square = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 5rem;
    height: 5rem;
    border: 1px solid ${opacify(theme.colors.neutral_white, 0.2)};
    top: 85%;
    left: 90%;
    transform: rotate(25deg);
  `}
`
