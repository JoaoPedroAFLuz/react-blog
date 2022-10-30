import React from 'react';

import Routes from '../../Routes';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}
