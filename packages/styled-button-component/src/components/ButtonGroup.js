import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  padding as p,
  fontSize,
} from 'styled-config';

const size = (props) => {
  if (props.lg) {
    return css`
      padding: ${p(props, 'buttonGroup').lg};
      font-size: ${fontSize(props, 'buttonGroup').lg};
      line-height: 1.5;
    `;
  } else if (props.sm) {
    return css`
      padding:  ${p(props, 'buttonGroup').sm};
      font-size: ${fontSize(props, 'buttonGroup').sm};
      line-height: 1.5;
    `;
  }

  return css`
    padding: ${p(props, 'buttonGroup').default};
    font-size: ${fontSize(props, 'buttonGroup').default};
    line-height: 1.5;
  `;
};

const vertical = (props) => {
  if (props.vertical) {
    return css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      & > button {
        width: 100%;
        &:not(:last-child) {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        };
        &:not(:first-child) {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        };
      };
    `;
  }

  return css`
    & > button {
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      };
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      };
    };
  `;
};


const ButtonGroup = styled(Div)`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & > button {
    line-height: 1.5;
    position: relative;
    flex: 0 1 auto;
    &:hover {
      z-index: 1;
    };
    ${(props) => size(props)};
  };
  ${(props) => vertical(props)};
`;

ButtonGroup.defaultProps = {
  theme,
};

export { ButtonGroup };
