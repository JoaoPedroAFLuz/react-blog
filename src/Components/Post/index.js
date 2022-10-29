import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from './PostHeader';

export function Post({ info, onRemove }) {
  const {
    id, title, subtitle, read, likes,
  } = info;

  return (
    <>
      <article>
        <PostHeader
          info={{
            id,
            title,
            subtitle,
            read,
          }}
          onRemove={onRemove}
        />
        <p>
          Curtidas:&nbsp;
          {likes}
        </p>
      </article>
      <br />
    </>
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
