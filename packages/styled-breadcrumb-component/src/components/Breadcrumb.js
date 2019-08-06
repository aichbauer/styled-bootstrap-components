import styled, { css } from 'styled-components';

import { Ol } from 'styled-base-components';

import {
  theme,
  getColor,
  getMargin,
  getPadding,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`border-radius: ${br(props, 'breadcrumb').noRadius};`;
  } else if (props.pill) {
    return css`border-radius: ${br(props, 'breadcrumb').pill};`;
  }

  return css`border-radius: ${br(props, 'breadcrumb').default};`;
};

const Breadcrumb = styled(Ol)`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => getPadding(props, 'breadcrumb', 'default')};
  margin-bottom: ${(props) => getMargin(props, 'breadcrumb', 'bottom')};
  list-style: none;
  background-color: ${(props) => getColor(props, 'breadcrumb', 'backgroundColor')};
  ${(props) => borderRadius(props)}
`;

Breadcrumb.defaultProps = {
  theme,
};

export { Breadcrumb };
