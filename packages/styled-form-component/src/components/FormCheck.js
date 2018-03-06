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

const formCheckInline = (props) => (
  props.inline &&
  css`
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;
  `
);

export const FormCheck = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  & > label {
    margin-bottom: 0;
  };
  & > input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0;
  };
  ${formCheckInline};
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
