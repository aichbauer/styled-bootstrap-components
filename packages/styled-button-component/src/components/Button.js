import styled, { css } from 'styled-components';

import { Utilities, Button as BaseButton, A } from 'styled-base-components';

import {
  theme,
  getColor,
  getBreakpointSize,
  getBorderRadius,
  getBorder,
  getPadding,
  getMargin,
  getFontSize,
} from 'styled-config';

const boxShadow = (props) => (
  css`
    box-shadow: 0 0 0 0.2rem ${getColor(props, 'button', 'boxShadow')};
  `
);

const padding = (props) => {
  if (props.split) {
    if (props.sm) {
      return css`
      padding: 0;
      padding-right: ${getPadding(props, 'button', 'splitSmRight')};
      padding-left: ${getPadding(props, 'button', 'splitSmLeft')};
      &::after {
        margin-left: 0;
      };
    `;
    } else if (props.lg) {
      return css`
      padding: 0;
      padding-right: ${getPadding(props, 'button', 'splitLgRight')};
      padding-left: ${getPadding(props, 'button', 'splitLgLeft')};
      &::after {
        margin-left: 0;
      };
    `;
    }

    return css`
      padding: 0;
      padding-right: ${getPadding(props, 'button', 'splitDefaultRight')};
      padding-left: ${getPadding(props, 'button', 'splitDefaultLeft')};
      &::after {
        margin-left: 0;
      };
  `;
  } else if (props.lg) {
    return css`
      padding: ${getPadding(props, 'button', 'lg')};
    `;
  } else if (props.sm) {
    return css`
      padding: ${getPadding(props, 'button', 'sm')};
    `;
  }

  return css`
    padding: ${getPadding(props, 'button', 'default')};
  `;
};

const block = (props) => {
  if (props.block) {
    return css`
      display: block;
      width: 100%;
      & + & {
        margin-top: ${getMargin(props, 'button', 'blockTop')};
      };
    `;
  }

  return css`
    display: inline-block;
  `;
};

const fontSize = (props) => {
  if (props.lg) {
    return css`
      font-size: ${getFontSize(props, 'button', 'lg')};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${getFontSize(props, 'button', 'sm')};
    `;
  }

  return css`
    font-size: ${getFontSize(props, 'button', 'default')};
  `;
};

const dropdownToggle = (props) => (
  props.dropdownToggle &&
  css`
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: ${getMargin(props, 'button', 'dropdownToggleLeft')};
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
    &:empty::after {
      margin-left: 0;
    }
    &::after {
      margin-left: 0.255em;
    }
  `
);

const disabled = (props) => (
  props.disabled &&
  css`
    opacity: 0.65;
  `
);

const border = (props) => {
  if (props.active) {
    return css`border: ${getBorder(props, 'button', 'default')} ${getColor(props, 'button', 'borderColorActive')};`;
  } else if (props.disabled) {
    return css`border: ${getBorder(props, 'button', 'default')} ${getColor(props, 'button', 'borderColorDisabled')};`;
  }

  return css`
    border: 1px solid ${getColor(props, 'button', 'borderColor')};
    ${!props.outline &&
    css`
      &:focus,
      &:hover {
        border: 1px solid ${getColor(props, 'button', 'borderColorHoverFocus')};
      }
    `}
  `;
};

const backgroundColor = (props) => {
  if (props.active) {
    return css`
      background-image: none;
      background-color: ${getColor(props, 'button', 'backgroundColorActive')};
    `;
  } else if (props.outline) {
    return css`
      background-image: none;
      background-color: transparent;
      &:hover {
        background-color: ${props.disabled ? 'transparent' : getColor(props, 'button', 'backgroundColor')};
      }
    `;
  } else if (props.disabled) {
    return css`
      background-image: none;
      background-color: ${getColor(props, 'button', 'backgroundColorDisabled')};
    `;
  }

  return css`
    background-color: ${getColor(props, 'button', 'backgroundColor')};
    &:focus,
    &:hover {
      background-color: ${getColor(props, 'button', 'backgroundColorHoverFocus')};
    }
  `;
};

const borderRadius = (props) => {
  if (props.pill) {
    return css`border-radius: ${getBorderRadius(props, 'button', 'pill')};`;
  } else if (props.noRadius) {
    return css`border-radius: ${getBorderRadius(props, 'button', 'noRadius')};`;
  } else if (props.sm) {
    return css`border-radius: ${getBorderRadius(props, 'button', 'sm')};`;
  } else if (props.lg) {
    return css`border-radius: ${getBorderRadius(props, 'button', 'lg')};`;
  }

  return css`border-radius: ${getBorderRadius(props, 'button', 'default')};`;
};

const buttonToggler = (props) => (
  css`
    color: ${getColor(props, 'button', 'toggle', 'color')};
    border-color: ${getColor(props, 'button', 'toggle', 'borderColor')};
    &:hover, &:focus {
      color: ${getColor(props, 'button', 'toggle', 'color')};
      border-color: ${getColor(props, 'button', 'toggle', 'borderColor')};
    }
  `
);

const buttonToggleCollapse = (props) => {
  if (
    (
      props.expandSm ||
      props.expandMd ||
      props.expandLg ||
      props.expandXl
    ) &&
    props.toggleCollapse
  ) {
    return css`
      display: none;
      @media (max-width: ${getBreakpointSize(props)}) {
        display: block;
        font-size: ${fontSize(props).toggle};
        ${buttonToggler};
      }
    `;
  }

  return '';
};

const color = (props) => {
  if (props.outline) {
    if (props.disabled) {
      return css`
        color: ${getColor(props, 'button', 'colorOutline')};
      `;
    }

    return css`
      color: ${getColor(props, 'button', 'colorOutline')};
      &:hover {
        color: ${getColor(props, 'button', 'colorOutlineHover')};
      }
    `;
  }

  return css`color: ${getColor(props, 'button', 'color')};`;
};

const cursor = (props) => (
  !props.disabled &&
  css`
    cursor: pointer;
  `
);

const buttonStyle = (props) => css`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    ${boxShadow};
  }
  &:hover,
  &:focus {
    text-decoration: none;
    ${border(props)};
    ${backgroundColor(props)};
    ${color(props)};
    ${cursor(props)};
  }
  ${border(props)};
  ${backgroundColor(props)};
  ${borderRadius(props)};
  ${block(props)};
  ${dropdownToggle(props)};
  ${buttonToggleCollapse(props)};
  ${disabled(props)};
  ${fontSize(props)};
  ${color(props)};
  ${padding(props)};
`;

const Button = styled(BaseButton)`
  ${(props) => buttonStyle(props)};
`;

Button.defaultProps = {
  theme,
};

const LinkButton = styled(A)`
  ${Utilities}
  text-decoration: none;
  ${(props) => buttonStyle(props)};
`;

LinkButton.defaultProps = {
  theme,
};

export {
  Button,
  LinkButton,
};
