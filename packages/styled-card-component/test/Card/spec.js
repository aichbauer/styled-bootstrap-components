import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Card } from '../../src';

test('Styles matches Card', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('height', '100%');
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('min-width', '0');
  expect(tree).toHaveStyleRule('word-wrap', 'break-word');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('background-clip', 'border-box');
  expect(tree).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.125)');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
});
