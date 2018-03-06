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

const inputGroupSmall = (props) => (
  props.sm &&
  css`
    & > div > span {
      padding-right: 0;
      padding-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
    };
    & > input {
      padding-right: 0;
      padding-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
    };
  `
);

const inputGroupLarge = (props) => (
  props.lg &&
  css`
    & > div > span {
      padding-right: 0;
      padding-left: 0;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
    };
    & > input {
      padding-right: 0;
      padding-left: 0;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: 0.3rem;
    };
  `
);

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  & > input, 
  & > textarea, 
  & > select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    };
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    };
  };
  ${inputGroupSmall};
  ${inputGroupLarge};
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
