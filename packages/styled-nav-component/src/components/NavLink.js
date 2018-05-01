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
import { A } from 'styled-base-components';

const navLinkDisabled = (props) => (
  props.disabled &&
  css`
    color: #6c757d;
    &:hover,
    &:focus {
      color: #6c757d;
    };
  `
);

const navLinkTabs = (props) => {
  if (props.tabs) {
    if (props.active) {
      return css`
        color: #495057;
        border-color: #e9ecef #e9ecef #fff;
        &:hover,
        &:focus {
          color: #495057;
        };
      `;
    } else if (props.disabled) {
      return css`
        border-color: transparent;
      `;
    }

    return css`
      &:hover,
      &:focus {
        border-color: #e9ecef #e9ecef #dee2e6;
      };
    `;
  }

  return '';
};

const navLinkPills = (props) => (
  props.pills &&
  props.active &&
  css`
    border-radius: 0.25rem;
    color: #fff;
    background-color: #007bff;
    &:hover,
    &:focus {
      color: #fff;
    };
  `
);

export const NavLink = styled(A)`
  display: block;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #007bff;
  &:hover,
  &:focus {
    text-decoration: none;
    color: #0056b3;
  };
  ${navLinkDisabled};
  ${navLinkTabs};
  ${navLinkPills};
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
