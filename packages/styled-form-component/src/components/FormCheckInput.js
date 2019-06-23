import styled, { css } from 'styled-components';

import { Input } from 'styled-base-components';

import {
  theme,
  colors,
  margin,
} from 'styled-config';

const color = (props) => (
  props.disabled &&
  css`
    color: ${colors(props, 'formCheckInput').colorDisabled};
    & + label {
      color: ${colors(props, 'formCheckInput').colorDisabledLabel};
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
