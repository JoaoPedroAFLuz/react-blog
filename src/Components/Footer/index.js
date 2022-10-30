import PropTypes from 'prop-types';
import React from 'react';

import Container from './styles';

export default class Footer extends React.Component {
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTheme: props.selectedTheme,
      onToggleTheme: props.onToggleTheme,
    };
  }

  render() {
    const { onToggleTheme, selectedTheme } = this.state;

    return (
      <Container>
        <span>JStack&apos;s Blog. Todos os direitos reservados.</span>
        <button type="button" onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}
