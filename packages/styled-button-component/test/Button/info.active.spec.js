import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button info active', () => {
  const tree = renderer.create(<Button info active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#117a8b');
  expect(tree).toHaveStyleRule('border', '1px solid #10707f');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#117a8b', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #10707f', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
    modifier: '&:focus',
  });
});
