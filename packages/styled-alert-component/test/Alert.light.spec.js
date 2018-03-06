import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches light', () => {
  const tree = renderer.create(<Alert light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#818182');
  expect(tree).toHaveStyleRule('background-color', '#fefefe');
  expect(tree).toHaveStyleRule('border-color', '#fdfdfe');
  expect(tree).toHaveStyleRule('border-top-color', '#ececf6', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#686868', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#686868', {
    modifier: '& > a:hover',
  });
});
