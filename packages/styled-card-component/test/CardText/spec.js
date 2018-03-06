import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardText } from '../../src';

test('Styles matches CardText', () => {
  const tree = renderer.create(<CardText />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-top', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '&:last-child',
  });
});
