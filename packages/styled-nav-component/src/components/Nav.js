import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  padding,
  margin as m,
  border as b,
  screenSize,
} from 'styled-config';

const justifyContent = (props) => {
  if (props.center) {
    return css`
      justify-content: center !important;
    `;
  } else if (props.end) {
    return css`
      justify-content: flex-end !important;
    `;
  } else if (props.start) {
    return css`
      justify-content: flex-start !important;
    `;
  }

  return '';
};

const flexDirection = (props) => (
  props.vertical &&
  css`
    flex-direction: column !important;
  `
);

const flexBasis = (props) => (
  props.justified &&
  css`
    flex-basis: 0;
  `
);

const flexGrow = (props) => (
  props.justified &&
  css`
    flex-grow: 1;
  `
);

const textAlign = (props) => {
  if (props.justified) {
    return css`
      text-align: center;
    `;
  } else if (props.fill) {
    return css`
      text-align: center;
      `;
  }

  return '';
};

const flex = (props) => (
  props.fill &&
  css`
    flex: 1 1 auto;
  `
);

const border = (props) => (
  props.tabs &&
  css`
    border-bottom: ${b(props, 'nav').default} ${colors(props, 'nav').borderColorTabs};
  `
);

const margin = (props) => (
  props.tabs &&
  css`
    & > a {
      margin-bottom: -1px;
    }
  `
);

/* istanbul ignore next */
const navCollapse = (props) => {
  if (
    (
      props.expandSm
      || props.expandMd
      || props.expandLg
      || props.expandXl
    )
    && props.collapse
    && !props.hidden
  ) {
    return css`
      @media (max-width: ${screenSize(props)}) {
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        & > a {
          padding-right: ${padding(props, 'nav').collapseNotHiddenARight};
          padding-left: ${padding(props, 'nav').collapseNotHiddenALeft};
          flex: 1;
          text-align: left;
        };
      };
    `;
  } else if (
    (
      props.expandSm
      || props.expandMd
      || props.expandLg
      || props.expandXl
    )
    && props.collapse
    && props.hidden
  ) {
    return css`
      @media (max-width: ${screenSize(props)}) {
        display: none;
        flex-basis: auto;
        flex-direction: column;
      };
    `;
  }

  return '';
};

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: ${(props) => padding(props, 'nav').left};
  margin-bottom: ${(props) => m(props, 'nav').bottom};
  list-style: none;
  & > a {
    text-decoration: none;
    ${(props) => flex(props)};
    ${(props) => flexBasis(props)};
    ${(props) => flexGrow(props)};
    ${(props) => textAlign(props)};
  };
  &:last-child {
    flex: 1;
  };
  ${(props) => justifyContent(props)}
  ${(props) => flexDirection(props)}
  ${(props) => border(props)}
  ${(props) => margin(props)}
  ${(props) => navCollapse(props)};
`;

Nav.defaultProps = {
  theme,
};

export { Nav };
