import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button warning active', () => {
  const tree = renderer.create(<Button warning active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#d39e00');
  expect(tree).toHaveStyleRule('border', '1px solid #c69500');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#d39e00', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #c69500', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
    modifier: '&:focus',
  });
});
