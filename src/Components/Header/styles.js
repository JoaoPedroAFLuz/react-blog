import styled from 'styled-components';

export default styled.header`
  background: ${({ theme }) => theme.styles.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.styles.spacing.large};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  justify-content: space-between;
  button {
    font-size: 16px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
