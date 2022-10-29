import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.style.backgroundColor};
    color: ${({ theme }) => theme.style.textColor};
    font-family: sans-serif;
  }
`;
