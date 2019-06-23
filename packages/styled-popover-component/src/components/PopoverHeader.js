import React from 'react';
import styled, { css } from 'styled-components';

import { H1, H2, H3, H4, H5, H6 } from 'styled-base-components';

import {
  theme,
  colors,
  padding,
  margin,
  border,
  fontSize,
} from 'styled-config';

const popoverHeaderBottom = (props) => (
  props.bottom &&
  css`
    padding: ${padding(props, 'popoverHeader').default};
    margin-bottom: ${margin(props, 'popoverHeader').bottom};
    font-size:  ${fontSize(props, 'popoverHeader').default};
    color: inherit;
    background-color: ${colors(props, 'popoverHeader').backgrondColor};
    border-bottom: 0;
    border-top: ${border(props, 'popoverHeader').default} ${colors(props, 'popoverHeader').borderBottomColor};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: calc(0.3rem - 1px);
    border-bottom-right-radius: calc(0.3rem - 1px);
  `
);

const popoverHeaderStyle = (props) => (
  css`
    top: 0;
    left: 50%;
    display: block;
    content: "";
    padding: ${padding(props, 'popoverHeader').default};
    margin-bottom: ${margin(props, 'popoverHeader').bottom};
    margin-top: ${margin(props, 'popoverHeader').top};
    font-size: ${fontSize(props, 'popoverHeader').default};
    color: inherit;
    background-color: ${colors(props, 'popoverHeader').backgrondColor};
    border-bottom: ${border(props, 'popoverHeader').default} ${colors(props, 'popoverHeader').borderBottomColor};
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: 1rem;
      margin-left: ${margin(props, 'popoverHeader').beforeLeft};
      content: "";
      border-bottom: ${border(props, 'popoverHeader').default} ${colors(props, 'popoverHeader').backgrondColor};
    }
    ${popoverHeaderBottom(props)};
    &:empty {
      display: none;
    };
  `
);

const PopoverHeaderH1 = styled(H1)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeaderH2 = styled(H2)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeaderH3 = styled(H3)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeaderH4 = styled(H4)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeaderH5 = styled(H5)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeaderH6 = styled(H6)`
  ${(props) => popoverHeaderStyle(props)};
`;

const PopoverHeader = (props) => {
  if (props.h1) {
    return <PopoverHeaderH1 {...props} />;
  } else if (props.h2) {
    return <PopoverHeaderH2 {...props} />;
  } else if (props.h3) {
    return <PopoverHeaderH3 {...props} />;
  } else if (props.h4) {
    return <PopoverHeaderH4 {...props} />;
  } else if (props.h5) {
    return <PopoverHeaderH5 {...props} />;
  } else if (props.h6) {
    return <PopoverHeaderH6 {...props} />;
  }

  return <PopoverHeaderH4 {...props} />;
};

PopoverHeader.defaultProps = {
  theme,
};

export { PopoverHeader };
