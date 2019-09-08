import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
} from 'styled-config';

const tooltipArrowTop = (props) => (
  props.top &&
  css`
    bottom: 0;
    width: 100%;
    &::before {
      top: 0.4rem;
      left: calc(50% - 0.35rem);
      border-width: 0.4rem 0.4rem 0;
      border-top-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `
);

const tooltipArrowBottom = (props) => (
  props.bottom &&
  css`
      top: 0;
      width: 100%;
      &::before {
        bottom: 0.4rem;
        left: calc(50% - 0.35rem);
        border-width: 0 0.4rem 0.4rem;
        border-bottom-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
      }
    `
);

const tooltipArrowRight = (props) => (
  props.right &&
  css`
    width: 0.4rem;
    left: 0;
    height: 100%;
    &::before {
      right: 0;
      top: calc(50% - 0.35rem);
      border-width: 0.4rem 0.4rem 0.4rem 0;
      border-right-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `
);

const tooltipArrowLeft = (props) => (
  props.left &&
  css`
    width: 0.4rem;
    right: 0;
    height: 100%;
    &::before {
      left: 0;
      top: calc(50% - 0.35rem);
      border-width: 0.4rem 0 0.4rem 0.4rem;
      border-left-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `
);

const TooltipArrow = styled(Div)`
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
  &::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }
  ${tooltipArrowTop};
  ${tooltipArrowRight};
  ${tooltipArrowBottom};
  ${tooltipArrowLeft};
`;

TooltipArrow.defaultProps = {
  theme,
};

export { TooltipArrow };
