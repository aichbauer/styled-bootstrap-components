import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr danger hover', () => {
  const tree = renderer.create(<Tr danger hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#f5c6cb', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#f5c6cb', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '& tbody tr:hover > td',
  });
});
