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
  expect(tree).toHaveStyleRule('visibility', undefined);
  expect(tree).toHaveStyleRule('opacity', undefined);
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('transition', 'visibility 0.5s,opacity 0.5s ease-out');

  // eslint-disable-next-line no-undef
  expect(document.body.style.overflow).toBe('hidden');
});
