import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Section } from '../src';

test('Styles matches Section', () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
