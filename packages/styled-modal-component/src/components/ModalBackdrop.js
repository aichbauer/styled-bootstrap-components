import styled, { css } from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #111111;
  opacity: 0.7;
  display: block;

  ${({ backdrop }) =>
    backdrop === 'static' &&
    css`
      pointer-events: none;
    `}
`;

ModalBackdrop.defaultProps = {
  backdrop: true,
};

export { ModalBackdrop };
