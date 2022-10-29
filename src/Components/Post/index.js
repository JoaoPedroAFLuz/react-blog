import React from 'react';
import PropTypes from 'prop-types';

export function Post({ info }) {
  const { title, subtitle, curtidas } = info;
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
        <br />
        <p>
          Curtidas:&nbsp;
          {curtidas}
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
    curtidas: PropTypes.number.isRequired,
  }).isRequired,
};
