import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

export function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: theme === 'dark' ? '#111111' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#111111',
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
