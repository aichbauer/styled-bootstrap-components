import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import { theme } from 'styled-config';

const display = (props) => {
  if (props.hidden) {
    return css`display: none;`;
  }

  return css`display: block;`;
};

const ModalWrapper = styled(Div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${(props) => display(props)}
`;

ModalWrapper.defaultProps = {
  theme,
};

export { ModalWrapper };
