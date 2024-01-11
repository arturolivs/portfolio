import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 75px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 90px;
`

export const Logo = styled.span`
  color: #fafafa;
`

export const Links = styled.ul`
  display: flex;
  column-gap: 2.5rem;
`

export const Item = styled.li``

export const Link = styled.a`
  font-family: 'Roboto Mono';
  color: #fafafa;
  font-size: 26px;
  font-weight: 500;
`
