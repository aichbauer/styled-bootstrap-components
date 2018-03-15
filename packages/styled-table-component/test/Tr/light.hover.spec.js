import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr light hover', () => {
  const tree = renderer.create(<Tr light hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#fdfdfe', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#fdfdfe', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '& tbody tr:hover > td',
  });
});
