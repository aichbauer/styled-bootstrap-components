import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches pill', () => {
  const tree = renderer.create(<Badge pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0.6em');
  expect(tree).toHaveStyleRule('padding-left', '0.6em');
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
