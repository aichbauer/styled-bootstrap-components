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

const popoverArrowTop = (props) => (
  props.top &&
  css`
    width: 100%;
    bottom: calc((0.5rem + 1px) * -1);
    left: 42%;
    &::before,
    &::after {
      border-width: 0.5rem 0.5rem 0 0.5rem;
    };
    &::before {
      bottom: 0;
      border-top-color: rgba(0, 0, 0, 0.25);
    };
    &::after {
      bottom: 1px;
      border-top-color: #fff;
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
    top: 42%;
    &::before,
    &::after {
      border-width: 0.5rem 0.5rem 0.5rem 0;
    };
    &::before {
      left: 0;
      border-right-color: rgba(0, 0, 0, 0.25);
    };
    &::after {
      left: 1px;
      border-right-color: #fff;
    };
  `
);

const popoverArrowBottom = (props) => (
  props.bottom &&
  css`
    width: 100%;
    top: calc((0.5rem + 1px) * -1);
    left: 42%;
    &::before,
    &::after {
      border-width: 0 0.5rem 0.5rem 0.5rem;
    };
    &::before {
      top: 0;
      border-bottom-color: rgba(0, 0, 0, 0.25);
    };
    &::after {
      top: 1px;
      border-bottom-color: #fff;
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
    top: 42%;
    &::before,
    &::after {
      border-width: 0.5rem 0 0.5rem 0.5rem;
    };
    &::before {
      right: 0;
      border-left-color: rgba(0, 0, 0, 0.25);
    };
    &::after {
      right: 1px;
      border-left-color: #fff;
    };
  `
);

export const PopoverArrow = styled.div`
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
