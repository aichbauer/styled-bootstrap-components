import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button info disabled', () => {
  const tree = renderer.create(<Button info disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#17a2b8');
  expect(tree).toHaveStyleRule('border', '1px solid #17a2b8');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#17a2b8', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #17a2b8', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button info', () => {
  const tree = renderer.create(<Button info />).toJSON();
  expect(tree).toMatchSnapshot();
});
