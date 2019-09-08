import styled, { css } from 'styled-components';

import { Span } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorderRadius,
  getFontWeight,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.pill) {
    return css`border-radius: ${getBorderRadius(props, 'badge', 'pill')};`;
  } else if (props.noRadius) {
    return css`border-radius: ${getBorderRadius(props, 'badge', 'noRadius')};`;
  }

  return css`border-radius: ${getBorderRadius(props, 'badge', 'default')};`;
};

const padding = (props) => {
  if (props.pill) {
    return css`
      padding: ${getPadding(props, 'badge', 'pill')};
    `;
  }

  return css`padding: ${getPadding(props, 'badge', 'default')};`;
};

const backgroundColor = (props) => (
  css`background-color: ${getColor(props, 'badge', 'backgroundColor')};`
);

const color = (props) => (
  css`color: ${getColor(props, 'badge', 'color')};`
);

const badgeLink = (props) => {
  if (props.action) {
    return css`
    & > a {
      color: ${getColor(props, 'badge', 'linkColor')};
      text-decoration: none;
      background-color: ${getColor(props, 'badge', 'backgroundColor')};
      &:hover, &:focus {
        text-decoration: none;
        background-color: ${getColor(props, 'badge', 'backgroundColorHoverFocus')};
      };
    };
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${getColor(props, 'badge', 'backgroundColorHoverFocus')};
      & > a {
        background-color: ${getColor(props, 'badge', 'backgroundColorHoverFocus')};
      };
    };
  `;
  }

  return css`
    & > a {
      color: ${getColor(props, 'badge', 'linkColor')};
      text-decoration: none;
      background-color: ${getColor(props, 'badge', 'backgroundColor')};
    }
  `;
};

const Badge = styled(Span)`
  display: inline-block;
  font-size: 75%;
  font-weight: ${(props) => getFontWeight(props, 'badge', 'default')};
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
