import React, { useState } from 'react';
import { Header } from './Components/Header';
import { Post } from './Components/Post';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      likes: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      likes: generateLikesValue(),
    },
    {
      id: Math.random(),
      title: 'Título 03',
      subtitle: 'Subtítulo 03',
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
          onRemove={handleRemovePost}
          info={post}
        />
      ))}
    </>
  );
}
