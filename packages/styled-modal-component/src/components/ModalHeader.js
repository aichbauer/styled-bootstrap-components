import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  border,
  borderRadius,
} from 'styled-config';

const ModalHeader = styled(Div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${(props) => getPadding(props, 'modalHeader', 'default')};
  border-bottom: ${(props) => border(props, 'modalHeader').default} ${(props) => getColor(props, 'modalHeader', 'borderColor')};
  border-top-left-radius: ${(props) => borderRadius(props, 'modalHeader').lg};
  border-top-right-radius: ${(props) => borderRadius(props, 'modalHeader').lg};
`;

ModalHeader.defaultProps = {
  theme,
};

export { ModalHeader };
