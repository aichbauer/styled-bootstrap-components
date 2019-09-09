import React from 'react';
import styled, { css } from 'styled-components';

import { Table as BaseTable } from 'styled-base-components';

import {
  theme,
  getColor,
  getBorder,
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
    border: ${getBorder(props, 'table', 'default')} ${getColor(props, 'table', 'borderedBorderColor')};
    & th,
    & td {
      border: ${getBorder(props, 'table', 'default')} ${getColor(props, 'table', 'borderedBorderColor')};
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
      background-color: ${getColor(props, 'table', 'stripedBackgroundColor')};
    };
  `
);

const tableHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: ${getColor(props, 'table', 'backgroundColorHoverFocus')};
    };
  `
);

const tableHeadDark = (props) => (
  props.theadDark &&
  css`
    & thead th {
      color: ${getColor(props, 'table', 'theadDarkColor')};
      background-color: ${getColor(props, 'table', 'theadDarkBackgroundColor')};
      border-color: ${getColor(props, 'table', 'theadDarkBorderColor')};
    };
  `
);

const tableHeadLight = (props) => (
  props.theadLight &&
  css`
    & thead th {
      color: ${getColor(props, 'table', 'theadLightColor')};
      background-color: ${getColor(props, 'table', 'theadLightBackgroundColor')};
      border-color: ${getColor(props, 'table', 'theadLightBorderColor')};
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
      background-color: ${getColor(props, 'table', 'stripedDarkBackgroundColor')};
    };
  `
);

const tableDarkHover = (props) => (
  css`
    .hover & tbody tr:hover {
      background-color: ${getColor(props, 'table', 'darkBackgroundColorHoverFocus')};
    };
  `
);

const tableDark = (props) => (
  (props.tableDark || props.dark) &&
  css`
    color: ${getColor(props, 'table', 'darkColor')};
    background-color: ${getColor(props, 'table', 'darkBackgroundColor')};
    & th,
    & td,
    & thead th {
      border-color: ${getColor(props, 'table', 'darkBorderColor')};
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

const TableWoClass = styled(BaseTable)`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
  background-color: transparent;
  & th {
    text-align: inherit;
  }
  & th,
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: ${(props) => getBorder(props, 'table', 'default')} ${(props) => getColor(props, 'table', 'borderColor')};
  };
  & thead th {
    vertical-align: bottom;
    border-bottom: ${(props) => getBorder(props, 'table', 'bottomTop')} ${(props) => getColor(props, 'table', 'borderColor')};
  };
  & tbody + tbody {
    border-top: ${(props) => getBorder(props, 'table', 'bottomTop')} ${(props) => getColor(props, 'table', 'borderColor')};
  };
  & + & {
    background-color: ${(props) => getColor(props, 'table', 'backgroundColor')};
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

TableWoClass.defaultProps = {
  theme,
};

const Table = React.forwardRef(({
  hover, className, children, ...rest
}, ref) => (
  <TableWoClass
    ref={ref}
    className={`${hover ? 'hover' : ''} ${className || ''}`.trim()}
    hover={hover}
    {...rest}
  >
    {children}
  </TableWoClass>
));

// const Table = TableWoClass;

export { Table };
