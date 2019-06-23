import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import { theme } from 'styled-config';

const maxWidth = (props) => {
  if (props.sm) {
    return css`max-width: 300px;`;
  } else if (props.lg) {
    return css`max-width: 800px;`;
  }

  return css`
    max-width: 500px;
  `;
};

const dialogCentered = (props) => (
  props.centered && css`
    display: flex;
    align-items: center;
  `
);

const ModalDialog = styled(Div)`
  position: relative;
  margin: auto;
  padding: 0.5rem;
  min-height: calc(100% - (0.5rem * 2));
  pointer-events: none;

  ${(props) => dialogCentered(props)};
  ${(props) => maxWidth(props)}
`;

ModalDialog.defaultProps = {
  theme,
};

export { ModalDialog };
