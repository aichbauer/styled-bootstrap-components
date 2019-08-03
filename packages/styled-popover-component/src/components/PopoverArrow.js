import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
} from 'styled-config';

const popoverArrowTop = (props) => (
  props.top &&
  css`
    width: 100%;
    bottom: calc((0.5rem + 1px) * -1);
    &::before,
    &::after {
      left: calc(50% - 0.75rem);
      border-width: 0.5rem 0.5rem 0 0.5rem;
    };
    &::before {
      bottom: 0;
      border-top-color: ${getColor(props, 'popoverArrow', 'borderColor')};
    };
    &::after {
      bottom: 1px;
      border-top-color: ${getColor(props, 'popoverArrow', 'borderColorWhite')};
    };
  `
);

const popoverArrowRight = (props) => (
  props.right &&
  css`
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 100%;
    margin: 0.3rem 0;
    &::before,
    &::after {
      top: calc(50% - 0.75rem);
      border-width: 0.5rem 0.5rem 0.5rem 0;
    };
    &::before {
      left: 0;
      border-right-color: ${getColor(props, 'popoverArrow', 'borderColor')};
    };
    &::after {
      left: 1px;
      border-right-color: ${getColor(props, 'popoverArrow', 'borderColorWhite')};
    };
  `
);

const popoverArrowBottom = (props) => (
  props.bottom &&
  css`
    width: 100%;
    top: calc((0.5rem + 1px) * -1);
    &::before,
    &::after {
      left: calc(50% - 0.75rem);
      border-width: 0 0.5rem 0.5rem 0.5rem;
    };
    &::before {
      top: 0;
      border-bottom-color: ${getColor(props, 'popoverArrow', 'borderColor')};
    };
    &::after {
      top: 1px;
      border-bottom-color: ${getColor(props, 'popoverArrow', 'borderColorWhite')};
    };
  `
);

const popoverArrowLeft = (props) => (
  props.left &&
  css`
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 100%;
    margin: 0.3rem 0;
    &::before,
    &::after {
      top: calc(50% - 0.75rem);
      border-width: 0.5rem 0 0.5rem 0.5rem;
    };
    &::before {
      right: 0;
      border-left-color: ${getColor(props, 'popoverArrow', 'borderColor')};
    };
    &::after {
      right: 1px;
      border-left-color: ${getColor(props, 'popoverArrow', 'borderColorWhite')};
    };
  `
);

const PopoverArrow = styled(Div)`
  position: absolute;
  display: block;
  width: 1rem;
  margin: 0 0.3rem;
  &::before,
  &::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  };
  ${popoverArrowTop};
  ${popoverArrowRight};
  ${popoverArrowBottom};
  ${popoverArrowLeft};
`;

PopoverArrow.defaultProps = {
  theme,
};

export { PopoverArrow };
