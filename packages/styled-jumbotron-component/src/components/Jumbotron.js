import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getConcreteBreakpointSize,
  getPadding,
  getBorderRadius,
} from 'styled-config';

const padding = (props) => {
  if (props.fluid) {
    return css`
      padding-right: ${getPadding(props, 'jumbotron', 'fluidRight')};
      padding-left: ${getPadding(props, 'jumbotron', 'fluidLeft')};
    `;
  } else if (props.pill) {
    return css`
      padding: ${getPadding(props, 'jumbotron', 'pill')};
    `;
  }

  return css`
    padding: ${getPadding(props, 'jumbotron', 'default')};
  `;
};

const borderRadius = (props) => {
  if (props.fluid || props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'jumbotron', 'noRadius')}
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'jumbotron', 'pill')}
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'jumbotron', 'lg')}
  `;
};

const Jumbotron = styled(Div)`
  margin-bottom: 2rem;
  background-color: ${(props) => getColor(props, 'jumbotron', 'backgroundColor')};
  @media(min-width: ${(props) => getConcreteBreakpointSize(props.theme, 'sm')}) {
    padding: ${(props) => {
    if (props.pill) {
      return getPadding(props, 'jumbotron', 'lgPill');
    }

    return getPadding(props, 'jumbotron', 'sm');
  }};
  };
  @media(max-width: ${(props) => getConcreteBreakpointSize(props, 'md')}) {
    padding: ${(props) => {
    if (props.pill) {
      return getPadding(props, 'jumbotron', 'smPill');
    }

    return getPadding(props, 'jumbotron', 'sm');
  }};
  };
  ${(props) => padding(props)};
  ${(props) => borderRadius(props)};
`;

Jumbotron.defaultProps = {
  theme,
};

export { Jumbotron };
