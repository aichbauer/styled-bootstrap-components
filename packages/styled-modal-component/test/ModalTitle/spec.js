import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalTitle } from '../../src';

test('Styles matches ModalTitle', () => {
  const tree = renderer.create(<ModalTitle />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('line-height', '1.5');
});
