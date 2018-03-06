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
import { screenSize } from 'styled-config';

const jumbotronFluid = (props) => (
  props.fluid &&
  css`
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
  `
);

export const Jumbotron = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  @media (min-width: ${screenSize.sm}) {
    padding: 4rem 2rem;
  };
  ${jumbotronFluid};
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
