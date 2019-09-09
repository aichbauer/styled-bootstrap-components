import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorder,
} from 'styled-config';

const ModalFooter = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${(props) => getPadding(props, 'modalFooter', 'default')};
  border-top: ${(props) => getBorder(props, 'modalFooter', 'default')} ${(props) => getColor(props, 'modalFooter', 'borderColor')};
`;

ModalFooter.defaultProps = {
  theme,
};

export { ModalFooter };
