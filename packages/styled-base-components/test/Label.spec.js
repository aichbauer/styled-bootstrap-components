import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Label } from '../src';

test('Styles matches Label', () => {
  const tree = renderer.create(<Label />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('margin-bottom', '0.5rem');
});
