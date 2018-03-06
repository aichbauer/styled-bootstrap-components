
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverArrow } from '../../src';

test('Styles matches PopoverArrow', () => {
  const tree = renderer.create(<PopoverArrow />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '1rem');
  expect(tree).toHaveStyleRule('margin', '0 0.3rem');
  expect(tree).toHaveStyleRule('position', 'absolute', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('display', 'block', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('content', '""', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('border-color', 'transparent', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('border-style', 'solid', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('position', 'absolute', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('display', 'block', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('content', '""', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-color', 'transparent', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-style', 'solid', {
    modifier: '&::after',
  });
});
