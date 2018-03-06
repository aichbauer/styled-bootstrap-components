import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroupPrepend } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > span + &:not(:last-child)
test('Styles matches InputGroupPrepend', () => {
  const tree = renderer.create(<InputGroupPrepend />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('margin-right', '-1px');
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('z-index', '2', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('border-top-right-radius', '0', {
    modifier: '& > span',
  });
  expect(tree).toHaveStyleRule('border-bottom-right-radius', '0', {
    modifier: '& > span',
  });
  expect(tree).toHaveStyleRule('border-top-right-radius', '0', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('border-bottom-right-radius', '0', {
    modifier: '& > button',
  });
});
