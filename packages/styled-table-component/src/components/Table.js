import styled, { css } from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
} from 'styled-system';
import { Table as T } from 'styled-base-components';

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
    border: 1px solid #dee2e6;
    & th,
    & td {
      border: 1px solid #dee2e6;
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
    tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    };
  `
);

const tableHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: rgba(0, 0, 0, 0.075);
    };
  `
);

const tableHeadDark = (props) => (
  props.theadDark &&
  css`
    & thead th {
      color: #fff;
      background-color: #212529;
      border-color: #32383e;
    };
  `
);

const tableHeadLight = (props) => (
  props.theadLight &&
  css`
    & thead th {
      color: #495057;
      background-color: #e9ecef;
      border-color: #dee2e6;
    };
  `
);

const tableDarkDarkBordered = (props) => (
  props.bordered &&
  css`
    border: 0;
  `
);

const tableDarkDarkStriped = (props) => (
  props.striped &&
  css`
    tbody tr:nth-of-type(odd) {
      background-color: rgba(255, 255, 255, 0.05);
    };
  `
);

const tableDarkDarkHover = (props) => (
  props.hover &&
  css`
    tbody tr:hover {
      background-color: rgba(255, 255, 255, 0.075);
    };
  `
);

const tableDarkDark = (props) => (
  props.tableDark &&
  css`
    color: #fff;
    background-color: #212529;
    & th,
    & td,
    & thead th {
      border-color: #32383e;
    };
    ${tableDarkDarkBordered};
    ${tableDarkDarkStriped};
    ${tableDarkDarkHover};
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

export const Table = styled(T)`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  & th,
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  };
  & thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  };
  & tbody + tbody {
    border-top: 2px solid #dee2e6;
  };
  & + & {
    background-color: #fff;
  };
  ${tableSmall};
  ${tableBordered};
  ${tableStriped};
  ${tableHover};
  ${tableDarkDark};
  ${tableHeadDark};
  ${tableHeadLight};
  ${tableResponsiveSmall};
  ${tableResponsiveMedium};
  ${tableResponsiveLarge};
  ${tableResponsiveXLarge};
  ${tableResponsive};
  ${space};
  ${width};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${display};
  ${borderRadius};
  ${borderColor};
  ${borders};
`;
