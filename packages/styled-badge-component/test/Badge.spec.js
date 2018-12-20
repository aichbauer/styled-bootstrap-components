import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches plane', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.4rem');
  expect(tree).toHaveStyleRule('font-size', '75%');
  expect(tree).toHaveStyleRule('font-weight', '700');
  expect(tree).toHaveStyleRule('line-height', '1');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('vertical-align', 'baseline');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('display', 'none', {
    modifier: '&:empty',
  });
});
