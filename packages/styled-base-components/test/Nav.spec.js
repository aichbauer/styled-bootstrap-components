import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../src';

test('Styles matches Nav', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
