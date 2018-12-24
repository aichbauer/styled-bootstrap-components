import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

test('Styles matches Modal sm', () => {
  const tree = renderer.create(<Modal sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('max-width', '300px', {
    media: '(min-width: 576px)',
  });
});
