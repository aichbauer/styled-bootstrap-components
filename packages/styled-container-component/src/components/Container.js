import styled from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme,
  width,
  fontFamily,
  fontSize,
  fontWeight,
  getBreakpointSize,
} from 'styled-config';

const Container = styled(Div)`
  font-family: ${(props) => fontFamily(props, 'container').default};
  width: ${(props) => width(props, 'container').default};
  margin-right: auto;
  margin-left: auto;
  font-size:  ${(props) => fontSize(props, 'container').default};
  font-weight: ${(props) => fontWeight(props, 'container').default};
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
      ? width(props, 'container').default
      : width(props, 'container').fluid.sm
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
      ? width(props, 'container').default
      : width(props, 'container').fluid.md
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
      ? width(props, 'container').default
      : width(props, 'container').fluid.lg
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
      ? width(props, 'container').default
      : width(props, 'container').fluid.xl
  )};
  };
`;

Container.defaultProps = {
  theme,
};

export { Container };
