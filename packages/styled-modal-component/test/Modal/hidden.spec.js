import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

// TODO: how to check @media queries
test('Styles matches hidden Modal', () => {
  const tree = renderer.create(<Modal hidden />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('visibility', 'hidden');
  expect(tree).toHaveStyleRule('opacity', '0');

  // eslint-disable-next-line no-undef
  expect(document.body.style.overflow).toBe('');
});
