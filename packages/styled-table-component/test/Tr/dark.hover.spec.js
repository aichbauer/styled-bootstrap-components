import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr dark hover', () => {
  const tree = renderer.create(<Tr dark hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#abaeb1', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#c6c8ca', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '& tbody tr:hover > td',
  });
});
