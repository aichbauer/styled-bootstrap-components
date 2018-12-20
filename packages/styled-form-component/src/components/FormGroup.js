import styled, { css } from 'styled-components';

import {
  theme,
  margin as m,
  padding as p,
  borderRadius as br,
  fontSize as fs,
} from 'styled-config';

const formGroupFormInline = (props) => (
  props.formInline &&
  css`
    @media (min-width: ${props.theme.screenSize.sm}) {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: ${m(props, 'formGroup').inlineBottom}
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
      margin-bottom: ${m(props, 'formGroup').nombNoRow};
    `;
  } if (props.nomb && props.row) {
    return css`
      margin-right: ${m(props, 'formGroup').nombRowRight};
      margin-left: ${m(props, 'formGroup').nombRowLeft};
      & > div > label {
        margin-bottom: ${m(props, 'formGroup').nombRowDivLabelBottom};
      };
      margin-bottom: ${m(props, 'formGroup').nombRowBottom};
    `;
  } else if (props.row) {
    return css`
      margin-right: ${m(props, 'formGroup').rowRight};
      margin-left: ${m(props, 'formGroup').rowLeft};
      & > div > label {
        margin-bottom: ${m(props, 'formGroup').rowDivLabel};
      };
      margin-bottom: ${m(props, 'formGroup').bottom};
    `;
  }

  return css`
    margin-bottom: ${m(props, 'formGroup').bottom};
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
        border-radius: ${br(props, 'formGroup').noRadius};
      };
    `;
  }
  if (props.lg) {
    return css`
      & > input, 
      & > div > input,
      & > :not(input[type=file]),
      & > div > :not(input[type=file]) {
        border-radius: ${br(props, 'formGroup').lg};
      };
    `;
  } else if (props.sm) {
    return css`
      & > input, 
      & > div > input,
      & > :not(input[type=file]),
      & > div > :not(input[type=file]) {
        border-radius: ${br(props, 'formGroup').sm};
      };
    `;
  }

  return css`
    & > input,
    & > div > input,
    & > :not(input[type=file]),
    & > div > :not(input[type=file]) {
      border-radius: ${br(props, 'formGroup').default};
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
        font-size: ${fs(props, 'formGroup').lg};
      };
    `;
  } else if (props.sm) {
    return css`
      & > input,
      & > div > input,
      & > label,
      & > div > label {
        font-size: ${fs(props, 'formGroup').sm};
      };
    `;
  }

  return css`
    & > input, 
    & > div > input,
    & > label,
    & > div > label {
      font-size: ${fs(props, 'formGroup').default};
    };
  `;
};

const padding = (props) => {
  if (props.lg) {
    return css`
      & > label, & > div > label {
        padding-top: ${p(props, 'formGroup').labelTopLg};
        padding-bottom: ${p(props, 'formGroup').labelBottomLg};
      };
      & > input, & > div > input {
        padding-right: ${p(props, 'formGroup').inputRightLg};
        padding-left: ${p(props, 'formGroup').inputLeftLg};
        padding: ${p(props, 'formGroup').inputLg};
      };
    `;
  } else if (props.sm) {
    return css`
      & > label, & > div > label {
        padding-top: ${p(props, 'formGroup').labelTopSm};
        padding-bottom: ${p(props, 'formGroup').labelBottomSm};
      };
      & > input, & > div > input {
        padding-right: ${p(props, 'formGroup').inputRightSm};
        padding-left: ${p(props, 'formGroup').inputLeftSm};
        padding: ${p(props, 'formGroup').inputSm};
      };
    `;
  }

  return '';
};

const FormGroup = styled.div`
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
