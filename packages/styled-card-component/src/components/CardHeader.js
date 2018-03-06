import styled from 'styled-components';
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

export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
