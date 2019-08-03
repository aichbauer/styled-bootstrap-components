import styled, { css } from 'styled-components';

import { Table as BaseTable } from 'styled-base-components';

import {
  theme,
  colors,
  border,
} from 'styled-config';

const tableSmall = (props) => (
  props.sm &&
  css`
    & th,
    & td {
      padding: 0.3rem;
    };
  `
);

const tableBordered = (props) => (
  props.bordered &&
  css`
    border: ${border(props, 'table').default} ${colors(props, 'table', 'borderedBorderColor')};
    & th,
    & td {
      border: ${border(props, 'table').default} ${colors(props, 'table', 'borderedBorderColor')};
    };
    & thead th,
    & thead td {
      border-bottom-width: 2px;
    };
  `
);

const tableStriped = (props) => (
  props.striped &&
  css`
    & tbody tr:nth-of-type(odd) {
      background-color: ${colors(props, 'table', 'stripedBackgroundColor')};
    };
  `
);

const tableHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: ${colors(props, 'table', 'backgroundColorHoverFocus')};
    };
  `
);

const tableHeadDark = (props) => (
  props.theadDark &&
  css`
    & thead th {
      color: ${colors(props, 'table', 'theadDarkColor')};
      background-color: ${colors(props, 'table', 'theadDarkBackgroundColor')};
      border-color: ${colors(props, 'table', 'theadDarkBorderColor')};
    };
  `
);

const tableHeadLight = (props) => (
  props.theadLight &&
  css`
    & thead th {
      color: ${colors(props, 'table', 'theadLightColor')};
      background-color: ${colors(props, 'table', 'theadLightBackgroundColor')};
      border-color: ${colors(props, 'table', 'theadLightBorderColor')};
    };
  `
);

const tableDarkBordered = (props) => (
  props.bordered &&
  css`
    border: 0;
  `
);

const tableDarkStriped = (props) => (
  props.striped &&
  css`
    & tbody tr:nth-of-type(odd) {
      background-color: ${colors(props, 'table', 'stripedDarkBackgroundColor')};
    };
  `
);

const tableDarkHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: ${colors(props, 'table', 'darkBackgroundColorHoverFocus')};
    };
  `
);

const tableDark = (props) => (
  (props.tableDark || props.dark) &&
  css`
    color: ${colors(props, 'table').darkColor};
    background-color: ${colors(props, 'table', 'darkBackgroundColor')};
    & th,
    & td,
    & thead th {
      border-color: ${colors(props, 'table', 'darkBorderColor')};
    };
    ${tableDarkBordered};
    ${tableDarkStriped};
    ${tableDarkHover};
  `
);

const tableResponsiveBordered = (props) => (
  props.bordered &&
  css`
    border: 0;
  `
);

const tableResponsiveSmall = (props) => (
  props.responsiveSm &&
  css`
    @media (max-width: 575.98px) {
      display: block;
      width: 100%;
      overflow-x: auto;
      ${tableResponsiveBordered};
    };
  `
);

const tableResponsiveMedium = (props) => (
  props.responsiveMd &&
  css`
    @media (max-width: 767.98px) {
      display: block;
      width: 100%;
      overflow-x: auto;
      ${tableResponsiveBordered};
    };
  `
);

const tableResponsiveLarge = (props) => (
  props.responsiveLg &&
  css`
    @media (max-width: 991.98px) {
      display: block;
      width: 100%;
      overflow-x: auto;
      ${tableResponsiveBordered};
    };
  `
);

const tableResponsiveXLarge = (props) => (
  props.responsiveXl &&
  css`
    @media (max-width: 1199.98px) {
      display: block;
      width: 100%;
      overflow-x: auto;
      ${tableResponsiveBordered};
    };
  `
);

const tableResponsive = (props) => (
  props.responsive &&
  css`
    display: block;
    width: 100%;
    overflow-x: auto;
    ${tableResponsiveBordered};
  `
);

const Table = styled(BaseTable)`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
  background-color: transparent;
  & th,
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: ${(props) => border(props, 'table').default} ${(props) => colors(props, 'table', 'borderColor')};
  };
  & thead th {
    vertical-align: bottom;
    border-bottom: ${(props) => border(props, 'table').bottomTop} ${(props) => colors(props, 'table', 'borderColor')};
  };
  & tbody + tbody {
    border-top: ${(props) => border(props, 'table').bottomTop} ${(props) => colors(props, 'table', 'borderColor')};
  };
  & + & {
    background-color: ${(props) => colors(props, 'table', 'backgroundColor')};
  };
  ${tableSmall};
  ${tableBordered};
  ${tableStriped};
  ${tableHover};
  ${tableDark};
  ${tableHeadDark};
  ${tableHeadLight};
  ${tableResponsiveSmall};
  ${tableResponsiveMedium};
  ${tableResponsiveLarge};
  ${tableResponsiveXLarge};
  ${tableResponsive};
`;

Table.defaultProps = {
  theme,
};

export { Table };
