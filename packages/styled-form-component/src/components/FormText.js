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
import { Small } from 'styled-base-components';

const formTextMuted = (props) => (
  props.muted &&
  css`
    color: #6c757d;
  `
);

export const FormText = styled(Small)`
  display: block;
  margin-top: 0.25rem;
  box-sizing: border-box;
  ${formTextMuted};
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
