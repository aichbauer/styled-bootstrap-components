import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
} from 'styled-config';

const PopoverBody = styled(Div)`
  padding: ${(props) => getPadding(props, 'popoverBody', 'default')};
  color: ${(props) => getColor(props, 'popoverBody', 'color')};
`;

PopoverBody.defaultProps = {
  theme,
};

export { PopoverBody };
