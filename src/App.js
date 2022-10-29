import React from 'react';
import { Header } from './Components/Header';
import { Post } from './Components/Post';

export function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>

      <Post
        info={{
          title: 'Título 01',
          subtitle: 'Subtítulo 01',
          likes: 13,
        }}
      />
      <Post
        info={{
          title: 'Título 02',
          subtitle: 'Subtítulo 02',
          likes: 7,
        }}
      />
      <Post
        info={{
          title: 'Título 03',
          subtitle: 'Subtítulo 03',
          likes: 29,
        }}
      />
    </>
  );
}
