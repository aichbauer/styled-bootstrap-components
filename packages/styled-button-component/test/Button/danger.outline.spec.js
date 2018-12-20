import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button danger outline disabled', () => {
  const tree = renderer.create(<Button danger outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#dc3545');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', '1px solid #dc3545');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles matches Button danger outline', () => {
  const tree = renderer.create(<Button danger outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#dc3545');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #dc3545');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #dc3545', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
    modifier: '&:focus',
  });
});
