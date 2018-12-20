import styled, { css } from 'styled-components';

import {
  theme,
  colors,
} from 'styled-config';

const color = (props) => {
  if (props.active) {
    return css`
      & > th,
      & > td,
      & tbody tr:hover,
      & tbody tr:hover > th,
      & tbody tr:hover > td {
        background-color: ${colors(props, 'tr').activeBackgroundColor};
      };
    `;
  }

  return css`
    & > th,
    & > td {
      background-color: ${colors(props, 'tr').backgroundColor};
    };
    ${props.hover &&
    css`
        &:hover > td,
        &:hover > th,
        & tbody tr:hover,
        & tbody tr:hover > th,
        & tbody tr:hover > td {
          background-color: ${colors(props, 'tr').backgroundColorHoverFocus};
        };
      `};
    `;
};

const Tr = styled.tr`
  ${(props) => color(props)};
`;

Tr.defaultProps = {
  theme,
};

export { Tr };
