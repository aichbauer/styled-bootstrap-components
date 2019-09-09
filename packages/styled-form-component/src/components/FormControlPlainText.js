import styled, { css } from 'styled-components';

import { Input } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getMargin,
} from 'styled-config';

const display = (props) => {
  if (props.inline) {
    return css`
      display: inline-block;
    `;
  }

  return css`
    display: block;
  `;
};

const padding = (props) => (
  (props.sm || props.lg) &&
  css`
    padding-right: ${getPadding(props, 'formControlPlainText', 'smRight')};
    padding-left: ${getPadding(props, 'formControlPlainText', 'smLeft')};
  `
);

const FormControlPlainText = styled(Input)`
  width: 100%;
  padding-top: ${(props) => getPadding(props, 'formControlPlainText', 'top')};
  padding-bottom: ${(props) => getPadding(props, 'formControlPlainText', 'bottom')};
  margin-bottom: ${(props) => getMargin(props, 'formControlPlainText', 'bottom')};
  line-height: 1.5;
  background-color: ${(props) => getColor(props, 'formControlPlainText', 'backgroundColor')};
  border: solid ${(props) => getColor(props, 'formControlPlainText', 'borderColor')};
  border-width: 1px 0;
  box-sizing: border-box;
  ${(props) => display(props)};
  ${(props) => padding(props)};
`;

FormControlPlainText.defaultProps = {
  theme,
};

export { FormControlPlainText };
