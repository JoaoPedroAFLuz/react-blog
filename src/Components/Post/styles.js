import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 16px;

  // Indívidual
  /* opacity: ${({ removed }) => (removed ? 0.5 : 1)}; */

  // Global
  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
  `}
`;

export const Likes = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
