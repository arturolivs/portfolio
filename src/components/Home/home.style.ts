import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;

  margin-top: 75px;
  padding-top: 158px;

  background: linear-gradient(
    180.04deg,
    #1640ad -23.04%,
    #1665ad -23.04%,
    #182277 99.97%
  );

  display: flex;
`

export const SocialLinks = styled.aside`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-left: 262px;
`

export const Name = styled.h1`
  font-family: 'Roboto Mono';
  color: #e6e6e6;
  font-size: 48px;
  font-weight: 500;
`

export const Text1 = styled.span`
  font-family: 'Roboto Mono';
  color: #99d98c;
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 13px;
`

export const Text2 = styled.span`
  font-family: 'Roboto Mono';
  color: #99d98c;
  font-size: 36px;
`
