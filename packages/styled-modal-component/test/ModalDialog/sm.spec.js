import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalDialog } from '../../src';

test('Styles matches ModalDialog sm', () => {
  const tree = renderer.create(<ModalDialog sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('max-width', '300px');
});
