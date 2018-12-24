import styled, { css } from 'styled-components';


import {
  theme,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'cardImageHeader').noRadius};
    `;
  }

  return css`
    border-top-left-radius: ${br(props, 'cardImageHeader').topLeftRight};
    border-top-right-radius: ${br(props, 'cardImageHeader').topLeftRight};
  `;
};

const CardImageHeader = styled.img`
  width: 100%;
  ${(props) => borderRadius(props)}
`;

CardImageHeader.defaultProps = {
  theme,
};

export { CardImageHeader };
