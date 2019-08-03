import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  colors,
  padding,
} from 'styled-config';

const PopoverBody = styled(Div)`
  padding: ${(props) => padding(props, 'popoverBody').default};
  color: ${(props) => colors(props, 'popoverBody', 'color')};
`;

PopoverBody.defaultProps = {
  theme,
};

export { PopoverBody };
