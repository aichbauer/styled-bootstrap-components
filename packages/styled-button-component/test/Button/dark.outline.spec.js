import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button dark outline disabled', () => {
  const tree = renderer.create(<Button dark outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#343a40');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #343a40');
  expect(tree).toHaveStyleRule('color', '#343a40', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #343a40', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button dark outline', () => {
  const tree = renderer.create(<Button dark outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#343a40');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #343a40');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#343a40', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #343a40', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
    modifier: '&:focus',
  });
});
