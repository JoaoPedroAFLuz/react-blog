import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themes from '../Styles/themes';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let selectedTheme = 'dark';

    try {
      if (JSON.parse(localStorage.getItem('theme'))) {
        selectedTheme = JSON.parse(localStorage.getItem('theme'));
      }
    } catch (error) {
      console.log(error);
    }

    this.state = {
      selectedTheme,
    };
  }

  componentDidUpdate(_, prevState) {
    const { selectedTheme } = this.state;

    if (prevState.selectedTheme !== selectedTheme) {
      localStorage.setItem('theme', JSON.stringify(selectedTheme));
    }
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
