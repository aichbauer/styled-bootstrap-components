import styled, { css } from 'styled-components';

import { NavLink } from 'styled-nav-component';
import {
  theme,
  colors,
  padding as p,
  fontSize as fs,
} from 'styled-config';

const color = (props) => {
  if (props.dark && props.disabled) {
    return css`
      color: ${colors(props, 'navbarLink').colorDisabled};
      &:hover,
      &:focus {
        color: ${colors(props, 'navbarLink').colorDisabledHoverFocus};
      };
    `;
  } else if (props.dark && props.active) {
    return css`
      color: ${colors(props, 'navbarLink').colorActive};
      &:hover,
      &:focus {
        color: ${colors(props, 'navbarLink').colorActiveHoverFocus};
      };
    `;
  } else if (props.dark) {
    return css`
      color: ${colors(props, 'navbarLink').color};
      &:hover,
      &:focus {
        color: ${colors(props, 'navbarLink').colorHoverFocus};
      };
    `;
  } else if (props.disabled) {
    return css`
      color: ${colors(props, 'navbarLink').colorDisabled};
      &:hover,
      &:focus {
        color: ${colors(props, 'navbarLink').colorDisabledHoverFocus};
      };
    `;
  } else if (props.active) {
    return css`
      color: ${colors(props, 'navbarLink').colorActive};
      &:hover,
      &:focus {
        color: ${colors(props, 'navbarLink').colorActiveHoverFocus};
      };
    `;
  }

  return css`
    color: ${colors(props, 'navbarLink').color};
    &:hover,
    &:focus {
      color: ${colors(props, 'navbarLink').colorHoverFocus};
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
    padding-top: ${p(props, 'navbarLink').brandTop};
    padding-bottom: ${p(props, 'navbarLink').brandBottom};
  `
);

const fontSize = (props) => (
  props.brand &&
  css`
    font-size: ${fs(props, 'navbarLink').lg};
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
