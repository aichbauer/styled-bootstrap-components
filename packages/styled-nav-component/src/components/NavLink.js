import styled, { css } from 'styled-components';

import { A } from 'styled-base-components';

import {
  theme,
  colors,
  padding,
  borderRadius as br,
  border as b,
} from 'styled-config';

const color = (props) => {
  if (props.disabled) {
    return css`
      color: ${colors(props, 'navLink', 'colorDisabled')};
      &:hover,
      &:focus {
        color: ${colors(props, 'navLink', 'colorDisabledHoverFocus')};
      };
    `;
  } else if (props.tabs && props.active) {
    return css`
      color: ${colors(props, 'navLink', 'colorTabsActive')};
      &:hover,
      &:focus {
        color: ${colors(props, 'navLink', 'colorTabsActiveHoverFocus')};
      };
    `;
  } else if (props.pills && props.active) {
    return css`
      color: ${colors(props, 'navLink', 'colorPillsActive')};
      &:hover,
      &:focus {
        color: ${colors(props, 'navLink', 'colorPillsActiveHoverFocus')};
      };
    `;
  }

  return css`
    color: ${colors(props, 'navLink', 'color')};
    &:hover,
    &:focus {
      color: ${colors(props, 'navLink', 'colorHoverFocus')};
    };
  `;
};

const backgroundColor = (props) => (
  (props.pills && props.active) &&
  css`
    background-color: ${colors(props, 'navLink', 'backgroundColorPillsActive')};
  `
);

const border = (props) => {
  if (props.tabs && props.active) {
    return css`
      border-color: ${colors(props, 'navLink', 'borderColorTabsActive')};
    `;
  } if (props.tabs && props.disabled) {
    return css`
      border-color: ${colors(props, 'navLink', 'borderColorTabsDisabled')};
    `;
  } else if (props.tabs) {
    return css`
      &:hover,
      &:focus {
        border-color: ${colors(props, 'navLink', 'borderColorTabsHoverFocus')};
      };
    `;
  } else if (props.pills && props.active) {
    return css`
      background-color: ${colors(props, 'navLink', 'borderColorPillsActive')};
    `;
  }

  return '';
};

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'navLink').noRadius};
    `;
  } else if (props.pills && props.active) {
    return css`
      border-radius: ${br(props, 'navLink').default};
    `;
  }

  return css`
    border-top-left-radius: ${br(props, 'navLink').default};
    border-top-right-radius: ${br(props, 'navLink').default};
  `;
};

const NavLink = styled(A)`
  display: block;
  padding: ${(props) => padding(props, 'navLink').default};
  border: ${(props) => b(props, 'navLink').default} ${(props) => colors(props, 'navLink', 'borderColor')};
  &:hover,
  &:focus {
    text-decoration: none;
  };
  ${(props) => color(props)};
  ${(props) => backgroundColor(props)};
  ${(props) => border(props)};
  ${(props) => borderRadius(props)};
`;

NavLink.defaultProps = {
  theme,
};

export { NavLink };
