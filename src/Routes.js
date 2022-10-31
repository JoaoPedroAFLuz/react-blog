import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home';
import Posts from './Pages/Posts';

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </>
  );
}
