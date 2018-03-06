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
import {
  Input as Ipt,
  Textarea as TA,
  Select as S,
} from 'styled-base-components';
import { screenSize } from 'styled-config';

const formControlDisabledReadonly = (props) => (
  (props.disabled || props.readonly) &&
  css`
    background-color: #e9ecef;
    opacity: 1;
    &:focus {
      background-color: #e9ecef;
      opacity: 1;
    };
  `
);

const formControlValid = (props) => (
  props.valid &&
  css`
    border-color: #28a745;
    &:focus {
      border-color: #28a745;
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    };
  `
);

const formControlInvalid = (props) => (
  props.invalid &&
  css`
    border-color: #dc3545;
    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    };
  `
);

const formControlFormInline = (props) => (
  props.formInline &&
  css`
    @media (min-width: ${screenSize.sm}) {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    };
  `
);

const formControlSmall = (props) => {
  if (props.sm) {
    if (!props.multiple && props.select) {
      return css`
        padding-right: 0;
        padding-left: 0;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
        height: calc(1.8125rem + 2px);
      `;
    }

    return css`
      padding-right: 0;
      padding-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
    `;
  }

  return '';
};

const formControlLarge = (props) => {
  if (props.lg) {
    if (!props.multiple && props.select) {
      return css`
        padding-right: 0;
        padding-left: 0;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
        height: calc(2.875rem + 2px);
      `;
    }

    return css`
      padding-right: 0;
      padding-left: 0;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: 0.3rem;
    `;
  }

  return '';
};

const formControlStyle = () => css`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    };
    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    };
    &::placeholder {
      color: #6c757d;
      opacity: 1;
    };
    ${formControlDisabledReadonly};
    ${formControlInvalid};
    ${formControlValid};
    ${formControlFormInline};
    ${formControlSmall};
    ${formControlLarge};
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

const formControlSelect = (props) => (
  !props.multiple &&
  css`
    height: calc(2.25rem + 2px);
  `
);

const FormControlInput = styled(Ipt)`
  ${formControlStyle};
`;

const FormControlTextarea = styled(TA)`
  ${formControlStyle};
`;

const FormControlSelect = styled(S)`
  ${formControlSelect};
  ${formControlStyle};
  &:focus::-ms-value {
    color: #495057;
    background-color: #fff;
  }
`;

export const FormControl = (props) => {
  if (props.textarea) {
    return new FormControlTextarea(props);
  } else if (props.select) {
    return new FormControlSelect(props);
  }

  return new FormControlInput(props);
};
