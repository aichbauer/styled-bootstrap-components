import styled, { css } from 'styled-components';

import { Tr as BaseTr } from 'styled-base-components';

import {
  theme,
  getColor,
} from 'styled-config';

const color = (props) => {
  if (props.active) {
    return css`
      & > th,
      & > td,
      & tbody tr:hover,
      & tbody tr:hover > th,
      & tbody tr:hover > td {
        background-color: ${getColor(props, 'tr', 'activeBackgroundColor')};
      };
    `;
  }

  return css`
    & > th,
    & > td {
      background-color: ${getColor(props, 'tr', 'backgroundColor')};
    };
    ${props.hover &&
    css`
        &:hover > td,
        &:hover > th,
        & tbody tr:hover,
        & tbody tr:hover > th,
        & tbody tr:hover > td {
          background-color: ${getColor(props, 'tr', 'backgroundColorHoverFocus')};
        };
      `};
    `;
};

const Tr = styled(BaseTr)`
  ${(props) => color(props)};
`;

Tr.defaultProps = {
  theme,
};

export { Tr };
