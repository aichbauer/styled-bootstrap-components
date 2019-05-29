import { css } from 'styled-components';
import { theme } from '../theme';

/*
TODO: Borders
TODO: Clearfix
TODO: Close icon
TODO: Colors
TODO: Display
TODO: Embed
TODO: Flex[Order]
TODO: Float
TODO: Image replacement
TODO: Overflow
TODO: Position
TODO: Shadows
TODO: Sizing
TODO: Text
TODO: Vertical align
*/

/* Spacing ---------------------------------------------------------------- */
const spacingSizes = [1, 2, 3, 4, 5];

const normalizeSpacingValue = (value, allowAuto = false) => {
  // allowed value
  if (allowAuto && value === 'Auto') {
    return 'auto';
  }

  // missing or unknown value
  if (value === undefined || Number.isNaN(parseFloat(value))) {
    return null;
  }

  // rem value
  return `${value}rem`;
};

// Margin
const spacingMargin = (size, value) => css`
  margin-left: ${(props) => (props[`ml${size}${value}`] || props[`mx${size}${value}`] || props[`m${size}${value}`]) && normalizeSpacingValue(value, true)};
  margin-right: ${(props) => (props[`mr${size}${value}`] || props[`mx${size}${value}`] || props[`m${size}${value}`]) && normalizeSpacingValue(value, true)};
  margin-top: ${(props) => (props[`mt${size}${value}`] || props[`my${size}${value}`] || props[`m${size}${value}`]) && normalizeSpacingValue(value, true)};
  margin-bottom: ${(props) => (props[`mb${size}${value}`] || props[`my${size}${value}`] || props[`m${size}${value}`]) && normalizeSpacingValue(value, true)};
`;

// Padding
const spacingPadding = (size, value) => css`
  padding-left: ${(props) => (props[`pl${size}${value}`] || props[`px${size}${value}`] || props[`p${size}${value}`]) && normalizeSpacingValue(value)};
  padding-right: ${(props) => (props[`pr${size}${value}`] || props[`px${size}${value}`] || props[`p${size}${value}`]) && normalizeSpacingValue(value)};
  padding-top: ${(props) => (props[`pt${size}${value}`] || props[`py${size}${value}`] || props[`p${size}${value}`]) && normalizeSpacingValue(value)};
  padding-bottom: ${(props) => (props[`pb${size}${value}`] || props[`py${size}${value}`] || props[`p${size}${value}`]) && normalizeSpacingValue(value)};
`;

/* Flex ------------------------------------------------------------------- */
const flexDirection = (size) => css`
  flex-direction: ${(props) =>
    (props[`flex${size}Row`] ? 'row' : '')
    || (props[`flex${size}RowReverse`] ? 'row-reverse' : '')
    || (props[`flex${size}Column`] ? 'column' : '')
    || (props[`flex${size}ColumnReverse`] ? 'column-reverse' : '')
    || null};
`;

const justifyContent = (size) => css`
  justify-content: ${(props) =>
    (props[`justifyContent${size}Start`] ? 'start' : '')
    || (props[`justifyContent${size}End`] ? 'end' : '')
    || (props[`justifyContent${size}Center`] ? 'center' : '')
    || (props[`justifyContent${size}Between`] ? 'between' : '')
    || (props[`justifyContent${size}Around`] ? 'around' : '')
    || null};
`;

const alignItems = (size) => css`
  align-items: ${(props) =>
    (props[`alignItems${size}Start`] ? 'start' : '')
    || (props[`alignItems${size}End`] ? 'end' : '')
    || (props[`alignItems${size}Center`] ? 'center' : '')
    || (props[`alignItems${size}Baseline`] ? 'baseline' : '')
    || (props[`alignItems${size}Stretch`] ? 'stretch' : '')
    || null};
`;

const alignSelf = (size) => css`
  align-self: ${(props) =>
    (props[`alignSelf${size}Start`] ? 'start' : '')
    || (props[`alignSelf${size}End`] ? 'end' : '')
    || (props[`alignSelf${size}Center`] ? 'center' : '')
    || (props[`alignSelf${size}Baseline`] ? 'baseline' : '')
    || (props[`alignSelf${size}Stretch`] ? 'stretch' : '')
    || null};
`;

const alignContent = (size) => css`
  align-content: ${(props) =>
    (props[`alignContent${size}Start`] ? 'start' : '')
    || (props[`alignContent${size}End`] ? 'end' : '')
    || (props[`alignContent${size}Center`] ? 'center' : '')
    || (props[`alignContent${size}Baseline`] ? 'baseline' : '')
    || (props[`alignContent${size}Stretch`] ? 'stretch' : '')
    || null};
`;

const flexGrow = (size) => css`
  flex-grow: ${(props) => {
    if (props[`flexGrow${size}1`] !== undefined) { return '1'; }
    if (props[`flexGrow${size}0`] !== undefined) { return '0'; }
    return null;
  }};
`;

const flexShrink = (size) => css`
  flex-shrink: ${(props) => {
    if (props[`flexShrink${size}1`] !== undefined) { return '1'; }
    if (props[`flexShrink${size}0`] !== undefined) { return '0'; }
    return null;
  }};
`;

const flexWrap = (size) => css`
  flex-wrap: ${(props) => {
    if (props[`flexWrap${size}`] !== undefined) { return 'wrap'; }
    if (props[`flexNoWrap${size}`] !== undefined) { return 'nowrap'; }
    if (props[`flexNoWrap${size}Reverse`] !== undefined) { return 'wrap-reverse'; }
    return null;
  }};
`;

/* Visibility ------------------------------------------------------------- */
const visibility = (size) => css`
  visibility: ${(props) => {
    if (props[`visible${size}`] !== undefined) { return 'visible'; }
    if (props[`invisible${size}`] !== undefined) { return 'hidden'; }
    return null;
  }};
`;

/* Display ---------------------------------------------------------------- */
const display = (size) => css`
  display: ${(props) =>
    (props[`d${size}None`] ? 'none' : '')
    || (props[`d${size}Inline`] ? 'inline' : '')
    || (props[`d${size}InlineBlock`] ? 'inline-block' : '')
    || (props[`d${size}Block`] ? 'block' : '')
    || (props[`d${size}Table`] ? 'table' : '')
    || (props[`d${size}TableCell`] ? 'table-cell' : '')
    || (props[`d${size}TableRow`] ? 'table-row' : '')
    || (props[`d${size}Flex`] ? 'flex' : '')
    || (props[`d${size}InlineFlex`] ? 'inline-flex' : '')
    || null};
`;

/* Aggregation ------------------------------------------------------------ */
const makeUtilitiesForScreenSize = (size) => css`
  ${display(size)};
  ${spacingMargin(size, 'Auto')};
  ${() => spacingSizes.map((s) => css`
    ${spacingMargin(size, s)};
    ${spacingPadding(size, s)};
  `)}
  ${flexDirection(size)};
  ${justifyContent(size)};
  ${alignContent(size)};
  ${alignItems(size)};
  ${alignSelf(size)};
  ${flexGrow(size)};
  ${flexShrink(size)};
  ${flexWrap(size)};
  ${visibility(size)};
`;

export const Utilities = css`
  ${makeUtilitiesForScreenSize('')};

  ${['sm', 'md', 'lg', 'xl'].map((size) => css`
    @media (min-width: ${(props) => (props.theme.screenSize || theme.screenSize)[size]}) {
      ${makeUtilitiesForScreenSize(size)};
    }
  `)};
`;
