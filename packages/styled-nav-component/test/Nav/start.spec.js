import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav start', () => {
  const tree = renderer.create(<Nav start />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-start !important');
});
