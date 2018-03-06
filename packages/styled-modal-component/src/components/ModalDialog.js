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

const dialogCentered = (props) => {
  if (props.centered) {
    return css`
      display: flex;
      align-items: center;
      min-height: calc(100% - (0.5rem * 2));
      @media (min-width: ${screenSize.sm}) { 
        min-height: calc(100% - (1.75rem * 2));
      };
    `;
  }

  return '';
};

export const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  @media (min-width: ${screenSize.sm}) {
    max-width: 500px;
    margin: 1.75rem auto;
  };
  ${(props) => dialogCentered(props)};
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
