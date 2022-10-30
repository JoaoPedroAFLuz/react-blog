import React from 'react';
import { useTheme } from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';
import PostList from '../PostList';

export default function Layout() {
  const { selectedTheme, onToggleTheme } = useTheme();

  return (
    <>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <PostList />
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  );
}
