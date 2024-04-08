import { ThemeProvider, StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { HomeScreen, ListScreen } from 'screens'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme, GlobalStyle } from 'styles'

const App = () => {
  return (
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/list" element={<ListScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
