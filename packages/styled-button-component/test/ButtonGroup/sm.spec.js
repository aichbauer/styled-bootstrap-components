import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ButtonGroup } from '../../src';

test('Styles matches ButtonGroup sm', () => {
  const tree = renderer.create(<ButtonGroup sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.5rem', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('font-size', '0.875rem', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > button',
  });
});
