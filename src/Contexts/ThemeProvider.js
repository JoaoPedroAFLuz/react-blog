import PropTypes from 'prop-types';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../Styles/themes';

function ThemeProvider({ children }) {
  const localStorageTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(localStorageTheme || 'dark');

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }, []);

  const providerProps = useMemo(
    () => ({
      styles: themes[theme] || themes.dark,
      selectedTheme: theme,
      onToggleTheme: handleToggleTheme,
    }),
    [theme],
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StyledThemeProvider theme={providerProps}>{children}</StyledThemeProvider>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
