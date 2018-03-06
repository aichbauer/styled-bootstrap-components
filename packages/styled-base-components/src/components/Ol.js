import styled from 'styled-components';

export const Ol = styled.ol`
  margin-top: 0;
  margin-bottom: 1rem;
  & > ol {
    margin-bottom: 0;
  };
  & > ul {
    margin-bottom: 0;
  };
`;
