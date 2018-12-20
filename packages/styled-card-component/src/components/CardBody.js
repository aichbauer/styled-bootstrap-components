import styled from 'styled-components';

import {
  theme,
  padding,
  margin,
} from 'styled-config';

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: ${(props) => padding(props, 'cardBody').default};
  & > a {
    &:hover {
      text-decoration: none;
    };
    & + a {
      margin-left: ${(props) => margin(props, 'cardBody').leftA};
    };
  };
`;

CardBody.defaultProps = {
  theme,
};

export { CardBody };
