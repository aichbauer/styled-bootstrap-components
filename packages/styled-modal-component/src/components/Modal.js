import styled, { css } from 'styled-components';

import { theme } from 'styled-config';

const maxWidth = (props) => {
  if (props.sm) {
    return css`max-width: 300px;`;
  } else if (props.lg) {
    return css`max-width: 800px;`;
  }

  return '';
};

const display = (props) => {
  if (props.hidden) {
    return css`display: none;`;
  }

  return css`display: block;`;
};

const Modal = styled.div`
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
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    ${(props) => maxWidth(props)}
  };
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    ${(props) => maxWidth(props)}
  };
  ${(props) => display(props)}
`;

Modal.defaultProps = {
  theme,
};

export { Modal };
