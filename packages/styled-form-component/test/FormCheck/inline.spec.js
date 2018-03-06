import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormCheck } from '../../src';

test('Styles matches FormCheck inline', () => {
  const tree = renderer.create(<FormCheck inline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-flex');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('margin-right', '0.75rem');
});
