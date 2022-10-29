import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from './PostHeader';

import { Article, Likes } from './styles';

export function Post({ info, onRemove }) {
  const {
    id, title, subtitle, read, likes,
  } = info;

  return (
    <Article>
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
    </Article>
  );
}

Post.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
