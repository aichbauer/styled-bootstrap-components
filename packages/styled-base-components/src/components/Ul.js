import styled from 'styled-components';

export const Ul = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  & > ul {
    margin-bottom: 0;
  };
  & > ol {
    margin-bottom: 0;
  };
`;
