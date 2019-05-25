import styled, { css } from 'styled-components';

import { theme } from 'styled-config';

const colums = 12;

const percentage = (value) => `${100 * value}%`;

export const columnStyleForSize = (size) => css`
  flex: 0 0 ${percentage(size / colums)};
  max-width: ${percentage(size / colums)};
`;

export const columnStyleForOffset = (offset) => css`
  margin-left: ${percentage(offset / colums)};
`;

const hasSize = (props) => props.xs
  || props.sm
  || props.md
  || props.lg
  || props.xl;

const Column = styled.div`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  overflow: hidden;
  word-break: break-all;
  width: 100%;

  ${(props) => props.xs && columnStyleForSize(props.xs)}
  ${(props) => props.xsOffset && columnStyleForOffset(props.xsOffset)}

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    ${(props) => !hasSize(props) && css`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    `}

    ${(props) => props.sm && columnStyleForSize(props.sm)}
    ${(props) => props.smOffset && columnStyleForOffset(props.smOffset)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.md}) {
    ${(props) => props.md && columnStyleForSize(props.md)}
    ${(props) => props.mdOffset && columnStyleForOffset(props.mdOffset)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    ${(props) => props.lg && columnStyleForSize(props.lg)}
    ${(props) => props.lgOffset && columnStyleForOffset(props.lgOffset)}
  }
  @media (min-width: ${(props) => props.theme.screenSize.xl}) {
    ${(props) => props.xl && columnStyleForSize(props.xl)}
    ${(props) => props.xlOffset && columnStyleForOffset(props.xlOffset)}
  }
`;

Column.defaultProps = {
  theme,
};

export { Column };
