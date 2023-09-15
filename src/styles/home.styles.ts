import styled from 'styled-components'

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

export const LoadingDots = styled.div`
  & span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #333333;
    margin: 5px;

    animation: bounce 0.6s cubic-bezier(0.6, 0.1, 1, 0.4);
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    to {
      transform: translateY(5px);
    }
  }
`
