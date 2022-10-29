import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostList from '../PostList';

export default function Layout() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
