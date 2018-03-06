import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl', () => {
  const tree = renderer.create(<FormControl disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#e9ecef');
  expect(tree).toHaveStyleRule('opacity', '1');
  expect(tree).toHaveStyleRule('background-color', '#e9ecef', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('opacity', '1', {
    modifier: '&:focus',
  });
});
