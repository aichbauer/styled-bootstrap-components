import styled, { css } from 'styled-components';

import {
  theme,
  padding as p,
  margin,
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

const opacity = (props) => (
  props.hidden
    ? css`
      opacity: 0;
    `
    : css`
      opacity: 0.9;
    `
);

const Tooltip = styled.div`
  position: absolute;
  z-index: 1070;
  display: block;
  margin: ${(props) => margin(props, 'tooltip').default};
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
  ${(props) => padding(props)};
  ${(props) => opacity(props)};
`;

Tooltip.defaultProps = {
  theme,
};

export { Tooltip };
