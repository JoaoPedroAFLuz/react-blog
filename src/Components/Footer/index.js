import React from 'react';
import { ThemeConsumer } from 'styled-components';

import Container from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ onToggleTheme, selectedTheme }) => (
          <Container>
            <span>JStack&apos;s Blog. Todos os direitos reservados.</span>
            <button type="button" onClick={onToggleTheme}>
              {selectedTheme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeConsumer>
    );
  }
}
