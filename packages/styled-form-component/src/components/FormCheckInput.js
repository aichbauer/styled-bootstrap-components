import styled, { css } from 'styled-components';

import { Input } from 'styled-base-components';

import {
  theme,
  getColor,
  margin,
} from 'styled-config';

const color = (props) => (
  props.disabled &&
  css`
    color: ${getColor(props, 'formCheckInput', 'colorDisabled')};
    & + label {
      color: ${getColor(props, 'formCheckInput', 'colorDisabledLabel')};
    };
  `
);

const FormCheckInput = styled(Input)`
  position: absolute;
  margin-top: ${(props) => margin(props, 'formCheckInput').top};
  margin-left: ${(props) => margin(props, 'formCheckInput').left};
  box-sizing: border-box;
  ${(props) => color(props)};
`;

FormCheckInput.defaultProps = {
  theme,
};

export { FormCheckInput };
