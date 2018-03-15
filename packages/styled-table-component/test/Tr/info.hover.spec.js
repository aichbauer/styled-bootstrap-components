import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr info hover', () => {
  const tree = renderer.create(<Tr info hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#bee5eb', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#bee5eb', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '& tbody tr:hover > td',
  });
});
