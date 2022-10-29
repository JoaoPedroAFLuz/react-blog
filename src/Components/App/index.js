import React, { useState } from 'react';
import { Button } from '../Button';
import { Header } from '../Header';
import { Post } from '../Post';
import { ThemeProvider } from '../../Contexts/ThemeContext';

import { Title } from './styles';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      read: true,
      likes: generateLikesValue(),
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      read: false,
      likes: generateLikesValue(),
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título 03',
      subtitle: 'Subtítulo 03',
      read: false,
      likes: generateLikesValue(),
      removed: false,
    },
  ]);
  const [postNumber, setPostNumber] = useState(posts.length + 1);

  const handlePostNumber = () => {
    setPostNumber((prevState) => prevState + 1);
  };

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título ${postNumber < 10 ? `0${postNumber}` : postNumber}`,
        subtitle: `Subtítulo ${
          postNumber < 10 ? `0${postNumber}` : postNumber
        }`,
        likes: generateLikesValue(),
        read: false,
      },
    ]);
    handlePostNumber();
  }

  function generateLikesValue() {
    return Math.floor(Math.random() * 100);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      (post) => (post.id === postId ? { ...post, removed: true } : post),
    ));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts da Semana
          <Button type="button" onClick={handleRefresh}>
            {' '}
            Atualizar posts
          </Button>
        </Title>
      </Header>

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} info={post} />
      ))}
    </ThemeProvider>
  );
}
