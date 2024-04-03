import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }

h1 {
  font-size: 24px;
  line-height: 26px;
  font-weight: bold;
  color: black;
}

h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
}

@media (max-width: 420px) {
  h1 {
    font-size: 22px;
  }
}

@media (max-width: 375px) {
  h1 {
    font-size: 18px;
  }

  h3 {
    font-size: 14px;
  }
}
`
