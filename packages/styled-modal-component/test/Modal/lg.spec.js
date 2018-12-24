import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

test('Styles matches Modal lg', () => {
  const tree = renderer.create(<Modal lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('max-width', '800px', {
    media: '(min-width: 992px)',
  });
});
