
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tooltip } from '../../src';

test('Styles matches Tooltip', () => {
  const tree = renderer.create(<Tooltip />).toJSON();
  expect(tree).toMatchSnapshot();

  const tooltip = tree.children[0];
  expect(tooltip).toHaveStyleRule('position', 'absolute');
  expect(tooltip).toHaveStyleRule('z-index', '1070');
  expect(tooltip).toHaveStyleRule('display', 'block');
  expect(tooltip).toHaveStyleRule('margin', '0');
  expect(tooltip).toHaveStyleRule('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"');
  expect(tooltip).toHaveStyleRule('font-style', 'normal');
  expect(tooltip).toHaveStyleRule('font-weight', '400');
  expect(tooltip).toHaveStyleRule('line-height', '1.5');
  expect(tooltip).toHaveStyleRule('text-align', 'left');
  expect(tooltip).toHaveStyleRule('text-decoration', 'none');
  expect(tooltip).toHaveStyleRule('text-shadow', 'none');
  expect(tooltip).toHaveStyleRule('text-transform', 'none');
  expect(tooltip).toHaveStyleRule('letter-spacing', 'normal');
  expect(tooltip).toHaveStyleRule('word-break', 'normal');
  expect(tooltip).toHaveStyleRule('word-spacing', 'normal');
  expect(tooltip).toHaveStyleRule('white-space', 'normal');
  expect(tooltip).toHaveStyleRule('line-break', 'auto');
  expect(tooltip).toHaveStyleRule('font-size', '0.875rem');
  expect(tooltip).toHaveStyleRule('word-wrap', 'break-word');
  expect(tooltip).toHaveStyleRule('opacity', '0.9');
});
