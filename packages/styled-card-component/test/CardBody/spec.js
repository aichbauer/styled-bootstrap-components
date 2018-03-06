import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardBody } from '../../src';

test('Styles matches CardBody', () => {
  const tree = renderer.create(<CardBody />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex', '1 1 auto');
  expect(tree).toHaveStyleRule('padding', '1.25rem');
});
