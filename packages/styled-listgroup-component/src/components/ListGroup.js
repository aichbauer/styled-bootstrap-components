import styled, { css } from 'styled-components';

import { Ul } from 'styled-base-components';

import {
  theme,
  padding,
  getMargin,
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

const ListGroup = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => padding(props, 'listGroup').left};
  margin-bottom: ${(props) => getMargin(props, 'listGroup', 'bottom')};
  ${(props) => border(props)};
`;

ListGroup.defaultProps = {
  theme,
};

export { ListGroup };
