import React from 'react';

import Layout from './Components/Layout';
import ThemeProvider from './Contexts/ThemeProvider';
import GlobalStyle from './Styles/global';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    );
  }
}

export default App;
