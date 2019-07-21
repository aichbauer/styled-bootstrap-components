import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {
    current: {},
    focus: () => {},
  };
}

// TODO: how to check @media queries
test('Styles matches visible Modal', () => {
  const tree = renderer.create(<Modal />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('visibility', 'visible');
  expect(tree).toHaveStyleRule('opacity', '1');

  // eslint-disable-next-line no-undef
  expect(document.body.style.overflow).toBe('hidden');
});
