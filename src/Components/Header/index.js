import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Container from './styles';

export default function Header() {
  const { selectedTheme, onToggleTheme } = useTheme();
  const history = useHistory();

  function handleNavigation() {
    history.push('/');
  }

  return (
    <Container>
      <h1>JStack&apos;s Blog</h1>
      <button
        type="button"
        onClick={handleNavigation}
        style={{
          color: '#fff',
          background: '#222',
          borderRadius: '4px',
          padding: '8px',
        }}
      >
        Home
      </button>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
