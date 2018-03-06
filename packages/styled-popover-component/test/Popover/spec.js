import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover', () => {
  const tree = renderer.create(<Popover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('top', '0');
  expect(tree).toHaveStyleRule('left', '0');
  expect(tree).toHaveStyleRule('z-index', '1060');
  expect(tree).toHaveStyleRule('max-width', '276px');
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
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('background-clip', 'padding-box');
  expect(tree).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.2)');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
});
