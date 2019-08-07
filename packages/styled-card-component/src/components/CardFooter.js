import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getBorder,
  getBorderRadius,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'cardFooter', 'noRadius')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'cardFooter', 'default')};
  `;
};

const CardFooter = styled(Div)`
  padding: ${(props) => getPadding(props, 'cardFooter', 'default')};
  background-color: ${(props) => getColor(props, 'cardFooter', 'background')};
  border-top: ${(props) => getBorder(props, 'cardFooter', 'default')} ${(props) => getColor(props, 'cardFooter', 'borderTop')};
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
