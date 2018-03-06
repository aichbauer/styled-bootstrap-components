import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroup } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > input + &:not(:last-child)
test('Styles matches InputGroup', () => {
  const tree = renderer.create(<InputGroup />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('align-items', 'stretch');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('flex', '1 1 auto', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('width', '1%', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > textarea',
  });
  expect(tree).toHaveStyleRule('flex', '1 1 auto', {
    modifier: '& > textarea',
  });
  expect(tree).toHaveStyleRule('width', '1%', {
    modifier: '& > textarea',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > textarea',
  });
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > select',
  });
  expect(tree).toHaveStyleRule('flex', '1 1 auto', {
    modifier: '& > select',
  });
  expect(tree).toHaveStyleRule('width', '1%', {
    modifier: '& > select',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > select',
  });
});
