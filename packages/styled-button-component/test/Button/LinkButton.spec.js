import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { LinkButton } from '../../src';

test('Styles matches LinkButton', () => {
  const tree = renderer.create(<LinkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
