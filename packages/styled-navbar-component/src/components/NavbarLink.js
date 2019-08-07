import styled, { css } from 'styled-components';

import { NavLink } from 'styled-nav-component';
import {
  theme,
  getColor,
  getPadding,
  getFontSize,
} from 'styled-config';

const color = (props) => {
  if (props.dark && props.disabled) {
    return css`
      color: ${getColor(props, 'navbarLink', 'colorDisabled')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navbarLink', 'colorDisabledHoverFocus')};
      };
    `;
  } else if (props.dark && props.active) {
    return css`
      color: ${getColor(props, 'navbarLink', 'colorActive')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navbarLink', 'colorActiveHoverFocus')};
      };
    `;
  } else if (props.dark) {
    return css`
      color: ${getColor(props, 'navbarLink', 'color')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navbarLink', 'colorHoverFocus')};
      };
    `;
  } else if (props.disabled) {
    return css`
      color: ${getColor(props, 'navbarLink', 'colorDisabled')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navbarLink', 'colorDisabledHoverFocus')};
      };
    `;
  } else if (props.active) {
    return css`
      color: ${getColor(props, 'navbarLink', 'colorActive')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navbarLink', 'colorActiveHoverFocus')};
      };
    `;
  }

  return css`
    color: ${getColor(props, 'navbarLink', 'color')};
    &:hover,
    &:focus {
      color: ${getColor(props, 'navbarLink', 'colorHoverFocus')};
    };
  `;
};

const display = (props) => (
  props.brand &&
  css`
    display: inline-block;
  `
);

const padding = (props) => (
  props.brand &&
  css`
    padding-top: ${getPadding(props, 'navbarLink', 'brandTop')};
    padding-bottom: ${getPadding(props, 'navbarLink', 'brandBottom')};
  `
);

const fontSize = (props) => (
  props.brand &&
  css`
    font-size: ${getFontSize(props, 'navbarLink', 'lg')};
  `
);

const lineHeight = (props) => (
  props.brand &&
  css`
    line-height: inherit;
  `
);

const whiteSpace = (props) => (
  props.brand &&
  css`
    white-space: nowrap;
  `
);

const NavbarLink = styled(NavLink)`
  ${(props) => color(props)}
  ${(props) => display(props)}
  ${(props) => padding(props)}
  ${(props) => fontSize(props)}
  ${(props) => lineHeight(props)}
  ${(props) => whiteSpace(props)}
`;

NavbarLink.defaultProps = {
  theme,
};

export { NavbarLink };
