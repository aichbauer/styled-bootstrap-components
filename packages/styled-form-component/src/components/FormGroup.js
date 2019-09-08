import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getMargin,
  getPadding,
  getBorderRadius,
  getFontSize,
  getConcreteBreakpointSize,
} from 'styled-config';

const formGroupFormInline = (props) => (
  props.formInline &&
  css`
    @media (min-width: ${getConcreteBreakpointSize(props, 'sm')}) {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: ${getMargin(props, 'formGroup', 'inlineBottom')}
    };
  `
);

const display = (props) => (
  props.row &&
  css`
    display: flex;
  `
);

const flexWrap = (props) => (
  props.row &&
  css`
    flex-wrap: wrap;
  `
);

const margin = (props) => {
  if (props.nomb && !props.row) {
    return css`
      margin-bottom: ${getMargin(props, 'formGroup', 'nombNoRow')};
    `;
  } if (props.nomb && props.row) {
    return css`
      margin-right: ${getMargin(props, 'formGroup', 'nombRowRight')};
      margin-left: ${getMargin(props, 'formGroup', 'nombRowLeft')};
      & > div > label {
        margin-bottom: ${getMargin(props, 'formGroup', 'nombRowDivLabelBottom')};
      };
      margin-bottom: ${getMargin(props, 'formGroup', 'nombRowBottom')};
    `;
  } else if (props.row) {
    return css`
      margin-right: ${getMargin(props, 'formGroup', 'rowRight')};
      margin-left: ${getMargin(props, 'formGroup', 'rowLeft')};
      & > div > label {
        margin-bottom: ${getMargin(props, 'formGroup', 'rowDivLabel')};
      };
      margin-bottom: ${getMargin(props, 'formGroup', 'bottom')};
    `;
  }

  return css`
    margin-bottom: ${getMargin(props, 'formGroup', 'bottom')};
  `;
};

const justifyContent = (props) => (
  props.justify &&
  css`
    justify-content: center;
  `
);

const alignItems = (props) => (
  props.justify &&
  css`
    align-items: center;
  `
);

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type=file]),
      & > div > :not(input[type=file]) {
        border-radius: ${getBorderRadius(props, 'formGroup', 'noRadius')};
      };
    `;
  }
  if (props.lg) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type=file]),
      & > div > :not(input[type=file]) {
        border-radius: ${getBorderRadius(props, 'formGroup', 'lg')};
      };
    `;
  } else if (props.sm) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type=file]),
      & > div > :not(input[type=file]) {
        border-radius: ${getBorderRadius(props, 'formGroup', 'sm')};
      };
    `;
  }

  return css`
    & > input,
    & > div > input,
    & > :not(input[type=file]),
    & > div > :not(input[type=file]) {
      border-radius: ${getBorderRadius(props, 'formGroup', 'default')};
    };
  `;
};

const lineHeight = () => (
  css`
    & > input, & > div > input,
    & > label, & > div > label {
      line-height: 1.5;
    };
  `
);

const fontSize = (props) => {
  if (props.lg) {
    return css`
      & > input,
      & > div > input,
      & > label,
      & > div > label {
        font-size: ${getFontSize(props, 'formGroup', 'lg')};
      };
    `;
  } else if (props.sm) {
    return css`
      & > input,
      & > div > input,
      & > label,
      & > div > label {
        font-size: ${getFontSize(props, 'formGroup', 'sm')};
      };
    `;
  }

  return css`
    & > input,
    & > div > input,
    & > label,
    & > div > label {
      font-size: ${getFontSize(props, 'formGroup', 'default')};
    };
  `;
};

const padding = (props) => {
  if (props.lg) {
    return css`
      & > label, & > div > label {
        padding-top: ${getPadding(props, 'formGroup', 'labelTopLg')};
        padding-bottom: ${getPadding(props, 'formGroup', 'labelBottomLg')};
      };
      & > input, & > div > input {
        padding-right: ${getPadding(props, 'formGroup', 'inputRightLg')};
        padding-left: ${getPadding(props, 'formGroup', 'inputLeftLg')};
        padding: ${getPadding(props, 'formGroup', 'inputLg')};
      };
    `;
  } else if (props.sm) {
    return css`
      & > label, & > div > label {
        padding-top: ${getPadding(props, 'formGroup', 'labelTopSm')};
        padding-bottom: ${getPadding(props, 'formGroup', 'labelBottomSm')};
      };
      & > input, & > div > input {
        padding-right: ${getPadding(props, 'formGroup', 'inputRightSm')};
        padding-left: ${getPadding(props, 'formGroup', 'inputLeftSm')};
        padding: ${getPadding(props, 'formGroup', 'inputSm')};
      };
    `;
  }

  return '';
};

const FormGroup = styled(Div)`
  box-sizing: border-box;
  ${(props) => display(props)}
  ${(props) => flexWrap(props)}
  ${(props) => margin(props)}
  ${(props) => justifyContent(props)}
  ${(props) => alignItems(props)}
  ${(props) => borderRadius(props)}
  ${(props) => lineHeight(props)}
  ${(props) => fontSize(props)}
  ${(props) => padding(props)}
  ${(props) => formGroupFormInline(props)}
`;

FormGroup.defaultProps = {
  theme,
};

export { FormGroup };
