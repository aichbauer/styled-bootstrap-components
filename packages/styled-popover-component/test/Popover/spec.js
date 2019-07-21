import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover', () => {
  const tree = renderer.create(<Popover />).toJSON();
  expect(tree).toMatchSnapshot();

  const popover = tree.children[0];
  expect(popover).toHaveStyleRule('position', 'absolute');
  expect(popover).toHaveStyleRule('top', '0');
  expect(popover).toHaveStyleRule('left', '0');
  expect(popover).toHaveStyleRule('z-index', '1060');
  expect(popover).toHaveStyleRule('max-width', '276px');
  expect(popover).toHaveStyleRule('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"');
  expect(popover).toHaveStyleRule('font-style', 'normal');
  expect(popover).toHaveStyleRule('font-weight', '400');
  expect(popover).toHaveStyleRule('line-height', '1.5');
  expect(popover).toHaveStyleRule('text-align', 'left');
  expect(popover).toHaveStyleRule('text-decoration', 'none');
  expect(popover).toHaveStyleRule('text-shadow', 'none');
  expect(popover).toHaveStyleRule('text-transform', 'none');
  expect(popover).toHaveStyleRule('letter-spacing', 'normal');
  expect(popover).toHaveStyleRule('word-break', 'normal');
  expect(popover).toHaveStyleRule('word-spacing', 'normal');
  expect(popover).toHaveStyleRule('white-space', 'normal');
  expect(popover).toHaveStyleRule('line-break', 'auto');
  expect(popover).toHaveStyleRule('font-size', '0.875rem');
  expect(popover).toHaveStyleRule('word-wrap', 'break-word');
  expect(popover).toHaveStyleRule('background-color', '#fff');
  expect(popover).toHaveStyleRule('background-clip', 'padding-box');
  expect(popover).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.2)');
  expect(popover).toHaveStyleRule('border-radius', '0.3rem');
});
