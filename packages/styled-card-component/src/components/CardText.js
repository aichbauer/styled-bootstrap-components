import styled from 'styled-components';

import {
  theme,
  margin,
} from 'styled-config';

const CardText = styled.p`
  margin-top: ${(props) => margin(props, 'cardText').top};
  margin-bottom: ${(props) => margin(props, 'cardText').bottom};
  &:last-child {
    margin-bottom: ${(props) => margin(props, 'cardText').lastChildBottom};
  };
`;

CardText.defaultProps = {
  theme,
};

export { CardText };
