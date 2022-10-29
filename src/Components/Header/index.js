import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { Button } from '../Button';

import { Title } from '../Title';

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{title}</Title>
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
