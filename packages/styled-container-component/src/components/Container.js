import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  getWidth,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getBreakpointSize,
} from 'styled-config';

const Container = styled(Div)`
  font-family: ${(props) => getFontFamily(props, 'container', 'default')};
  width: ${(props) => getWidth(props, 'container', 'default')};
  margin-right: auto;
  margin-left: auto;
  font-size:  ${(props) => getFontSize(props, 'container', 'default')};
  font-weight: ${(props) => getFontWeight(props, 'container', 'default')};
  line-height: 1.5;
  box-sizing: border-box;
  @media (min-width: ${(props) => {
    const screenWidth = getBreakpointSize({
      ...props,
      sm: true,
    });

    return screenWidth;
  }}) {
    max-width: ${(props) => (
    props.fluid
      ? getWidth(props, 'container', 'default')
      : getWidth(props, 'container', 'fluid', 'sm')
  )};
    box-sizing: border-box;
  };
  @media (min-width: ${(props) => {
    const screenWidth = getBreakpointSize({
      ...props,
      md: true,
    });

    return screenWidth;
  }}) {
    max-width: ${(props) => (
    props.fluid
      ? getWidth(props, 'container', 'default')
      : getWidth(props, 'container', 'fluid', 'md')
  )};
  };
  @media (min-width: ${(props) => {
    const screenWidth = getBreakpointSize({
      ...props,
      lg: true,
    });

    return screenWidth;
  }}) {
    max-width: ${(props) => (
    props.fluid
      ? getWidth(props, 'container', 'default')
      : getWidth(props, 'container', 'fluid', 'lg')
  )};
  };
  @media (min-width: ${(props) => {
    const screenWidth = getBreakpointSize({
      ...props,
      xl: true,
    });

    return screenWidth;
  }}) {
    max-width: ${(props) => (
    props.fluid
      ? getWidth(props, 'container', 'default')
      : getWidth(props, 'container', 'fluid', 'xl')
  )};
  };
`;

Container.defaultProps = {
  theme,
};

export { Container };
