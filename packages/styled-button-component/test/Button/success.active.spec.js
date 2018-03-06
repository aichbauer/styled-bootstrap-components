import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button success active', () => {
  const tree = renderer.create(<Button success active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#1e7e34');
  expect(tree).toHaveStyleRule('border-color', '#1c7430');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#1e7e34', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#1c7430', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
    modifier: '&:focus',
  });
});
