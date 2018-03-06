import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { A } from '../src';

test('Styles matches A', () => {
  const tree = renderer.create(<A />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('text-decoration', 'none');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('color', '#0056b3', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'underline', {
    modifier: '&:hover',
  });
});
