import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hgroup } from '../src';

test('Styles matches Hgroup', () => {
  const tree = renderer.create(<Hgroup />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
