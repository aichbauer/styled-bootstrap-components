import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  margin,
  padding,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`border-radius: ${br(props, 'breadcrumb').noRadius};`;
  } else if (props.pill) {
    return css`border-radius: ${br(props, 'breadcrumb').pill};`;
  }

  return css`border-radius: ${br(props, 'breadcrumb').default};`;
}

const Breadcrumb = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => padding(props, 'breadcrumb').default};
  margin-bottom: ${(props) => margin(props, 'breadcrumb').bottom};
  list-style: none;
  background-color: ${(props) => colors(props, 'breadcrumb').backgroundColor};
  ${(props) => borderRadius(props)}
`;

Breadcrumb.defaultProps = {
  theme,
};

export { Breadcrumb };
