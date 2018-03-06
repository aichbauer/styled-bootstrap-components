import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControlPlainText } from '../../src';

test('Styles matches FormControlPlainText', () => {
  const tree = renderer.create(<FormControlPlainText inline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
});
