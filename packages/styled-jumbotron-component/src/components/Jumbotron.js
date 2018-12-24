import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  padding as p,
  borderRadius as br,
} from 'styled-config';

const padding = (props) => {
  if (props.fluid) {
    return css`
      padding-right: ${p(props, 'jumbotron').fluidRight};
      padding-left: ${p(props, 'jumbotron').fluidLeft};
    `;
  } else if (props.pill) {
    return css`
      padding: ${p(props, 'jumbotron').pill};
    `;
  }

  return css`
    padding: ${p(props, 'jumbotron').default};
  `;
};

const borderRadius = (props) => {
  if (props.fluid || props.noRadius) {
    return css`
      border-radius: ${br(props, 'jumbotron').noRadius}
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${br(props, 'jumbotron').pill}
    `;
  }

  return css`
    border-radius: ${br(props, 'jumbotron').lg}
  `;
};

const Jumbotron = styled.div`
  margin-bottom: 2rem;
  background-color: ${(props) => colors(props, 'jumbotron').backgroundColor};
  @media(min-width: ${(props) => props.theme.screenSize.sm}) {
    padding: ${(props) => {
    if (props.pill) {
      return p(props, 'jumbotron').lgPill;
    }

    return p(props, 'jumbotron').sm;
  }};
  };
  @media(max-width: ${(props) => props.theme.screenSize.md}) {
    padding: ${(props) => {
    if (props.pill) {
      return p(props, 'jumbotron').smPill;
    }

    return p(props, 'jumbotron').sm;
  }};
  };
  ${(props) => padding(props)};
  ${(props) => borderRadius(props)};
`;

Jumbotron.defaultProps = {
  theme,
};

export { Jumbotron };
