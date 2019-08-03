import styled, { css } from 'styled-components';

import { Li } from 'styled-base-components';

import {
  theme,
  getColor,
  padding,
} from 'styled-config';

const active = (props) => (
  props.active &&
  css`
    color: ${getColor(props, 'breadcrumbItem', 'color')};
  `
);

const BreadcrumbItem = styled(Li)`
  &:not(:first-child)::before {
    display: inline-block;
    padding-right: ${(props) => padding(props, 'breadcrumbItem', 'right')};
    padding-left: ${(props) => padding(props, 'breadcrumbItem', 'left')};
    color: ${(props) => getColor(props, 'breadcrumbItem', 'color')};
    content: "/";
  };
  & + &:hover::before {
    text-decoration: none;
  };
  ${active};
`;

BreadcrumbItem.defaultProps = {
  theme,
};

export { BreadcrumbItem };
