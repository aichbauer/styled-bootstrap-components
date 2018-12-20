import styled, { css } from 'styled-components';

import {
  theme,
  padding,
  margin,
  border as b,
  borderRadius,
} from 'styled-config';

const border = (props) => (
  props.flush &&
  css`
    & > a, 
    & > li {
      border-right: ${b(props, 'listGroup').aLiFlushRight};
      border-left: ${b(props, 'listGroup').aLiFlushLeft};
      border-radius: ${borderRadius(props, 'listGroup').noRadius};
      &:first-child {
        border-top: ${b(props, 'listGroup').aLiFlushFirstChildTop};
      };
      &:last-child {
        border-bottom: ${b(props, 'listGroup').aLiFlushLastChildBottom};
      };
    };
  `
);

const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => padding(props, 'listGroup').left};
  margin-bottom: ${(props) => margin(props, 'listGroup').bottom};
  ${(props) => border(props)};
`;

ListGroup.defaultProps = {
  theme,
};

export { ListGroup };
