import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches pill', () => {
  const tree = renderer.create(<Badge pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.6rem');
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
