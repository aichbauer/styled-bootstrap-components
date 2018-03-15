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

const tablePrimaryHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #9fcdff;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #9fcdff;
    };
  `
);

export const tablePrimary = (props) => (
  props.primary &&
  css`
    & > th,
    & > td {
      background-color: #b8daff;
    };
    ${tablePrimaryHover};
  `
);

const tableSecondaryHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #c8cbcf;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #c8cbcf;
    };
  `
);

export const tableSecondary = (props) => (
  props.secondary &&
  css`
    & > th,
    & > td {
      background-color: #d6d8db;
    };
    ${tableSecondaryHover};
  `
);

const tableSuccessHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #b1dfbb;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #b1dfbb;
    };
  `
);

export const tableSuccess = (props) => (
  props.success &&
  css`
    & > th,
    & > td {
      background-color: #c3e6cb;
    };
    ${tableSuccessHover};
  `
);

const tableInfoHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #abdde5;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #abdde5;
    };
  `
);

export const tableInfo = (props) => (
  props.info &&
  css`
    & > th,
    & > td {
      background-color: #bee5eb;
    };
    ${tableInfoHover};
  `
);

const tableWarningHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #ffe8a1;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #ffe8a1;
    };
  `
);

export const tableWarning = (props) => (
  props.warning &&
  css`
    & > th,
    & > td {
      background-color: #ffeeba;
    };
    ${tableWarningHover};
  `
);

const tableDangerHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #f1b0b7;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #f1b0b7;
    };
  `
);

export const tableDanger = (props) => (
  props.danger &&
  css`
    & > th,
    & > td {
      background-color: #f5c6cb;
    };
    ${tableDangerHover};
  `
);

const tableLightHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #ececf6;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #ececf6;
    };
  `
);

export const tableLight = (props) => (
  props.light &&
  css`
    & > th,
    & > td {
      background-color: #fdfdfe;
    };
    ${tableLightHover};
  `
);

const tableDarkHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: #b9bbbe;
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: #b9bbbe;
    };
  `
);

export const tableDark = (props) => (
  props.dark &&
  css`
    & > th,
    & > td {
      background-color: #c6c8ca;
    };
    ${tableDarkHover};
  `
);

const tableActiveHover = (props) => (
  props.hover &&
  css`
    & tbody tr:hover {
      background-color: rgba(0, 0, 0, 0.075);
    };
    & tbody tr:hover > th,
    & tbody tr:hover > td {
      background-color: rgba(0, 0, 0, 0.075);
    };
  `
);

export const tableActive = (props) => (
  props.active &&
  css`
    & > th,
    & > td {
      background-color: rgba(0, 0, 0, 0.075);;
    };
    ${tableActiveHover};
  `
);

export const Tr = styled.tr`
  ${tablePrimary};
  ${tableSecondary};
  ${tableSuccess};
  ${tableInfo};
  ${tableWarning};
  ${tableDanger};
  ${tableLight};
  ${tableDark};
  ${tableActive};
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
