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
import { Nav as Navigation } from 'styled-base-components';
import { screenSize } from 'styled-config';

const navbarLight = (props) => (
  props.light &&
  css`
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa !important;
  `
);

const navbarDark = (props) => (
  props.dark &&
  css`
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
    background-color: #343a40 !important;
  `
);

/* istanbul ignore next */
const navbarExpand = (props) => {
  let thisScreenSize = '';

  if (props.expandSm) {
    thisScreenSize = screenSize.sm;
  } else if (props.expandMd) {
    thisScreenSize = screenSize.md;
  } else if (props.expandLg) {
    thisScreenSize = screenSize.lg;
  } else if (props.expandXl) {
    thisScreenSize = screenSize.xl;
  }

  if (
    props.expandSm ||
    props.expandMd ||
    props.expandLg ||
    props.expandXl
  ) {
    return css`
      @media (max-width: ${thisScreenSize}) {
        & > nav:not(:last-child) {
          display: flex !important;
          width: 100%;
          justify-content: space-between;
        };
      };
    `;
  }

  return '';
};

export const Navbar = styled(Navigation)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  ${navbarLight};
  ${navbarDark};
  ${navbarExpand};
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
