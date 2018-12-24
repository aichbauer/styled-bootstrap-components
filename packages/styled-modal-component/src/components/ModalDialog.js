import styled, { css } from 'styled-components';

import { theme } from 'styled-config';

const dialogCentered = (props) => (
  props.centered && css`
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
    @media (min-width: ${props.theme.screenSize.sm}) { 
      min-height: calc(100% - (1.75rem * 2));
    };
  `
);

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    max-width: 500px;
    margin: 1.75rem auto;
  };
  ${(props) => dialogCentered(props)};
`;

ModalDialog.defaultProps = {
  theme,
};

export { ModalDialog };
