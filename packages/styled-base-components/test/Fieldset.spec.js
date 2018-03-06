import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Fieldset } from '../src';

test('Styles matches Fieldset', () => {
  const tree = renderer.create(<Fieldset />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('min-width', '0');
  expect(tree).toHaveStyleRule('padding', '0');
  expect(tree).toHaveStyleRule('margin', '0');
  expect(tree).toHaveStyleRule('border', '0');
});
