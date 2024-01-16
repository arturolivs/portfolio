import styled from 'styled-components'

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
  row-gap: 24px;

  grid-column: 1 / 2;
  grid-row: 5 / 13;
  justify-self: flex-end;
`

export const Link = styled.a`
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 5 / 13;
  grid-row: 5 / 12;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -35%;
    left: 0;
    width: 700px;
    height: 700px;
    border-radius: 50%;

    background: rgba(0, 168, 150, 0.04);
    filter: blur(50px);
    pointer-events: none;
  }
`

export const Name = styled.h1`
  font-family: 'Roboto Mono', monospace;
  color: #e6e6e6;
  font-size: 53px;
  font-weight: 500;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Text1 = styled.span`
  font-family: 'Fira Code', monospace;
  color: #99d98c;
  font-size: 28px;
  font-weight: 500;

  margin-bottom: 13px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Text2 = styled.span`
  font-family: 'Fira Code', monospace;
  color: #99d98c;
  font-size: 40px;
  padding-top: 45px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ScrollToContinue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  grid-column: 1 / 13;
  grid-row: 12 / 13;
`

export const ScrollText = styled.span`
  cursor: default;
  font-family: 'Roboto Mono';
  color: #e6e6e6;
`

export const Line = styled.div`
  background-color: #e6e6e6;
  width: 1px;
  height: 80px;
`
