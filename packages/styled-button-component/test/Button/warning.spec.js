import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button warning disabled', () => {
  const tree = renderer.create(<Button warning disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#ffc107');
  expect(tree).toHaveStyleRule('border-color', '#ffc107');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#ffc107', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button warning', () => {
  const tree = renderer.create(<Button warning />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#ffc107');
  expect(tree).toHaveStyleRule('border-color', '#ffc107');
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#e0a800', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#d39e00', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
    modifier: '&:focus',
  });
});
