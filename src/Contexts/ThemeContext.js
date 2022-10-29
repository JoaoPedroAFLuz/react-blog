import PropTypes from 'prop-types';
import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = useCallback(() => setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light')));

  const providerProps = useMemo(
    () => ({
      theme,
      onToggleTheme: handleToggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={providerProps}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
