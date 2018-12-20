import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button primary outline disabled', () => {
  const tree = renderer.create(<Button primary outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #007bff');
  expect(tree).toHaveStyleRule('color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button primary outline', () => {
  const tree = renderer.create(<Button primary outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
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
