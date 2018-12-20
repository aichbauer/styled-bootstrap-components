import styled from 'styled-components';

import {
  theme,
  colors,
  padding,
  border,
  borderRadius,
} from 'styled-config';

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${(props) => padding(props, 'modalHeader').default};
  border-bottom: ${(props) => border(props, 'modalHeader').default} ${(props) => colors(props, 'modalHeader').borderColor};
  border-top-left-radius: ${(props) => borderRadius(props, 'modalHeader').lg};
  border-top-right-radius: ${(props) => borderRadius(props, 'modalHeader').lg};
`;

ModalHeader.defaultProps = {
  theme,
};

export { ModalHeader };
