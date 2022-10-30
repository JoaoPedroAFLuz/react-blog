import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.styles.backgroundColor};
    color: ${({ theme }) => theme.styles.textColor};
    font-family: sans-serif;
  }
`;
