import React from 'react';

import Layout from './Components/Layout';
import ThemeProvider from './Contexts/ThemeProvider';
import GlobalStyle from './Styles/global';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
