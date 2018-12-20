import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light outline disabled', () => {
  const tree = renderer.create(<Button light outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#f8f9fa');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #f8f9fa');
  expect(tree).toHaveStyleRule('color', '#f8f9fa', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #f8f9fa', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(248,249,250,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button light outline', () => {
  const tree = renderer.create(<Button light outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#f8f9fa');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
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
