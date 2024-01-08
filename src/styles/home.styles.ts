import styled, { keyframes } from 'styled-components'

export const Main = styled.main`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #333333;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 0.1rem;
`

const bounce = keyframes`
   to {
      transform: translateY(5px);
    }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #333333;
  margin: 5px;

  animation: ${bounce} 0.6s cubic-bezier(0.6, 0.1, 1, 0.4);
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`
