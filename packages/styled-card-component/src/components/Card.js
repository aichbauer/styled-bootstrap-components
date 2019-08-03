import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
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

const Card = styled(Div)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => getColor(props, 'card', 'backgroundColor')};
  background-clip: border-box;
  border: ${(props) => border(props, 'card').default} ${(props) => getColor(props, 'card', 'borderColor')};
  ${(props) => borderRadius(props)}
`;

Card.defaultProps = {
  theme,
};

export { Card };
