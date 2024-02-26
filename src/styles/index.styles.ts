import styled, { css } from 'styled-components'
import { opacify } from '../theme/utils'

export const Main = styled.main`
  ${({ theme: { colors, breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;

    background-image: linear-gradient(
        ${opacify(colors.secondary_500, 0.05)} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${opacify(colors.secondary_500, 0.05)} 1px,
        transparent 1px
      );

    background-size: 2em 2em;

    &::before {
      content: '';
      position: absolute;
      width: 80dvw;
      height: 80dvw;
      border-radius: 50%;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: ${opacify(colors.secondary_500, 0.08)};
      filter: blur(2rem);
      pointer-events: none;
    }

    @media (${breakpoints.minSM}) {
      &::before {
        width: 60dvw;
        height: 60dvw;
        filter: blur(3rem);
      }
    }

    @media (${breakpoints.minMD}) {
      &::before {
        width: 50dvw;
        height: 50dvw;
      }
    }

    @media (${breakpoints.minLG}) {
      &::before {
        width: 40dvw;
        height: 40dvw;
        filter: blur(4rem);
      }
    }

    @media (${breakpoints.minXL}) {
      &::before {
        width: 28dvw;
        height: 28dvw;
        filter: blur(6rem);
      }
    }
  `}
`
