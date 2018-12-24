import React from 'react';
import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  border as b,
  boxShadow as bs,
  padding as p,
  fontSize as fs,
  borderRadius as br,
  height as h,
} from 'styled-config';

const backgroundColor = (props) => {
  if (props.disabled || props.readonly) {
    return css`
      background-color: ${colors(props, 'formControl').backgroundColorDisabledReadonly};
      &:focus {
        background-color: ${colors(props, 'formControl').backgroundColorDisabledReadonly};
      }
    `;
  }

  return css`
    background-color: ${colors(props, 'formControl').background};
    &:focus {
      background-color: ${colors(props, 'formControl').background};
    }
  `;
};

const border = (props) => {
  if (props.valid) {
    return css`
      border-color: ${colors(props, 'formControl').borderValid};
      &:focus {
        border-color: ${colors(props, 'formControl').borderValid};
      };
    `;
  } else if (props.invalid) {
    return css`
      border-color: ${colors(props, 'formControl').borderInvalid};
      &:focus {
        border-color: ${colors(props, 'formControl').borderInvalid};
      };
    `;
  }

  return css`
    border: ${b(props, 'formControl').default} ${colors(props, 'formControl').border};
    &:focus {
      border-color: ${colors(props, 'formControl').border};
    };
  `;
};

const boxShadow = (props) => {
  if (props.valid) {
    return css`
      &:focus {
        box-shadow: ${bs(props, 'formControl').default} ${colors(props, 'formControl').formControlBoxShadowValid};
      };
    `;
  } else if (props.invalid) {
    return css`
      &:focus {
        box-shadow: ${bs(props, 'formControl').default} ${colors(props, 'formControl').formControlBoxShadowInvalid};
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
    @media (min-width: ${props.theme.screenSize.sm}) {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    };
  `
);

const padding = (props) => {
  if (props.lg) {
    return css`
      padding-right: ${p(props, 'formControl').lgRight};
      padding-left: ${p(props, 'formControl').lgLeft};
      padding: ${p(props, 'formControl').lgPadding};
    `;
  } else if (props.sm) {
    return css`
    padding-right: ${p(props, 'formControl').smRight};
    padding-left: ${p(props, 'formControl').smLeft};
    padding: ${p(props, 'formControl').smPadding};
    `;
  }

  return css`
    padding: ${p(props, 'formControl').defaultPadding};
  `;
};

const fontSize = (props) => {
  if (props.lg) {
    return css`
      font-size: ${fs(props, 'formControl').lg};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${fs(props, 'formControl').sm};
    `;
  }

  return css`
    font-size: ${fs(props, 'formControl').default};
  `;
};

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'formControl').noRadius};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${br(props, 'formControl').pill};
    `;
  } else if (props.lg) {
    return css`
      border-radius: ${br(props, 'formControl').lg};
    `;
  } else if (props.sm) {
    return css`
      border-radius: ${br(props, 'formControl').sm};
    `;
  }

  return css`
    border-radius: ${br(props, 'formControl').default};
  `;
};

const height = (props) => {
  if (props.lg && !props.multiple && props.select) {
    return css`
      height: ${h(props, 'formControl').selectLg};
    `;
  } else if (props.sm && !props.multiple && props.select) {
    return css`
      height: ${h(props, 'formControl').selectSm};
    `;
  } else if (!props.multiple && props.select) {
    return css`
      height: ${h(props, 'formControl').select};
    `;
  }

  return '';
};

const formControlStyle = () => css`
    display: block;
    width: 100%;
    line-height: 1.5;
    color: ${(props) => colors(props, 'formControl').color};
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    };
    &:focus {
      color: ${(props) => colors(props, 'formControl').color};
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${(props) => colors(props, 'formControl').boxShadowFocus};
    };
    &::placeholder {
      color: ${(props) => colors(props, 'formControl').placeholder};
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

const FormControlInput = styled.input`
  ${formControlStyle};
`;

const FormControlTextarea = styled.textarea`
  ${formControlStyle};
`;

const FormControlSelect = styled.select`
  ${formControlStyle};
  &:focus::-ms-value {
    color: ${(props) => colors(props, 'formControl').color};
    background-color: ${(props) => colors(props, 'formControl').background};
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
