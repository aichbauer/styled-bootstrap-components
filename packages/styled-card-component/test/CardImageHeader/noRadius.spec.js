import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardImageHeader } from '../../src';

test('Styles matches CardImageHeader noRadius', () => {
  const tree = renderer.create(<CardImageHeader noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
