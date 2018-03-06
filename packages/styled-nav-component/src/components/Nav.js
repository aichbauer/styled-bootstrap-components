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

const navJustifyContentCenter = (props) => (
  props.center &&
  css`
    justify-content: center !important;
  `
);

const navJustifyContentEnd = (props) => (
  props.end &&
  css`
    justify-content: flex-end !important;
  `
);

const navJustifyContentStart = (props) => (
  props.start &&
  css`
    justify-content: flex-start !important;
  `
);

const navFlexDirectionColumn = (props) => (
  props.vertical &&
  css`
    flex-direction: column !important;
  `
);

const navJustified = (props) => (
  props.justified &&
  css`
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  `
);

const navFill = (props) => (
  props.fill &&
  css`
    flex: 1 1 auto;
    text-align: center;
  `
);

const navTabs = (props) => (
  props.tabs &&
  css`
    border-bottom: 1px solid #dee2e6;
    & > a {
      margin-bottom: -1px;
    }
    `
);

/* istanbul ignore next */
const navCollapse = (props) => {
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
    (
      props.expandSm ||
      props.expandMd ||
      props.expandLg ||
      props.expandXl
    ) &&
    props.collapse &&
    !props.hidden
  ) {
    return css`
      @media (max-width: ${thisScreenSize}) {
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        & > a {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          flex: 1;
          text-align: left;
        };
      };
    `;
  } else if (
    (
      props.expandSm ||
      props.expandMd ||
      props.expandLg ||
      props.expandXl
    ) &&
    props.collapse
    && props.hidden
  ) {
    return css`
      @media (max-width: ${thisScreenSize}) {
        display: none;
        flex-basis: auto;
        flex-direction: column;
        & > a {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          flex: 1;
          text-align: left;
        };
      };
    `;
  }

  return '';
};

export const Nav = styled(Navigation)`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  & > a {
    text-decoration: none;
    ${navJustified};
    ${navFill};
  };
  &:last-child {
    flex: 1;
  };
  ${navJustifyContentStart};
  ${navJustifyContentCenter};
  ${navJustifyContentEnd};
  ${navFlexDirectionColumn};
  ${navTabs};
  ${navCollapse};
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
