import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button primary disabled', () => {
  const tree = renderer.create(<Button primary disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
  expect(tree).toHaveStyleRule('border', '1px solid #007bff');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button primary', () => {
  const tree = renderer.create(<Button primary />).toJSON();
  expect(tree).toMatchSnapshot();
});
