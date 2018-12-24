import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light active', () => {
  const tree = renderer.create(<Button light active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#dae0e5');
  expect(tree).toHaveStyleRule('border', '1px solid #d3d9df');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#dae0e5', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #d3d9df', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(248,249,250,0.5)', {
    modifier: '&:focus',
  });
});
