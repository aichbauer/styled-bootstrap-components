import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  borderRadius as br,
  border,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'card').noRadius};
    `;
  }

  return css`
    border-radius: ${br(props, 'card').default};
  `;
};

const Card = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => colors(props, 'card').backgroundColor};
  background-clip: border-box;
  border: ${(props) => border(props, 'card').default} ${(props) => colors(props, 'card').borderColor};
  ${(props) => borderRadius(props)}
`;

Card.defaultProps = {
  theme,
};

export { Card };
