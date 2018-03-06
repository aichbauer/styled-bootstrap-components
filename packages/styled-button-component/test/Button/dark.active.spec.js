import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button dark active', () => {
  const tree = renderer.create(<Button dark active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#1d2124');
  expect(tree).toHaveStyleRule('border-color', '#171a1d');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#1d2124', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#171a1d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
    modifier: '&:focus',
  });
});
