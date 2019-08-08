import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardFooter } from '../../src';

test('Styles matches CardFooter', () => {
  const tree = renderer.create(<CardFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
