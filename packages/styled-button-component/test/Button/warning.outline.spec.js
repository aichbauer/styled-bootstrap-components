import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button warning outline disabled', () => {
  const tree = renderer.create(<Button warning outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#ffc107');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', '1px solid #ffc107');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button warning outline', () => {
  const tree = renderer.create(<Button warning outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#ffc107');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #ffc107');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
    modifier: '&:focus',
  });
});
