import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  padding,
  border,
  borderRadius,
} from 'styled-config';

const color = (props) => {
  if (props.disabled) {
    return css`
      color: ${colors(props, 'listGroupItem').colorDisabled} !important;
      ${props.action && css`
        & > a,
        & > a:hover,
        & > a:focus {
          color: ${colors(props, 'listGroupItem').colorDisabled};
        };
      `}
    `;
  } else if (props.active) {
    return css`
      color: ${colors(props, 'listGroupItem').colorActive};
      ${props.action && css`
        & > a,
        & > a:hover,
        & > a:focus {
          color: ${colors(props, 'listGroupItem').colorActive};
        };
      `}
    `;
  }

  return css`
    color: ${colors(props, 'listGroupItem').color};
    ${props.action && css`
      & > a,
      & > a:hover,
      & > a:focus {
        color: ${colors(props, 'listGroupItem').color};
      };
    `}
  `;
};

const backgroundBorderColor = (props) => {
  if (props.disabled) {
    return css`
      background-color: ${colors(props, 'listGroupItem').backgroundColorDisabled};
    `;
  }

  return css`
    background-color: ${colors(props, 'listGroupItem').backgroundColor};
    border-color: ${colors(props, 'listGroupItem').borderColor};
    ${props.action && css`
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        background-color: ${colors(props, 'listGroupItem').backgroundColorHoverFocusAction};
      };
    `}
    ${props.active && css`
      background-color: ${colors(props, 'listGroupItem').backgroundColorActive};
      border-color: ${colors(props, 'listGroupItem').borderColorActive};
      &:hover,
      &:focus,
      & > a:hover,
      & > a:focus {
        background-color: ${colors(props, 'listGroupItem').borderColorActive};
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

const ListGroupItem = styled.li`
  position: relative;
  display: block;
  padding: ${(props) => padding(props, 'listGroupItem').default};
  border: ${(props) => border(props, 'listGroupItem').default} ${(props) => colors(props, 'listGroupItem').borderColor};
  border-bottom: none;
  margin-bottom: -1px;
  &:first-child {
    border-top-left-radius: ${(props) => borderRadius(props, 'listGroupItem').default};
    border-top-right-radius: ${(props) => borderRadius(props, 'listGroupItem').default};
  };
  &:last-child {
    border-bottom: ${(props) => border(props, 'listGroupItem').default}
    ${(props) => {
    if (props.active) {
      return colors(props, 'listGroupItem').borderColorActive;
    }

    return colors(props, 'listGroupItem').borderColor;
  }};
    margin-bottom: 0;
    border-bottom-right-radius: ${(props) => borderRadius(props, 'listGroupItem').default};
    border-bottom-left-radius: ${(props) => borderRadius(props, 'listGroupItem').default};
  };
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
