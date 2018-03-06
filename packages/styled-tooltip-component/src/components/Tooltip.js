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

const tooltipTop = (props) => (
  props.top &&
  css`
    padding: 0.4rem 0;
  `
);

const tooltipRight = (props) => (
  props.right &&
  css`
    padding: 0 0.4rem;
  `
);

const tooltipBottom = (props) => (
  props.bottom &&
  css`
    padding: 0.4rem 0;
  `
);

const tooltipLeft = (props) => (
  props.left &&
  css`
    padding: 0 0.4rem;
  `
);

const tooltipHidden = (props) => (
  props.hidden
    ? css`
      opacity: 0;
    `
    : css`
      opacity: 0.9;
    `
);

export const Tooltip = styled.div`
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  ${tooltipTop};
  ${tooltipRight};
  ${tooltipBottom};
  ${tooltipLeft};
  ${tooltipHidden};
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
