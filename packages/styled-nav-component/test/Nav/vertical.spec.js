import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav vertical', () => {
  const tree = renderer.create(<Nav vertical />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column !important');
});
