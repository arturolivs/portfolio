import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


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


span, p, h1, h2, h3, h4, h5, h6 {
  letter-spacing: 0.06rem;
}

`

export default GlobalStyle
