import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button secondary active', () => {
  const tree = renderer.create(<Button secondary active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#545b62');
  expect(tree).toHaveStyleRule('border-color', '#4e555b');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#545b62', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#4e555b', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});
