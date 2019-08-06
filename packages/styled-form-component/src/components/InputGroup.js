import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  borderRadius as br,
  getPadding,
  fontSize as fs,
  getMargin,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.lg) {
    return css`
      & > input {
        border-radius: ${br(props, 'inputGroup').lg};
      };
    `;
  } else if (props.sm) {
    return css`
      & > input {
        border-radius: ${br(props, 'inputGroup').sm};
      };
    `;
  }

  return css`
  & > input {
    border-radius: ${br(props, 'inputGroup').default};
  };
`;
};

const fontSize = (props) => {
  if (props.lg) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${fs(props, 'inputGroup').lg};
      };
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${fs(props, 'inputGroup').sm};
      };
    `;
  }

  return css`
    & > div > span,
    & > input {
      line-height: 1.5;
      font-size: ${fs(props, 'inputGroup').default};
    };
  `;
};

const padding = (props) => {
  if (props.lg) {
    return css`
    & > div > span,
    & > input {
      padding-right: ${getPadding(props, 'inputGroup', 'rightLg')};
      padding-left: ${getPadding(props, 'inputGroup', 'leftLg')};
      padding: ${getPadding(props, 'inputGroup', 'lg')};
    };
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        padding-right: ${getPadding(props, 'inputGroup', 'rightSm')};
        padding-left: ${getPadding(props, 'inputGroup', 'leftSm')};
        padding: ${getPadding(props, 'inputGroup', 'sm')};
      };
    `;
  }

  return '';
};

const InputGroup = styled(Div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  line-height: 1.5;
  & > input,
  & > textarea,
  & > select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: ${(props) => getMargin(props, 'inputGroup', 'bottom')};
    &:not(:last-child) {
      border-top-right-radius: ${(props) => br(props, 'inputGroup').noRadius};
      border-bottom-right-radius: ${(props) => br(props, 'inputGroup').noRadius};
    };
    &:not(:first-child) {
      border-top-left-radius: ${(props) => br(props, 'inputGroup').noRadius};
      border-bottom-left-radius: ${(props) => br(props, 'inputGroup').noRadius};
    };
  };
  ${(props) => borderRadius(props)};
  ${(props) => fontSize(props)};
  ${(props) => padding(props)};
`;

InputGroup.defaultProps = {
  theme,
};

export { InputGroup };
