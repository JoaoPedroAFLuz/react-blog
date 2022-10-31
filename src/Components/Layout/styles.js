import styled from 'styled-components';

export default styled.nav`
  background: #000;
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
