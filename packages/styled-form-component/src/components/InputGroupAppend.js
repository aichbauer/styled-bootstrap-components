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

export const InputGroupAppend = styled.div`
  display: flex;
  margin-left: -1px;
  & > button {
    position: relative;
    z-index: 2;
  };
  & > span,
  & > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:not(:last-child) {
      margin-right: -1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    };
  };
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
