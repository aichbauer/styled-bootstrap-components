import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormCheckInput } from '../../src';

test('Styles matches FormCheckInput', () => {
  const tree = renderer.create(<FormCheckInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
