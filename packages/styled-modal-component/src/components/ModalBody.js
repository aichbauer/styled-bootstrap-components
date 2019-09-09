import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getPadding,
} from 'styled-config';

const ModalBody = styled(Div)`
  position: relative;
  flex: 1 1 auto;
  padding: ${(props) => getPadding(props, 'modalBody', 'default')};
`;

ModalBody.defaultProps = {
  theme,
};

export { ModalBody };
