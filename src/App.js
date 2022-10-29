import React from 'react';
import { Header } from './Components/Header';
import { Post } from './Components/Post';

const posts = [
  {
    id: Math.random(),
    title: 'Título 01',
    subtitle: 'Subtítulo 01',
    curtidas: 13,
  },
  {
    id: Math.random(),
    title: 'Título 02',
    subtitle: 'Subtítulo 02',
    curtidas: 7,
  },
  {
    id: Math.random(),
    title: 'Título 03',
    subtitle: 'Subtítulo 03',
    curtidas: 29,
  },
];

export function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.id}
          info={{
            title: post.title,
            subtitle: post.subtitle,
            curtidas: post.curtidas,
          }}
        />
      ))}
    </>
  );
}
