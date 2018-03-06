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

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  & > a {
    &:hover {
      text-decoration: none;
    };
    & + a {
      margin-left: 1.25rem;
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

