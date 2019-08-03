import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  margin,
  padding,
  border,
  borderRadius as br,
  fontWeight,
} from 'styled-config';

const alertDismissible = (props) => (
  props.dismissible &&
  css`
    padding-right: ${padding(props, 'alert', 'dismissibleRight')};
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
    return css`border-radius: ${br(props, 'alert', 'noRadius')}`;
  } else if (props.pill) {
    return css`border-radius: ${br(props, 'alert', 'pill')}`;
  }

  return css`border-radius: ${br(props, 'alert', 'default')}`;
};

const Alert = styled(Div)`
  position: relative;
  padding: ${(props) => padding(props, 'alert', 'default')};
  margin-bottom: ${(props) => margin(props, 'alert', 'bottom')};
  border: ${(props) => border(props, 'alert', 'default')};
  & > a {
    font-weight: ${(props) => fontWeight(props, 'alert', 'default')};
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
