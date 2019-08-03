import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  colors,
  padding,
  fontWeight,
} from 'styled-config';

const dropdownItemActive = (props) => (
  props.active &&
  css`
    text-decoration: none;
    color: ${colors(props, 'dropdownItem', 'colorActive')};
    background-color: ${colors(props, 'dropdownItem', 'backgroundColorActive')};
  `
);

const dropdownItemDisabled = (props) => (
  props.disabled &&
  css`
    color: ${colors(props, 'dropdownItem', 'colorDisabled')};
    background-color: transparent;
  `
);

const DropdownItem = styled(Div)`
  padding: ${(props) => padding(props, 'dropdownItem').default};
  clear: both;
  font-weight: ${(props) => fontWeight(props, 'dropdownItem').default};
  color: ${(props) => colors(props, 'dropdownItem', 'color')};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  &:hover, &:focus {
    color: ${(props) => colors(props, 'dropdownItem', 'colorHoverFocus')};
    text-decoration: none;
    background-color: ${(props) => colors(props, 'dropdownItem', 'backgroundColorHoverFocus')};
  }
  ${(props) => dropdownItemActive(props)};
  ${(props) => dropdownItemDisabled(props)};
`;

DropdownItem.defaultProps = {
  theme,
};

export { DropdownItem };
