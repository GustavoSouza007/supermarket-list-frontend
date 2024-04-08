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

`
