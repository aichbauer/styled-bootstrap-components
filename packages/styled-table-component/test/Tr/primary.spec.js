import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr primary hover', () => {
  const tree = renderer.create(<Tr primary hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#b8daff', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#b8daff', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '& tbody tr:hover > td',
  });
});
