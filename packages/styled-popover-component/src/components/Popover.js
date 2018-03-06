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

const popoverTop = (props) => (
  props.top &&
  css`
    margin-bottom: 0.5rem;
  `
);

const popoverRight = (props) => (
  props.right &&
  css`
    margin-left: 0.5rem;
  `
);

const popoverBottom = (props) => (
  props.bottom &&
  css`
    margin-top: 0.5rem;
  `
);

const popoverLeft = (props) => (
  props.left &&
  css`
    margin-right: 0.5rem;
  `
);

const popoverHidden = (props) => (
  props.hidden
    ? css`
      display: none;
    `
    : css`
      display: block;
    `
);

export const Popover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  max-width: 276px;
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
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  ${popoverTop};
  ${popoverRight};
  ${popoverBottom};
  ${popoverLeft};
  ${popoverHidden};
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
