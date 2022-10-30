import React from 'react';
import { ThemeConsumer } from 'styled-components';

import Container from './styles';

export default class Header extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ onToggleTheme, selectedTheme }) => (
          <Container>
            <h1>JStack&apos;s Blog</h1>
            <button type="button" onClick={onToggleTheme}>
              {selectedTheme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeConsumer>
    );
  }
}
