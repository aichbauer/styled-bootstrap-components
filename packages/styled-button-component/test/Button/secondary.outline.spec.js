import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button secondary outline disabled', () => {
  const tree = renderer.create(<Button secondary outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button secondary outline', () => {
  const tree = renderer.create(<Button secondary outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#6c757d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});
