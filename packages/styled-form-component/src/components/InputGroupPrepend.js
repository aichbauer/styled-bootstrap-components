import styled from 'styled-components';

const InputGroupPrepend = styled.div`
  display: flex;
  margin-right: -1px;
  & > button {
    position: relative;
    z-index: 2;
  };
  & > span,
  & > button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    };
  };
`;

export { InputGroupPrepend };
