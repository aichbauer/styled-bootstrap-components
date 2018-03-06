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

const formGroupFormInline = (props) => (
  props.formInline &&
  css`
    @media (min-width: ${screenSize.sm}) {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 0;
    };
  `
);

const formGroupRow = (props) => (
  props.row &&
  css`
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
    & > div > label {
      margin-bottom: 0;
    };
  `
);

const formGroupNoMarginBottom = (props) => (
  props.nomb &&
  css`
    margin-bottom: 0;
  `
);

const formGroupAlignItemsJustifyContentCenter = (props) => (
  props.justify &&
  css`
    align-items: center;
    justify-content: center;
  `
);

const formGroupSmall = (props) => (
  props.sm &&
  css`
    & > label, & > div > label {
      padding-top: calc(0.25rem + 1px);
      padding-bottom: calc(0.25rem + 1px);
      font-size: 0.875rem;
      line-height: 1.5;
    };
    & > input, & > div > input {
      padding-right: 0;
      padding-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
    };
  `
);

const formGroupLarge = (props) => (
  props.lg &&
  css`
    & > label, & > div > label {
      padding-top: calc(0.5rem + 1px);
      padding-bottom: calc(0.5rem + 1px);
      font-size: 1.25rem;
      line-height: 1.5;
    };
    & > input, & > div > input {
      padding-right: 0;
      padding-left: 0;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: 0.3rem;
    };
  `
);

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  box-sizing: border-box;
  ${formGroupFormInline};
  ${formGroupRow};
  ${formGroupNoMarginBottom};
  ${formGroupAlignItemsJustifyContentCenter};
  ${formGroupSmall};
  ${formGroupLarge};
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
