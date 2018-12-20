import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  padding,
  screenSize,
} from 'styled-config';

const color = (props) => (
  css`
    color: ${colors(props, 'navbar').color};
  `
);

const borderColor = (props) => (
  css`
    border-color: ${colors(props, 'navbar').borderColor};
  `
);

const backgroundColor = (props) => (
  css`
    background-color: ${colors(props, 'navbar').backgroundColor} !important;
  `
);

/* istanbul ignore next */
const navbarExpand = (props) => (
  (
    props.expandSm
    || props.expandMd
    || props.expandLg
    || props.expandXl
  )
  && css`
    @media (max-width: ${screenSize(props)}) {
      & > nav:not(:last-child) {
        display: flex !important;
        width: 100%;
        justify-content: space-between;
      };
    };
  `
);

const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => padding(props, 'navbar').default};
  ${(props) => color(props)}
  ${(props) => borderColor(props)}
  ${(props) => backgroundColor(props)}
  ${(props) => navbarExpand(props)}
`;

Navbar.defaultProps = {
  theme,
};

export { Navbar };
