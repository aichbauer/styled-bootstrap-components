import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav center', () => {
  const tree = renderer.create(<Nav center />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'center !important');
});
