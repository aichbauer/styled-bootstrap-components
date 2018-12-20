import styled from 'styled-components';

import {
  theme,
  colors,
  border,
  margin,
  padding,
} from 'styled-config';

const DropdownDivider = styled.div`
  height: 0;
  padding-top: ${(props) => padding(props, 'dropdownDivider').top};
  margin-top: ${(props) => margin(props, 'dropdownDivider').top};
  overflow: hidden;
  border-top: ${(props) => border(props, 'dropdownDivider').default} ${(props) => colors(props, 'dropdownDivider').borderTop};
`;

DropdownDivider.defaultProps = {
  theme,
};

export { DropdownDivider };
