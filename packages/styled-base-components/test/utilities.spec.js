import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Div } from '../src';

test('Styles match Div', () => {
  const div = renderer.create(<Div />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with colored text and background', () => {
  const div = renderer.create(<Div textLight bgDark />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with padding and margin', () => {
  const div = renderer.create(<Div m1 p1 />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with margin and size', () => {
  const div = renderer.create(<Div m0 mMd2 />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with auto margin', () => {
  const div = renderer.create(<Div mlAuto />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with paddings', () => {
  let div;

  div = renderer.create(<Div p1 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div pl1 pr1 pt1 pb1 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div px1 py1 />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with rounded', () => {
  let div;

  div = renderer.create(<Div rounded />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div roundedLeft roundedRight />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div roundedTop roundedBottom />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with roundedCircle', () => {
  const div = renderer.create(<Div roundedCircle />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with roundedPill', () => {
  const div = renderer.create(<Div roundedPill />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with colored border', () => {
  const div = renderer.create(<Div border borderPrimary />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with 0 border', () => {
  const div = renderer.create(<Div border0 />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with hidden text', () => {
  const div = renderer.create(<Div textHide>text</Div>).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with truncated text', () => {
  const div = renderer.create(<Div textTruncate>text</Div>).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with word break', () => {
  const div = renderer.create(<Div textWordBreak>text</Div>).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with monospace', () => {
  const div = renderer.create(<Div textMonospace />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with italic', () => {
  const div = renderer.create(<Div textItalic />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with clearfix', () => {
  const div = renderer.create(<Div clearfix />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with text decoration', () => {
  const div = renderer.create(<Div textDecorationNone />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with text reset', () => {
  const div = renderer.create(<Div textReset />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with float', () => {
  let div;

  div = renderer.create(<Div floatRight />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div floatLeft />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div floatNone />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with transform', () => {
  let div;

  div = renderer.create(<Div textLowercase />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textUppercase />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textCapitalize />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with text wrap', () => {
  let div;

  div = renderer.create(<Div textWrap />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textNoWrap />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with text align', () => {
  let div;

  div = renderer.create(<Div textCenter />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textLeft />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textRight />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textJustify />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with vertical align', () => {
  let div;

  div = renderer.create(<Div textBaseline />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textTop />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textBottom />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textTextTop />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textTextBottom />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with width/height', () => {
  let div;

  div = renderer.create(<Div w100 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div h50 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div mw75 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div mh25 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div wAuto />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with overflow', () => {
  let div;

  div = renderer.create(<Div overflowAuto />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div overflowHidden />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with text weight', () => {
  let div;

  div = renderer.create(<Div textWeightBold />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textWeightBolder />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textWeightNormal />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textWeightLight />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div textWeightLighter />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with position', () => {
  let div;

  div = renderer.create(<Div positionStatic />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div positionRelative />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div positionAbsolute />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div positionFixed />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div positionSticky />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with shadow', () => {
  let div;

  div = renderer.create(<Div shadowNone />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div shadowSmall />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div shadow />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div shadowLarge />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with order', () => {
  const div = renderer.create(<Div order1 />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with flex direction', () => {
  let div;

  div = renderer.create(<Div flexRow />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexRowReverse />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexColumn />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexColumnReverse />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with justify content', () => {
  let div;

  div = renderer.create(<Div justifyContentStart />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div justifyContentEnd />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div justifyContentCenter />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div justifyContentSpaceBetween />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div justifyContentSpaceAround />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div justifyContentSpaceEvenly />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with align', () => {
  ['Start', 'End', 'Center', 'Baseline', 'Stretch'].forEach((v) => {
    const props = {
      [`alignSelf${v}`]: true,
      [`alignItems${v}`]: true,
      [`alignContent${v}`]: true,
    };

    const div = renderer.create(<Div {...props} />).toJSON();
    expect(div).toMatchSnapshot();
  });
});

test('Styles match Div with flex grow', () => {
  let div;

  div = renderer.create(<Div flexGrow0 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexGrow />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with flex shrink', () => {
  let div;

  div = renderer.create(<Div flexShrink0 />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexShrink />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with flex wrap', () => {
  let div;

  div = renderer.create(<Div flexWrap />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexNoWrap />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div flexWrapReverse />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with visibilities', () => {
  let div;

  div = renderer.create(<Div visible />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div invisible />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Div with resize', () => {
  let div;

  div = renderer.create(<Div resizeNone />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div resizeBoth />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div resizeHorizontal />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div resizeVertical />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match Divs with displays', () => {
  let div;

  div = renderer.create(<Div dNone />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dInline />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dInlineBlock />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dBlock />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dTable />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dTableCell />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dTableRow />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dFlex />).toJSON();
  expect(div).toMatchSnapshot();

  div = renderer.create(<Div dInlineFlex />).toJSON();
  expect(div).toMatchSnapshot();
});

test('Styles match hidden Div', () => {
  const div = renderer.create(<Div hidden />).toJSON();
  expect(div).toMatchSnapshot();
});
