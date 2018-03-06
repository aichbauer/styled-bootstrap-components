import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button danger active', () => {
  const tree = renderer.create(<Button danger active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#bd2130');
  expect(tree).toHaveStyleRule('border-color', '#b21f2d');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#bd2130', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#b21f2d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
    modifier: '&:focus',
  });
});
