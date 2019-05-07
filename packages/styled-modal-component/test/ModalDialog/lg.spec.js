import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalDialog } from '../../src';

test('Styles matches ModalDialog lg', () => {
  const tree = renderer.create(<ModalDialog lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('max-width', '800px');
});
