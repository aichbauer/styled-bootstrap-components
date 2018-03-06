import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroupAppend } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > span + &:not(:last-child)
test('Styles matches InputGroupAppend', () => {
  const tree = renderer.create(<InputGroupAppend />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('margin-left', '-1px');
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('z-index', '2', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('border-top-left-radius', '0', {
    modifier: '& > span',
  });
  expect(tree).toHaveStyleRule('border-bottom-left-radius', '0', {
    modifier: '& > span',
  });
  expect(tree).toHaveStyleRule('border-top-left-radius', '0', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('border-bottom-left-radius', '0', {
    modifier: '& > button',
  });
});
