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
import { Input as Ipt } from 'styled-base-components';

const formcontrolPlainTextInline = (props) => (
  props.inline &&
  css`
    display: inline-block;
  `
);

const formControllPlainTextSmallLarge = (props) => (
  (props.sm || props.lg) &&
  css`
    padding-right: 0;
    padding-left: 0;
  `
);

export const FormControlPlainText = styled(Ipt)`
  display: block;
  width: 100%;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-bottom: 0;
  line-height: 1.5;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
  box-sizing: border-box;
  ${formcontrolPlainTextInline};
  ${formControllPlainTextSmallLarge};
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
