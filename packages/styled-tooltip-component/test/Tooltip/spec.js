
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tooltip } from '../../src';

test('Styles matches Tooltip', () => {
  const tree = renderer.create(<Tooltip />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('z-index', '1070');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('margin', '0');
  expect(tree).toHaveStyleRule('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"');
  expect(tree).toHaveStyleRule('font-style', 'normal');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('text-align', 'left');
  expect(tree).toHaveStyleRule('text-decoration', 'none');
  expect(tree).toHaveStyleRule('text-shadow', 'none');
  expect(tree).toHaveStyleRule('text-transform', 'none');
  expect(tree).toHaveStyleRule('letter-spacing', 'normal');
  expect(tree).toHaveStyleRule('word-break', 'normal');
  expect(tree).toHaveStyleRule('word-spacing', 'normal');
  expect(tree).toHaveStyleRule('white-space', 'normal');
  expect(tree).toHaveStyleRule('line-break', 'auto');
  expect(tree).toHaveStyleRule('font-size', '0.875rem');
  expect(tree).toHaveStyleRule('word-wrap', 'break-word');
  expect(tree).toHaveStyleRule('opacity', '0.9');
});
