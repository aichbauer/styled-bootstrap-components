import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getBorder,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`border-radius: ${br(props, 'modalContent').noRadius};`;
  }

  return css`border-radius: ${br(props, 'modalContent').lg};`;
};

const ModalContent = styled(Div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: ${(props) => getColor(props, 'modalContent', 'backgroundColor')};
  background-clip: padding-box;
  border: ${(props) => getBorder(props, 'modalContent', 'default')} ${(props) => getColor(props, 'modalContent', 'borderColor')};
  outline: 0;
  ${(props) => borderRadius(props)}
`;

ModalContent.defaultProps = {
  theme,
};

export { ModalContent };
