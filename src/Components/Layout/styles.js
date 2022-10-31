import styled from 'styled-components';

export default styled.nav`
  background: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.styles.spacing.medium};
  padding: ${({ theme }) => theme.styles.spacing.medium};
  border-radius: 4px;

  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;

    & + a {
      margin-left: ${({ theme }) => theme.styles.spacing.medium};
    }
  }
`;
