import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  padding,
} from 'styled-config';

const PopoverBody = styled(Div)`
  padding: ${(props) => padding(props, 'popoverBody').default};
  color: ${(props) => getColor(props, 'popoverBody', 'color')};
`;

PopoverBody.defaultProps = {
  theme,
};

export { PopoverBody };
