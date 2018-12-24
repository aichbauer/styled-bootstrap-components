import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardHeader } from '../../src';

test('Styles matches CardHeader noRadius', () => {
  const tree = renderer.create(<CardHeader noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
