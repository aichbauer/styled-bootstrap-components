import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button success disabled', () => {
  const tree = renderer.create(<Button success disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#28a745');
  expect(tree).toHaveStyleRule('border-color', '#28a745');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#28a745', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#28a745', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button success', () => {
  const tree = renderer.create(<Button success />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#28a745');
  expect(tree).toHaveStyleRule('border-color', '#28a745');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#218838', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#1e7e34', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
    modifier: '&:focus',
  });
});
