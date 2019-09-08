import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getMargin,
  getPadding,
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
};

const alignItems = (props) => (
  props.inline &&
  css`
    align-items: center;
  `
);

const paddingLeft = (props) => (
  props.inline &&
  css`
    padding-left: ${getPadding(props, 'formCheck', 'inlineLeft')};
  `
);

const marginRight = (props) => (
  props.inline &&
  css`
    margin-right: ${getMargin(props, 'formCheck', 'inlineRight')};
  `
);

const FormCheck = styled(Div)`
  position: relative;
  box-sizing: border-box;
  & > label {
    margin-bottom: ${(props) => getMargin(props, 'formCheck', 'labelBottom')};
  };
  & > input {
    position: static;
    margin-top: ${(props) => getMargin(props, 'formCheck', 'inputTop')};
    margin-right:${(props) => getMargin(props, 'formCheck', 'inputRight')};
    margin-left: ${(props) => getMargin(props, 'formCheck', 'inputLeft')};
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
