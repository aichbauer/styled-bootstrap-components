import styled, { css } from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
} from 'styled-system';

const tooltipArrowTop = (props) => (
  props.top &&
  css`
    bottom: 0;
    width: 100%;
    left: 42%;
    &::before {
      top: 0;
      border-width: 0.4rem 0.4rem 0;
      border-top-color: #000;
    };
  `
);

const tooltipArrowRight = (props) => (
  props.right &&
  css`
    left: 0;
    width: 0.4rem;
    height: 100%;
    top: 28%;
    &::before {
      right: 0;
      border-width: 0.4rem 0.4rem 0.4rem 0;
      border-right-color: #000;
    };
  `
);

const tooltipArrowBottom = (props) => (
  props.bottom &&
  css`
      top: 0;
      width: 100%;
      left: 42%;
      &::before {
        bottom: 0;
        border-width: 0 0.4rem 0.4rem;
        border-bottom-color: #000;
      };
    `
);

const tooltipArrowLeft = (props) => (
  props.left &&
  css`
    right: 0;
    width: 0.4rem;
    height: 100%;
    top: 28%;
    &::before {
      left: 0;
      border-width: 0.4rem 0 0.4rem 0.4rem;
      border-left-color: #000;
    };
  `
);

export const TooltipArrow = styled.div`
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
  &::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  };
  ${tooltipArrowTop};
  ${tooltipArrowRight};
  ${tooltipArrowBottom};
  ${tooltipArrowLeft};
  ${space};
  ${width};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${display};
  ${borderRadius};
  ${borderColor};
  ${borders};
`;
