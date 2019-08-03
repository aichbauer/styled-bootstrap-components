import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  colors,
  padding,
  border,
} from 'styled-config';

const ModalFooter = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${(props) => padding(props, 'modalFooter').default};
  border-top: ${(props) => border(props, 'modalFooter').default} ${(props) => colors(props, 'modalFooter', 'borderColor')};
`;

ModalFooter.defaultProps = {
  theme,
};

export { ModalFooter };
