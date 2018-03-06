import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup justify', () => {
  const tree = renderer.create(<FormGroup justify />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'center');
});
