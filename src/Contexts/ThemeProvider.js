import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../Styles/themes';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const providerProps = useMemo(
    () => ({
      styles: themes[theme] || themes.dark,
      selectedTheme: theme,
      onToggleTheme: handleToggleTheme,
    }),
    [theme],
  );

  return (
    <StyledThemeProvider theme={providerProps}>{children}</StyledThemeProvider>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
