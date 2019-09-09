import styled, { css } from 'styled-components';

import { Li } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorder,
  getBorderRadius,
} from 'styled-config';

const color = (props) => {
  if (props.disabled) {
    return css`
      color: ${getColor(props, 'listGroupItem', 'colorDisabled')};
      ${props.action && css`
        & > a,
        & > a:hover,
        & > a:focus {
          color: ${getColor(props, 'listGroupItem', 'colorDisabled')};
        };
      `}
    `;
  } else if (props.active) {
    return css`
      color: ${getColor(props, 'listGroupItem', 'colorActive')};
      ${props.action && css`
        & > a,
        & > a:hover,
        & > a:focus {
          color: ${getColor(props, 'listGroupItem', 'colorActive')};
        };
      `}
    `;
  }

  return css`
    color: ${getColor(props, 'listGroupItem', 'color')};
    ${props.action && css`
      & > a,
      & > a:hover,
      & > a:focus {
        color: ${getColor(props, 'listGroupItem', 'color')};
      };
    `}
  `;
};

const backgroundBorderColor = (props) => {
  if (props.disabled) {
    return css`
      background-color: ${getColor(props, 'listGroupItem', 'backgroundColorDisabled')};
    `;
  }

  return css`
    background-color: ${getColor(props, 'listGroupItem', 'backgroundColor')};
    border-color: ${getColor(props, 'listGroupItem', 'borderColor')};
    ${props.action && css`
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        background-color: ${getColor(props, 'listGroupItem', 'backgroundColorHoverFocusAction')};
      };
    `}
    ${props.active && css`
      background-color: ${getColor(props, 'listGroupItem', 'backgroundColorActive')};
      border-color: ${getColor(props, 'listGroupItem', 'borderColorActive')};
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        background-color: ${getColor(props, 'listGroupItem', 'borderColorActive')};
      };
    `}
  `;
};

const zIndex = (props) => (
  props.active &&
  css`
    z-index: 2;
  `
);

const cursor = (props) => (
  !props.disabled &&
    props.action
    ? css`
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        cursor: pointer;
      }
    `
    : css`
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        cursor: text;
      }
    `
);

const ListGroupItem = styled(Li)`
  position: relative;
  display: block;
  padding: ${(props) => getPadding(props, 'listGroupItem', 'default')};
  border: ${(props) => getBorder(props, 'listGroupItem', 'default')} ${(props) => getColor(props, 'listGroupItem', 'borderColor')};
  border-bottom: none;
  margin-bottom: -1px;
  &:first-child {
    border-top-left-radius: ${(props) => getBorderRadius(props, 'listGroupItem', 'default')};
    border-top-right-radius: ${(props) => getBorderRadius(props, 'listGroupItem', 'default')};
  };
  &:last-child {
    border-bottom: ${(props) => getBorder(props, 'listGroupItem', 'default')}
    ${(props) => {
    if (props.active) {
      return getColor(props, 'listGroupItem', 'borderColorActive');
    }

    return getColor(props, 'listGroupItem', 'borderColor');
  }};
    margin-bottom: 0;
    border-bottom-right-radius: ${(props) => getBorderRadius(props, 'listGroupItem', 'default')};
    border-bottom-left-radius: ${(props) => getBorderRadius(props, 'listGroupItem', 'default')};
  };
  & > a,
  & > a:hover,
  & > a:focus {
    z-index: 1;
    text-decoration: none;
  };
  ${(props) => color(props)}
  ${(props) => backgroundBorderColor(props)}
  ${(props) => zIndex(props)}
  ${(props) => cursor(props)}
`;

ListGroupItem.defaultProps = {
  theme,
};

export { ListGroupItem };
