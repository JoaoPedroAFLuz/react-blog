import React from 'react';
import PropTypes from 'prop-types';

export function Post({ info }) {
  const { title, subtitle, likes } = info;
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
        <br />
        <p>
          Likes:
          {likes}
        </p>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
