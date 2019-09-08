import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorder,
  getBorderRadius,
  getFontWeight,
} from 'styled-config';

const alertDismissible = (props) => (
  props.dismissible &&
  css`
    padding-right: ${getPadding(props, 'alert', 'dismissibleRight')};
  `
);

const color = (props) => (
  css`color: ${getColor(props, 'alert', 'text')};`
);

const backgroundColor = (props) => (
  css`background-color: ${getColor(props, 'alert', 'background')};`
);

const borderColor = (props) => (
  css`border-color: ${getColor(props, 'alert', 'border')};`
);

const borderTopColor = (props) => (
  css`
    & > hr {
      border-top-color: ${getColor(props, 'alert', 'borderTop')};
    };
  `
);

const linkHoverColor = (props) => (
  css`
    & > a,
    & > a:hover {
      color: ${getColor(props, 'alert', 'hover')};
    };
  `
);

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`border-radius: ${getBorderRadius(props, 'alert', 'noRadius')}`;
  } else if (props.pill) {
    return css`border-radius: ${getBorderRadius(props, 'alert', 'pill')}`;
  }

  return css`border-radius: ${getBorderRadius(props, 'alert', 'default')}`;
};

const Alert = styled(Div)`
  position: relative;
  padding: ${(props) => getPadding(props, 'alert', 'default')};
  border: ${(props) => getBorder(props, 'alert', 'default')};
  & > a {
    font-weight: ${(props) => getFontWeight(props, 'alert', 'default')};
  };
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    color: inherit;
  };
  ${(props) => borderRadius(props)}
  ${(props) => alertDismissible(props)}
  ${(props) => color(props)}
  ${(props) => backgroundColor(props)}
  ${(props) => borderColor(props)}
  ${(props) => borderTopColor(props)}
  ${(props) => linkHoverColor(props)}
`;

Alert.defaultProps = {
  theme,
};

export { Alert };
