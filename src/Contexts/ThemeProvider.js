import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../Styles/themes';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTheme: 'dark',
    };
  }

  handleToggleTheme = () => {
    this.setState((prevState) => ({
      selectedTheme: prevState.selectedTheme === 'dark' ? 'light' : 'dark',
    }));
  };

  render() {
    const { selectedTheme } = this.state;
    const { children } = this.props;

    return (
      <StyledThemeProvider
        theme={{
          styles: themes[selectedTheme] || themes.dark,
          selectedTheme,
          onToggleTheme: this.handleToggleTheme,
        }}
      >
        {children}
      </StyledThemeProvider>
    );
  }
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
