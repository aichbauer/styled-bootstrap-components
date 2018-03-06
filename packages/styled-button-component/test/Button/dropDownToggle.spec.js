import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button dropdownToggle', () => {
  const tree = renderer.create(<Button dropdownToggle />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('width', '0', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('height', '0', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('margin-left', '0.255em', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('vertical-align', '0.255em', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('content', '""', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-top', '0.3em solid', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-right', '0.3em solid transparent', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-bottom', '0', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('border-left', '0.3em solid transparent', {
    modifier: '&::after',
  });
  expect(tree).toHaveStyleRule('margin-left', '0', {
    modifier: '&:empty::after',
  });
});
