import React from 'react';
import styled, { css } from 'styled-components';

import { Input, Textarea, Select } from 'styled-base-components';

import {
  theme,
  getColor,
  getBorder,
  getPadding,
  getFontSize,
  getBorderRadius,
  getHeight,
  getBoxShadow,
  getConcreteBreakpointSize,
} from 'styled-config';

const backgroundColor = (props) => {
  if (props.disabled || props.readonly) {
    return css`
      background-color: ${getColor(props, 'formControl', 'backgroundColorDisabledReadonly')};
      &:focus {
        background-color: ${getColor(props, 'formControl', 'backgroundColorDisabledReadonly')};
      }
    `;
  }

  return css`
    background-color: ${getColor(props, 'formControl', 'background')};
    &:focus {
      background-color: ${getColor(props, 'formControl', 'background')};
    }
  `;
};

const border = (props) => {
  if (props.valid) {
    return css`
      border-color: ${getColor(props, 'formControl', 'borderValid')};
      &:focus {
        border-color: ${getColor(props, 'formControl', 'borderValid')};
      };
    `;
  } else if (props.invalid) {
    return css`
      border-color: ${getColor(props, 'formControl', 'borderInvalid')};
      &:focus {
        border-color: ${getColor(props, 'formControl', 'borderInvalid')};
      };
    `;
  }

  return css`
    border: ${getBorder(props, 'formControl', 'default')} ${getColor(props, 'formControl', 'border')};
    &:focus {
      border-color: ${getColor(props, 'formControl', 'border')};
    };
  `;
};

const boxShadow = (props) => {
  if (props.valid) {
    return css`
      &:focus {
        box-shadow: ${getBoxShadow(props, 'formControl', 'default')} ${getColor(props, 'formControl', 'formControlBoxShadowValid')};
      };
    `;
  } else if (props.invalid) {
    return css`
      &:focus {
        box-shadow: ${getBoxShadow(props, 'formControl', 'default')} ${getColor(props, 'formControl', 'formControlBoxShadowInvalid')};
      };
    `;
  }

  return css`
    &:focus {
      box-shadow: 0;
    };
  `;
};

const opacity = (props) => {
  if (props.disabled || props.readonly) {
    return css`
      opacity: 1;
      &:focus {
        opacity: 1;
      }
    `;
  }

  return '';
};

const formControlFormInline = (props) => (
  props.formInline &&
  css`
    @media (min-width: ${getConcreteBreakpointSize(props, 'sm')}) {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    };
  `
);

const padding = (props) => {
  if (props.lg) {
    return css`
      padding-right: ${getPadding(props, 'formControl', 'lgRight')};
      padding-left: ${getPadding(props, 'formControl', 'lgLeft')};
      padding: ${getPadding(props, 'formControl', 'lgPadding')};
    `;
  } else if (props.sm) {
    return css`
    padding-right: ${getPadding(props, 'formControl', 'smRight')};
    padding-left: ${getPadding(props, 'formControl', 'smLeft')};
    padding: ${getPadding(props, 'formControl', 'smPadding')};
    `;
  }

  return css`
    padding: ${getPadding(props, 'formControl', 'defaultPadding')};
  `;
};

const fontSize = (props) => {
  if (props.lg) {
    return css`
      font-size: ${getFontSize(props, 'formControl', 'lg')};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${getFontSize(props, 'formControl', 'sm')};
    `;
  }

  return css`
    font-size: ${getFontSize(props, 'formControl', 'default')};
  `;
};

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'formControl', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'formControl', 'pill')};
    `;
  } else if (props.lg) {
    return css`
      border-radius: ${getBorderRadius(props, 'formControl', 'lg')};
    `;
  } else if (props.sm) {
    return css`
      border-radius: ${getBorderRadius(props, 'formControl', 'sm')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'formControl', 'default')};
  `;
};

const height = (props) => {
  if (props.lg && !props.multiple && props.select) {
    return css`
      height: ${getHeight(props, 'formControl', 'selectLg')};
    `;
  } else if (props.sm && !props.multiple && props.select) {
    return css`
      height: ${getHeight(props, 'formControl', 'selectSm')};
    `;
  } else if (!props.multiple && props.select) {
    return css`
      height: ${getHeight(props, 'formControl', 'select')};
    `;
  }

  return '';
};

const formControlStyle = () => css`
    display: block;
    width: 100%;
    line-height: 1.5;
    color: ${(props) => getColor(props, 'formControl', 'color')};
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    };
    &:focus {
      color: ${(props) => getColor(props, 'formControl', 'color')};
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${(props) => getColor(props, 'formControl', 'boxShadowFocus')};
    };
    &::placeholder {
      color: ${(props) => getColor(props, 'formControl', 'placeholder')};
      opacity: 1;
    };
    ${(props) => backgroundColor(props)}
    ${(props) => border(props)}
    ${(props) => boxShadow(props)}
    ${(props) => opacity(props)}
    ${(props) => formControlFormInline(props)}
    ${(props) => padding(props)}
    ${(props) => fontSize(props)}
    ${(props) => borderRadius(props)}
    ${(props) => height(props)}
  `;

const FormControlInput = styled(Input)`
  ${formControlStyle};
`;

const FormControlTextarea = styled(Textarea)`
  ${formControlStyle};
`;

const FormControlSelect = styled(Select)`
  ${formControlStyle};
  &:focus::-ms-value {
    color: ${(props) => getColor(props, 'formControl', 'color')};
    background-color: ${(props) => getColor(props, 'formControl', 'background')};
  };
`;

const FormControl = (props) => {
  if (props.textarea) {
    return <FormControlTextarea {...props} />;
  } else if (props.select) {
    return <FormControlSelect {...props} />;
  }

  return <FormControlInput {...props} />;
};

FormControl.defaultProps = {
  theme,
};

export { FormControl };
