import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav end', () => {
  const tree = renderer.create(<Nav end />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-end !important');
});
