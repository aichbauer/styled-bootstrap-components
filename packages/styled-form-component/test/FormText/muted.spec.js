import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormText } from '../../src';

test('Styles matches FormText muted', () => {
  const tree = renderer.create(<FormText muted />).toJSON();
  expect(tree).toMatchSnapshot();
});
