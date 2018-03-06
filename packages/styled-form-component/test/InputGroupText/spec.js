import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroupText } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > span + &:not(:last-child)
test('Styles matches InputGroupText', () => {
  const tree = renderer.create(<InputGroupText />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('padding', '0.375rem 0.75rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('color', '#495057');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('background-color', '#e9ecef');
  expect(tree).toHaveStyleRule('border', '1px solid #ced4da');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('margin-top', '0', {
    modifier: '& input[type="radio"]',
  });
  expect(tree).toHaveStyleRule('margin-right', '0', {
    modifier: '& input[type="radio"]',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0.4125rem', {
    modifier: '& input[type="radio"]',
  });
  expect(tree).toHaveStyleRule('margin-top', '0', {
    modifier: '& input[type="checkbox"]',
  });
  expect(tree).toHaveStyleRule('margin-right', '0', {
    modifier: '& input[type="checkbox"]',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0.4125rem', {
    modifier: '& input[type="checkbox"]',
  });
});
