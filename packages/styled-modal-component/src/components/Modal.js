import styled from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
} from 'styled-system';
import { screenSize } from 'styled-config';

export const smallModalWidth = (props) => {
  if (props.sm) {
    return '300px';
  }

  return '';
};

export const largeModalWidth = (props) => {
  if (props.lg) {
    return '800px';
  }

  return '';
};

const modalDisplay = (props) => {
  if (props.hidden) {
    return 'none';
  }

  return 'block';
};

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: ${(props) => modalDisplay(props)};
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  @media (min-width: ${screenSize.sm}) {
    max-width: ${(props) => smallModalWidth(props)};
  };
  @media (min-width: ${screenSize.lg}) {
    max-width: ${(props) => largeModalWidth(props)};
  };
  ${space};
  ${width};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${display};
  ${borderRadius};
  ${borderColor};
  ${borders};
`;
