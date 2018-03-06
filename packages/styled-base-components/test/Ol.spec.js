import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Ol } from '../src';

test('Styles matches Ol', () => {
  const tree = renderer.create(<Ol />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-top', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > ol',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > ul',
  });
});
