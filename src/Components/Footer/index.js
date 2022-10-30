import React from 'react';
import { useTheme } from 'styled-components';

import Container from './styles';

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useTheme();

  return (
    <Container>
      <span>JStack&apos;s Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
