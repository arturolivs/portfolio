import styled from 'styled-components'

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180.04deg,
    #1640ad -23.04%,
    #1665ad -23.04%,
    #182277 99.97%
  );
`

export const HomeContent = styled.section`
  padding-top: 300px;
  height: 100%;
  display: grid;
  grid-template-rows: 80% min-content;
  grid-template-columns: min-content 1fr;
`

export const SocialLinks = styled.aside`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  grid-column: 1 / 2;
  grid-row: 1 / 3;
`

export const Link = styled.a`
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 600px;
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
`

export const Text2 = styled.span`
  font-family: 'Fira Code', monospace;
  color: #99d98c;
  font-size: 40px;
`

export const ScrollToContinue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  grid-column: 1 / 3;
  grid-row: 2 / 3;
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
