import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup row', () => {
  const tree = renderer.create(<FormGroup row />).toJSON();
  expect(tree).toMatchSnapshot();
});
