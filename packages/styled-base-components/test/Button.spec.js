import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../src';

test('Styles matches Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
  expect(tree).toHaveStyleRule('margin', '0');
  expect(tree).toHaveStyleRule('font-family', 'inherit');
  expect(tree).toHaveStyleRule('font-size', 'inherit');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
  expect(tree).toHaveStyleRule('overflow', 'visible');
  expect(tree).toHaveStyleRule('text-transform', 'none');
  expect(tree).toHaveStyleRule('outline', '1px dotted', {
    modifier: '&:focus',
  });
});
