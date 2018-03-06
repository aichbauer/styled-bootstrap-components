import styled, { css } from 'styled-components';
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

import {
  buttonSmall,
  buttonLarge,
} from './Button';

const buttonGroupVertical = (props) => (
  props.vertical &&
  css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > button {
      width: 100%;
      &:not(:last-child) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      };
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      };
    };
  `
);

const buttonGroupNormal = (props) => (
  !props.vertical &&
  css`
    & > button {
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      };
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      };
    };
  `
);

export const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & > button {
    line-height: 1.5;
    position: relative;
    flex: 0 1 auto;
    &:hover {
      z-index: 1;
    };
    ${buttonSmall};
    ${buttonLarge};
  };
  ${buttonGroupVertical};
  ${buttonGroupNormal};
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
