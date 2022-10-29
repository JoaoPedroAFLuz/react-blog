import React, { useState } from 'react';
import { Button } from './Components/Button';
import { Header } from './Components/Header';
import { Post } from './Components/Post';
import { ThemeProvider } from './Contexts/ThemeContext';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      read: true,
      likes: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      read: false,
      likes: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 03',
      subtitle: 'Subtítulo 03',
      read: false,
      likes: generateLikesValue(),
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
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>
          Posts da Semana
          <Button type="button" onClick={handleRefresh}>
            {' '}
            Atualizar posts
          </Button>
        </h2>
      </Header>

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} info={post} />
      ))}
    </ThemeProvider>
  );
}
