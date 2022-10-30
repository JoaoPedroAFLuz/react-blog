import styled from 'styled-components';

export default styled.article`
  background: ${({ theme }) => theme.styles.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.styles.spacing.medium};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  h2 {
    margin: 0 0 ${({ theme }) => theme.styles.spacing.small};
  }
  small {
    opacity: 0.7;
  }
  & + article {
    margin-top: ${({ theme }) => theme.styles.spacing.small};
  }
`;
