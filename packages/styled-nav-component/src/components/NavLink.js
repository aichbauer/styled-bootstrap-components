import styled, { css } from 'styled-components';

import { A } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorderRadius,
  getBorder,
} from 'styled-config';

const color = (props) => {
  if (props.disabled) {
    return css`
      color: ${getColor(props, 'navLink', 'colorDisabled')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navLink', 'colorDisabledHoverFocus')};
      };
    `;
  } else if (props.tabs && props.active) {
    return css`
      color: ${getColor(props, 'navLink', 'colorTabsActive')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navLink', 'colorTabsActiveHoverFocus')};
      };
    `;
  } else if (props.pills && props.active) {
    return css`
      color: ${getColor(props, 'navLink', 'colorPillsActive')};
      &:hover,
      &:focus {
        color: ${getColor(props, 'navLink', 'colorPillsActiveHoverFocus')};
      };
    `;
  }

  return css`
    color: ${getColor(props, 'navLink', 'color')};
    &:hover,
    &:focus {
      color: ${getColor(props, 'navLink', 'colorHoverFocus')};
    };
  `;
};

const backgroundColor = (props) => (
  (props.pills && props.active) &&
  css`
    background-color: ${getColor(props, 'navLink', 'backgroundColorPillsActive')};
  `
);

const border = (props) => {
  if (props.tabs && props.active) {
    return css`
      border-color: ${getColor(props, 'navLink', 'borderColorTabsActive')};
    `;
  } if (props.tabs && props.disabled) {
    return css`
      border-color: ${getColor(props, 'navLink', 'borderColorTabsDisabled')};
    `;
  } else if (props.tabs) {
    return css`
      &:hover,
      &:focus {
        border-color: ${getColor(props, 'navLink', 'borderColorTabsHoverFocus')};
      };
    `;
  } else if (props.pills && props.active) {
    return css`
      background-color: ${getColor(props, 'navLink', 'borderColorPillsActive')};
    `;
  }

  return '';
};

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'navLink', 'noRadius')};
    `;
  } else if (props.pills && props.active) {
    return css`
      border-radius: ${getBorderRadius(props, 'navLink', 'default')};
    `;
  }

  return css`
    border-top-left-radius: ${getBorderRadius(props, 'navLink', 'default')};
    border-top-right-radius: ${getBorderRadius(props, 'navLink', 'default')};
  `;
};

const NavLink = styled(A)`
  display: block;
  padding: ${(props) => getPadding(props, 'navLink', 'default')};
  border: ${(props) => getBorder(props, 'navLink', 'default')} ${(props) => getColor(props, 'navLink', 'borderColor')};
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
