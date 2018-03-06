import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroup } from '../../src';

// TODO: check how to check nested rules in nested rules e.g. & > a + &:first-chil
test('Styles matches ListGroup flush', () => {
  const tree = renderer.create(<ListGroup flush />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-right', '0', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('border-left', '0', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('border-right', '0', {
    modifier: '& > li',
  });
  expect(tree).toHaveStyleRule('border-left', '0', {
    modifier: '& > li',
  });
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > li',
  });
});
