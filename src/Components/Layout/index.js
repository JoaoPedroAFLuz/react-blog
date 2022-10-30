import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostList from '../PostList';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
        <Footer />
      </>
    );
  }
}
