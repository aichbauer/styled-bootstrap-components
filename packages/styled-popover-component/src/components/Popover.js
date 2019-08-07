import React from 'react';
import styled, { css } from 'styled-components';

import { Transition, Div } from 'styled-base-components';

import {
  theme,
  getColor,
  getFontWeight,
  getMargin,
  getFontFamily,
  getBorderRadius,
  getBorder,
  getFontSize,
} from 'styled-config';

const margin = (props) => {
  if (props.top) {
    return css`
      margin-bottom: ${getMargin(props, 'popover', 'topBottom')};
    `;
  } else if (props.left) {
    return css`
      margin-right: ${getMargin(props, 'popover', 'leftRight')};
    `;
  } else if (props.bottom) {
    return css`
      margin-top: ${getMargin(props, 'popover', 'bottomTop')};
    `;
  }

  return css`
    margin-left: ${getMargin(props, 'popover', 'rightLeft')};
  `;
};

export const PopoverWithoutTransition = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  max-width: 276px;
  font-family: ${(props) => getFontFamily(props, 'popover', 'default')};
  font-style: normal;
  font-weight: ${(props) => getFontWeight(props, 'popover', 'default')};
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
  font-size: ${(props) => getFontSize(props, 'popover', 'sm')};
  word-wrap: break-word;
  background-color: ${(props) => getColor(props, 'popover', 'backgroundColor')};
  background-clip: padding-box;
  border: ${(props) => getBorder(props, 'popover', 'default')} ${(props) => getColor(props, 'popover', 'borderColor')};
  border-radius: ${(props) => getBorderRadius(props, 'popover', 'lg')};
  ${(props) => margin(props)};
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
      hidden={hidden}
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
