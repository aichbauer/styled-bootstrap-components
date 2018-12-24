import styled from 'styled-components';

import {
  theme,
  colors,
  padding,
} from 'styled-config';

const PopoverBody = styled.div`
  padding: ${(props) => padding(props, 'popoverBody').default};
  color: ${(props) => colors(props, 'popoverBody').color};
`;

PopoverBody.defaultProps = {
  theme,
};

export { PopoverBody };
