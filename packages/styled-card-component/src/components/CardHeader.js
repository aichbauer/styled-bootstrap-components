import styled, { css } from 'styled-components';

import {
  theme,
  colors,
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

const CardHeader = styled.div`
  padding: ${(props) => padding(props, 'cardHeader').default}
  background-color: ${(props) => colors(props, 'cardHeader').background};
  border-bottom: 1px solid ${(props) => colors(props, 'cardHeader').borderBottom};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${(props) => borderRadius(props)}
`;

CardHeader.defaultProps = {
  theme,
};

export { CardHeader };
