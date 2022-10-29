import React from 'react';
import { useTheme } from 'styled-components';

import Container from './styles';

export default function Header() {
  const { selectedTheme, onToggleTheme } = useTheme();

  return (
    <Container>
      <h1>JStack&apos;s Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
