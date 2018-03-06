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

const formCheckInputDisabled = (props) => (
  props.disabled &&
  css`
    color: #6c757d;
    & + label {
      color: #6c757d;
    };
  `
);

export const FormCheckInput = styled(Ipt)`
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
  box-sizing: border-box;
  ${formCheckInputDisabled};
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
