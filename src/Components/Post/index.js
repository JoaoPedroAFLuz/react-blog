import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from './PostHeader';

import { Container, Likes } from './styles';

export function Post({ info, onRemove }) {
  const {
    id, title, subtitle, read, likes, removed,
  } = info;

  return (
    <Container removed={removed}>
      <PostHeader
        info={{
          id,
          title,
          subtitle,
          read,
        }}
        onRemove={onRemove}
      />
      <Likes>
        Curtidas:&nbsp;
        {likes}
      </Likes>
    </Container>
  );
}

Post.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
