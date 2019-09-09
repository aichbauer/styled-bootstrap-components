import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardHeader } from '../../src';

test('Styles matches CardHeader', () => {
  const tree = renderer.create(<CardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
