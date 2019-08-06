import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  border,
  getMargin,
  getPadding,
} from 'styled-config';

const DropdownDivider = styled(Div)`
  height: 0;
  padding-top: ${(props) => getPadding(props, 'dropdownDivider', 'top')};
  margin-top: ${(props) => getMargin(props, 'dropdownDivider', 'top')};
  border-top: ${(props) => border(props, 'dropdownDivider').default} ${(props) => getColor(props, 'dropdownDivider', 'borderTop')};
`;

DropdownDivider.defaultProps = {
  theme,
};

export { DropdownDivider };
