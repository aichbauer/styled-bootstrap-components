import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light disabled', () => {
  const tree = renderer.create(<Button light disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa');
  expect(tree).toHaveStyleRule('border', '1px solid #f8f9fa');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #f8f9fa', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(248,249,250,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button light', () => {
  const tree = renderer.create(<Button light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa');
  expect(tree).toHaveStyleRule('border', '1px solid #f8f9fa');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#e2e6ea', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #dae0e5', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(248,249,250,0.5)', {
    modifier: '&:focus',
  });
});
