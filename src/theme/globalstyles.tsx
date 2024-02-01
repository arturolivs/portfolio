import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {
  background: ${({ theme: { colors } }) => colors.primary_500};
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

ol, ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`

export default GlobalStyle
