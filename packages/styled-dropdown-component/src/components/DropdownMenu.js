import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  borderRadius as br,
  padding,
  margin,
  fontSize,
  border,
} from 'styled-config';

const dropdownMenuHidden = (props) => (
  props.hidden
    ? css`
      display: none;
    `
    : css`
      display: block;
    `
);

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'dropdownMenu').noRadius};
    `;
  }

  return css`
    border-radius: ${br(props, 'dropdownMenu').default};
  `;
};

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: ${(props) => padding(props, 'dropdownMenu').default};
  margin: ${(props) => margin(props, 'dropdownMenu').default};
  font-size: ${(props) => fontSize(props, 'dropdownMenu').default};
  color: ${(props) => colors(props, 'dropdownMenu').color};
  text-align: left;
  list-style: none;
  background-color: ${(props) => colors(props, 'dropdownMenu').backgroundColor};
  background-clip: padding-box;
  border: ${(props) => border(props, 'dropdownMenu').default} ${(props) => colors(props, 'dropdownMenu').borderColor};
  ${(props) => borderRadius(props)}
  ${(props) => dropdownMenuHidden(props)};
`;

DropdownMenu.defaultProps = {
  theme,
};

export { DropdownMenu };
