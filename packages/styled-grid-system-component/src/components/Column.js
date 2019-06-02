import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import { theme } from 'styled-config';

const colums = 12;

const percentage = (value) => `${100 * value}%`;

export const columnStyleForSize = (size) => css`
  flex: 0 0 ${percentage(size / colums)};
  max-width: ${percentage(size / colums)};
`;

const Column = styled(Div)`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  overflow: hidden;
  word-break: break-all;

  ${(props) => (
    (props.sm || props.md || props.lg || props.xl)
      ? css`
          width: 100%;
        `
      : css`
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
      `)}

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    ${(props) => props.sm && columnStyleForSize(props.sm)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.md}) {
    ${(props) => props.md && columnStyleForSize(props.md)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    ${(props) => props.lg && columnStyleForSize(props.lg)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.xl}) {
    ${(props) => props.xl && columnStyleForSize(props.xl)}
  }
`;

Column.defaultProps = {
  theme,
};

export { Column };
