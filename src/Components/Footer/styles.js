import styled from 'styled-components';

export default styled.footer`
  background: ${({ theme }) => theme.styles.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.styles.spacing.large};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.styles.spacing.large};
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
