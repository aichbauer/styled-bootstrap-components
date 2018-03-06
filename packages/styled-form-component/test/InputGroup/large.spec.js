import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroup } from '../../src';

test('Styles matches InputGroup lg', () => {
  const tree = renderer.create(<InputGroup lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0', {
    modifier: '& > div > span',
  });
  expect(tree).toHaveStyleRule('padding-left', '0', {
    modifier: '& > div > span',
  });
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem', {
    modifier: '& > div > span',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > div > span',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > div > span',
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
});
