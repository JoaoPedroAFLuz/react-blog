import React from 'react';
import PropTypes from 'prop-types';

export function Post({ info, onRemove }) {
  const {
    id, title, subtitle, likes,
  } = info;
  return (
    <>
      <article>
        <strong>{title}</strong>
        <button type="button" onClick={() => onRemove(id)}>
          Remover
        </button>
        <br />
        <small>{subtitle}</small>
        <br />
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
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
