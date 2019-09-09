import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test.only('Styles matches Button primary active', () => {
  const tree = renderer.create(<Button primary active />).toJSON();
  expect(tree).toMatchSnapshot();
});
