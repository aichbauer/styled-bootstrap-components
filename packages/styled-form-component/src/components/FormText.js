import styled, { css } from 'styled-components';

import { Small } from 'styled-base-components';

import {
  theme,
  getColor,
  margin,
} from 'styled-config';

const color = (props) => (
  props.muted &&
  css`
    color: ${getColor(props, 'formText', 'colorMuted')};
  `
);

const FormText = styled(Small)`
  display: block;
  margin-top: ${(props) => margin(props, 'formText').top};
  box-sizing: border-box;
  ${(props) => color(props)};
`;

FormText.defaultProps = {
  theme,
};

export { FormText };
