import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  padding,
  colors,
  borderRadius as br,
} from 'styled-config';

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'tooltipInner').noRadius};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${br(props, 'tooltipInner').pill};
    `;
  }

  return css`
    border-radius: ${br(props, 'tooltipInner').default};
  `;
};

const pill = (props) => (
  props.pill &&
  css`
    margin: -2px;
  `
);

const TooltipInner = styled(Div)`
  max-width: 200px;
  padding: ${(props) => padding(props, 'tooltipInner').default};
  color: ${(props) => colors(props, 'tooltipInner').color};
  text-align: center;
  background-color: ${(props) => colors(props, 'tooltipInner').backgroundColor};
  ${(props) => borderRadius(props)};
  ${(props) => pill(props)};
`;

TooltipInner.defaultProps = {
  theme,
};

export { TooltipInner };
