import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  padding,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'cardHeader').noRadius};
    `;
  }

  return css`
    border-top-left-radius: ${br(props, 'cardHeader').topLeftRight};
    border-top-right-radius: ${br(props, 'cardHeader').topLeftRight};
  `;
};

const CardHeader = styled(Div)`
  padding: ${(props) => padding(props, 'cardHeader').default};
  background-color: ${(props) => getColor(props, 'cardHeader', 'background')};
  border-bottom: 1px solid ${(props) => getColor(props, 'cardHeader', 'borderBottom')};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${(props) => borderRadius(props)}
`;

CardHeader.defaultProps = {
  theme,
};

export { CardHeader };
