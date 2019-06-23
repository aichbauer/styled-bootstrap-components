import styled, { css } from 'styled-components';

import { Span } from 'styled-base-components';

import {
  theme,
  colors,
  padding as p,
  borderRadius as br,
  fontWeight,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.pill) {
    return css`border-radius: ${br(props, 'badge').pill};`;
  } else if (props.noRadius) {
    return css`border-radius: ${br(props, 'badge').noRadius};`;
  }

  return css`border-radius: ${br(props, 'badge').default};`;
};

const padding = (props) => {
  if (props.pill) {
    return css`
      padding: ${p(props, 'badge').pill};
    `;
  }

  return css`padding: ${p(props, 'badge').default};`;
};

const backgroundColor = (props) => (
  css`background-color: ${colors(props, 'badge').backgroundColor};`
);

const color = (props) => (
  css`color: ${colors(props, 'badge').color};`
);

const badgeLink = (props) => {
  if (props.action) {
    return css`
    & > a {
      color: ${colors(props, 'badge').linkColor};
      text-decoration: none;
      background-color: ${colors(props, 'badge').backgroundColor};
      &:hover, &:focus {
        text-decoration: none;
        background-color: ${colors(props, 'badge').backgroundColorHoverFocus};
      };
    };
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${colors(props, 'badge').backgroundColorHoverFocus};
      & > a {
        background-color: ${colors(props, 'badge').backgroundColorHoverFocus};
      };
    };
  `;
  }

  return css`
    & > a {
      color: ${colors(props, 'badge').linkColor};
      text-decoration: none;
      background-color: ${colors(props, 'badge').backgroundColor};
    }
  `;
};

const Badge = styled(Span)`
  display: inline-block;
  font-size: 75%;
  font-weight: ${(props) => fontWeight(props, 'badge').default};
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  position: relative;
  top: -1px;
  &:empty {
    display: none;
  };
  ${(props) => borderRadius(props)}
  ${(props) => padding(props)}
  ${(props) => color(props)}
  ${(props) => backgroundColor(props)}
  ${(props) => badgeLink(props)}
`;

Badge.defaultProps = {
  theme,
};

export { Badge };
