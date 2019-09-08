import styled, { css } from 'styled-components';

import { Ul } from 'styled-base-components';

import {
  theme,
  getPadding,
  getMargin,
  getBorder,
  getBorderRadius,
} from 'styled-config';

const border = (props) => (
  props.flush &&
  css`
    & > a,
    & > li {
      border-right: ${getBorder(props, 'listGroup', 'aLiFlushRight')};
      border-left: ${getBorder(props, 'listGroup', 'aLiFlushLeft')};
      border-radius: ${getBorderRadius(props, 'listGroup', 'noRadius')};
      &:first-child {
        border-top: ${getBorder(props, 'listGroup', 'aLiFlushFirstChildTop')};
      };
      &:last-child {
        border-bottom: ${getBorder(props, 'listGroup', 'aLiFlushLastChildBottom')};
      };
    };
  `
);

const ListGroup = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => getPadding(props, 'listGroup', 'left')};
  margin-bottom: ${(props) => getMargin(props, 'listGroup', 'bottom')};
  ${(props) => border(props)};
`;

ListGroup.defaultProps = {
  theme,
};

export { ListGroup };
