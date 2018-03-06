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

const dropdownItemActive = (props) => (
  props.active &&
  css`
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
  `
);

const dropdownItemDisabled = (props) => (
  props.disabled &&
  css`
    color: #6c757d;
    background-color: transparent;
  `
);

export const DropdownItem = styled.div`
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  &:hover, &:focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  };
  ${dropdownItemActive};
  ${dropdownItemDisabled};
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
