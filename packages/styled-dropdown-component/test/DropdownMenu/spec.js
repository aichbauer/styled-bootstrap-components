import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu', () => {
  const tree = renderer.create(<DropdownMenu />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('top', '100%');
  expect(tree).toHaveStyleRule('left', '0');
  expect(tree).toHaveStyleRule('z-index', '1000');
  expect(tree).toHaveStyleRule('float', 'left');
  expect(tree).toHaveStyleRule('min-width', '10rem');
  expect(tree).toHaveStyleRule('padding', '0.5rem 0');
  expect(tree).toHaveStyleRule('margin', '0.125rem 0 0');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('text-align', 'left');
  expect(tree).toHaveStyleRule('list-style', 'none');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('background-clip', 'padding-box');
  expect(tree).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.15)');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
});
