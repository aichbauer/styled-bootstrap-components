import styled, { css } from 'styled-components';

import { Input } from 'styled-base-components';

import {
  theme,
  getColor,
  padding as p,
  margin,
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
    padding-right: ${p(props, 'formControlPlainText').smRight};
    padding-left: ${p(props, 'formControlPlainText').smLeft};
  `
);

const FormControlPlainText = styled(Input)`
  width: 100%;
  padding-top: ${(props) => p(props, 'formControlPlainText').top};
  padding-bottom: ${(props) => p(props, 'formControlPlainText').bottom};
  margin-bottom: ${(props) => margin(props, 'formControlPlainText').bottom};
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
