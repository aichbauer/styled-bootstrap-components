import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  padding,
  border,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'cardFooter').noRadius};
    `;
  }

  return css`
    border-radius: ${br(props, 'cardFooter').default};
  `;
};

const CardFooter = styled.div`
  padding: ${(props) => padding(props, 'cardFooter').default};
  background-color: ${(props) => colors(props, 'cardFooter').background};
  border-top: ${(props) => border(props, 'cardFooter').default} ${(props) => colors(props, 'cardFooter').borderTop};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: -3px;
  &:last-child {
    ${(props) => borderRadius(props)}
  };
`;

CardFooter.defaultProps = {
  theme,
};

export { CardFooter };
