import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Ul } from '../src';

test('Styles matches Ul', () => {
  const tree = renderer.create(<Ul />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-top', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > ul',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > ol',
  });
});
