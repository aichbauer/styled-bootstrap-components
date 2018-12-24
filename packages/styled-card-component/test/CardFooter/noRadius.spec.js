import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardFooter } from '../../src';

test('Styles matches CardFooter noRadius', () => {
  const tree = renderer.create(<CardFooter noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '&:last-child',
  });
});
