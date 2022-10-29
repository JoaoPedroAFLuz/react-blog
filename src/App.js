import React, { useState } from 'react';
import { Header } from './Components/Header';
import { Post } from './Components/Post';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      curtidas: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      curtidas: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 03',
      subtitle: 'Subtítulo 03',
      curtidas: generateLikesValue(),
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título ${
          prevState.length + 1 < 10
            ? `0${prevState.length + 1}`
            : prevState.length + 1
        }`,
        subtitle: `Subtítulo ${
          prevState.length + 1 < 10
            ? `0${prevState.length + 1}`
            : prevState.length + 1
        }`,
        curtidas: generateLikesValue(),
      },
    ]);
  }

  function generateLikesValue() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>
        <button type="button" onClick={handleRefresh}>
          Atualizar posts
        </button>
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
