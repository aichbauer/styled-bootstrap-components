import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  border,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`border-radius: ${br(props, 'modalContent').noRadius};`;
  }

  return css`border-radius: ${br(props, 'modalContent').lg};`;
};

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: ${(props) => colors(props, 'modalContent').backgroundColor};
  background-clip: padding-box;
  border: ${(props) => border(props, 'modalContent').default} ${(props) => colors(props, 'modalContent').borderColor};
  outline: 0;
  ${(props) => borderRadius(props)}
`;

ModalContent.defaultProps = {
  theme,
};

export { ModalContent };
