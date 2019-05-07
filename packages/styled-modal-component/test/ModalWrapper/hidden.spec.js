import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalWrapper } from '../../src';

test('Styles matches ModalWrapper hidden', () => {
  const tree = renderer.create(<ModalWrapper hidden />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});
