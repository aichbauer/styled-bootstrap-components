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
import { Ul } from 'styled-base-components';

export const listGroupFlush = (props) => (
  props.flush &&
  css`
    & > a, 
    & > li {
      border-right: 0;
      border-left: 0;
      border-radius: 0;
      &:first-child {
        border-top: 0;
      };
      &:last-child {
        border-bottom: 0;
      };
    };
  `
);

export const ListGroup = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  ${listGroupFlush};
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
