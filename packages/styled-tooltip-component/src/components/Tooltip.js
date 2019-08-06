import React from 'react';
import styled, { css } from 'styled-components';

import { Transition, Div } from 'styled-base-components';

import {
  theme,
  padding as p,
  getMargin,
  fontWeight,
  fontSize,
  fontFamily,
} from 'styled-config';

const padding = (props) => (
  (props.left || props.right)
    ? css`
        padding: ${p(props, 'tooltip').leftRight};
      `
    : css`
      padding: ${p(props, 'tooltip').topBottom};
    `
);

export const TooltipWithoutTransition = styled(Div)`
  position: absolute;
  z-index: 1070;
  display: block;
  margin: ${(props) => getMargin(props, 'tooltip', 'default')};
  font-family: ${(props) => fontFamily(props, 'tooltip').default};
  font-style: normal;
  font-weight: ${(props) => fontWeight(props, 'tooltip').default};
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: ${(props) => fontSize(props, 'tooltip').default};
  word-wrap: break-word;
  opacity: 0.9;
  ${(props) => padding(props)};
`;

TooltipWithoutTransition.defaultProps = {
  theme,
};

export const Tooltip = React.forwardRef((props, ref) => {
  const {
    hidden, children, transitionProps, ...rest
  } = props;

  return (
    <Transition
      noInitialEnter
      hidden={hidden}
      duration={150}
      ref={ref}
      {...transitionProps}
    >
      <TooltipWithoutTransition {...rest}>
        {children}
      </TooltipWithoutTransition>
    </Transition>
  );
});
