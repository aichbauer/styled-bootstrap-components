import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dl } from '../src';

test('Styles matches Dl', () => {
  const tree = renderer.create(<Dl />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-top', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
});
