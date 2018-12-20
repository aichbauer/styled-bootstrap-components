import styled, { css } from 'styled-components';

import {
  theme,
  margin,
  padding,
} from 'styled-config';

const display = (props) => {
  if (props.inline) {
    return css`
      display: inline-flex;
    `;
  }

  return css`
    display: block;
  `;
}

const alignItems = (props) => (
  props.inline &&
  css`
    align-items: center;
  `
);

const paddingLeft = (props) => (
  props.inline &&
  css`
    padding-left: ${padding(props, 'formCheck').inlineLeft};
  `
);

const marginRight = (props) => (
  props.inline &&
  css`
    margin-right: ${margin(props, 'formCheck').inlineRight};
  `
);

const FormCheck = styled.div`
  position: relative;
  box-sizing: border-box;
  & > label {
    margin-bottom: ${(props) => margin(props, 'formCheck').labelBottom};
  };
  & > input {
    position: static;
    margin-top: ${(props) => margin(props, 'formCheck').inputTop};
    margin-right:${(props) => margin(props, 'formCheck').inputRight};
    margin-left: ${(props) => margin(props, 'formCheck').inputLeft};
  };
  ${(props) => display(props)}
  ${(props) => alignItems(props)}
  ${(props) => paddingLeft(props)}
  ${(props) => marginRight(props)}
`;

FormCheck.defaultProps = {
  theme,
};

export { FormCheck };
