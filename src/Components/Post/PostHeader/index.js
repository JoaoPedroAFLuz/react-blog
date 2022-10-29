import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';

export function PostHeader({ info, onRemove }) {
  const {
    id, title, subtitle, read,
  } = info;
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => onRemove(id)}>Remover</Button>
      <br />
      <small>{subtitle}</small>
      <br />
    </>
  );
}

PostHeader.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
