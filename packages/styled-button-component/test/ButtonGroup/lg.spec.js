import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ButtonGroup } from '../../src';

test('Styles matches ButtonGroup lg', () => {
  const tree = renderer.create(<ButtonGroup lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('font-size', '1.25rem', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > button',
  });
});
