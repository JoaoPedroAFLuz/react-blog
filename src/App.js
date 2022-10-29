import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/global';
import Layout from './Components/Layout';

import themes from './Styles/themes';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
