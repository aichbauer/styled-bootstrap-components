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

const breadcrumbitemActive = (props) => (
  props.active &&
  css`
    color: #6c757d;
  `
);

export const BreadcrumbItem = styled.li`
  &:not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
    content: "/";
  };
  & + &:hover::before {
    text-decoration: none;
  };
  ${breadcrumbitemActive};
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
