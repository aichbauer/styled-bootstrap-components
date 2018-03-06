import styled from 'styled-components';

export const Kbd = styled.kbd`
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
  & > kbd {  
    padding: 0;
    font-size: 100%;
    font-weight: 700;
  };
`;
