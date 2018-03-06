import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup lg', () => {
  const tree = renderer.create(<FormGroup lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
    modifier: '& > label',
  });
  expect(tree).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
    modifier: '& > label',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > label',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > label',
  });
  expect(tree).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
    modifier: '& > div > label',
  });
  expect(tree).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
    modifier: '& > div > label',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > div > label',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > div > label',
  });
  expect(tree).toHaveStyleRule('padding-right', '0', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('padding-left', '0', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('border-radius', '0.3rem', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('padding-right', '0', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('padding-left', '0', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('border-radius', '0.3rem', {
    modifier: '& > div > input',
  });
});
