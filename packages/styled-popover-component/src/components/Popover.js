import React from 'react';
import styled, { css } from 'styled-components';

import { Transition, Div } from 'styled-base-components';

import {
  theme,
  colors,
  fontWeight,
  margin as m,
  fontFamily,
  borderRadius,
  border,
  fontSize,
} from 'styled-config';

const display = (props) => (
  props.hidden
    ? css`
        display: none;
      `
    : css`
        display: block;
      `
);

const margin = (props) => {
  if (props.top) {
    return css`
      margin-bottom: ${m(props, 'popover').topBottom};
    `;
  } else if (props.left) {
    return css`
      margin-right: ${m(props, 'popover').leftRight};
    `;
  } else if (props.bottom) {
    return css`
      margin-top: ${m(props, 'popover').bottomTop};
    `;
  }

  return css`
    margin-left: ${m(props, 'popover').rightLeft};
  `;
};

export const PopoverWithoutTransition = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  max-width: 276px;
  font-family: ${(props) => fontFamily(props, 'popover').default};
  font-style: normal;
  font-weight: ${(props) => fontWeight(props, 'popover').default};
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
  font-size: ${(props) => fontSize(props, 'popover').sm};
  word-wrap: break-word;
  background-color: ${(props) => colors(props, 'popover').backgroundColor};
  background-clip: padding-box;
  border: ${(props) => border(props, 'popover').default} ${(props) => colors(props, 'popover').borderColor};
  border-radius: ${(props) => borderRadius(props, 'popover').lg};
  ${(props) => margin(props)};
  ${(props) => display(props)};
`;

PopoverWithoutTransition.defaultProps = {
  theme,
};

export const Popover = React.forwardRef((props, ref) => {
  const {
    hidden, children, transitionProps, ...rest
  } = props;

  return (
    <Transition
      noInitialEnter
      visible={!hidden}
      duration={250}
      ref={ref}
      {...transitionProps}
    >
      <PopoverWithoutTransition {...rest}>
        {children}
      </PopoverWithoutTransition>
    </Transition>
  );
});
