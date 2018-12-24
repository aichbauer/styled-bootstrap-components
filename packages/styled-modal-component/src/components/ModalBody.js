import styled from 'styled-components';

import {
  theme,
  padding,
} from 'styled-config';

const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: ${(props) => padding(props, 'modalBody').default};
`;

ModalBody.defaultProps = {
  theme,
};

export { ModalBody };
