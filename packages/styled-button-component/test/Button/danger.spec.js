import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button danger disabled', () => {
  const tree = renderer.create(<Button danger disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#dc3545');
  expect(tree).toHaveStyleRule('border-color', '#dc3545');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button danger', () => {
  const tree = renderer.create(<Button danger />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#dc3545');
  expect(tree).toHaveStyleRule('border-color', '#dc3545');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#c82333', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#bd2130', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
    modifier: '&:focus',
  });
});
