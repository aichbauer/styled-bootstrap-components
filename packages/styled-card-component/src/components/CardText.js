import styled from 'styled-components';

import { P } from 'styled-base-components';

import {
  theme,
  getMargin,
} from 'styled-config';

const CardText = styled(P)`
  margin-top: ${(props) => getMargin(props, 'cardText', 'top')};
  margin-bottom: ${(props) => getMargin(props, 'cardText', 'bottom')};
  &:last-child {
    margin-bottom: ${(props) => getMargin(props, 'cardText', 'lastChildBottom')};
  };
`;

CardText.defaultProps = {
  theme,
};

export { CardText };
