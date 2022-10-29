import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { Button } from '../Button';

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>{title}</h1>
      {children}
      <Button type="button" onClick={onToggleTheme}>
        Alterar tema do botão
      </Button>
      <hr />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: '',
};
